define(['jquery', 'underscore', 'backbone', 'views/jqm/element'],
      function($, _, Backbone, ElementView) {
  'use strict';

  var TextElementView = ElementView.extend({
    render: function() {
      var $input,
          name = this.model.get('name');

      this.$el.empty();
      this.renderLabel();

      $input = $('<input type="text" />');
      $input.attr({
        name: name,
        'data-rv-value': 'm.value'
      });
      this.$el.append($input);
      this.bindRivets();
    }
  });

  return TextElementView;
});

