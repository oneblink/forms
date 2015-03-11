define(['views/jqm/element'], function (ElementView) {
  'use strict';
  var FileElementView, humanizeBytes;

  /**
   * @param {Number} size in bytes
   * @return {String}
   */
  humanizeBytes = function (size) {
    var units = ['bytes', 'KB', 'MB', 'GB'],
      unitIndex = 0,
      divisor = 1;

    while (size > divisor * 1024 && unitIndex < units.length) {
      divisor *= 1024;
      unitIndex += 1;
    }

    size = Math.round(1e1 * size / divisor) / 1e1;

    return size + ' ' + units[unitIndex];
  };

  FileElementView = ElementView.extend({
    render: function () {
      this.$el.empty();
      this.renderLabel();

      this.renderControls();

      this.bindRivets();
      this.model.on('change:blob', function () {
        this.model.updateWarning();
        if (_.isEmpty(this.model.attributes.warning)) {
          this.renderWarning();
        } else {
          this.renderFigure();
        }

      }, this);

      this.model.on('change:progress', this.renderProgress, this);
    },

    renderControls: function () {
      var $input = $('<input type="file" />');
      var name = this.model.get('name');

      $input.attr({
        name: name,
        'rv-accept': 'm:accept'
      });
      $input.prop('capture', !!this.model.get('capture'));
      this.$el.append($input);

      $input.on('change', function (event) {
        this.onInputChange(event);
      }.bind(this));
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

    renderProgress: function () {
      var progress = this.model.get('progress');
      var figure$ = this.$el.children('figure').first();
      var progress$ = figure$.children('progress');
      var attrs;

      if (!progress) {
        if (progress$.length) {
          progress$.remove();
        }
        return;
      }

      attrs = { value: progress.loaded };
      if (!progress$.length) {
        progress$ = $('<progress></progress>').appendTo(figure$);
      }
      if (!progress.lengthComputable) {
        progress$.removeAttr('max');
      } else {
        attrs.max = progress.total;
      }
      progress$.attr(attrs);
    },

    remove: function () {
      this.$el.children('input').off('change');
      this.model.off('change:blob', this.renderFigure, this);
      this.model.off('change:progress', this.renderProgress, this);
      return ElementView.prototype.remove.call(this);
    },

    onInputChange: function (event) {
      var self = this,
        $input = event && $(event.target),
        fileInput = $input.data('fileInput');

      if (fileInput.size()) {
        fileInput.getBlob().then(function (blob) {
          self.model.set('blob', blob);
        });
      }
    }

  });

  return FileElementView;
});
