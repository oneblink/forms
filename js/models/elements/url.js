define(['models/elements/text'], function (TextElement) {
  'use strict';

  var URLElement = TextElement.extend({
    initialize: function () {
      TextElement.prototype.initialize.call(this);
    }
  });

  return URLElement;
});
