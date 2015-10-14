define(function (require) {
  'use strict';

  var Element = require('forms/models/element');

  return Element.extend({
    // no-op, we don't want views here
    initializeView: function () {},
    removeView: function () {}
  });
});
