define(function (require) {
  'use strict';

  var ElementView = require('views/jqm/element');

  return ElementView.extend({
    tagName: 'section',
    remove: function () {
      this.$el.children('.ui-btn').children('button').off('click');
      return ElementView.prototype.remove.call(this);
    },
    render: function () {
      var name = this.model.attributes.plusButtonLabel,
        $button;

      if (_.isEmpty(name) && this.model.attributes.label) {
        name = this.model.attributes.label;
      }

      if (_.isEmpty(name)) {
        name = this.model.attributes.name;
      }

      $button = $('<button></button>').attr({
        type: 'button',
        'data-icon': 'plus',
        'data-action': 'add'
      }).text(name);

      $button.on('click', this.onAddClick);

      this.$el.attr('data-form', name);
      this.$el.prepend($button);
    },
    onAddClick: function () {
      var Forms = BMP.Forms,
        element = Forms.getElement(this);

      element.add();
    }
  });
});

