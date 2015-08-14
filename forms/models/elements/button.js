define(['forms/models/element'], function (Element) {
  'use strict';

  var $ = require('jquery');

  var ButtonElement = Element.extend({
    initialize: function () {
      Element.prototype.initialize.apply(this, arguments);
    },

    setDirty: $.noop,
    setPristine: $.noop
  });

  return ButtonElement;
});
