define(['jquery', 'underscore', 'backbone', 'views/jqm/element'],
      function($, _, Backbone, ElementView) {
  'use strict';

  var TextElementView = ElementView.extend({
    attributes: {
      'data-rv-text': 'm.text'
    },
    initialize: function() {
      var $el;
      if (this.model && _.isNumber(this.model.attributes.level)) {
        this.tagName = 'h' + this.model.attributes.level;
        $el = $('<' + this.tagName + '></' + this.tagName + '>');
        $el.attr(this.attributes);
        this.setElement($el[0]);
      }
      ElementView.prototype.initialize.call(this);
    },
    render: function() {
      this.bindRivets();
    }
  });

  return TextElementView;
});

