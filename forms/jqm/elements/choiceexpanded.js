define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');
  var _ = require('underscore');

  // local modules

  var ChoiceElementView = require('forms/jqm/elements/choice');

  // this module

  return ChoiceElementView.extend({
    remove: function () {
      var type = this.attributes.type;
      if (type !== 'select') {
        this.$el.find('input').off('click');
      }
      this.$fieldset = null;

      return ChoiceElementView.prototype.remove.call(this);
    },

    renderLabel: function () {
      if (!this.$label) {
        this.$label = $('<legend></legend>');
      }

      if (!$.contains(this.$fieldset[0], this.$label[0])) {
        this.$fieldset.prepend(this.$label);
      }

      this.$label.html(this.model.attributes.label || '');
    },

    render: function () {
      var attrs = this.model.attributes;
      var type = attrs.type;

      this.$el.empty();

      this.$fieldset = $('<fieldset></fieldset>').attr({
        'data-role': 'controlgroup'
      });
      if (attrs.layout === 'horizontal') {
        this.$fieldset.attr({
          'data-type': 'horizontal'
        });
      }

      this.$el.append(this.$fieldset);
      this.renderLabel();

      this._renderOptions();

      if (type === 'select') {
        this.listenTo(this.model, 'change:value', this.onSelectValueChange);
        this.onSelectValueChange();
      } else { // type === 'multi'
        // bind custom handler for checkboxes <- array
        this.listenTo(this.model, 'change:value', this.onMultiValueChange);
        this.onMultiValueChange();
      }

      this.$fieldset.controlgroup();
      this.$el.fieldcontain();
    },

    _renderOptions: function () {
      var self = this;
      var $fieldset = this.$fieldset;
      var attrs = this.model.attributes;
      var type = attrs.type;
      var options = attrs.options;
      var name = attrs.name;
      var iType = type === 'select' ? 'radio' : 'checkbox';
      var iName = type === 'select' ? name + '_' + self.cid : name + '[]';
      var $controls = $fieldset.children('.ui-controlgroup-controls');

      $fieldset.children('label').remove();
      $controls = $fieldset;

      _.forEach(options, function (label, value) {
        var $label = $('<label>' + label + '</label>');
        var $input = $('<input type="' + iType + '" />');

        $input.attr({
          name: iName,
          value: value
        });
        $label.prepend($input);
        $controls.append($label);
      });

      if (this.model.attributes.other || this.model.attributes.canSpecifyOther) {
        $controls.append('<label><input name="' + iName + '" type="' + iType + '" value="other" />other</label>');
      }

      if (type === 'select') {
        $controls.find('input').on('click', function () {
          self.model.set('value', self.prepModelValue());
        });
      } else { // type === 'multi'
        // bind custom handler for checkboxes -> array
        // Note: jQM uses triggerHandler, so this has to be a direct event
        $controls.find('input').on('click', {
          view: this,
          model: this.model
        }, this.onMultiInputClick);
      }
    },

    renderOptions: function () {
      var attrs = this.model.attributes;
      var type = attrs.type;

      this.render();
      this.$el.find('label > input').checkboxradio();
      this.$fieldset.controlgroup();
      this.$el.fieldcontain();
      if (type === 'select') {
        this.onSelectValueChange();
      } else { // type === 'multi'
        // bind custom handler for checkboxes <- array
        this.onMultiValueChange();
      }
    },

    onMultiInputClick: function (event) {
      var view = event.data.view;
      var model = event.data.model;
      model.set('value', view.prepModelValue());
    },

    onMultiValueChange: function () {
      var view = this;
      var model = this.model;
      var $inputs = view.$el.find('input[type=radio],input[type=checkbox]');
      var value = model.attributes.value;
      var renderOther = false;

      if (!_.isArray(value)) {
        value = [];
      }

      $inputs.each(function (index, input) {
        var $input = $(input);
        $input.prop('checked', _.indexOf(value, $input.val()) !== -1);
      });

      if (model.attributes.other && (_.contains(value, 'other') || _.difference(value, _.keys(model.attributes.options)).length > 0)) {
        renderOther = true;
        view.$el.find('input[value = other]').prop('checked', true);
      }

      $inputs.checkboxradio().checkboxradio('refresh');

      this.renderOtherText(renderOther);

      if (_.difference(value, _.keys(model.attributes.options)).length > 0) {
        view.$el.find('input[type = text]').val(_.difference(value, _.keys(model.attributes.options)));
      }
      this.model.isValid();
    },

    onSelectValueChange: function () {
      var $values, values;
      var view = this;
      var $inputs = view.$el.find('input[type=radio],input[type=checkbox]');

      if (_.contains(_.keys(this.model.attributes.options), this.model.attributes.value)) {
        this.$el.find('[value = "' + this.model.attributes.value + '"]').prop('checked', true);
      } else {
        if (this.model.attributes.value === '') {
          this.$el.find('input:checked').prop('checked', false);
        } else {
          this.$el.find('[value = other]').prop('checked', true);
        }
      }

      $inputs.checkboxradio().checkboxradio('refresh');

      $values = this.$el.find('label[data-icon=radio-on]');
      values = $.map($values, function (val) {
        return $(val).text().trim();
      });

      this.renderOtherText(_.contains(values, 'other'));

      if (!_.contains(_.keys(this.model.attributes.options), this.model.attributes.value) && this.model.attributes.value !== 'other') {
        // Also need to fill the text box back in, in addition to selecting radio
        this.$el.find('input[type = text]').val(this.model.attributes.value);
      }
      this.model.isValid();
    },

    fetchValue: function () {
      var attr = this.model.attributes;
      var values;
      var $inputs;

      switch (attr.type) {
        case 'select':
          values = this.$el.find('input:checked').val();
          break;
        default: // multi
          $inputs = this.$el.find('input:checked');
          values = _.map($inputs, function (input) {
            return $(input).val();
          });
          if (values.length <= 0) {
            values = '';
          }
          break;
      }

      return values;
    }
  });
});
