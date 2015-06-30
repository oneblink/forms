define(function (require) {
  'use strict';

  var HTMLElementView = require('views/jqm/elements/html');

  return HTMLElementView.extend({
    createElement: function () {
      var name = this.model.get('name');
      var input$ = $('<input type="text" />');
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
