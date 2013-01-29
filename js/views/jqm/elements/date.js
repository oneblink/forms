define(['jquery', 'underscore', 'backbone', 'views/jqm/element'],
      function($, _, Backbone, ElementView) {
  'use strict';

  var DateElementView = ElementView.extend({
    render: function() {
      // TODO: implement pre-HTML5 fallback
      var $label = $(document.createElement('label')),
          $fieldset = $(document.createElement('fieldset')),
          $input,
          type = this.model.get('type'),
          name = this.model.get('name');

      $label.attr('data-rv-text', 'm.label');

      $input = $('<input type="date" />');
      $input.attr({
        name: name,
        'data-rv-value': 'm.value'
      });
      this.$el.empty();
      this.$el.append($label);
      $fieldset.append($input);
      this.$el.append($fieldset);
      this.bindRivets();
    }
  });

  return DateElementView;
});


