define(['models/element'], function (Element) {
  'use strict';

  var HiddenElement = Element.extend({
    initialize: function () {
      Element.prototype.initialize.call(this);
    }
  });

  return HiddenElement;
});
