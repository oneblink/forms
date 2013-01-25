define(['underscore', 'backbone', 'views/jqm/element'],
      function(_, Backbone, ElementView) {
  'use strict';

  var TextElementView = ElementView.extend({
    render: function() {
      var $label = $(document.createElement('label')),
          $fieldset = $(document.createElement('fieldset')),
          $input,
          type = this.model.get('type'),
          name = this.model.get('name');

      $label.text(this.model.get('label') || name);

      $input = $('<input type="text" />');
      $input.attr('name', name);
      this.$el.empty();
      this.$el.append($label);
      $fieldset.append($input);
      this.$el.append($fieldset);
    }
  });

  return TextElementView;
});

