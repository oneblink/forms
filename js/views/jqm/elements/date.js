define(['jquery', 'underscore', 'backbone', 'views/jqm/element'],
      function($, _, Backbone, ElementView) {
  'use strict';

  var DateElementView = ElementView.extend({
    render: function() {
      // TODO: implement pre-HTML5 fallback
      var $label = $(document.createElement('label')),
          $input,
          type = this.model.get('type'),
          name = this.model.get('name');

      $label.attr({
        'data-rv-text': 'm.label',
        class: 'ui-input-text'
      });

      $input = $('<input type="date" />');
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

  return DateElementView;
});


