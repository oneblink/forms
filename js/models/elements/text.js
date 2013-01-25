define(['underscore', 'backbone', 'models/element'],
      function(_, Backbone, Element) {
  'use strict';

  var TextElement = Element.extend({
    initialize: function() {
      this._super('initialize');
    }
  });

  return TextElement;
});


