define(['models/element'], function (Element) {
  'use strict';

  var HeadingElement = Element.extend({
    initialize: function () {
      Element.prototype.initialize.call(this);
    }
  });

  return HeadingElement;
});


