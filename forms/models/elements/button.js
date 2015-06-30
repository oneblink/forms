define(['forms/models/element'], function (Element) {
  'use strict';

  var ButtonElement = Element.extend({
    initialize: function () {
      Element.prototype.initialize.apply(this, arguments);
    }
  });

  return ButtonElement;
});
