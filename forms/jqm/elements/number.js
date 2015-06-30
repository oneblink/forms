define(function (require) {
  'use strict';

  var HTMLElementView = require('forms/jqm/elements/html');

  return HTMLElementView.extend({
    createElement: function () {
      var name = this.model.get('name');
      // TODO: HTML4-fallback for buggy HTML5 browsers
      var input$ = $('<input type="number" />');
      input$.attr({
        name: name,
        'rv-min': 'm:min',
        'rv-max': 'm:max',
        'rv-value': 'm:value',
        'rv-input': 'm:value',
        'rv-step': 'm:step',
        'rv-placeholder': 'm:placeholderText'
      });
      return input$;
    }
  });
});
