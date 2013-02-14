define(['views/jqm/form'], function(FormView) {
  var Forms = BlinkForms,
      SubFormView;

  SubFormView = FormView.extend({
    tagName: 'section',
    remove: function() {
      this.$el.children().children('button[data-action=remove]').off('click');
      return FormView.prototype.remove.call(this);
    },
    render: function() {
      var $label = $('<div></div>'),
          $button = $('<button></button>').attr({
            type: 'button',
            'data-icon': 'delete',
            'data-iconpos': 'notext',
            'data-action': 'remove'
          });

      $button.on('click', this.onRemoveClick);
      $label.append($button);
      $label.append('<strong>' + this.model.attributes.name + '</strong>');

      FormView.prototype.render.call(this);

      this.$el.prepend($label);
    },
    onRemoveClick: function() {
      var $form = Forms.getForm(this).$form;
      Forms.getElement($form).remove($form);
    }
  });

  return SubFormView;
});
