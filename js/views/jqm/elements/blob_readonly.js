define([
  'views/jqm/element',
  'views/jqm/elements/file'
  ], function (ElementView, FileElementView) {
    'use strict';
    var BlobReadOnlyElement;

    BlobReadOnlyElement = FileElementView.extend({
      render: function () {
        this.$el.empty();
        this.renderLabel();

        this.bindRivets();
        this.model.on('change:blob', this.renderFigure, this);
      }
    });

    return BlobReadOnlyElement;
  });
