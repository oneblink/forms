define([
  'views/jqm/element',
  'views/jqm/elements/file',
  'text!views/jqm/templates/bg_image.html'
], function (ElementView, FileElementView, html) {
  'use strict';
  var BGCameraElementView;

  BGCameraElementView = FileElementView.extend({
    render: function () {
      var $new, $existing, $div;

      this.$el.empty();
      this.renderLabel();

      $div = $('<div class="ui-input-text"></div>');
      $div.append(html);

      $new = $div.find('button').first();
      $new.text('Camera');
      $new.data('SourceType', window.PictureSourceType.CAMERA);

      $existing = $div.find('button').last();
      $existing.text('Gallery');
      $existing.data('SourceType', window.PictureSourceType.PHOTO_LIBRARY);

      this.$el.append($div);

      $new.on('click', $.proxy(BGCameraElementView.onButtonClick, this));
      $existing.on('click', $.proxy(BGCameraElementView.onButtonClick, this));

      this.bindRivets();
      this.model.on('change:blob', this.renderFigure, this);
    },
    remove: function () {
      this.$el.find('button').off('click');
      this.model.off('change:blob', this.renderFigure, this);
      return ElementView.prototype.remove.call(this);
    }
  }, {
    onButtonClick: function (event) {
      var model = this.model,
        $button = $(event.target),
        options = {};

      options.sourceType = $button.data('SourceType');
      window.navigator.camera.getPicture(function (data) {
        var blob = window.BMP.Blob.fromDataURI(data);
        if (blob) {
          model.set('blob', blob);
        }
      }, $.noop, options);
      event.preventDefault();
      return false;
    }
  });

  return BGCameraElementView;
});

