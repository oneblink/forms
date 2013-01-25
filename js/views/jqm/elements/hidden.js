define(['underscore', 'backbone', 'views/jqm/element'],
      function(_, Backbone, ElementView) {
  'use strict';

  var TextElementView = ElementView.extend({
    tagName: 'input',
    attributes: {
      type: 'hidden'
    },
    render: function() {
      var name = this.model.get('name');

      this.$el.attr('name', name);
    }
  });

  return TextElementView;
});


