define(['jquery', 'underscore', 'backbone', 'rivets'],
      function($, _, Backbone, rivets) {
  'use strict';

  var ElementView = Backbone.View.extend({
    tagName: 'div',
    attributes: {
      'data-role': 'fieldcontain'
    },
    events: {
    },
    initialize: function() {
      this.bindRivets();
    },
    render: function() {
      var $label = $(document.createElement('label')),
          $input,
          type = this.model.get('type'),
          name = this.model.get('name');

      $label.attr({
        'data-rv-text': 'm.label',
        class: 'ui-input-text'
      });

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
      }
      $input.attr({
        name: name,
        'data-rv-value': 'm.value'
      });
      this.$el.empty();
      this.$el.append($label);
      this.$el.append($input);
      this.bindRivets();
    },
    bindRivets: function() {
      if (this.rivet) {
        this.rivet.unbind();
      }
      this.rivet = rivets.bind(this.el, {m: this.model});
    }
  });

  return ElementView;
});
