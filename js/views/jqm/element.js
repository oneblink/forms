define(['underscore', 'backbone'], function(_, Backbone) {
  'use strict';

  var ElementView = Backbone.View.extend({
    tagName: 'div',
    attributes: {
      'data-role': 'fieldcontain'
    },
    events: {
    },
    render: function() {
      var $label = $(document.createElement('label')),
          $fieldset = $(document.createElement('fieldset')),
          $input,
          type = this.model.get('type'),
          name = this.model.get('name');

      $label.text(this.model.get('label') || name);

      switch (type) {
        case 'file':
          $input = $('<input type="file" />');
          break;
        case 'image':
          $input = $('<input type="file" />');
          break;
        case 'url':
          $input = $('<input type="url" />');
          break;
        case 'email':
          $input = $('<input type="email" />');
          break;
        case 'date':
          $input = $('<input type="date" />');
          break;
        case 'hidden':
          $input = $('<input type="hidden" />');
          break;
      }
      $input.attr('name', name);
      if (type === 'hidden') {
        this.$el = $input;
        this.el = $input[0];
      } else {
        this.$el.empty();
        this.$el.append($label);
        $fieldset.append($input);
        this.$el.append($fieldset);
      }
    }
  });

  return ElementView;
});
