define(['views/jqm/element'], function (ElementView) {
  'use strict';

  var NumberElementView = ElementView.extend({
    render: function () {
      var $input,
        attrs = this.model.attributes,
        name = attrs.name;

      this.$el.empty();
      this.renderLabel();

      // TODO: HTML4-fallback for buggy HTML5 browsers
      $input = $('<input type="number" />');

      $input.attr({
        name: name,
        'rv-min': 'm:min',
        'rv-max': 'm:max',
        'rv-value': 'm:value',
        'rv-step': 'm:step',
        'rv-placeholder': 'm:placeholderText'
      });

      this.$el.append($input);
      this.bindRivets();
    },
    remove: function () {
      return ElementView.prototype.remove.call(this);
    }
  });

  return NumberElementView;
});
