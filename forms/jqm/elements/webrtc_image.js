define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');

  // local modules

  var FileElementView = require('forms/jqm/elements/file');

  // this module

  var WebRTCImageElementView;

  WebRTCImageElementView = FileElementView.extend({
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
        this.$webrtc.on('click', WebRTCImageElementView.onButtonClick.bind(this));
      }

      this.$webrtc.button();
    },

    remove: function () {
      return FileElementView.prototype.remove.call(this);
    }
  }, {
    onButtonClick: function () {
      var that = this;
      var $popup = $('<div data-role="popup"><h1>Tap to snap</h1></div>');
      var $tracks = $('<select></select>');
      var $video = $('<video autoplay width="100%"/>');
      var $image = $('<img style="display: none;"/>');
      var $error = $('<div></div>');
      var $buttons = $('<div></div>');
      var $rotate = $('<a data-role="button" data-inline="true">Rotate</a>');
      var $cancel = $('<a data-rel="back" data-role="button" data-inline="true">Cancel</a>');
      var $recapture = $('<a class="ui-disabled" data-role="button" data-inline="true">Recapture</a>');
      var $use = $('<a class="ui-disabled" data-role="button" data-inline="true">Use</a>');
      var $canvas = $('<canvas></canvas>');
      var start;
      var stream;
      var stop;
      var capture;
      var recapture;
      var rotate;
      var use;
      var orientation = 0;

      navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

      $buttons.append($rotate, $cancel, $recapture, $use);
      $popup.append($video, $image, $buttons);

      this.$el.append($popup);

      capture = function () {
        var video = $video[0];
        var height;
        var width;
        var ctx;

        if (orientation === 0 || orientation === 180) {
          height = video.videoHeight;
          width = video.videoWidth;
        } else {
          height = video.videoWidth;
          width = video.videoHeight;
        }

        $canvas.attr('width', width);
        $canvas.attr('height', height);
        ctx = $canvas[0].getContext('2d');

        if (orientation === 0) {
          ctx.drawImage(video, 0, 0);
        } else if (orientation === 90) {
          ctx.rotate(orientation * Math.PI / 180);
          ctx.drawImage(video, 0, -width);
        } else if (orientation === 180) {
          ctx.rotate(orientation * Math.PI / 180);
          ctx.drawImage(video, -width, -height);
        } else if (orientation === 270) {
          ctx.rotate(orientation * Math.PI / 180);
          ctx.drawImage(video, -height, 0);
        }
        $image.attr('src', $canvas[0].toDataURL('image/png'));
        $video.hide();
        $image.show();
        $recapture.removeClass('ui-disabled');
        $use.removeClass('ui-disabled');
      };

      recapture = function () {
        $image.hide();
        $video.show();
      };

      use = function () {
        that.model.setBlobFromString($canvas[0].toDataURL());
        $popup.popup('close');
      };

      rotate = function () {
        var rotateCSS;
        orientation = (orientation + 90) % 360;
        rotateCSS = 'rotate(' + orientation + 'deg)';
        $video.css({
          '-webkit-transform': rotateCSS,
          transform: rotateCSS
        });
        if (orientation === 90 || orientation === 270) {
          $video.css('padding', '13% 0');
        } else {
          $video.css('padding', '0 0');
        }
      };

      start = function (track) {
        var options = {video: true, audio: false};

        if (track) {
          options.video = {
            optional: [
              {sourceId: track}
            ]
          };
        }

        navigator.getMedia(
          options,
          function (localMediaStream) {
            stream = localMediaStream;
            $video.attr('src', window.URL.createObjectURL(stream));
            $video.on('click', capture);

            $image.hide();
            $video.show();
          },
          function () {
            $error.append('Please allow access to the camera');
            $popup.prepend($error);
            $popup.popup('open');
          }
       );
      };

      stop = function () {
        if (stream.stop) {
          stream.stop();
        }
        $popup.remove();
        $popup = $tracks = $video = $image = $error = $buttons = $rotate = $cancel = $recapture = $use = $canvas = null;
      };

      $popup.popup({
        afteropen: function () {
          start();
          $rotate.on('click', rotate);
          $recapture.on('click', recapture);
          $use.on('click', use);
        },
        afterclose: function () {
          $rotate.off();
          $recapture.off();
          $use.off();
          stop();
        }
      });

      if (typeof MediaStreamTrack !== 'undefined' && typeof MediaStreamTrack.getSources !== 'undefined') {
        MediaStreamTrack.getSources(function (sources) {
          var counter = 0;
          var cameraCounter = 0;
          var source;
          var label;

          for (counter = 0; counter < sources.length; counter++) {
            source = sources[counter];
            if (source.kind === 'video') {
              cameraCounter++;
              label = source.label || 'Camera ' + cameraCounter;
              $tracks.append('<option value="' + source.id + '">' + label + '</option>');
            }
          }

          if (cameraCounter > 1) {
            $popup.prepend($tracks);
            $tracks.on('change', function () {
              stop();
              start($tracks.val());
            });
          }

          $popup.trigger('create');
          $popup.popup('open');
        });
      } else {
        $popup.trigger('create');
        $popup.popup('open');
      }
    }
  });

  return WebRTCImageElementView;
});
