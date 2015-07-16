define([
  'forms/jqm/elements/file'
], function (FileElementView) {
  'use strict';
  var BlobReadOnlyElement;

  BlobReadOnlyElement = FileElementView.extend({
    renderControls: function () {
      // do nothing, we don't have controls for read-only
    }
  });

  return BlobReadOnlyElement;
});
