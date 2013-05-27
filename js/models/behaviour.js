define(function (require) {
  var Elements = require('collections/elements'),
    Behaviour;

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
      var result;
      if (!this.attributes.check) {
        result = true;
      }
      this.runActions(result);
    },
    runActions: function (result) {
      var self = this;

      if (Array.isArray(this.attributes.actions)) {
        this.attributes.actions.forEach(function (action) {
          if (!action || !action.action) {
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
        form = this.attributes.form;

      if (isReversed) {
        action = this.getReversedAction(action);
      }
      if (!action) {
        return;
      }
      window.console.log(action);
      // TODO: run action.javascript
      if (Array.isArray(action.manipulations)) {
        action.manipulations.forEach(function (m) {
          // TODO: use computed manipulations
          form.getElement(m.target).set(m.properties);
        });
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

