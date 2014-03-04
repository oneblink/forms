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
      var dfrd = Q.defer(),
        attrs = this.attributes,
        name = attrs.subForm,
        forms = attrs.forms,
        $el = attrs._view.$el,
        $button = $el.children('.ui-btn');

      Forms = BMP.Forms;

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
        dfrd.resolve();
      });
      return dfrd.promise;
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
      var dfrd = Q.defer(),
        promises;

      promises = this.attributes.forms.map(function (form) {
        return form.data();
      });
      Q.all(promises).spread(function () {
        dfrd.resolve(_.toArray(arguments));
      }).fail(dfrd.reject);

      return dfrd.promise;
    },
    /**
     * @param {Array} data
     * @returns {Promise}
     */
    setRecords: function (data) {
      var dfrd = Q.defer(),
        forms = this.attributes.forms,
        addPromises = [],
        promises;

      if (!_.isArray(data)) {
        dfrd.resolve();
        return dfrd.promise;
      }
      while (forms.length + addPromises.length < data.length) {
        addPromises.push(this.add());
      }
      while (forms.length > data.length) {
        this.remove(forms.length - 1);
      }
      // wait for extra (blank) records to be added
      Q.all(addPromises).spread(function () {
        promises = [];
        data.forEach(function (record, index) {
          promises.push(forms.at(index).setRecord(record));
        });

        // wait for records to be populated
        Q.all(promises).spread(function () {
          dfrd.resolve(_.toArray(arguments));
        }).fail(dfrd.reject);

      }).fail(dfrd.reject);
      return dfrd.promise;
    },
    data: function () {
      if (!arguments.length) {
        return this.getRecord();
      }
    }
  });
});


