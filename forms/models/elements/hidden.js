define(['forms/models/element'], function (Element) {
  'use strict';

  var HiddenElement = Element.extend({
    initialize: function () {
      Element.prototype.initialize.apply(this, arguments);
    }
  });

  return HiddenElement;
});
