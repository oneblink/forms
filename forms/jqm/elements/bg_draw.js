define([
  'forms/jqm/elements/file'
], function (FileElementView) {
  'use strict';
  var BGDrawElementView;

  BGDrawElementView = FileElementView.extend({
    renderControls: function () {
      var $button, $div;

      $button = $('<button />');
      $button.text('Signature');

      $div = $('<div class="ui-input-text"></div>');
      $div.append($button);

      this.$el.append($div);

      $button.on('click', $.proxy(BGDrawElementView.onButtonClick, this));
      $button.button();
    },

    remove: function () {
      this.$el.children('button').off('click');
      this.model.off('change:blob', this.renderFigure, this);
      return FileElementView.prototype.remove.call(this);
    }
  }, {
    onButtonClick: function (event) {
      var model = this.model,
        $button = $(event.target),
        $window = $(window),
        offset = $button.offset(),
        width = $button.width(),
        defaults = {
          canvasButtonOriginX: 320,
          canvasButtonOriginY: 320,
          canvasWidth: 600,
          canvasHeight: 300,
          destinationType: window.BGTouchDraw.DestinationType.DATA_URL,
          encodingType: window.BGTouchDraw.EncodingType.JPEG
        },
        options = this.model.toCameraOptions() || {};

      options.canvasButtonOriginX = offset.left + Math.floor(width / 2);
      options.canvasButtonOriginY = offset.top - $window.scrollTop();

      options = $.extend({}, defaults, options);
      window.navigator.bgtouchdraw.getDrawing(model.setBlobFromString.bind(model),
        $.noop, options);
      event.preventDefault();
      return false;
    }
  });

  return BGDrawElementView;
});
