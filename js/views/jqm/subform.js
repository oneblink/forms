define(function(require) {
  var Forms = BMP.Forms,
      FormView = require('views/jqm/form');

  return FormView.extend({
    tagName: 'section',
    attributes: {},
    remove: function() {
      this.$el.children('.ui-btn').children('button').off('click');
      return FormView.prototype.remove.call(this);
    },
    render: function() {
      var $button = $('<button></button>').attr({
            type: 'button',
            'data-icon': 'minus',
            'data-action': 'remove'
          }).text(this.model.attributes.name);

      $button.on('click', this.onRemoveClick);

      FormView.prototype.render.call(this);

      this.$el.prepend($button);
    },
    onRemoveClick: function() {
      var $form = Forms.getForm(this).$form;
      Forms.getElement($form).remove($form);
    }
  });
});
