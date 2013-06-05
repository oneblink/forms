define(['models/element'], function (Element) {
  'use strict';

  var FileElement = Element.extend({
    initialize: function () {
      Element.prototype.initialize.call(this);
    },
    initializeView: function () {
      var Forms = BMP.Forms,
        attrs = this.attributes,
        view;

      this.removeView();

      view = new Forms._views.FileElement({model: this});
      this.set('_view', view);
    }
  });

  return FileElement;
});