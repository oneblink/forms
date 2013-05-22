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
      var Forms = BMP.Forms,
        attrs = this.attributes,
        name = attrs.subForm,
        forms = attrs.forms,
        $el = attrs._view.$el,
        $button = $el.children('.ui-btn');

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
      });
    },
    /**
     * @param {Number|Node|jQuery} index or DOM element for the record.
     */
    remove: function (index) {
      var Forms = BMP.Forms,
        $form;
      // TODO: skip placeholder "delete" records when counting
      // TODO: create placeholder records on "edit"
      if (typeof index === 'number') {
        this.attributes.forms.at(index).destroy();
        return;
      }
      $form = index instanceof $ ? index : $(index);
      Forms.getForm($form).destroy();
    },
    data: function () {
      var dfrd = Q.defer(),
        promises;

      promises = this.attributes.forms.map(function (form) {
        return form.data();
      });
      Q.all(promises).spread(function () {
        dfrd.resolve(_.toArray(arguments));
      }).fail(dfrd.reject);

      return dfrd.promise;
    }
  });
});


