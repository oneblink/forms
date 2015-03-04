define(['views/jqm/elements/choice'], function (ChoiceElementView) {
  'use strict';

  var ChoiceExpandedElementView = ChoiceElementView.extend({
    remove: function () {
      var type = this.attributes.type;
      if (type !== 'select') {
        this.$el.find('input').off('click');
      }
      return ChoiceElementView.prototype.remove.call(this);
    },
    render: function () {
      var self = this,
        $fieldset,
        $legend,
        attrs = this.model.attributes,
        type = attrs.type,
        name = attrs.name,
        options = attrs.options,
        iType = type === 'select' ? 'radio' : 'checkbox',
        iName = type === 'select' ? name + '_' + self.cid : name + '[]';

      this.$el.empty();

      $fieldset = $('<fieldset></fieldset>').attr({
        'data-role': 'controlgroup'
      });
      if (attrs.layout === 'horizontal') {
        $fieldset.attr({
          'data-type': 'horizontal'
        });
      }
      $legend = $('<legend></legend>').text(attrs.label);
      $fieldset.prepend($legend);

      if (this.model.attributes.other || this.model.attributes.canSpecifyOther) {
        options.other = 'other';
      }

      _.forEach(options, function (label, value) {
        var $label = $('<label>' + label + '</label>'),
          $input = $('<input type="' + iType + '" />');

        $input.attr({
          name: iName,
          value: value
        });
        $label.prepend($input);
        $fieldset.append($label);
      });

      this.$el.append($fieldset);
      if (type === 'select') {
        this.bindRivets();
        this.model.on('change:value', this.onSelectValueChange, this);
        $fieldset.find('input').on('click', function () {
          self.model.set('value', self.prepModelValue());
        });
      } else { // type === 'multi'
        // bind custom handler for checkboxes -> array
        // Note: jQM uses triggerHandler, so this has to be a direct event
        $fieldset.find('input').on('click', {
          view: this,
          model: this.model
        }, this.onMultiInputClick);
        // bind custom handler for checkboxes <- array
        this.model.on('change:value', this.onMultiValueChange, this);
      }
    },
    onMultiInputClick: function (event) {
      var view = event.data.view,
        model = event.data.model;
      model.set('value', view.prepModelValue());
    },
    onMultiValueChange: function () {
      var view = this,
        model = this.model,
        $inputs = view.$el.find('input[type=radio],input[type=checkbox]'),
        value = model.attributes.value,
        renderOther = false;

      if (!_.isArray(value)) {
        value = [];
      }

      $inputs.each(function (index, input) {
        var $input = $(input);
        $input.prop('checked', _.indexOf(value, $input.val()) !== -1);
      });

      if (_.contains(value, 'other') || _.difference(value, _.keys(model.attributes.options)).length > 0) {
        renderOther = true;
        view.$el.find('input[value = other]').prop('checked', true);
      }

      $inputs.checkboxradio('refresh');
      ChoiceElementView.prototype.renderOtherText.call(this, renderOther);

      if (_.difference(value, _.keys(model.attributes.options)).length > 0) {
        view.$el.find('input[type = text]').val(_.difference(value, _.keys(model.attributes.options)));
      }
    },
    onSelectValueChange: function () {
      var view = this, $values, values,
        $inputs = view.$el.find('input[type=radio],input[type=checkbox]');

      if (_.contains(_.keys(this.model.get('options')), this.model.get('value'))) {
        this.$el.find('[value = ' + this.model.get('value') + ']').prop('checked', true);
      } else {
        if (this.model.get('value') === '') {
          this.$el.find('input:checked').prop('checked', false);
        } else {
          this.$el.find('[value = other]').prop('checked', true);
        }
      }
      $inputs.checkboxradio('refresh');

      $values = this.$el.find('label[data-icon=radio-on]');
      values = $.map($values, function (val) {
        return $(val).text().trim();
      });

      ChoiceElementView.prototype.renderOtherText.call(this, _.contains(values, 'other'));

      if (!_.contains(_.keys(this.model.get('options')), this.model.get('value')) && this.model.get('value') !== 'other') {
        // Also need to fill the text box back in, in addition to selecting radio
        this.$el.find('input[type = text]').val(this.model.get('value'));
      }
    },
    fetchValue: function () {
      var attr = this.model.attributes;
      var values;
      var $inputs;

      switch (attr.type) {
        case "select":
          values = this.$el.find('input:checked').val();
          break;
        default:
          $inputs = this.$el.find('input:checked');
          values = _.map($inputs, function (input) {
            return $(input).val();
          });
          if(values.length <= 0) {
            values = "";
          }
          break;
      }

      return values;
    }
  });

  return ChoiceExpandedElementView;
});
