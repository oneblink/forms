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

    while (size > (divisor * 1024) && unitIndex < units.length) {
      divisor *= 1024;
      unitIndex += 1;
    }

    size = Math.round(1e1 * size / divisor) / 1e1;

    return size + ' ' + units[unitIndex];
  };

  FileElementView = ElementView.extend({
    render: function () {
      var self = this,
        $input,
        name = this.model.get('name');

      this.$el.empty();
      this.renderLabel();

      $input = $('<input type="file" />');
      $input.attr({
        name: name,
        'rv-accept': 'm:accept'
      });
      $input.prop('capture', !!this.model.get('capture'));
      this.$el.append($input);

      this.bindRivets();
      $input.on('change', function (event) {
        // if (BMP.Forms.supports.blob) {
          self.onInputChange(event);
        // } else {
        //   //$input.val('');
        //   event.preventDefault();
        //   self.model.updateWarning();
        // }
      });
      this.model.on('change:blob', function() {
        this.model.updateWarning();
                    console.log('change Blob............'+this.model.attributes.name);
                    // console.log(this.model.attributes.warning);
        if(_.isEmpty(this.model.attributes.warning)){
          this.renderFigure();
        } else {
          this.renderWarning();
        }

      }, this);
    },
    renderFigure: function () {
            console.log('renderFigure............'+this.model.attributes.name);
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
