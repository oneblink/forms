define(['models/element'], function(Element) {
  'use strict';

  var Elements = Backbone.Collection.extend({
    model: Element
  });

  return Elements;
});


