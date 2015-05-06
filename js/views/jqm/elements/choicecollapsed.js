define(['views/jqm/elements/choice'], function (ChoiceElementView) {
  'use strict';

  var ChoiceCollapsedElementView = ChoiceElementView.extend({
    render: function () {
      var that = this;
      var $input,
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
      } else { // type === 'multi'
        $input.attr({
          name: name + '[]',
          multiple: 'multiple',
          // TODO: detect if native menu actually works and enable it
          'data-native-menu': false
        });
      }

      if (attr.nativeMenu) {
        $input.attr({"data-role": "none"});
      }

      this.$el.append($input);

      this.renderOptions();

      this.bindRivets();
      $input.on('change', function () {
        that.model.set('value', that.prepModelValue());
      });
      this.model.on('change:value', this.onValueChange, this);
      this.onValueChange();
    },

    renderOptions: function () {
      var $otherOption;
      var attrs = this.model.attributes;
      var type = attrs.type;
      var $input = this.$el.find('select');

      $input.empty();

      if (type === 'select') {
        $input.append('<option>select one...</option>');
      } else { // type === 'multi'
        $input.append('<option>select one or more...</option>');
      }
      _.forEach(attrs.options, function (label, value) {
        var $option = $('<option value="' + value + '">' + label + '</option>');
        $input.append($option);
      });
      if (attrs.other || attrs.canSpecifyOther) {
        $otherOption = $('<option value="other">other</option>');
        $input.append($otherOption);
      }

      if (!attrs.nativeMenu && this.$el.children('.ui-select').length) {
        $input.selectmenu('refresh');
      }

      this.onValueChange();
    },

    onValueChange: function () {
      var renderOther = false;
      var attr = this.model.attributes;
      var select = this.$el.find('select');

      if (attr.type === 'select') {
        if ($.inArray(attr.value, _.keys(attr.options)) < 0) {
          if (attr.value === '') {
            select.find('option:not([value])').prop('selected', true);
          } else if(attr.other) {
            renderOther = true;
            select.val('other');
          }
        } else {
          select.val(attr.value);
        }
      } else { // type === 'multi'
        select.val(attr.value);
        if (attr.other && _.difference(attr.value, _.keys(attr.options)).length > 0) {
          renderOther = true;
          select.val(_.union(attr.value, ['other']));
        }
      }

      if (!attr.nativeMenu) {
        select.selectmenu();
        select.selectmenu('refresh');
      }

      ChoiceElementView.prototype.renderOtherText.call(this, renderOther);

      // Also need to fill the text box back in, in addition to selecting radio
      if (attr.type === 'select') {
        if ($.inArray(attr.value, _.keys(attr.options)) < 0 && attr.value !== 'other') {
          this.$el.find('input[type = text]').val(attr.value);
        }
      } else {
        if (_.difference(attr.value, _.keys(attr.options)).length > 0 && !_.contains(attr.value, 'other')) {
          this.$el.find('input[type = text]').val(_.difference(attr.value, _.keys(attr.options)));
        }
      }
    },

    fetchValue: function () {
      var attr = this.model.attributes,
        value = this.$el.find('select').val();

      if (attr.type === "select" && value === "select one..." || _.contains(value, "select one or more...")) {
        value = "";
      }
      return value;
    }
  });

  return ChoiceCollapsedElementView;
});
