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
      var input$ = $('<textarea></textarea>');
      input$.attr({
        name: name,
        'rv-value': 'm:value',
        'rv-input': 'm:value',
        'rv-placeholder': 'm:placeholderText'
      });
      return input$;
    }
  });
});
