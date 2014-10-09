define(['models/element'], function (Element) {
  'use strict';

  var ButtonElement = Element.extend({
    initialize: function () {
      Element.prototype.initialize.call(this);
    }
  });

  return ButtonElement;
});



