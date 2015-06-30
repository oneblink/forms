define([
  'forms/jqm/element',
  'forms/jqm/elements/location'
  ], function (ElementView, LocationElementView) {
    'use strict';
    var LocationReadOnlyElement;

    LocationReadOnlyElement = LocationElementView.extend({
      render: function () {
        this.$el.empty();
        this.renderLabel();

        this.bindRivets();
        this.model.on('change:value', this.renderFigure, this);
      }
    });

    return LocationReadOnlyElement;
  });
