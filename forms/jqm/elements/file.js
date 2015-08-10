define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');
  var _ = require('underscore');

  // local modules

  var ElementView = require('forms/jqm/element');

  // this module

  var FileElementView, humanizeBytes;

  /**
   * @param {Number} size in bytes
   * @return {String}
   */
  humanizeBytes = function (size) {
    var units = ['bytes', 'KB', 'MB', 'GB'];
    var unitIndex = 0;
    var divisor = 1;

    while (size > divisor * 1024 && unitIndex < units.length) {
      divisor *= 1024;
      unitIndex += 1;
    }

    size = Math.round(1e1 * size / divisor) / 1e1;

    return size + ' ' + units[unitIndex];
  };

  FileElementView = ElementView.extend({
    render: function () {
      this.renderLabel();
      this.renderControls();
      this.renderFigure();

      this.$el.fieldcontain();

      this.model.on('change:blob', function () {
        this.model.updateWarning();
        if (_.isEmpty(this.model.attributes.warning)) {
          this.renderWarning();
        } else {
          this.renderFigure();
        }

      }, this);
    },

    renderControls: function () {
      var attrs = this.model.attributes;
      if (!this.$file) {
        this.$file = $('<input type="file" />');
        this.$file.attr('name', attrs.name);
        this.$el.append(this.$file);
        this.$file.on('change', function (event) {
          this.onInputChange(event);
        }.bind(this));
      }

      if (attrs.accept) {
        this.$file.attr('accept', attrs.accept);
      }
      this.$file.prop('capture', !!attrs.capture);
    },

    renderFigure: function () {
      var $figure, $figcaption, blob, caption, $img;
      blob = this.model.attributes.blob;
      this.$el.children('figure').remove();
      if (!blob) {
        return;
      }
      caption = [];
      $figure = $('<figure></figure>');
      $figcaption = $('<figcaption></figcaption>').appendTo($figure);
      if (blob.type) {
        caption.push(blob.type);
      }
      if (blob.size && _.isNumber(blob.size)) {
        caption.push(humanizeBytes(blob.size));
      }
      $figcaption.html(caption.join(' &mdash; '));
      if (_.isString(blob.type) && blob.type.indexOf('image/') === 0) {
        $img = $('<img />');
        $img.attr('src', blob.toDataURI());
        if (blob.width && blob.height) {
          $img.attr({
            height: blob.height,
            width: blob.width
          });
        }
        $img.css({
          'max-height': '6em',
          'max-width': '100%'
        });
        $figure.append($img);
      }
      this.$el.append($figure);
    },

    remove: function () {
      this.$el.children('input').off('change');
      this.model.off('change:blob', this.renderFigure, this);
      this.model.off('change:progress', this.renderProgress, this);
      return ElementView.prototype.remove.call(this);
    },

    onInputChange: function (event) {
      var self = this;
      var $input = event && $(event.target);
      var fileInput = $input.data('fileInput');

      if (fileInput.size()) {
        fileInput.getBlob().then(function (blob) {
          self.model.set('blob', blob);
        });
      }
    }

  });

  return FileElementView;
});
