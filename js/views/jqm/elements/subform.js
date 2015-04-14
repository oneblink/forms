define(function (require) {
  'use strict';

  var ElementView = require('views/jqm/element');

  return ElementView.extend({
    tagName: 'section',
    remove: function () {
      this.$el.children('.ui-btn').children('button').off('click');
      this.model.attributes.forms.off('change', this.onFormsChange, this);
      return ElementView.prototype.remove.call(this);
    },
    render: function () {
      var attrs = this.model.attributes,
        name = attrs.plusButtonLabel,
        $button,
        counter;

      if (_.isEmpty(name) && attrs.label) {
        name = attrs.label;
      }

      if (_.isEmpty(name)) {
        name = attrs.name;
      }

      $button = $('<button></button>').attr({
        type: 'button',
        'data-icon': 'plus',
        'data-action': 'add'
      }).text(name);

      $button.on('click', this.onAddClick.bind(this));

      this.$el.attr('data-form', name);
      this.$el.prepend($button);
      this.model.attributes.forms.on('add remove', this.onFormsChange, this);

      if (attrs.preload) {
        for (counter = 0; counter < attrs.preload; counter++) {
          this.model.add();
        }
      }

      this.onFormsChange();
    },
    onAddClick: function () {
      this.model.add();
    },
    onFormsChange: function () {
      var Forms,
        me,
        view;
      Forms = BMP.Forms;
      me = this;

      this.model.attributes.forms.forEach(function (form) {
        var body$, previous$, action;
        // make sure each SubForm model in the SubFormField's collection has a view
        if (!form.attributes._view) {
          form.attributes._view = new Forms._views.SubForm({
            model: form
          });
        }
        view = form.attributes._view;
        action = form.attributes._action;

        if (action !== 'remove') {
          if (!view || !view.$el || !view.$el.children().length) {
            // prevent calling render() over and over as "add" buttons go crazy
            form.$form = view.$el; // backwards-compatibility, convenience
            view.render();
          }
          body$ = view.$el.closest('body');

          if (!body$.length || body$[0] !== document.body) {
            // make sure all SubFormViews related to the SubForm models are appended to the DOM
            previous$ = me.$el.children('section[data-form]').last();
            if (!previous$.length) {
              me.$el.prepend(view.$el);
            } else {
              previous$.after(view.$el);
            }
          }
        }
      });
      this.$el.trigger('create');
    }
  });
});
