define(['forms/models/elements/text'], function (TextElement) {
  'use strict';

  var TextAreaElement = TextElement.extend({
    initialize: function () {
      TextElement.prototype.initialize.apply(this, arguments);
    },
    initializeView: function () {
      var Forms = BMP.Forms;
      var View, view;

      if (this.attributes.readonly) {
        this.removeView();
        View = Forms._views.ReadOnlyElement;
      } else {
        View = Forms._views.TextAreaElement;
      }

      view = new View({model: this});
      this.set('_view', view);
      return view;
    }
  });

  return TextAreaElement;
});
