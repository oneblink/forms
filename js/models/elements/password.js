define(['underscore', 'backbone', 'models/elements/text'],
      function(_, Backbone, TextElement) {
  'use strict';

  var PasswordElement = TextElement.extend({
    initialize: function() {
      TextElement.prototype.initialize.call(this);
    }
  });

  return PasswordElement;
});



