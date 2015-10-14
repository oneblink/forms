define(function (require) {
  'use strict';

  // foreign modules

  var _ = require('underscore');

  // local modules

  var ElementView = require('forms/jqm/element');

  // this module

  return ElementView.extend({
    render: function () {
      var self = this;
      var attrs = self.model.attributes;
      var options = attrs.options;
      var $label;
      var display = [];
      var values;

      this.$el.empty();
      this.renderLabel();
      setTimeout(function () {
        values = attrs.value;
        _.forEach(options, function (label, value) {
          if (_.contains(values, value)) {
            display.push(label);
          }
        });
        $label = '<label class="ui-input-text">' + display + '</label>';
        self.$el.append($label);
      }, 100);
    }
  });
});
