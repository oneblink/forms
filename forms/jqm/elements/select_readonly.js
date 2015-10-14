define(function (require) {
  'use strict';

  var ElementView = require('forms/jqm/element');

  var SelectReadOnlyElementView = ElementView.extend({
    render: function () {
      var self = this;
      var attrs = self.model.attributes;
      var options = attrs.options;
      var $label;
      var value;

      this.$el.empty();
      this.renderLabel();
      setTimeout(function () {
        value = options[attrs.value];
        $label = '<label class="ui-input-text">' + value + '</label>';
        self.$el.append($label);
      }, 100);
    }
  });

  return SelectReadOnlyElementView;
});
