define(['models/element'], function (Element) {
  'use strict';

  var DrawElement = Element.extend({
    initialize: function () {
      Element.prototype.initialize.call(this);
    },
    initializeView: function () {
      var Forms = BMP.Forms,
        view;

      this.removeView();

      view = new Forms._views.DrawElement({model: this});
      this.set('_view', view);
    }
  });

  return DrawElement;
});