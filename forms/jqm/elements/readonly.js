define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');
  var _ = require('underscore');

  // local modules

  var ElementView = require('forms/jqm/element');

  // this module

  var ReadOnlyElementView = ElementView.extend({

    // extending super-super's modelEvents
    modelEvents: _.extend({}, ElementView.prototype.modelEvents, {
      'change:value': 'onValueChange'
    }),

    render: function () {
      this.$el.empty();
      this.renderLabel();

      if (!this.$output) {
        this.$output = $(document.createElement('label'));
        this.$output.attr({
          'class': 'ui-input-text'
        });
        this.$el.append(this.$output);
      }

      this.onValueChange();
    },

    onValueChange: function () {
      var value;
      if (!this.$output) {
        return;
      }
      value = this.model.attributes.value;
      if (value || value === 0) {
        this.$output.text(value);
      } else {
        this.$output.text('');
      }
    }
  });

  return ReadOnlyElementView;
});
