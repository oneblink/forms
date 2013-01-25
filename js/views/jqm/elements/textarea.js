define(['underscore', 'backbone', 'views/jqm/elements/text'],
      function(_, Backbone, TextElementView) {
  'use strict';

  var TextAreaElementView = TextElementView.extend({
    render: function() {
      var $label = $(document.createElement('label')),
          $fieldset = $(document.createElement('fieldset')),
          $input,
          type = this.model.get('type'),
          name = this.model.get('name');

      $label.attr('data-rv-text', 'm.label');

      $input = $('<textarea />');
      $input.attr({
        name: name,
        'data-rv-value': 'm.value'
      });
      this.$el.empty();
      this.$el.append($label);
      $fieldset.append($input);
      this.$el.append($fieldset);
      this.rivet.unbind();
      this.rivet = rivets.bind(this.el, {m: this.model});
    }
  });

  return TextAreaElementView;
});


