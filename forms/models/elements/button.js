define(function (require) {
  'use strict';

  var $ = require('jquery');

  var Element = require('forms/models/element');

  return Element.extend({
    setDirty: $.noop,
    setPristine: $.noop
  });
});
