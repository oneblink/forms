define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');

  // local modules

  var HTMLElementView = require('forms/jqm/elements/html');

  // this module

  return HTMLElementView.extend({
    createElement: function () {
      var attrs = this.model.attributes;
      // TODO: HTML4-fallback for buggy HTML5 browsers
      var input$ = $('<input type="number" />');
      input$.attr('name', attrs.name);
      ['min', 'max', 'step'].forEach(function (prop) {
        if ($.isNumeric(attrs[prop])) {
          input$.attr(prop, attrs[prop]);
        }
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
