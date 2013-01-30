define(['underscore', 'backbone', 'models/elements/select'],
      function(_, Backbone, SelectElement) {
  'use strict';

  var MultiElement = SelectElement.extend({
    initialize: function() {
      SelectElement.prototype.initialize.call(this);
    }
  });

  return MultiElement;
});



