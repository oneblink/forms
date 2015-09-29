define(function (require) {
  'use strict';

  var _ = require('underscore');

  var PopupModel = require('forms/models/popup');
  var bmMediaHelper = require('forms/helpers/bm-media-helper');

  var videoOnly = function (device) {
    return device.kind === 'video';
  };

  var toRadian = Math.PI / 180;

  return PopupModel.extend({
    defaults: function () {
      return _.assign(PopupModel.prototype.defaults.call(this), {
        orientation: 0,
        rotateBy: 90,

        isPermissionGranted: false,

        title: 'Access Needed',

        stream: null,
        videoSources: [],
        destinationMimeType: 'image/png',

        cancelButtonText: 'Close',

        confirmButtonText: 'Use'
      });
    },

    initialize: function (attrs) {
      bmMediaHelper.getDevices().then(function (devices) {
        this.set('videoSources', _.filter(devices, videoOnly));
      }.bind(this));
    },

    /**
     * Changes the input device, typically from the front to the rear camera
     *
     * @param  {string} id - The device ID to switch to.
     */
    changeInputDevice: function (id) {
      var options = {
        video: {
          optional: [
            {sourceId: id}
          ]
        },
        audio: false
      };

      bmMediaHelper.getMedia(options)
        .then(function (mediaStream) {
          this.stopStream();
          this.set('stream', mediaStream);
        }.bind(this))
        .catch(function (err) {
          /* eslint-disable no-unused-expressions */
          window.console && window.console.warn('There was a problem getting user media: ', err);
          /* eslint-enable no-unused-expressions */
        });
    },

    /**
     * Is the webcam feed in portrait mode?
     * @return {Boolean}
     */
    isPortrait: function () {
      var orientation = this.get('orientation');
      return orientation === 0 || orientation % 180 === 0;
    },

    /**
     * add _rotateBy_ to _orientation_ and normalize
     *
     * @param {Number} [rotateBy=attributes.rotateBy] Amount to rotate to image by. Defaults to attributes.rotateBy
     * @return {Number} The new orientation value
     */
    rotate: function (rotateBy) {
      var orientation;

      rotateBy = rotateBy || this.get('rotateBy');
      orientation = (this.get('orientation') + rotateBy);

      this.set('orientation', orientation);

      return orientation;
    },

    /**
     * Clamps the orientation between 0 and 360 (excluding 360)
     * @return {Number}
     */
    getClampedOrientation: function () {
      return this.get('orientation') % 360;
    },

    /**
     * Converts the orientation of the image from degrees to a radian
     * @return {[type]} [description]
     */
    getOrientationAsRadian: function () {
      return this.getClampedOrientation() * toRadian;
    },

    /**
     * Converts a stream to a Blob URL
     * @return {string} - A Blob URL
     */
    streamToURL: function () {
      var stream = this.get('stream');
      if (!stream) {
        return '';
      }

      return window.URL.createObjectURL(stream);
    },

    /**
     * Stops the webcam stream(s)
     */
    stopStream: function () {
      var stream = this.get('stream');
      if (!stream) {
        return;
      }

      _.invoke(stream.getTracks(), 'stop');
      this.unset('stream');
    }
  });
});
