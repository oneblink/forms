define(['models/elements/text'], function (TextElement) {
  'use strict';

  var TextAreaElement = TextElement.extend({
    initialize: function () {
      TextElement.prototype.initialize.call(this);
    },
    initializeView: function () {
      var Forms = BMP.Forms,
      View,
      view;

      if (this.attributes.readonly) {
        this.removeView();
        View = Forms._views.ReadOnlyElement;
      } else {
        return TextElement.prototype.initializeView.call(this);
      }

      view = new View({model: this});
      this.set('_view', view);
      return view;
    }
  });

  return TextAreaElement;
});
