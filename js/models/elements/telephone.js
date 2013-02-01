define(['underscore', 'backbone', 'models/element'],
      function(_, Backbone, Element) {
  'use strict';

  var TelephoneElement = Element.extend({
    initialize: function() {
      Element.prototype.initialize.call(this);
    }
  });

  return TelephoneElement;
});


