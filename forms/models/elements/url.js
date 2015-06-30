define(['forms/models/elements/text'], function (TextElement) {
  'use strict';

  var URLElement = TextElement.extend({
    initialize: function () {
      TextElement.prototype.initialize.apply(this, arguments);
    },
    initializeView: function () {
      var Forms = BMP.Forms,
      View,
      view;

      if (this.attributes.readonly) {
        this.removeView();
        View = Forms._views.ReadOnlyElement;
      } else {
        return TextElement.prototype.initializeView.apply(this, arguments);
      }

      view = new View({model: this});
      this.set('_view', view);
      return view;
    }
  });

  return URLElement;
});
