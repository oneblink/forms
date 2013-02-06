define(['models/elements/text'], function(TextElement) {
  'use strict';

  var TextAreaElement = TextElement.extend({
    initialize: function() {
      TextElement.prototype.initialize.call(this);
    }
  });

  return TextAreaElement;
});



