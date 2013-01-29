define(['underscore', 'backbone', 'models/element'],
      function(_, Backbone, Element) {
  'use strict';

  var DateElement = Element.extend({
    initialize: function() {
      Element.prototype.initialize.call(this);
    }
  });

  return DateElement;
});



