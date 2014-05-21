define(['models/form', 'models/element'], function (Form, Element) {
  'use strict';

  var Forms;

  Forms = Backbone.Collection.extend({
    model: Form
  });

  return Element.extend({
    initialize: function () {
      Element.prototype.initialize.call(this);
      this.attributes.forms = new Forms();
    },
    add: function () {
      // TODO: there is too much DOM stuff here to be in the model
      var attrs = this.attributes,
        name = attrs.subForm,
        forms = attrs.forms,
        $el = attrs._view.$el,
        $button = $el.children('.ui-btn');

      Forms = BMP.Forms;

      return new Promise(function (resolve) {
        Forms.getDefinition(name, 'add').then(function (def) {
          var form,
            view;

          form = Form.create(def);
          forms.add(form);
          view = form.attributes._view = new Forms._views.SubForm({
            model: form
          });
          form.$form = view.$el; // backwards-compatibility, convenience
          view.render();
          $button.before(view.$el);
          view.$el.trigger('create');
          resolve();
        });
      });
    },
    /**
     * @param {Number|Node|jQuery} index or DOM element for the record.
     */
    remove: function (index) {
      var $form;

      Forms = BMP.Forms;

      // TODO: skip placeholder "delete" records when counting
      // TODO: create placeholder records on "edit"
      if (typeof index === 'number') {
        this.attributes.forms.at(index).destroy();
        return;
      }
      $form = index instanceof $ ? index : $(index);
      Forms.getForm($form).destroy();
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
    }
  });
});
