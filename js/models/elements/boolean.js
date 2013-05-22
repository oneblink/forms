define(['models/element'], function (Element) {
  'use strict';

  var BooleanElement = Element.extend({
    initialize: function () {
      Element.prototype.initialize.call(this);
    }
  });

  return BooleanElement;
});


