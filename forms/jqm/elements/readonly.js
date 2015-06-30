define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');

  // local modules

  var ElementView = require('forms/jqm/element');

  // this module

  var ReadOnlyElementView = ElementView.extend({
    render: function () {
      var $label;

      this.$el.empty();
      this.renderLabel();

      $label = $(document.createElement('label'));
      $label.attr({
        'rv-text': 'm:value',
        'class': 'ui-input-text'
      });

      this.$el.append($label);
      this.bindRivets();
    }
  });

  return ReadOnlyElementView;
});
