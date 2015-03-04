define(['models/element', 'geo'], function (Element, geo) {
  'use strict';

  var LocationElement = Element.extend({
    initialize: function () {
      Element.prototype.initialize.call(this);
    },
    initializeView: function () {
      var Forms = BMP.Forms,
        view;

      this.removeView();

      if (this.attributes.readonly) {
        view = new Forms._views.LocationReadOnlyElement({model: this});
      } else {
        view = new Forms._views.LocationElement({model: this});
      }
      this.set('_view', view);
    },

    getGeoLocation: function (options) {
      var self = this;
      var errors = { value: [] };
      if (!geo.isSupported) {
        errors.value.push('unsupported in this browser');
        self.set('errors', errors);
        return Promise.reject(new Error(errors.value[0]));
      }
      return geo.getCurrentPosition(options)
        .then(function (position) { // onSuccess
          if (!position.coords) {
            return Promise.reject(new TypeError('position result lacks coordinates'));
          }
          self.set('currentlocation', position.coords);
        }, function (error) { // onError
          errors.value.push(geo.getErrorMessage(error));
          self.set('errors', errors);
          return Promise.reject(error);
        });
    }

  });

  return LocationElement;
});
