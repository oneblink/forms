define(['views/jqm/elements/choice'], function(ChoiceElementView) {
  'use strict';

  var ChoiceCollapsedElementView = ChoiceElementView.extend({
    render: function() {
      var $input,$otherOption,
          type = this.model.attributes.type,
          name = this.model.attributes.name;

      this.$el.empty();
      this.renderLabel();

      $input = $('<select></select>');
      $input.attr({
        'data-rv-value': 'm.value'
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

      _.forEach(this.model.attributes.options, function(label, value) {
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
    onValueChange: function() {
      this.$el.find('select').selectmenu('refresh');
      var $values = this.$el.find('.ui-btn-text').text().split(','),
          $mapValues = $.map($values, function(val) {
        return val.trim();
      });
      ChoiceElementView.prototype.renderOtherText.call(this, $mapValues);
    }
  });

  return ChoiceCollapsedElementView;
});


