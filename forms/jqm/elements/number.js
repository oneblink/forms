define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');

  // local modules

  var HTMLElementView = require('forms/jqm/elements/html');

  // this module

  return HTMLElementView.extend({
    createElement: function () {
      var name = this.model.get('name');
      // TODO: HTML4-fallback for buggy HTML5 browsers
      var input$ = $('<input type="number" />');
      input$.attr({
        name: name,
        'rv-min': 'm:min',
        'rv-max': 'm:max',
        'rv-step': 'm:step'
      });
      return input$;
    },

    onKeyDown: function (event) {
      var prev = this.model.attributes.value;
      var next = $(event.target).val();
      if ($.isNumeric(next)) {
        next = parseFloat(next, 10);
      }
      if (next !== prev) {
        this.model.attributes.value = next;
        this.model.trigger('change:value');
      }
    }
  });
});
