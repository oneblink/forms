define(['models/element'], function (Element) {
  'use strict';

  var DrawElement = Element.extend({
    initialize: function () {
      Element.prototype.initialize.call(this);
      this.on('change:value', function () {
        var value, blob;
        value = this.get('value');
        if (value) {
          blob = BMP.Blob.fromDataURI(value);
          this.set('blob', blob);
        } else {
          this.unset('blob');
        }
      }, this);
    },
    initializeView: function () {
      var Forms = BMP.Forms,
        view;

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

  return DrawElement;
});
