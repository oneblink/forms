define(function (require) {
  var FormView = require('views/jqm/form');

  return FormView.extend({
    tagName: 'section',

    attributes: {},

    events: {
      'click [data-onclick="remove-subform"]': 'onRemoveClick'
    },

    renderErrors: $.noop,

    render: function () {
      var parentElement = this.model.parentElement,
        name = parentElement.attributes.minusButtonLabel,
        $button;

      $button = $('<button data-onclick="remove-subform"></button>').attr({
        type: 'button',
        'data-icon': 'minus',
        'data-action': 'remove'
      }).text(name);

      FormView.prototype.render.call(this);

      this.$el.attr(
        'data-record-index',
        parentElement.get('forms').indexOf(this.model)
      );

      this.$el.prepend($button);
      $button.button();
    },

    onRemoveClick: function () {
      this.model.parentElement.remove(this.model);
    }
  });
});
