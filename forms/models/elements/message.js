define(function (require) {
  'use strict';

  var _ = require('underscore');

  var ElementModel = require('forms/models/element');

  return ElementModel.extend({
    defaults: function () {
      return _.assign(ElementModel.prototype.defaults.call(this), {
        persist: false
      });
    },

    initialize: function () {
      var self = this;
      var schemaMap = {
        messageText: 'html'
      };

      Object.keys(schemaMap).forEach(function (key) {
        if (schemaMap[key] && self.attributes[key]) {
          self.attributes[schemaMap[key]] = self.attributes[key];
        }
      });

      ElementModel.prototype.initialize.apply(this, arguments);
    },

    /**
     * official Blink API
     */
    val: function (value) {
      if (value === undefined) {
        return this.get('html');
      }
      this.set('html', value);
      return value;
    }
  });
});
