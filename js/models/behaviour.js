define(function (require) {
  var Elements = require('collections/elements'),
    Behaviour,
    Expression = require('models/expression');

  Expression.fn['formelement.value'] = function (name) {
    return this.getElement(name).val();
  };

  Behaviour = Backbone.Model.extend({
    initialize: function () {
      var self = this;
      this.attributes.elements = new Elements();
      this.hookupTriggers();
      // TODO: find the best time to trigger this
      setTimeout(function () {
        self.attributes.elements.trigger('change');
      }, 0);
    },
    hookupTriggers: function () {
      var attrs = this.attributes,
        form = attrs.form,
        elements = attrs.elements;

      elements.off('change', this.runCheck, this);
      if (attrs.formElements === '*') {
        elements.set(form.attributes.elements.models);
      }
      elements.on('change', this.runCheck, this);
    },
    runCheck: function () {
      var check, exp;
      if (!this.attributes.check) {
        this.runActions(true);
        return;
      }
      if (this.attributes.check) {
        check = this.getCheck(this.attributes.check);
        if (check && check.exp) {
          this.bindExpressions();
          exp = new Expression(check.exp);
          this.runActions(exp.evaluate());
          this.unbindExpressions();
          return;
        }
      }
      // TODO: handle checks with functions
    },
    runActions: function (result) {
      var self = this;

      if (Array.isArray(this.attributes.actions)) {
        this.attributes.actions.forEach(function (action) {
          if (!action || (!_.isString(action) && !action.action)) {
            return;
          }
          if (result) {
            if (_.isString(action)) {
              self.runAction(action);
            } else {
              self.runAction(action.action);
            }
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
            if (_.isString(action)) {
              self.runAction(action);
            } else {
              self.runAction(action.action);
            }
          } else if (action.autoReverse) {
            self.runAction(action.action, true);
          }
        });
      }
    },
    runAction: function (name, isReversed) {
      var action = this.getAction(name),
        form = this.attributes.form,
        result;

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
          // TODO: use computed manipulations
          form.getElement(m.target).set(_.clone(m.properties));
        });
      }
      // output result
      if (result !== undefined && action.outputTarget) {
        form.getElement(action.outputTarget).val(result);
      }
    },
    runJavaScript: function (form, string) {
      var js, result, placeholders, value;
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
        /*jslint evil:true*/
        eval('js = ' + string);
        /*jslint evil:false*/
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
    destroy: function (options) {
      this.attributes.elements.off('change', this.runCheck);
    },
    bindExpressions: function () {
      var unbound = Expression.fn['formelement.value'];
      Expression.fn['formelement.value'] = _.bind(
        Expression.fn['formelement.value'],
        this.attributes.form
      );
      Expression.fn['formelement.value']._unbound = unbound;
    },
    unbindExpressions: function () {
      var unbound = Expression.fn['formelement.value']._unbound;
      delete Expression.fn['formelement.value']._unbound;
      Expression.fn['formelement.value'] = unbound;
    }
  }, {
    // static properties
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
    }
  });

  return Behaviour;
});

