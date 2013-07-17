define(['models/element'], function (Element) {
  'use strict';

  var DrawElement = Element.extend({
    initialize: function () {
      Element.prototype.initialize.call(this);
    },
    initializeView: function () {
      var Forms = BMP.Forms,
        navigator = window.navigator,
        view;

      this.removeView();

      if (navigator.bgtouchdraw && navigator.bgtouchdraw.getDrawing &&
          window.BGTouchDraw) {
        view = new Forms._views.BGDrawElement({model: this});
      } else {
        view = new Forms._views.DrawElement({model: this});
      }
      this.set('_view', view);
    }
  });

  return DrawElement;
});