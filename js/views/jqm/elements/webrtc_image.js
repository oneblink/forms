define([
  'views/jqm/element',
  'views/jqm/elements/file'
  ], function (ElementView, FileElementView) {
    'use strict';
    var WebRTCImageElementView;

    WebRTCImageElementView = FileElementView.extend({
      render: function () {
        var $div, $button;

        this.$el.empty();
        this.renderLabel();

        $button = $('<a class="webrtc_image ui-icon-camera" data-role="button">Camera</a>');

        $div = $('<div class="ui-input-text"></div>');
        $div.append($button);

        this.$el.append($div);

        $button.on('click', $.proxy(WebRTCImageElementView.onButtonClick, this));

        this.bindRivets();
        this.model.on('change:blob', this.renderFigure, this);
      },
      remove: function () {
        return ElementView.prototype.remove.call(this);
      }
    }, {
      onButtonClick: function () {
        var that = this;
        var $popup = $('<div data-role="popup"></div>');
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
        var stop;
        var stream;
        var capture;
        var recapture;
        var rotate;
        var use;
        var orientation = 0;

        navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

        $buttons.append($rotate, $cancel, $recapture, $use);
        $popup.append($video, $image, $buttons);

        this.$el.append($popup);
        this.$el.trigger('create');

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
          var blob = window.BMP.Blob.fromDataURI($canvas[0].toDataURL());
          if (blob) {
            that.model.set('blob', blob);
          }
          $popup.popup('close');
        };

        rotate = function () {
          var rotateCSS;
          orientation = (orientation + 90) % 360;
          rotateCSS = 'rotate(' + orientation + 'deg)';
          $video.css({
            '-webkit-transform': rotateCSS,
            'transform': rotateCSS
          });
          if (orientation === 90 || orientation === 270) {
            $video.css('padding', '13% 0');
          } else {
            $video.css('padding', '0 0');
          }
        };

        start = function () {
          navigator.getMedia(
            {video: true, audio: false},
            function (localMediaStream) {
              stream = localMediaStream;
              $video.attr('src', window.URL.createObjectURL(stream));
              $video.on('click', capture);

              $image.hide();
              $video.show();

              $popup.popup('open');
            },
            function () {
              $error.append('Please allow access to the camera');
              $popup.prepend($error);
              $popup.popup('open');
            }
          );
        };

        $popup.popup({
          afteropen: function() {
            $rotate.on('click', rotate);
            $recapture.on('click', recapture);
            $use.on('click', use);
          },
          afterclose: function() {
            $rotate.off();
            $recapture.off();
            $use.off();
            if (stream.stop) {
              stream.stop();
            }
          }
        });

        start();
      }
    });

    return WebRTCImageElementView;
  });
