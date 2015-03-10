define(['models/element'], function (Element) {
  'use strict';

  var FileElement = Element.extend({
    defaults: _.extend({}, Element.prototype.defaults, {
      height: 0,
      width: 0,
      uuid: '',
      xhr: null
    }),

    initialize: function () {
      Element.prototype.initialize.call(this);

      this.on('change:value', function () {
        var value, blob;
        value = this.get('value');

        if (value) {
          blob = BMP.Blob.fromDataURI(value);
          this.set('blob', blob);
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
        var form = this.get('form');
        if (!form.get('isPopulating')) {
          this.uploadBlob();
        }
      }, this);
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

    uploadBlob: function (callback) {
      var me = this;
      var Forms = BMP.Forms;
      var blob = this.get('blob');
      var uuid = Forms.uuid.v4();

      var xhrHandler = function (xhr, currentBlob) {
        // we need to double-check that this xhr is for this blob
        if (currentBlob.blob === uuid) {
          // hooray, a match, we can stop listening now
          Forms.blobUploader.removeListener('xhr', xhrHandler);
          // store the XHR for use by the View
          me.set('xhr', xhr);
        }
      };

      if (typeof navigator === 'undefined' || !navigator.onLine) {
        return; // offline, do nothing
      }

      if (!blob || this.get('uuid')) {
        return; // no work to be done, do nothing
      }

      if (!blob.base64) {
        return; // only upload binary blobs for now, leave text blobs alone
      }

      Forms.blobUploader.on('xhr', xhrHandler);

      Forms.blobUploader.saveBlob({
        answerSpace: Forms.current.get('answerSpace'),
        tuple: Forms.current.get('uuid'),
        blob: uuid,
        file: blob.base64,
        mime: blob.type
      }, function (err, res) {
        var backupValues = {
          height: me.get('height'),
          width: me.get('width'),
          uuid: me.get('uuid')
        };

        me.set('xhr', null);

        if (err) {
          /*eslint-disable no-console*/ // error needs to be able to be debugged
          if (typeof console !== 'undefined') {
            console.error('Forms.blobUploader unable to saveBlob()');
            console.error(err);
          }
          /*eslint-enable no-console*/
          if (_.isFunction(callback)) {
            callback(err);
          }
          return;
        }

        try {
          me.set('uuid', res.blob);
          me.set('value', 'data:' + res.mime + ';base64,' + res.file);
          if (res.width && res.height) {
            me.set({
              height: res.height,
              width: res.width
            });
          }

          if (_.isFunction(callback)) {
            callback(null, res);
          }
        } catch (tryErr) {
          me.set(backupValues);
          /*eslint-disable no-console*/ // error needs to be able to be debugged
          if (typeof console !== 'undefined') {
            console.error('Forms.blobUploader unable use server response');
            console.error(tryErr);
            callback(tryErr);
          }
          /*eslint-enable no-console*/
        }

      });
    }
  });

  return FileElement;
});
