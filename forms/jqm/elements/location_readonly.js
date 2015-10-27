define(function (require) {
  'use strict';

  // local modules

  var LocationElementView = require('forms/jqm/elements/location');

  return LocationElementView.extend({
    render: function () {
      this.$el.empty();
      this.renderLabel();

      this.listenTo(this.model, 'change:value', this.renderFigure);
    }
  });
});
