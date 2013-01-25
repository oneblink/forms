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

      $label.text(this.model.get('label') || name);

      $input = $('<textarea />');
      $input.attr('name', name);
      this.$el.empty();
      this.$el.append($label);
      $fieldset.append($input);
      this.$el.append($fieldset);
    }
  });

  return TextAreaElementView;
});


