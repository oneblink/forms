define(function (require) {
  var Forms = BMP.Forms,
    FormView = require('views/jqm/form');

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

      if (_.isEmpty(name) && parentElement.attributes.label) {
        name = parentElement.attributes.label;
      }

      if (_.isEmpty(name)) {
        name = parentElement.attributes.name;
      }

      $button = $('<button></button>').attr({
        type: 'button',
        'data-icon': 'minus',
        'data-action': 'remove'
      }).text(name);

      $button.on('click', this.onRemoveClick);

      FormView.prototype.render.call(this);

      this.$el.prepend($button);
    },
    onRemoveClick: function () {
      var $form = Forms.getForm(this).$form;
      Forms.getElement($form).remove($form);
    }
  });
});
