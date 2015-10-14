define(function (require) {
  'use strict';

  var Element = require('forms/models/element');

  return Element.extend({
    initializeView: function () {
      var Forms = BMP.Forms;
      var View, view;

      if (this.attributes.readonly) {
        this.removeView();
        View = Forms._views.ReadOnlyElement;
      } else {
        View = Forms._views.TelephoneElement;
      }

      view = new View({model: this});
      this.set('_view', view);
      return view;
    }
  });
});
