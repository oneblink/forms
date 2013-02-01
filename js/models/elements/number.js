define(['underscore', 'backbone', 'models/element'],
      function(_, Backbone, Element) {
  'use strict';

  var NumberElement = Element.extend({
    initialize: function() {
      Element.prototype.initialize.call(this);
    }
  });

  return NumberElement;
});


