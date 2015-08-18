define(function (require) {
  'use strict';

  var $ = require('jquery');
  var _ = require('underscore');

  var ElementModel = require('forms/models/element');

  var defaultAttributes = {
    page: 0,
    persist: false,
    level: 1
  };

  var HeadingElement = ElementModel.extend({
    defaults: _.extend(defaultAttributes, ElementModel.prototype.defaults),

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
      ElementModel.prototype.initialize.apply(this, arguments);
    },

    setDirty: $.noop,
    setPristine: $.noop
  });

  return HeadingElement;
});
