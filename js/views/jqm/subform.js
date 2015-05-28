define(function (require) {
  var FormView = require('views/jqm/form');

  return FormView.extend({
    tagName: 'section',
    attributes: {},
    remove: function () {
      this.$el.children('.ui-btn').children('button').off('click');
      return FormView.prototype.remove.call(this);
    },
    render: function () {
      var parentElement = this.model.parentElement,
        name = parentElement.attributes.minusButtonLabel,
        $button;

      $button = $('<button></button>').attr({
        type: 'button',
        'data-icon': 'minus',
        'data-action': 'remove'
      }).text(name);

      $button.on('click', this.onRemoveClick.bind(this));

      FormView.prototype.render.call(this);

      this.$el.prepend($button);
    },
    onRemoveClick: function () {
      this.model.parentElement.remove(this.model);
    }
  });
});
