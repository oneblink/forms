define(function (require) {
  'use strict';

  // local modules

  var LocationElementView = require('forms/jqm/elements/location');

  return LocationElementView.extend({
    render: function () {
      this.$el.empty();
      this.renderLabel();

      this.model.on('change:value', this.renderFigure, this);
    }
  });

});
