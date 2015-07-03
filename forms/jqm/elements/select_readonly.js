define(['forms/jqm/element'], function (ElementView) {
  'use strict';

  var SelectReadOnlyElementView = ElementView.extend({
    render: function () {
      var self = this,
      attrs = self.model.attributes,
      options = attrs.options,
      $label,
      value;

      this.$el.empty();
      this.renderLabel();
      setTimeout(function () {
        value = options[attrs.value];
        $label = '<label class="ui-input-text">' + value + '</label>';
        self.$el.append($label);
      }, 100);

      this.bindRivets();
    }
  });

  return SelectReadOnlyElementView;
});
