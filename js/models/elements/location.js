define(['models/element'], function (Element) {
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
      var self = this,
        geolocation = window.navigator && window.navigator.geolocation,
        defaultOptions = {
          enableHighAccuracy: true,
          maximumAge: 5 * 60 * 1000, // 5 minutes
          timeout: 5 * 1000 // 5 seconds
        },
        errors = { value: [] };

      if (!geolocation || !geolocation.getCurrentPosition) {
        errors.value.push('unsupported in this browser');
        self.set('errors', errors);
        return Promise.reject(new Error(errors.value[0]));
      }

      return new Promise(function (resolve, reject) {
        options = $.isPlainObject(options) ? options : {};
        options = $.extend({}, defaultOptions, options);
        geolocation.getCurrentPosition(
          function (position) { // successCallback
            var coords;
            if (position.coords) {
              coords = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                altitude: position.coords.altitude,
                accuracy: position.coords.accuracy,
                altitudeAccuracy: position.coords.altitudeAccuracy,
                heading: position.coords.heading,
                speed: position.coords.speed
              };
              self.set('value', coords);
              resolve();
            } else {
              errors.value.push('unable to determine position');
              self.set('errors', errors);
              reject(new Error(errors.value[0]));
            }
          },
          function (error) { // errorCallback
            var string;
            switch (error.code) {
            case error.PERMISSION_DENIED:
              string = 'user has not granted permission';
              break;
            case error.PERMISSION_DENIED_TIMEOUT:
              string = 'user did not grant permission in time';
              break;
            case error.POSITION_UNAVAILABLE:
              string = 'unable to determine position';
              break;
            default:
              string = 'unknown error';
            }
            errors.value.push(string);
            self.set('errors', errors);
            reject(new Error(errors.value[0]));
          },
          options
        );
      });
    }
  });

  return LocationElement;
});
