define(['models/element'], function(Element) {
  'use strict';

  var MessageElement = Element.extend({
    initialize: function() {
      Element.prototype.initialize.call(this);
    }
  });

  return MessageElement;
});


