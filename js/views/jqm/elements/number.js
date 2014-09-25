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
        'rv-min': 'm:min',
        'rv-max': 'm:max',
        'rv-value': 'm:value',
        'rv-step': 'm:step',
        'rv-placeholder': 'm:placeholderText'
      });
      $input.on('keyup', function () {
        if (this.hasOwnProperty('valueAsNumber')) {
          if (isNaN(this.valueAsNumber)) {
            $input.prop("value", "");
            $(this).trigger('change');
          }
        } else if (typeof this.value === 'string' && !this.value.length) {
          $input.prop("value", "");
          $(this).trigger('change');
        }
      });
      this.$el.append($input);
      this.bindRivets();
    },
    remove: function () {
      this.$el.children('input').off('keyup');
      return ElementView.prototype.remove.call(this);
    }
  });

  return NumberElementView;
});
