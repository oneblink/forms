define(['jquery', 'underscore', 'backbone', 'views/jqm/element'],
      function($, _, Backbone, ElementView) {
  'use strict';

  var MessageElementView = ElementView.extend({
    tagName: 'div',
    attributes: {
      'data-rv-html': 'm.html'
    },
    render: function() {
      this.bindRivets();
    }
  });

  return MessageElementView;
});

