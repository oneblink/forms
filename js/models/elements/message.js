define(['models/element'], function (Element) {
  'use strict';

  var MessageElement = Element.extend({
    defaults: {
      page: 0,
      persist: false
    },
    initialize: function () {
      Element.prototype.initialize.call(this);
    }
  });

  return MessageElement;
});


