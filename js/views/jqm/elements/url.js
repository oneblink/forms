define(['jquery', 'underscore', 'backbone', 'views/jqm/elements/text'],
      function($, _, Backbone, TextElementView) {
  'use strict';

  var URLElementView = TextElementView.extend({
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

  return URLElementView;
});


