define(['models/element'], function (Element) {
  'use strict';

  var HeadingElement = Element.extend({
    defaults: {
      page: 0,
      persist: false
    },
    initialize: function () {
      Element.prototype.initialize.call(this);
    }
  });

  return HeadingElement;
});


