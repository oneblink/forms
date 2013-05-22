define(['models/element'], function (Element) {
  'use strict';

  var SelectElement = Element.extend({
    initialize: function () {
      Element.prototype.initialize.call(this);
    }
  });

  return SelectElement;
});


