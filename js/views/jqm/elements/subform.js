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
        $button;

      $button = $('<button></button>').attr({
        type: 'button',
        'data-icon': 'plus',
        'data-action': 'add'
      }).text(attrs.plusButtonLabel);

      $button.on('click', this.onAddClick.bind(this));

      this.$el.attr('data-form', attrs.subform);
      this.$el.prepend($button);
      this.model.attributes.forms.on('add remove', this.onFormsChange, this);

      this.onFormsChange();
    },
    onAddClick: function () {
      var self = this,
        attrs = self.model.attributes,
        $add = self.$el.children('button').add(self.$el.children('.ui-btn').children('button'));
      $add.button('disable');
      self.model.add().then(function() {
        if (!attrs.maxSubforms || self.model.getRealLength() < attrs.maxSubforms) {
          $add.button('enable');
        }
      });
    },
    onFormsChange: function () {
      var Forms,
        attrs,
        me,
        view,
        $add,
        label,
        realLength;
      Forms = BMP.Forms;
      me = this;

      attrs = me.model.attributes;
      $add = me.$el.children('button').add(me.$el.children('.ui-btn').children('button'));
      label = attrs.plusButtonLabel + me.model.getButtonLabel();
      realLength = me.model.getRealLength();

      $add.text(label);
      $add.button();
      $add.button('refresh');

      if (!attrs.maxSubforms || realLength < attrs.maxSubforms ) {
        $add.button('enable');
      } else if (realLength >= attrs.maxSubforms) {
        $add.button('disable');
      }

      this.model.attributes.forms.forEach(function (form) {
        var body$, previous$, action;
        // make sure each SubForm model in the SubFormField's collection has a view
        action = form.attributes._action;

        if (action !== 'remove') {
          if (!form.attributes._view) {
            form.attributes._view = new Forms._views.SubForm({
              model: form
            });
          }

          view = form.attributes._view;

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
