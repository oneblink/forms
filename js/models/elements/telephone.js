define(['models/element'], function(Element) {
  'use strict';

  var TelephoneElement = Element.extend({
    initialize: function() {
      Element.prototype.initialize.call(this);
    }
  });

  return TelephoneElement;
});


