define(function (require) {
  'use strict';

  var FileElementView = require('forms/jqm/elements/file');

  return FileElementView.extend({
    renderControls: function () {
      // do nothing, we don't have controls for read-only
    }
  });
});
