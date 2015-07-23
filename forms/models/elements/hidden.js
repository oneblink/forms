define(['forms/models/element'], function (Element) {
  'use strict';

  var HiddenElement = Element.extend({
    initialize: function () {
      Element.prototype.initialize.apply(this, arguments);
    },
    // no-op, we don't want views here
    initializeView: function () {},
    removeView: function () {}
  });



  return HiddenElement;
});
