define(['models/element'], function (Element) {
  'use strict';

  var FileElement = Element.extend({
    defaults: _.extend({}, Element.prototype.defaults, {
      height: 0,
      width: 0,
      progress: null,
      uuid: '',
      xhr: null
    }),

    initialize: function () {
      Element.prototype.initialize.call(this);

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

      this.on('change:xhr', this.onChangeXHR, this);
    },

    initializeView: function () {
      var Forms = BMP.Forms,
        view,
        accept = this.attributes.accept;

      this.removeView();
      if (this.attributes.readonly) {
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

    toCameraOptions: function () {
      var options = {},
      cameraOpts,
      // attrs = {'imageCaptureQuality':40, 'imageCaptureScale': 60, 'cameraOptions': '{"quality":45}'};
      attrs = BMP.BIC.attributes || {};

      if (_.isNumber(attrs.imageCaptureQuality)) {
        options.quality = attrs.imageCaptureQuality;
      }
      if (_.isNumber(attrs.imageCaptureScale)) {
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

    getUserMediaPresent: function () {
      return window.URL && window.URL.createObjectURL && (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
    },

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
