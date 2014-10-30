define(['models/subform', 'models/element'], function (SubForm, Element) {
  'use strict';

  var SubForms;

  SubForms = Backbone.Collection.extend({
    model: SubForm
  });

  return Element.extend({
    initialize: function () {
      Element.prototype.initialize.call(this);
      this.attributes.forms = new SubForms();
    },
    add: function () {
      // TODO: there is too much DOM stuff here to be in the model
      var self = this,
        attrs = self.attributes,
        name = attrs.subForm,
        forms = attrs.forms,
        action = attrs.form.attributes._action,
        Forms = BMP.Forms;

      return new Promise(function (resolve, reject) {
        Forms.getDefinition(name, action).then(function (def) {
          var form;

          try {
            form = SubForm.create(def, action);
            form.parentElement = self;
            if (forms) {
              forms.add(form);
            }
            resolve();
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
     * @param {Number|Node|jQuery} index or DOM element for the record.
     */
    remove: function (index) {
      var form,
        Forms = BMP.Forms;

      // TODO: skip placeholder "delete" records when counting
      if (typeof index === 'number') {
        form = this.attributes.forms.at(index);
      } else {
        form = index instanceof $ ? index : $(index);
        form = Forms.getForm(form);
      }
      if (form.attributes._view) {
        form.attributes._view.remove();
      }
      if (form.get('_action') === 'edit') {
        form.attributes = {
          _action: 'remove',
          id: form.attributes.id
        };
      } else {
        form.destroy();
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
      var me = this,
        forms = this.attributes.forms,
        addPromises = [],
        promises;

      return new Promise(function (resolve, reject) {
        if (!_.isArray(data)) {
          resolve();
          return;
        }
        while (forms.length > data.length) {
          me.remove(forms.length - 1);
        }
        while (forms.length + addPromises.length < data.length) {
          addPromises.push(me.add());
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
    },
    data: function () {
      if (!arguments.length) {
        return this.getRecord();
      }
    },
    validate: function (attrs) {
      var forms = this.attributes.forms,
        err,
        errors = {};
      if (attrs === undefined) {
        attrs = this.attributes;
      }

      forms.models.forEach(function (frm, index) {
        err = frm.getErrors();
        if (err) {
          errors.value = errors.value || {};
          errors.value[index] = err;
        }
      });

      if (!_.isEmpty(errors)) {
        return errors;
      }
    }
  });
});
