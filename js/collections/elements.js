define(['underscore', 'backbone', 'models/element'],
      function(_, Backbone, Element) {
  'use strict';

  var Elements = Backbone.Collection.extend({
    model: Element
  });

  return Elements;
});


