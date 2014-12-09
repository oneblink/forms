define(['models/element'], function (Element) {
  'use strict';

  var FileElement = Element.extend({
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
        view,
        accept = this.attributes.accept;

      this.removeView();

      if (BMP.BlinkGap.hasCamera() && accept.indexOf('image') === 0) {
        view = new Forms._views.BGImageElement({model: this});
      } else {
        view = new Forms._views.FileElement({model: this});
      }
      this.set('_view', view);
    }
  });

  return FileElement;
});
