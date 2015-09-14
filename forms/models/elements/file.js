define(function (require) {
  'use strict';

  // foreign modules

  var _ = require('underscore');

  // local modules

  var Element = require('forms/models/element');

  // this module

  var FileElement;
  var cameraDestinationType;

  /*
    We'll set the camera destination type here, but it can still be overridden by setting BMP.BIC.attributes.destinationType, same as the image quality and scale options

     http://plugins.cordova.io/#/package/org.apache.cordova.camera

     "NOTE: Photo resolution on newer devices is quite good. Photos selected from the device's gallery are not downscaled to a lower quality, even if a quality parameter is specified. To avoid common memory problems, set Camera.destinationType to FILE_URI rather than DATA_URL."
  */
  try {
    cameraDestinationType = (window.Camera || navigator.camera).DestinationType;
  } catch (e) {
    if (window.console && window.console.info) {
      window.console.info('Cordova Camera not available');
    }
  }

/**
  @class FileElement
  @classdesc Represents a file, usually an image.

  @type Backbone.Model
  @implements Forms.Element

  @property {object}  attributes        - Backbone Attributes object
  @property {number}  attributes.blob   - file blob data, in base64 format
  @property {number}  height            -
  @property {number}  width             -
  @property {number}  progress          -
  @property {number}  uuid              -
  @property {number}  accept            - "image" if the model will hold an image from the device camera
  @property {boolean} readonly          - if true, BlobReadOnlyElement View will be used.
  @property {boolean} capture           - if true, and the device supports "getUserMedia", "WebRTCImageElement" View will be used.
*/
  FileElement = Element.extend({
    defaults: _.extend({}, Element.prototype.defaults, {
      height: 0,
      width: 0,
      progress: null,
      uuid: '',
      xhr: null,
      capture: false,
      accept: ''
    }),

    initialize: function () {
      Element.prototype.initialize.apply(this, arguments);

/**
  @event FileElement#change
  @description Fired when the value attribute has changed
*/
      this.on('change:value', function () {
        var value;
        value = this.get('value');

        if (value) {
          this.setBlobFromString(value);
        } else {
          this.unset('blob');
          this.set({
            height: 0,
            width: 0,
            uuid: ''
          });
        }
      }, this);

      this.on('change:blob', function () {
        this.setDirty();
      }, this);
    },

/**
  @method initializeView
  @description Initializes the correct view based on the model's attributes.

*/
    initializeView: function () {
      var Forms = BMP.Forms;
      var view;
      var accept = this.get('accept') || '';

      this.removeView();
      if (this.get('readonly')) {
        view = new Forms._views.BlobReadOnlyElement({model: this});
      } else if (BMP.BlinkGap.hasCamera() && accept.indexOf('image') === 0) {
        view = new Forms._views.BGImageElement({model: this});
      } else if (this.getUserMediaPresent() && this.get('capture') === true) {
        view = new Forms._views.WebRTCImageElement({model: this});
      } else {
        view = new Forms._views.FileElement({model: this});
      }
      this.set('_view', view);
    },

/**
override because super#validate() checks "value", and we need to check "blob"
*/
    isEmpty: function () {
      return !this.attributes.blob;
    },

/**
  @method toCameraOptions
  @description Builds an object that conforms to the Cordova camera API options. values are taken from the answer space config settings.

  @returns {object} An object that conforms to the [Cordova options spec]{@link http://plugins.cordova.io/#/package/org.apache.cordova.camera}
*/
    toCameraOptions: function () {
      var options = { };
      var cameraOpts;
      // var attrs = {'imageCaptureQuality':40, 'imageCaptureScale': 60, 'cameraOptions': '{"quality":45}'};
      var attrs = BMP.BIC.attributes || {};

      if (_.isObject(cameraDestinationType)) {
        options.destinationType = cameraDestinationType.DATA_URL;
      }

      if (_.isNumber(+attrs.imageCaptureQuality)) {
        options.quality = attrs.imageCaptureQuality;
      }
      if (_.isNumber(+attrs.imageCaptureScale)) {
        options.imageScale = attrs.imageCaptureScale;
      }
      if (_.isString(attrs.cameraOptions)) {
        try {
          cameraOpts = JSON.parse(attrs.cameraOptions);
          if (!_.isObject(cameraOpts) || _.isArray(cameraOpts)) {
            cameraOpts = {};
          }
        } finally {
          cameraOpts = cameraOpts || {};
        }
        _.extend(options, cameraOpts);
      }
      return options;
    },
/**
  @method getUserMediaPresent
  @description Test to check if the device can prompt the user for access to media devices. See [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia)

  @returns {boolean} True if the function exists.
*/
    getUserMediaPresent: function () {
      return window.URL && window.URL.createObjectURL && (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
    },

/**
  @method setBlobFromString
  @description Sets the blob attribute to the passed in Base64 encoded jpeg image.

  @param {string} data A Base64 Encoded Jpeg Image. If falsey, nothing will be done.

  @returns {boolean} True if the function exists.
*/
    setBlobFromString: function (data) {
      var blob;
      if (!data) { return; }
      if (data.substring(0, 5) !== 'data:') {
        data = 'data:image/jpeg;base64,' + data;
      }
      blob = window.BMP.Blob.fromDataURI(data);
      if (blob) {
        this.set('blob', blob);
      }
    }

  });

  return FileElement;
});
