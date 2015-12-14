define(function (require) {
  'use strict';

  // foreign modules

  var _ = require('underscore');
  var Backbone = require('backbone');

  // local modules

  var SubFormModel = require('forms/models/subform');
  var ElementModel = require('forms/models/element');

  var isValidFormId = require('forms/helpers/is-valid-form-id');

  // this module

  var SubFormsCollection;

  /**
   * Holds a collection of form objects that exist inside a SubForm Element.
   *
   */
  SubFormsCollection = Backbone.Collection.extend({
    model: SubFormModel,

    /**
     * invokes 'getSubforms' on each form object and returns the aggregated result.
     * @return {Array|Object} An Array of subforms. Each index matches the forms index in this collection.
     */
    getSubforms: function () {
      return this.invoke('getSubforms');
    },

    /**
     * invokes 'getInvalidElements' on each form in the collection and returns the aggregated result.
     * @param  {Number} [limit=0] (Optional) - Limit the number of results returned
     * @return {Array}  A array of invalid elements. Each index matches the forms index in this collection.
     */
    getInvalidElements: function (limit) {
      return this.invoke('getInvalidElements', limit);
    }
  });

  return ElementModel.extend({
    defaults: function () {
      return _.assign(ElementModel.prototype.defaults.call(this), {
        collapse: 'off'
      });
    },

    initialize: function () {
      var attrs;
      ElementModel.prototype.initialize.apply(this, arguments);
      this.attributes.forms = new SubFormsCollection();

      attrs = this.attributes;
      // currently server sets preload to either "admin_defined" or "no"
      if (isNaN(Number(attrs.preload))) {
        if (attrs.preload !== 'no' && attrs.preloadNum) {
          attrs.preload = Number(attrs.preloadNum);
        } else if (attrs.preload === 'no') {
          attrs.preload = null;
        }
      } else if (!isNaN(Number(attrs.preload))) {
        attrs.preload = Number(attrs.preload);
      }

      // plusButtonLabel
      if (_.isEmpty(attrs.plusButtonLabel) && attrs.label) {
        attrs.plusButtonLabel = attrs.label;
      }

      if (_.isEmpty(attrs.plusButtonLabel)) {
        attrs.plusButtonLabel = attrs.name;
      }
      // minusButtonLabel
      if (_.isEmpty(attrs.minusButtonLabel) && attrs.label) {
        attrs.minusButtonLabel = attrs.label;
      }

      if (_.isEmpty(attrs.minusButtonLabel)) {
        attrs.minusButtonLabel = attrs.name;
      }

      if (attrs.preload) {
        attrs.preloadPromise = this.addSubformRecursive(attrs.preload);
      } else {
        attrs.preloadPromise = Promise.resolve();
      }

      if (attrs.collapse !== 'off') {
        attrs.summaryPromise = this.getSummaryElements();
      }

      this.listenTo(this.attributes.forms, 'add remove', this.updateFieldErrors);

      // make sure that form valid/invalid events are bubbled up through this subform
      this.listenTo(this.attributes.forms, 'all', function (event) {
        if (event === 'valid' || event === 'invalid') {
          this.trigger.apply(this, arguments);
        }
      });
    },

    initializeView: function () {
      var Forms = BMP.Forms;
      var View = Forms._views.SubFormElement;
      var view = new View({model: this});
      this.set('_view', view);
      return view;
    },

    removeView: function () {
      this.attributes.forms.forEach(function (form) {
        form.removeView();
      });
      return ElementModel.prototype.removeView.call(this);
    },

    close: function () {
      this.removeView();
      this.attributes.forms.forEach(function (form) {
        form.close();
      });
      return ElementModel.prototype.close.call(this);
    },

    getSummaryElements: function () {
      var name = this.attributes.subForm;
      var Forms = BMP.Forms;

      return Forms.getDefinition(name, 'list').then(function (def) {
        return def._elements.map(function (el) {
          return el.name;
        });
      });
    },

    /**
     * Sets the subform element and all its child forms state to dirty
     */
    setDirty: function () {
      this.attributes.forms.invoke('setDirty', arguments[0]);

      return ElementModel.prototype.setDirty.apply(this, arguments);
    },

    /**
     * Sets the subform element and all its child forms state to pristine
     */
    setPristine: function () {
      this.attributes.forms.invoke('setPristine', arguments[0]);

      return ElementModel.prototype.setPristine.apply(this, arguments);
    },

    addSubformRecursive: function (max) {
      var self = this;
      var attrs = this.attributes;
      return self.add().then(function (form) {
        return form.attributes.preloadPromise;
      }).then(function () {
        if (attrs.forms.length < max) {
          return self.addSubformRecursive(max);
        }
        return Promise.resolve();
      });
    },

    add: function (action) {
      var self = this;
      var attrs = this.attributes;
      var name = attrs.subForm;
      var forms = attrs.forms;
      var Forms = BMP.Forms;

      // make a map of the field name properties so they are easy to match
      var fieldProperties = _.reduce(self.attributes._elements, function (memo, element) {
        memo[element.id] = element;

        return memo;
      }, {});

      action = action || 'add';
      return new Promise(function (resolve, reject) {
        Forms.getDefinition(name, action).then(function (def) {
          var form, elements;
          try {
            elements = _.reduce(def._elements, function (memo, element) {
              // check the sub form field for any overridden properties.
              var overriddenOptions = fieldProperties[element.subForm || element.name];

              if (overriddenOptions && parseInt(overriddenOptions.hide, 10) === 1) {
                return memo;
              }

              // let the element know who its parent is
              element.parentElement = self;

              memo.push(element);
              return memo;
            }, []);

            form = new SubFormModel(_.extend({}, def, {_elements: elements, _action: action}));
            form.attributes.elements.invoke('set', 'page', self.attributes.page);
            self.listenTo(form.attributes.elements, 'change:value change:blob', function () {
              form.setDirty();
              self.setDirty();
              Forms.current.setDirty();
            });

            form.on('remove', function () {
              self.stopListening(form.attributes.elements);
            });

            form.parentElement = self;
            if (forms) {
              forms.add(form);
            }
            form.setDirty();
            self.setDirty();

            if (Forms.current) {
              Forms.current.setDirty();
            }

            resolve(form);
          } catch (err) {
            reject(err);
          }
        }, function (err) {
          // reject
          reject(err);
        });
      });
    },

    /**
    * @param {Model} model the SubForm Model to find an index
    * @return {Number} -1 if not found, otherwise the collection's index
    */
    indexOf: function (model) {
      var forms = this.attributes.forms;
      return forms.models.indexOf(model);
    },

    /**
     * @param {Number|Model} index or model for the record.
     */
    remove: function (index) {
      var form;
      var forms = this.attributes.forms;

      // TODO: skip placeholder "delete" records when counting
      if (typeof index === 'number') {
        form = forms.at(index);
      } else if (index instanceof Backbone.Model) {
        form = index;
      }
      if (this.indexOf(form) === -1) {
        return; // invalid SubForm model, not part of this SubForm Element
      }
      if (form.attributes._action === 'edit') {
        this.stopListening(form.attributes.elements);
        form.removeView();
        form.attributes = {
          _action: 'remove',
          id: form.getElement('id').attributes.value
        };
        forms.trigger('remove');
      } else {
        form.close();
        forms.remove(form);
      }
    },

    size: function () {
      return this.attributes.forms.length;
    },

    getForm: function (index) {
      return this.attributes.forms.at(index);
    },

    getRecord: function () {
      var promises;

      promises = this.attributes.forms.map(function (form) {
        return form.data();
      });

      return new Promise(function (resolve, reject) {
        Promise.all(promises).then(function (values) {
          values = _.reduce(values, function (memo, value) {
            if (value._action === 'remove' && !isValidFormId(value.id)) {
              return memo;
            }
            memo.push(value);
            return memo;
          }, []);
          resolve(values);
        }, function () {
          reject();
        });
      });
    },

    /**
     * @param {Array} data
     * @returns {Promise}
     */
    setRecords: function (data) {
      var me = this;

      return new Promise(function (resolve, reject) {
        if (!_.isArray(data)) {
          return resolve();
        }

        Promise.all([me.attributes.preloadPromise]).then(function () {
          var forms = me.attributes.forms;
          var addPromises = [];
          var counter = 0;
          var action;

          // remove all preloaded forms
          while (forms.length > 0) {
            me.remove(forms.length - 1);
          }

          while (forms.length + addPromises.length < data.length) {
            action = 'add';
            if (data[counter].id) {
              action = 'edit';
            }
            addPromises.push(me.add(action));
            counter++;
          }
          // wait for extra (blank) records to be added
          Promise.all(addPromises).then(function () {
            var promises = data.map(function (record, index) {
              return forms.at(index).setRecord(record);
            });

            // wait for records to be populated
            Promise.all(promises).then(function (values) {
              resolve(values);
            }, function () {
              reject();
            });
          }, function () {
            reject();
          });
        });
      });
    },

    data: function () {
      if (!arguments.length) {
        return this.getRecord();
      }
    },

    updateFieldErrors: function () {
      // making this is asynchronous is necessary
      setTimeout(function () {
        this.isValid();
        this.set('errors', this.validationError);
      }.bind(this), 0);
    },

    getButtonLabel: function () {
      var attrs = this.attributes;
      var additionalString = '';
      if (attrs.maxSubforms) {
        additionalString = ' (' + this.getRealLength() + '/' + attrs.maxSubforms + ')';
      }
      return additionalString;
    },

    getRealLength: function () {
      var forms = this.attributes.forms;
      var counter = 0;

      if (!forms) {
        return counter;
      }
      forms.models.forEach(function (v) {
        if (v.attributes._action !== 'remove') {
          counter++;
        }
      });
      return counter;
    },

    validate: function (attrs) {
      var forms;
      var errors = {};
      var realLength = this.getRealLength();

      if (attrs === undefined) {
        attrs = this.attributes;
      }

      forms = attrs.forms;

      // check if there is any subform added
      if (forms && (attrs.required && realLength === 0 || attrs.minSubforms && attrs.minSubforms === 1 && realLength === 0)) {
        errors.value = errors.value || [];
        errors.value.push({code: 'REQUIRED'});
      }
      // check for max subforms
      if (forms && attrs.maxSubforms && realLength > attrs.maxSubforms) {
        errors.value = errors.value || [];
        errors.value.push({code: 'MAXSUBFORM', MAX: attrs.maxSubforms});
      }
      // check for min subforms
      if (forms && attrs.minSubforms && attrs.minSubforms > 1 && realLength < attrs.minSubforms) {
        errors.value = errors.value || [];
        errors.value.push({code: 'MINSUBFORM', MIN: attrs.minSubforms});
      }
      if (!_.isEmpty(errors)) {
        return errors;
      }
    },

    setExternalErrors: function (elementErrorList, options) {
      // set errors on subforms
      this.attributes.forms.invoke('setErrors', elementErrorList, options);

      // set errors on me.
      if (elementErrorList.errors) {
        ElementModel.prototype.setExternalErrors.call(this, elementErrorList.errors, options);
      }

      this.trigger('update:fieldErrors');
    }
  });
});
