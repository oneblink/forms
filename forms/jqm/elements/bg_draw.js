define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');

  // local modules

  var FileElementView = require('forms/jqm/elements/file');

  // this module

  var BGDrawElementView;

  BGDrawElementView = FileElementView.extend({
    renderControls: function () {
      var attrs = this.model.attributes;
      if (!this.$controls) {
        this.$controls = $('<div class="ui-input-text"></div>');
        this.$el.append(this.$controls);
      }
      if (!this.$draw) {
        this.$draw = $('<input type="button" value="Signature">');
        this.$draw.attr('name', attrs.name);
        this.$controls.append(this.$draw);
        this.$draw.on('click', BGDrawElementView.onButtonClick.bind(this));
      }
      this.$draw.button();
    },

    remove: function () {
      this.$el.find('input').off('click');
      this.model.off('change:blob', this.renderFigure, this);
      return FileElementView.prototype.remove.call(this);
    }
  }, {
    onButtonClick: function (event) {
      var model = this.model;
      var $button = $(event.target);
      var $window = $(window);
      var offset = $button.offset();
      var width = $button.width();
      var defaults = {
        canvasButtonOriginX: 320,
        canvasButtonOriginY: 320,
        canvasWidth: 600,
        canvasHeight: 300,
        destinationType: window.BGTouchDraw.DestinationType.DATA_URL,
        encodingType: window.BGTouchDraw.EncodingType.JPEG
      };
      var options = this.model.toCameraOptions() || {};

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
