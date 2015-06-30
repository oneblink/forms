define(['forms/jqm/element'], function (ElementView) {
  'use strict';

  var MultiReadOnlyElementView = ElementView.extend({
    render: function () {
      var self = this,
      attrs = self.model.attributes,
      options = attrs.options,
      $label,
      display = [],
      values;

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
      this.bindRivets();
    }
  });

  return MultiReadOnlyElementView;
});
