define(function (require) {
  'use strict';

  var FileElement = require('forms/models/elements/file');

  return FileElement.extend({
    initialize: function () {
      FileElement.prototype.initialize.apply(this, arguments);
    },
    initializeView: function () {
      var Forms = BMP.Forms;
      var view;

      this.removeView();
      if (this.attributes.readonly) {
        view = new Forms._views.BlobReadOnlyElement({model: this});
      } else if (BMP.BlinkGap.hasTouchDraw()) {
        view = new Forms._views.BGDrawElement({model: this});
      } else {
        view = new Forms._views.DrawElement({model: this});
      }
      this.set('_view', view);
    }
  });
});
