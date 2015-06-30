/*eslint-disable new-cap*/ // i18n functions are not constructors
define(['@blinkmobile/geolocation'], function (geolocation) {
  'use strict';

  return {

    isSupported: !!geolocation.getGeoLocation(),

    getCurrentPosition: geolocation.getCurrentPosition,

    getErrorMessage: function (error) {
      switch (error.code) {
      case error.PERMISSION_DENIED:
        return window.i18n['BMP/geolocation'].PERMISSION_DENIED();
      case error.PERMISSION_DENIED_TIMEOUT:
        return window.i18n['BMP/geolocation'].PERMISSION_DENIED_TIMEOUT();
      case error.POSITION_UNAVAILABLE:
        return window.i18n['BMP/geolocation'].POSITION_UNAVAILABLE();
      default:
        return window.i18n['BMP/geolocation'].UNKNOWN_ERROR();
      }
    }

  };

});
