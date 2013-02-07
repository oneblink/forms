define(['views/jqm/elements/choice'], function(ChoiceElementView) {
  'use strict';

  var ChoiceExpandedElementView = ChoiceElementView.extend({
    // TODO: fix bindings, the only thing that works is initial display :S
    render: function() {
      var self = this,
          $fieldset,
          $legend,
          attrs = this.model.attributes,
          type = attrs.type,
          name = attrs.name,
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

      _.forEach(attrs.options, function(label, value) {
        var $label = $('<label>' + label + '</label>'),
            $input = $('<input type="' + iType + '" />');

        $input.attr({
          name: iName,
          'data-rv-checked': 'm.value',
          value: value
        });
        $label.prepend($input);
        $fieldset.append($label);
      });

      this.$el.append($fieldset);
      if (type === 'select') {
        this.bindRivets();
        this.model.on('change:value', this.onSelectValueChange, this);
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
    onMultiInputClick: function(event) {
      var view = event.data.view,
          model = event.data.model,
          $inputs = view.$el.find('input:checked'),
          val;

      val = _.map($inputs, function(input) {
        return $(input).val();
      });
      model.set('value', val);
    },
    onMultiValueChange: function(event) {
      var view = this,
          model = this.model,
          $inputs = view.$el.find('input[type=radio],input[type=checkbox]'),
          value = model.attributes.value;

      if (!_.isArray(value)) {
        value = [];
      }
      $inputs.each(function(index, input) {
        var $input = $(input);
        $input.prop('checked', _.indexOf(value, $input.val()) !== -1);
      });

      $inputs.checkboxradio('refresh');
    },
    onSelectValueChange: function(event) {
      var view = this,
          $inputs = view.$el.find('input[type=radio],input[type=checkbox]');

      $inputs.checkboxradio('refresh');
    }
  });

  return ChoiceExpandedElementView;
});


