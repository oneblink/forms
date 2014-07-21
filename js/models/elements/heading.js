define(['models/element'], function (Element) {
  'use strict';

  var HeadingElement = Element.extend({
    defaults: {
      page: 0,
      persist: false,
      level: 1
    },
    initialize: function () {
      var self = this,
        schemaMap = {
          'headingText': 'text',
          'headingPosition': 'position',
          'headingFontFace': 'fontFace'
        };

      Object.keys(schemaMap).forEach(function (key) {
        if (schemaMap[key] && self.attributes[key]) {
          self.attributes[schemaMap[key]] = self.attributes[key];
        }
      });

      Element.prototype.initialize.call(this);
    }
  });

  return HeadingElement;
});


