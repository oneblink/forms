define(['models/element'], function(Element) {
  'use strict';

  var TextElement = Element.extend({
    initialize: function() {
      Element.prototype.initialize.call(this);
    }
  });

  return TextElement;
});


