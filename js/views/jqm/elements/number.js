define(['views/jqm/element'], function (ElementView) {
  'use strict';

  var NumberElementView = ElementView.extend({
    render: function () {
      var $input,
        attrs = this.model.attributes,
        name = attrs.name,
        min = attrs.min,
        max = attrs.max,
        step = attrs.step || 1;

      this.$el.empty();
      this.renderLabel();

      if (_.isNumber(min) && _.isNumber(max)) {
        $input = $('<input type="range" />');
        $input.attr({
          min: min,
          max: max,
          'data-highlight': true
        });

        $(document).one('pageinit', $.proxy(this.bindRivets, this));

      } else {
        // TODO: HTML4-fallback for buggy HTML5 browsers
        $input = $('<input type="number" />');
      }
      $input.attr({
        name: name,
        'data-rv-value': 'm.value',
        'data-rv-step': 'm.step'
      });
      this.$el.append($input);
      this.bindRivets();
    }
  });

  return NumberElementView;
});

