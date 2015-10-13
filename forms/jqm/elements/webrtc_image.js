define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');

  // local modules
  var bmMediaHelper = require('forms/helpers/bm-media-helper');

  var FileElementView = require('forms/jqm/elements/file');
  var CameraPopupView = require('forms/jqm/popups/webcam-popup');
  var CameraPopupModel = require('forms/models/popups/webcam-popup');

  // this module

  return FileElementView.extend({
    renderControls: function () {
      var attrs = this.model.attributes;
      if (!this.$controls) {
        this.$controls = $('<div class="ui-input-text"></div>');
      }
      if (!this.$webrtc) {
        this.$webrtc = $('<a class="webrtc_image ui-icon-camera" data-role="button">Camera</a>');
        this.$webrtc.attr('name', attrs.name);
        this.$controls.append(this.$webrtc);
        this.$el.append(this.$controls);
        this.$webrtc.on('click', this.onButtonClick.bind(this));
      }

      this.$webrtc.button();
    },

    onButtonClick: function () {
      var that = this;
      var options = {video: true, audio: false};

      bmMediaHelper.getMedia(options)
        .then(function (localMediaStream) {
          var view = new CameraPopupView({
            model: new CameraPopupModel({
              stream: localMediaStream,
              isPermissionGranted: true,
              title: 'Tap to snap',
              cancelButtonText: 'Cancel'
            })
          });

          view.open().then(function (result) {
            that.model.setBlobFromString(result);
            view.close();
          }).catch(function () {
            view.close();
          });
          // reposition after opening because triggering create and
          // adding the video feed can change the layout dimensions
          view.$el.one('popupafteropen', function () {
            view.centreOnScreen();
          });
        })
        .catch(function () {
          var view = new CameraPopupView({
            model: new CameraPopupModel()
          });

          var close = function () {
            view.close();
          };

          view.open()
            .then(close)
            .catch(close);
        });
    }
  });
});
