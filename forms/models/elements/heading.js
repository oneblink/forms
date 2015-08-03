define(['forms/models/element'], function (Element) {
  'use strict';

  var HeadingElement = Element.extend({
    defaults: {
      page: 0,
      persist: false,
      level: 1
    },
    initialize: function () {
      var self, schemaMap, headingType;
      self = this;
      schemaMap = {
        headingText: 'text',
        headingPosition: 'position',
        headingFontFace: 'fontFace',
        headingSmallText: 'smallText'
      };

      Object.keys(schemaMap).forEach(function (key) {
        if (schemaMap[key] && self.attributes[key]) {
          self.attributes[schemaMap[key]] = self.attributes[key];
        }
      });
      if (self.attributes.hasOwnProperty('headingType')) {
        // migrate old headingType setting to level
        headingType = self.attributes.headingType;
        if (typeof headingType !== 'number') {
          headingType = parseInt(headingType, 10);
        }
        if (typeof headingType === 'number' && !isNaN(headingType)) {
          self.attributes.level = headingType + 1;
        }
      }

      Element.prototype.initialize.apply(this, arguments);
    }
  });

  return HeadingElement;
});
