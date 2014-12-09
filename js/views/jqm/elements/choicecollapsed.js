define(['views/jqm/elements/choice'], function (ChoiceElementView) {
  'use strict';

  var ChoiceCollapsedElementView = ChoiceElementView.extend({
    render: function () {
      var $input, $otherOption,
        attr = this.model.attributes,
        type = this.model.attributes.type,
        name = this.model.attributes.name;

      this.$el.empty();
      this.renderLabel();

      $input = $('<select></select>');
      $input.attr({
        'rv-value': 'm:value'
      });

      if (type === 'select') {
        $input.attr({
          name: name
        });
        $input.append('<option>select one...</option>');
      } else { // type === 'multi'
        $input.attr({
          name: name + '[]',
          multiple: 'multiple',
          // TODO: detect if native menu actually works and enable it
          'data-native-menu': false
        });
        $input.append('<option>select one or more...</option>');
      }

      if (attr.nativeMenu) {
        $input.attr({"data-role": "none"});
      }

      _.forEach(this.model.attributes.options, function (label, value) {
        var $option = $('<option value="' + value + '">' + label + '</option>');
        $input.append($option);
      });
      if (this.model.attributes.other) {
        $otherOption = $('<option value="other">other</option>');
        $input.append($otherOption);
      }
      this.$el.append($input);

      this.bindRivets();
      this.model.on('change:value', this.onValueChange, this);
    },
    onValueChange: function () {
      var $mapValues;
      var attr = this.model.attributes;
      if (!attr.nativeMenu) {
        this.$el.find('select').selectmenu();
        this.$el.find('select').selectmenu('refresh');
      }

      if (attr.type === 'select') {
        $mapValues = [this.model.attributes.value];
      } else { // type === 'multi'
        $mapValues = this.model.attributes.value;
      }

      ChoiceElementView.prototype.renderOtherText.call(this, $mapValues);
    }
  });

  return ChoiceCollapsedElementView;
});
