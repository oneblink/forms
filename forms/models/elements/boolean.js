define(['models/element'], function (Element) {
  'use strict';

  var BooleanElement = Element.extend({
    initialize: function () {
      Element.prototype.initialize.apply(this, arguments);
    }
  });

  return BooleanElement;
});
