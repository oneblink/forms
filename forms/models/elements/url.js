define(function (require) {
  'use strict';

  var TextElement = require('forms/models/elements/text');

  return TextElement.extend({
    initializeView: function () {
      var Forms = BMP.Forms;
      var View, view;

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
});
