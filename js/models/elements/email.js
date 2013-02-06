define(['models/elements/text'], function(TextElement) {
  'use strict';

  var EmailElement = TextElement.extend({
    initialize: function() {
      TextElement.prototype.initialize.call(this);
    }
  });

  return EmailElement;
});



