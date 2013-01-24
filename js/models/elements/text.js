define(['underscore', 'backbone', 'models/element', 'views/jqm/elements/text'],
      function(_, Backbone, Element, TextElementView) {
  'use strict';

  var TextElement = Element.extend({
    initialize: function() {
      this._super('initialize');
    }
  });

  return TextElement;
});


