define(['models/element'], function (Element) {
  'use strict';

  var MessageElement = Element.extend({
    defaults: {
      page: 0,
      persist: false
    },
    initialize: function () {
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


