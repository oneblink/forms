define(['jquery', 'underscore', 'backbone', 'views/jqm/elements/choice'],
      function($, _, Backbone, ChoiceElementView) {
  'use strict';

  var ChoiceCollapsedElementView = ChoiceElementView.extend({
    render: function() {
      var $input,
          type = this.model.attributes.type,
          name = this.model.attributes.name;

      this.$el.empty();
      this.renderLabel();

      $input = $('<select />');
      $input.attr({
        'data-rv-value': 'm.value'
      });

      if (type === 'select') {
        $input.attr({
          name: name
        });
        $input.append('<option>select one...</option>');
      } else { // type === 'multi'
        $input.attr({
          name: name + '[]',
          multiple: 'multiple',
          'data-native-menu': false
        });
        $input.append('<option>select one or more...</option>');
      }

      _.forEach(this.model.attributes.options, function(label, value) {
        var $option = $('<option value="' + value + '">' + label + '</option>');
        $input.append($option);
      });

      this.$el.append($input);
      this.bindRivets();
    }
  });

  return ChoiceCollapsedElementView;
});


