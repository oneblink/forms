define(['views/jqm/element'], function (ElementView) {
  'use strict';

  var NumberElementView = ElementView.extend({
    render: function () {
      var $input,
        attrs = this.model.attributes,
        name = attrs.name,
        min = attrs.min,
        max = attrs.max;

      this.$el.empty();
      this.renderLabel();

      if (_.isNumber(min) && _.isNumber(max)) {
        $input = $('<input type="range" />');
        $input.attr({
          'data-highlight': true
        });

        $(document).one('pageinit', $.proxy(this.bindRivets, this));

      } else {
        // TODO: HTML4-fallback for buggy HTML5 browsers
        $input = $('<input type="number" />');
      }
      $input.attr({
        name: name,
        'data-rv-min': 'm.min',
        'data-rv-max': 'm.max',
        'data-rv-value': 'm.value',
        'data-rv-step': 'm.step'
      });
      this.$el.append($input);
      this.bindRivets();
    }
  });

  return NumberElementView;
});

