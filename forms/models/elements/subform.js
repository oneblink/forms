define(function (require) {
  'use strict';

  // foreign modules

  var _ = require('underscore');
  var Backbone = require('backbone');

  // local modules

  var SubFormModel = require('forms/models/subform');
  var ElementModel = require('forms/models/element');

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
          delete attrs.preload;
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

      this.attributes.forms.on('add remove invalid change:value change:blob', this.updateFieldErrors, this);
      this.off('invalid change:value change:blob');

      // make sure that all form events are bubbled up through this subform
      this.attributes.forms.on('all', function () {
        this.trigger.apply(this, arguments);
      }, this);
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
      // TODO: there is too much DOM stuff here to be in the model
      var self = this;
      var attrs = this.attributes;
      var name = attrs.subForm;
      var forms = attrs.forms;
      var Forms = BMP.Forms;

      action = action || 'add';
      return new Promise(function (resolve, reject) {
        Forms.getDefinition(name, action).then(function (def) {
          var form;
          try {
            // the elements themselves need to know who the parent is.
            _.each(def._elements, function (element) {
              element.parentElement = self;
            });
            form = SubFormModel.create(def, action);
            self.listenTo(form.get('elements'), 'invalid change:value change:blob', self.validate.bind(self));
            form.parentElement = self;
            if (forms) {
              forms.add(form);
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
        return; // invalid SubForm model, not part of this SubFrom Element
      }
      if (form.get('_action') === 'edit') {
        if (form.attributes._view) {
          form.attributes._view.remove();
          this.stopListening(form.get('elements'));
        }
        form.attributes = {
          _action: 'remove',
          id: form.getElement('id').get('value')
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
      var forms = this.attributes.forms;
      var addPromises = [];
      var counter = 0;
      var promises,
        action;

      return new Promise(function (resolve, reject) {
        if (!_.isArray(data)) {
          resolve();
          return;
        }
        Promise.all([me.attributes.preloadPromise]).then(function () {
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
            promises = [];
            data.forEach(function (record, index) {
              promises.push(forms.at(index).setRecord(record));
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
      this.validationError = this.validateField();
      this.set('errors', this.validationError);
    },
    validateField: function (attrs) {
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
        this.trigger('update:fieldErrors', errors);
        return errors;
      }
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
        if (v.get('_action') !== 'remove') {
          counter++;
        }
      });
      return counter;
    },
    validate: function (attrs) {
      var forms;
      var subformErrorCounter = 0;
      var errors;

      if (attrs === undefined) {
        attrs = this.attributes;
      }

      errors = this.validateField(attrs) || {};

      forms = attrs.forms;
      if (!forms) {
        return _.isEmpty(errors) ? undefined : errors;
      }

      forms.models.forEach(function (frm) {
        var err;
        err = frm.getInvalidElements({validate: true});
        if (err && err.length) {
          subformErrorCounter++;
        }
      });

      // check if subform fields has any errors
      if (subformErrorCounter > 0) {
        errors.value = errors.value || [];
        errors.value.push({code: 'SUBFORM'});
      }

      return _.isEmpty(errors) ? undefined : errors;
    },

    setExternalErrors: function (elementErrorList, options) {
      // set errors on subforms
      this.get('forms').invoke('setErrors', elementErrorList, options);

      // set errors on me.
      if (elementErrorList.errors) {
        ElementModel.prototype.setExternalErrors.call(this, elementErrorList.errors, options);
      }

      this.trigger('update:fieldErrors');
    }
  });
});
