define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');

  // local modules

  var NumberElementView = require('forms/jqm/elements/number');

  // this module

  var SliderElementView = NumberElementView.extend({
    renderSlider: function () {
      var slider$,
        $input;
      slider$ = this.$el.children('div.ui-slider');
      if (slider$.length) {
        // we are dealing with jQueryMobile-enhanced DOM structure
        $input = slider$.children('input').val(this.model.get('value'));
        $input.slider('refresh');
      }
    },
    render: function () {
      var $input,
        self = this,
        attrs = this.model.attributes,
        name = attrs.name;

      this.$el.empty();
      this.renderLabel();

      $input = $('<input type="range" />');
      $input.attr({
        'data-highlight': true
      });

      $input.attr({
        name: name,
        'rv-min': 'm:min',
        'rv-max': 'm:max',
        'value': this.model.get('value'),
        'rv-step': 'm:step',
        'rv-placeholder': 'm:placeholderText'
      });

      this.$el.append($input);

      this.$el.on("change", function() {
        var val, modelVal;
        $input = $(this).find("input");
        val = $input.val();
        modelVal = self.model.get("value");

        if (modelVal !== val) {
          self.model.set("value", $input.val());
        }
      });
      this.model.on('change:value', this.renderSlider, this);
      this.$el.fieldcontain();
      $input.slider();

    },
    remove: function () {
      this.$el.off('change');
      this.model.off('change:value');
      return NumberElementView.prototype.remove.call(this);
    }
  });

  return SliderElementView;
});
