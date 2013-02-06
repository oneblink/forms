define(['models/element'], function(Element) {
  'use strict';

  var NumberElement = Element.extend({
    initialize: function() {
      Element.prototype.initialize.call(this);
    }
  });

  return NumberElement;
});


