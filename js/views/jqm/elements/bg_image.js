define([
  'views/jqm/elements/file',
  'text!views/jqm/templates/bg_image.html'
], function (FileElementView, html) {
  'use strict';
  var BGCameraElementView;

  BGCameraElementView = FileElementView.extend({
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
    },

    remove: function () {
      this.$el.find('button').off('click');
      this.model.off('change:blob', this.renderFigure, this);
      return FileElementView.prototype.remove.call(this);
    }
  }, {
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
