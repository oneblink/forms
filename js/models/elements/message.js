define(['models/element'], function (Element) {
  'use strict';

  var MessageElement = Element.extend({
    defaults: {
      page: 0,
      persist: false
    },
    initialize: function () {
      var self = this,
        schemaMap = {
          'messageText': 'html'
        };

      Object.keys(schemaMap).forEach(function (key) {
        if (schemaMap[key] && self.attributes[key]) {
          self.attributes[schemaMap[key]] = self.attributes[key];
        }
      });

      Element.prototype.initialize.call(this);
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

  return MessageElement;
});


