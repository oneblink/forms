define(['models/elements/text'], function (TextElement) {
  'use strict';

  var PasswordElement = TextElement.extend({
    initialize: function () {
      TextElement.prototype.initialize.call(this);
    }
  });

  return PasswordElement;
});



