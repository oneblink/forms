define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');
  var queue = require('queue-async');

  // local modules

  var Elements = require('forms/collections/elements');
  var Expression = require('forms/expression');

  // this module

  var q = queue(10);

  /** @type {Boolean} is the Behaviours queue empty? */
  var qEmpty = true;

  var Behaviour;

  Expression.fn['formelement.value'] = function (name) {
    var el = this.getElement(name);
    if (!el) {
      /* eslint-disable no-console */
      console && console.warn('Conditional Logic uses a hidden Element: ' + name);
      /* eslint-enable no-console */
      return undefined;
    }
    return el.val();
  };

  Expression.fn.optionsbyxpath = function (xmlNodes) {
    var newOptions = {};
    if (_.isEmpty(xmlNodes)) {
      return newOptions;
    }
    $.each(xmlNodes, function (index, element) {
      var $xml = $(element);
      var value = $xml.attr('value');
      var text = $xml.text();
      if (value) {
        newOptions[value] = text;
      } else {
        newOptions[text] = text;
      }
    });
    return newOptions;
  };

  Expression.fn.xpath = function (xpath, xml) {
    return new Promise(function (resolve, reject) {
      var node,
        nodes,
        result;
      try {
        if (typeof xml === 'string') {
          xml = $.parseXML(xml);
        }
        result = [];
        nodes = xml.evaluate(xpath, xml);
        node = nodes.iterateNext();
        if (node && node.children) {
          _.each(node.children, function (key) {
            result.push(key);
          });
        }
      } catch (err) {
        reject(err);
      }
      resolve(result);
    });
  };

  Expression.fn.injectelemval = function (string) {
    var field;
    var value;
    var self = this;
    var placeholders = string.match(/\[[\w\/\[\]]+\]/g);
    if (_.isArray(placeholders)) {
      placeholders.forEach(function (placeholder) {
        placeholder = placeholder.substring(1, placeholder.length - 1);
        field = self.getElement(placeholder);
        if (field) {
          value = field.val();
          string = string.replace('[' + placeholder + ']', value);
        }
      });
    }
    return string;
  };

  Behaviour = Backbone.Model.extend({
    initialize: function () {
      var attrs = this.attributes;
      attrs.elements = new Elements();
      attrs.actions = Behaviour.normalizeActions(attrs.actions);
      attrs.actionsIfFalse = Behaviour.normalizeActions(attrs.actionsIfFalse);

      // correct older definition structures
      if (!attrs.trigger && attrs.formElements) {
        attrs.trigger = { formElements: attrs.formElements };
      }

      // normalize so that formElements is always an Array
      if (!Array.isArray(attrs.trigger.formElements)) {
        attrs.trigger.formElements = [attrs.trigger.formElements];
      }

      // if formEvents doesn't exist, then set it to empty array
      if (!attrs.trigger.formEvents) {
        attrs.trigger.formEvents = [];
      }

      attrs.isLegacy = attrs.trigger.formElements.indexOf('*') !== -1;

      // if formElements have (*) then also set formEvents->load
      if (attrs.isLegacy === true && attrs.trigger.formEvents.indexOf('load') === -1) {
        attrs.trigger.formEvents.push('load');
      }

      // legacy calculations only expect to monitor value changes (performance)
      attrs.event = attrs.isLegacy ? 'change:value change:html' : 'change';

      this.hookupTriggers();

      this.on('remove', this.close, this);
    },

    hookupTriggers: function () {
      var self = this;
      var attrs = this.attributes;
      var form = attrs.form;
      var elements = attrs.elements;
      var outputTargets;
      var eventFrequencyDict = {
        formLoad: 'once',
        formPopulated: 'on'
      };
      var eventDict = {
        load: 'formLoad',
        populated: 'formPopulated'
      };

      elements.off(null, this.execute, this);

      outputTargets = this.getOutputTargets();
      if (attrs.trigger.formElements.indexOf('*') !== -1) {
        // migrated legacy calculation
        elements.set(form.attributes.elements.models.filter(function (m) {
          // prevent monitoring of output targets (possible loops)
          return outputTargets.indexOf(m.attributes.name) === -1;
        }), { silent: true });
        // we disable the Backbone.Collection#set() events for a >10x speed-up

      } else {
        attrs.trigger.formElements.filter(function (name) {
          // only proceed with elements that are not output targets
          return outputTargets.indexOf(name) === -1;
        }).forEach(function (name) {
          elements.add(form.getElement(name), { silent: true });
          // we disable the Backbone.Collection#add() events for a speed-up
        });
      }

      if (typeof attrs.trigger.formEvents === 'object') {
        // go through each events
        attrs.trigger.formEvents.forEach(function (i) {
          // if event exists in event dictionary, use it
          if (eventDict[i]) {
            form[eventFrequencyDict[eventDict[i]]](eventDict[i], self.execute, self);
          } else {
            // otherwise assign that listener on event
            form.on(i, self.execute, self);
          }
        });
      }

      elements.on(attrs.event, this.execute, this);
    },

    execute: function () {
      var me = this;
      q.defer(function (done) {
        return me.runCheck()
        .then(function (result) {
          me.runActions(result);
          setTimeout(done, Behaviour.EXECUTE_SLEEP);
        }, function (err) {
          window.console.error('Behaviour-Check: ', err);
          setTimeout(done, Behaviour.EXECUTE_SLEEP);
        });
      });
      if (qEmpty) {
        qEmpty = false;
        setTimeout(function () {
          q.awaitAll(function () {
            qEmpty = true;
            BMP.Forms.trigger('behavioursExecuted');
          });
        }, 0);
      }
    },

    /**
     * @returns {Promise} resolved with a {Boolean} result
     */
    runCheck: function () {
      var check, exp;
      var self = this;
      // if check is not set returns true
      if (!this.attributes.check) {
        return Promise.resolve(true);
      }
      if (this.attributes.check) {
        check = this.getCheck(this.attributes.check);
        if (check && check.exp) {
          try {
            // also send context and expressions that needs to be bound to context
            exp = new Expression(
              check.exp,
              self.attributes.form,
              Behaviour.BOUND_EXPRESSIONS
           );
          } catch (err) {
            window.console.error('Behaviour: ' + self.attributes.name);
            window.console.error(err);
            return Promise.resolve(false);
          }

          // evaluate now returns promise
          return exp.evaluate();
        }
      }
      // TODO: handle checks with functions
      window.console.warning('unsupported Behaviour-Check (missing Expression)');
      return Promise.resolve(false);
    },

    runActions: function (result) {
      var self = this;

      if (Array.isArray(this.attributes.actions)) {
        this.attributes.actions.forEach(function (action) {
          if (!action || !action.action) {
            return;
          }
          if (result) {
            self.runAction(action.action);
          } else if (action.autoReverse) {
            self.runAction(action.action, true);
          }
        });
      }
      if (Array.isArray(this.attributes.actionsIfFalse)) {
        this.attributes.actionsIfFalse.forEach(function (action) {
          if (!action || !action.action) {
            return;
          }
          if (!result) {
            self.runAction(action.action);
          } else if (action.autoReverse) {
            self.runAction(action.action, true);
          }
        });
      }
    },

    runAction: function (name, isReversed) {
      var action = this.getAction(name);
      var form = this.attributes.form;
      var result;
      var self = this;
      var element;

      if (isReversed) {
        action = this.getReversedAction(action);
      }
      if (!action) {
        return;
      }
      // run javascript
      if (action.javascript) {
        result = this.runJavaScript(form, action.javascript);
      }
      // run manipulations
      if (Array.isArray(action.manipulations)) {
        action.manipulations.forEach(function (m) {
          element = form.getElement(m.target);
          // don't execute this if element doesn't exist
          if (element) {
            // simply copy static properties
            element.set(_.clone(m.properties));
            // Done: use computed manipulations (expressions)
            // propValuesByExp: means set properties by evaluating expression
            if (m.propValuesByExp) {
              self.runExpression(form, name, element, m.propValuesByExp);
            }
          }
        });
      }
      // output result
      if (result !== undefined && action.outputTarget) {
        form.getElement(action.outputTarget).val(result);
      }
    },

    runExpression: function (form, action, targetElement, propValuesByExp) {
      var exp;
      var promises = [];
      var keys = [];
      // build maps of <properties> and <expression_promise>
      _.forEach(propValuesByExp, function (v, i) {
        // also send context and expressions that needs to be bound to context
        exp = new Expression(v, form, Behaviour.BOUND_EXPRESSIONS);
        promises.push(exp.evaluate());
        keys.push(i);
      });

      Promise.all(promises).then(function (args) {
        // on all success, assign properties to targetElement
        _.forEach(keys, function (key, i) {
          targetElement.set(key, args[i]);
        });
      }, function (args) {
        window.console.error('Behaviour-Action: ' + action, args);
      });
    },

    runJavaScript: function (form, string) {
      var js, result, placeholders, value;
      js = null;
      // todo: use expression parseElemVal instead of following operation
      placeholders = string.match(/\[[\w\/\[\]]+\]/g);
      if (_.isArray(placeholders)) {
        placeholders.forEach(function (placeholder) {
          placeholder = placeholder.substring(1, placeholder.length - 1);
          try {
            value = form.getElement(placeholder).val();
            string = string.replace('[' + placeholder + ']', value);
          } catch (err) {
            // TODO: output a warning or something
            window.console.warn(err, string);
          }
        });
      }
      try {
        /* eslint-disable no-eval */
        eval('js = ' + string);
        /* eslint-enable no-eval */
        if (_.isFunction(js)) {
          result = js.call(form);
        } else {
          result = js;
        }
      } catch (err) {
        window.console.warn(err, string);
        // TODO: output a warning or something
      }
      return result;
    },

    getCheck: function (name) {
      try {
        return this.attributes.form.attributes._checks.filter(function (c) {
          return c.name === name;
        })[0];
      } catch (err) {
        return null;
      }
    },

    getAction: function (name) {
      try {
        return this.attributes.form.attributes._actions.filter(function (a) {
          return a.name === name;
        })[0];
      } catch (err) {
        return null;
      }
    },

    getActionsNames: function () {
      return this.attributes.actions.map(function (a) {
        return a.action;
      }).concat(this.attributes.actionsIfFalse.map(function (a) {
        return a.action;
      }));
    },

    getOutputTargets: function () {
      var allActions, names, myActions;
      try {
        allActions = this.attributes.form.attributes._actions;
        names = this.getActionsNames();
        myActions = allActions.filter(function (a) {
          return names.indexOf(a.name) !== -1;
        });
        return myActions.filter(function (a) {
          return !!a.outputTarget;
        }).map(function (a) {
          return a.outputTarget;
        });
      } catch (err) {
        return [];
      }
    },

    getReversedAction: function (action) {
      var isReversible;

      if (!action || action.javascript) {
        return null;
      }
      isReversible = true;
      action = JSON.parse(JSON.stringify(action));
      if (Array.isArray(action.manipulations)) {
        action.manipulations.forEach(function (m) {
          m.properties = m.properties || {};
          Object.keys(m.properties).forEach(function (k) {
            if (!_.isBoolean(m.properties[k])) {
              isReversible = false;
            } else {
              m.properties[k] = !m.properties[k];
            }
          });
        });
      }
      if (isReversible) {
        return action;
      }
      return null;
    },

    close: function () {
      var elements = this.attributes.elements;
      elements.off(null, this.execute, this);
      elements.reset();

      this.off('remove', this.close, this);
    }
  }, {
    // static properties

    EXECUTE_SLEEP: 10,

    BOUND_EXPRESSIONS: [
      'formelement.value',
      'injectelemval'
    ],

    /**
     * @param {Object} attrs attributes for this model.
     * @param {Form} form parent to associate with new Section.
     * @return {Behaviour} new Behaviour.
     */
    create: function (attrs, form) {
      var behaviour;

      if (!attrs || !_.isObject(attrs)) {
        return new Behaviour();
      }
      if (form) {
        attrs.form = form;
      }
      behaviour = new Behaviour(attrs);
      return behaviour;
    },

    /**
     * @param {Array} actions array of Strings and Objects
     * @returns {Object[]} array of Objects { action: "...", autoReverse: true|false }
     */
    normalizeActions: function (actions) {
      if (!actions || !Array.isArray(actions)) {
        return [];
      }
      return actions.map(function (action) {
        if (action && typeof action === 'string') {
          action = {
            action: action,
            autoReverse: false
          };
        }
        if (action && typeof action === 'object') {
          // if autoReverse is undefined then mark it as false
          if (typeof action.autoReverse !== 'boolean') {
            action.autoReverse = false;
          }
          if (action.action && typeof action.action === 'string') {
            return action;
          }
        }
        return {};
      });
    }
  });

  return Behaviour;
});
