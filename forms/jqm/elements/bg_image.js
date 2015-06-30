define([
  'forms/jqm/elements/file',
  'text!forms/jqm/templates/bg_image.html'
], function (FileElementView, html) {
  'use strict';
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
      var $new, $existing, $div, PictureSourceType;

      try {
        PictureSourceType = window.PictureSourceType || navigator.camera.PictureSourceType;
      } catch (ignore) {
        PictureSourceType = PictureSourceType || {};
      }

      $div = $('<div class="ui-input-text"></div>');
      $div.append(html);

      $new = $div.find('button').first();
      $new.text('Camera');
      $new.data('SourceType', PictureSourceType.CAMERA);

      $existing = $div.find('button').last();
      $existing.text('Gallery');
      $existing.data('SourceType', PictureSourceType.PHOTO_LIBRARY);

      this.$el.append($div);

      $new.on('click', $.proxy(BGCameraElementView.onButtonClick, this));
      $existing.on('click', $.proxy(BGCameraElementView.onButtonClick, this));
      $new.button();
      $existing.button();
    },
    /*
      @function remove

      @access public
      @description Removes the view and associated events from the DOM
    */
    remove: function () {
      this.$el.find('button').off('click');
      this.model.off('change:blob', this.renderFigure, this);
      return FileElementView.prototype.remove.call(this);

      }
    },
    /*
      @function onButtonClick
      @static
      @access public
      @description Opens the devices camera and sets the result as the models image
    */
    {
    onButtonClick: function (event) {
      var model = this.model,
        $button = $(event.target),
        options = this.model.toCameraOptions() || {};

      options.sourceType = $button.data('SourceType');

      window.navigator.camera.getPicture(model.setBlobFromString.bind(model),
        $.noop, options);
      event.preventDefault();
      return false;
    }
  });

  return BGCameraElementView;
});
