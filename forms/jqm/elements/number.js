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
    }
  });
});
