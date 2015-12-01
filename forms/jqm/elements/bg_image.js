define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');

  // local modules

  var FileElementView = require('forms/jqm/elements/file');
  var html = require('text!forms/jqm/templates/bg_image.html');

  // this module

  var BGCameraElementView;

  /**

    @class Forms._views.BGImageElement
    @classdesc Cordova Camera Element view. Accesses the devices camera and stortes the picture taken
                in its model.
  */
  BGCameraElementView = FileElementView.extend({

    /*
      @function renderControls

      @access public
      @description Renders the camera controls and attaches the click events
    */
    renderControls: function () {
      var PictureSourceType;

      try {
        PictureSourceType = window.PictureSourceType || navigator.camera.PictureSourceType;
      } catch (err) {
        PictureSourceType = {};
      }

      if (!this.$controls) {
        this.$controls = $('<div class="ui-input-text"></div>');
        this.$el.append(this.$controls);
        this.$controls.append(html);
        this.$el.append(this.$controls);
      }

      if (!this.$camera) {
        this.$camera = this.$controls.find('input[type="button"]').first();
        this.$camera.text('Camera');
        this.$camera.data('SourceType', PictureSourceType.CAMERA);
        this.$camera.on('click', $.proxy(BGCameraElementView.onButtonClick, this));
      }
      this.$camera.button();

      if (!this.$gallery) {
        this.$gallery = this.$controls.find('input[type="button"]').last();
        this.$gallery.text('Gallery');
        // http://cordova.apache.org/docs/en/2.5.0/cordova_camera_camera.md.html
        this.$gallery.data('SourceType', PictureSourceType.PHOTOLIBRARY);
        this.$gallery.on('click', $.proxy(BGCameraElementView.onButtonClick, this));
      }
      this.$gallery.button();
    },
    /*
      @function remove

      @access public
      @description Removes the view and associated events from the DOM
    */
    remove: function () {
      this.$el.find('input[type="button"]').off('click');
      this.model.off('change:blob', this.renderFigure, this);
      return FileElementView.prototype.remove.call(this);
    }
  }, {
    /*
      @function onButtonClick
      @static
      @access public
      @description Opens the devices camera and sets the result as the models image
    */
    onButtonClick: function (event) {
      var model = this.model;
      var $button = $(event.target);
      var options = this.model.toCameraOptions() || {};

      options.sourceType = $button.data('SourceType');

      window.navigator.camera.getPicture(model.setBlobFromString.bind(model),
        $.noop, options);
      event.preventDefault();
      return false;
    }
  });

  return BGCameraElementView;
});
