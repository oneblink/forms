define(['models/form', 'models/element'], function(Form, Element) {
  'use strict';

  var SubFormElement,
      Forms;

  Forms = Backbone.Collection.extend({
    model: Form
  });

  SubFormElement = Element.extend({
    initialize: function() {
      Element.prototype.initialize.call(this);
      this.attributes.forms = new Forms();
    },
    add: function() {
      // TODO: there is too much DOM stuff here to be in the model
      var attrs = this.attributes,
          name = attrs.subForm,
          forms = attrs.forms,
          $el = attrs._view.$el,
          $button = $el.children('.ui-btn');

      BlinkForms.getDefinition(name).then(function(def) {
        var form,
            view;

        form = Form.create(def, 'add');
        forms.add(form);
        view = form.attributes._view = new BlinkForms._views.SubForm({
          model: form
        });
        form.$form = view.$el; // backwards-compatibility, convenience
        view.render();
        $button.before(view.$el);
        view.$el.trigger('create');
      });
    },
    /**
     * @param {Number|DOMNode|jQuery} index or DOM element for the record.
     */
    remove: function(index) {
      var $form;
      // TODO: skip placeholder "delete" records when counting
      // TODO: create placeholder records on "edit"
      if (typeof index === 'number') {
        this.attributes.forms.at(index).destroy();
        return;
      }
      $form = index instanceof $ ? index : $(index);
      BlinkForms.getForm($form).destroy();
    }
  });

  return SubFormElement;
});


