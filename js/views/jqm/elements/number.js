define(['views/jqm/element'], function(ElementView) {
  'use strict';

  var NumberElementView = ElementView.extend({
    render: function() {
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
//        this.model.on('change:value', this.onValueChange, this);

        $(document).one('pageinit', $.proxy(this.bindRivets, this));

      } else {
        // TODO: HTML4-fallback for buggy HTML5 browsers
        $input = $('<input type="number" />');
      }
      $input.attr({
        name: name,
        'data-rv-value': 'm.value',
        step: step
      });
      this.$el.append($input);
      this.bindRivets();
   },
   onValueChange: function() {
      var view = this,
          $inputs = view.$el.find('input');

      $inputs.slider('refresh');
   }
  });

  return NumberElementView;
});

