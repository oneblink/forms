define(['jquery', 'underscore', 'backbone', 'views/jqm/elements/text'],
      function($, _, Backbone, TextElementView) {
  'use strict';

  var TextAreaElementView = TextElementView.extend({
    render: function() {
      var $label = $(document.createElement('label')),
          $input,
          type = this.model.get('type'),
          name = this.model.get('name');

      $label.attr({
        'data-rv-text': 'm.label',
        class: 'ui-input-text'
      });

      $input = $('<textarea />');
      $input.attr({
        name: name,
        'data-rv-value': 'm.value'
      });
      this.$el.empty();
      this.$el.append($label);
      this.$el.append($input);
      this.bindRivets();
    }
  });

  return TextAreaElementView;
});


