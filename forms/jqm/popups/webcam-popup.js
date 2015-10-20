define(function (require) {
  'use strict';

  var _ = require('underscore');
  var $ = require('jquery');

  var PopupView = require('forms/jqm/popup');
  var template = require('text!forms/jqm/templates/bm-web-rtc-popup.html');
  var events = require('forms/events');

  return PopupView.extend({
    template: _.template(template),

    events: function () {
      return {
        'click [data-onclick=on-rotate-click]': 'onRotateClick',
        'click [data-onclick=on-recapture-click]': 'onRecaptureClick',
        'click [data-onclick=on-confirm-click]': 'onConfirmClick',
        'click [data-onclick=on-cancel-click]': 'onCancelClick',
        'click [data-onclick=on-capture-click]': 'onCaptureClick',
        'change [data-onchange=change-input]': 'onInputChange'
      };
    },

    modelEvents: {
      'change:orientation': 'rotateVideo',
      'change:stream': 'attachStreamToVideo',
      'change:videoSources': 'updateVideoSources'
    },

    initialize: function () {
      events.proxyBindEntityEvents(this, this.model, this.modelEvents);
      PopupView.prototype.initialize.apply(this, arguments);
    },

    /**
     * Gets the blob URL for the models stream and hooks it up to the
     * video element.
     */
    attachStreamToVideo: function () {
      var url = this.model.streamToURL();
      if (!url) {
        return;
      }

      this.$video.attr('src', url);
      this.$video.one('loadmetadata', function () {
        this.$video[0].play();
      }.bind(this));
    },

    onCaptureClick: function () {
      this.resizeCanvasToVideo();
      this.$image.attr('src', this.videoToDataURL());

      this.$video.hide();
      this.$image.show();

      this.$recapture.button('enable');
      this.$use.button('enable');
      this.$rotate.button('disable');
    },

    onConfirmClick: function () {
      this._resolve(this.$canvas[0].toDataURL(this.model.attributes.destinationMimeType));
    },

    onCancelClick: function () {
      this._reject(new Error('cancel'));
    },

    onRotateClick: function () {
      this.model.rotate();
    },

    onRecaptureClick: function () {
      this.$image.hide();
      this.$video.show();

      this.$recapture.button('disable');
      this.$use.button('disable');
      this.$rotate.button('enable');
    },

    onInputChange: function (event) {
      this.model.changeInputDevice(event.target.value);
    },

    render: function () {
      this.$el.append(this.template(this.model.attributes));
      this.delegateEvents();
      this.cacheElements();
      this.attachStreamToVideo();

      return this;
    },

    /**
     * stops the stream and removes the popup.
     */
    remove: function () {
      this.model.stopStream();
      PopupView.prototype.remove.apply(this, arguments);
    },

    /**
     * Applies the models orientation value to the video element
     */
    rotateVideo: function () {
      var orientation = this.model.attributes.orientation;
      var rotateCSS = 'rotate(' + orientation + 'deg)';
      var paddingY = this.model.isPortrait() ? '0' : '13%';
      var paddingX = '0';

      this.$video.css({
        '-webkit-transform': rotateCSS,
        transform: rotateCSS,
        padding: paddingY + ' ' + paddingX
      });
    },

    /**
     * resizes the canvas used to render still images to the size
     * of the video
     */
    resizeCanvasToVideo: function () {
      var video = this.$video[0];
      var height = video.videoWidth;
      var width = video.videoHeight;

      if (this.model.isPortrait()) {
        height = video.videoHeight;
        width = video.videoWidth;
      }

      this.$canvas.attr({
        'width': width,
        'height': height
      });
    },

    updateVideoSources: function (model, value) {
      var options;

      if (value.length < 2) {
        return this.$deviceSelectorContainer.hide();
      }
      options = _.reduce(value, function (html, option, index) {
        html += '<option value="' + option.id + '"' + (!index++ ? 'selected' : '') + '>' + (option.label || (option.facing === 'environment' ? 'Back Camera' : 'Front Camera')) + '</option>';
        return html;
      }, '');

      this.$deviceSelector
          .empty()
          .html(options);

      if (this.$deviceSelector.data('selectmenu') === undefined) {
        this.$deviceSelector.selectmenu();
      }

      this.$deviceSelector.selectmenu('refresh');

      this.$deviceSelectorContainer.show();
    },

    /**
     * Draws the video still to a canvas and then converts to a blob URL
     *  (You may need to make sure  the video and canvas are the same
     *  size or results may be cropped)
     * @return {string} - a Blob url for the still image in whatever
     * format model.destinationMimeType is.
     */
    videoToDataURL: function () {
      var video = this.$video[0];
      var ctx = this.$canvas[0].getContext('2d');
      var width = this.$canvas.attr('width');
      var height = this.$canvas.attr('height');

      switch (this.model.getClampedOrientation()) {
        case 90:
          ctx.rotate(this.model.getOrientationAsRadian());
          ctx.drawImage(video, 0, -width);
          break;
        case 180:
          ctx.rotate(this.model.getOrientationAsRadian());
          ctx.drawImage(video, -width, -height);
          break;
        case 270:
          ctx.rotate(this.model.getOrientationAsRadian());
          ctx.drawImage(video, -height, 0);
          break;
        default:
          ctx.drawImage(video, 0, 0);
      }

      return this.$canvas[0].toDataURL(this.model.attributes.destinationMimeType);
    },

    cacheElements: function () {
      this.$video = $('.bm-webrtc__bm-video', this.$el);
      this.$image = $('.bm-webrtc__bm-videostill', this.$el);
      this.$canvas = $('.bm-webrtc__bm-canvas_hidden', this.$el);
      this.$recapture = $('[data-onclick="on-recapture-click"]', this.$el);
      this.$use = $('[data-onclick="on-confirm-click"]', this.$el);
      this.$rotate = $('[data-onclick="on-rotate-click"]', this.$el);
      this.$deviceSelector = $('select', this.$el);
      this.$deviceSelectorContainer = $('.bm-webrtc__bm-container-sourcelist', this.$el);
    }
  });
});
