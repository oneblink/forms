define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');

  // local modules

  var ElementView = require('forms/jqm/element');

  // this module

  return ElementView.extend({
    tagName: 'section',

    initialize: function () {
      this.listenTo(this.model, 'update:fieldErrors', function () {
        this.renderErrors.apply(this, arguments);
      }.bind(this));

      ElementView.prototype.initialize.apply(this, arguments);
    },

    remove: function () {
      this.$el.children('.ui-btn').children('button').off('click');
      this.model.attributes.forms.off('change', this.onFormsChange, this);
      this.stopListening(this.model, 'invalid valid');
      this.model.attributes.forms.forEach(function (form) {
        if (form.attributes._view) {
          form.attributes._view.remove();
        }
      });
      return ElementView.prototype.remove.call(this);
    },
    render: function () {
      var attrs = this.model.attributes;
      var $button;

      $button = $('<button data-onclick="onAddClick" class="bm-button bm-add"></button>').attr({
        type: 'button',
        'data-icon': 'plus',
        'data-action': 'add'
      }).text(attrs.plusButtonLabel);

      $button.on('click', function (e) {
        this.onAddClick(e);
      }.bind(this));

      this.$el.attr('data-form', attrs.subform);
      this.$el.prepend($button);
      this.model.attributes.forms.on('add remove', this.onFormsChange, this);
      this.$el.fieldcontain();
      this.onFormsChange();
    },

    /**
     * Adds a new subform and scrolls to the first element
     * @return {Promise(FormModel)} - A Promise that resolves with the newly added FormModel or rejects with any errors encounterd
     */
    onAddClick: function () {
      var me = this;
      var attrs = me.model.attributes;
      var $add = me.$el.children('button').add(me.$el.children('.ui-btn').children('button'));

      $add.button('disable');

      return me.model
              .add()
              .then(function (formModel) {
                if (!attrs.maxSubforms || me.model.getRealLength() < attrs.maxSubforms) {
                  $add.button('enable');
                }
                formModel.set({collapsed: false});
                return formModel;
              });
    },

    onFormsChange: function () {
      var attrs,
        $add,
        label,
        realLength;
      var me = this;

      attrs = me.model.attributes;
      $add = me.$el.children('button').add(me.$el.children('.ui-btn').children('button'));
      label = attrs.plusButtonLabel + me.model.getButtonLabel();
      realLength = me.model.getRealLength();

      $add.text(label);
      $add.button();
      $add.button('refresh');

      if (!attrs.maxSubforms || realLength < attrs.maxSubforms) {
        $add.button('enable');
      } else if (realLength >= attrs.maxSubforms) {
        $add.button('disable');
      }

      // make sure each SubForm model in the SubFormField's collection has a view
      this.model.attributes.forms.forEach(function (form) {
        var body$, previous$;
        var view = form.attributes._view;
        var action = form.attributes._action;

        if (action !== 'remove') {
          if (!view || !view.$el || !view.$el.children().length) {
            // only call render() when necessary, otherwise "add" buttons go crazy
            view = form.initializeView();
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
    },

    onAttached: function () {
      this.model.attributes.forms.forEach(function (form) {
        var view = form.attributes._view;
        if (view && view.onAttached) {
          view.onAttached();
        }
      });
    }
  });
});
