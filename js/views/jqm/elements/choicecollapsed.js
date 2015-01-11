define(['views/jqm/elements/choice'], function (ChoiceElementView) {
  'use strict';

  var ChoiceCollapsedElementView = ChoiceElementView.extend({
    render: function () {
      var that = this;
      var $input, $otherOption,
        attr = this.model.attributes,
        type = this.model.attributes.type,
        name = this.model.attributes.name;

      this.$el.empty();
      this.renderLabel();

      $input = $('<select></select>');

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
      $input.on('change', function () {
        that.model.set('value', $input[0].value);
      });
      this.model.on('change:value', this.onValueChange, this);
    },
    onValueChange: function () {
      var that = this;
      var renderOther;
      var attr = this.model.attributes;
      var otherbox;
      if (!attr.nativeMenu) {
        this.$el.find('select').selectmenu();
        this.$el.find('select').selectmenu('refresh');
      }

      if (attr.type === 'select') {
        if ($.inArray(this.model.attributes.value, _.keys(this.model.attributes.options)) < 0) {
          renderOther = true;
        } else {
          renderOther = false;
        }
      } else { // type === 'multi'
        if (_.difference(this.model.attributes.value, _.keys(this.model.attributes.options)).length > 0) {
          renderOther = true;
        } else {
          renderOther = false;
        }
      }
      otherbox = ChoiceElementView.prototype.renderOtherText.call(this, renderOther);
      if (otherbox) {
        otherbox.on('change', function () {
          that.model.set('value', otherbox[0].value);
        });
      }
    }
  });

  return ChoiceCollapsedElementView;
});
