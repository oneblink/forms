define(['models/element'], function (Element) {
  'use strict';

  var TelephoneElement = Element.extend({
    initialize: function () {
      Element.prototype.initialize.apply(this, arguments);
    },
    initializeView: function () {
      var Forms = BMP.Forms,
      View,
      view;

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

  return TelephoneElement;
});
