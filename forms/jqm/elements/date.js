define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');
  var _ = require('underscore');
  var moment = require('moment');

  // variables

  var DEFAULT_FORMAT = 'YYYY-MM-DD';
  var PICKER_FORMAT = 'yyyy-mm-dd';

  // local modules

  var ElementView = require('forms/jqm/element');

  // this module

  return ElementView.extend({
    events: {
      'change [data-onchange="onDateVChange"]': 'onDateVChange',
      'change [data-onchange="onTimeVChange"]': 'onTimeVChange'
    },

    // extending super's modelEvents
    modelEvents: _.extend({}, ElementView.prototype.modelEvents, {
      'change:_date': 'onDateMChange',
      'change:_time': 'onTimeMChange'
    }),

    renderDate: function () {
      var $input;
      var name = this.model.attributes.name;

      // TODO: implement pre-HTML5 fallback
      $input = $('<input type="date" />');
      $input.attr({
        name: name + '_date',
        'data-onchange': 'onDateVChange'
      });
      this.$el.append($input);

      return this;
    },

    renderTime: function () {
      var $input;
      var name = this.model.attributes.name;

      // TODO: implement pre-HTML5 fallback
      $input = $('<input type="time" />');
      $input.attr({
        name: name + '_time',
        'data-onchange': 'onTimeVChange'
      });
      this.$el.append($input);

      return this;
    },

    render: function () {
      var type = this.model.attributes.type;

      this.$el.empty();
      this.renderLabel();

      if (type !== 'time') {
        this.renderDate();
      }
      if (type !== 'date') {
        this.renderTime();
      }

      this.$el.fieldcontain();
      return this;
    },

    onAttached: function () {
      var type = this.model.attributes.type;

      if (type !== 'time') {
        this.onDateMChange();
      }
      if (type !== 'date') {
        this.onTimeMChange();
      }
    },

    onDateVChange: function (event) {
      var dateFormat = this.model.mapDateFormats[this.model.attributes.dateFormat] || DEFAULT_FORMAT;
      var value = $(event.target).val();

      try {
        this.model.isInvalidFormat(dateFormat, value);
      } catch (err) {
        window.console.log(err);
        return;
      }
      if (value) {
        value = moment(value, dateFormat).format(DEFAULT_FORMAT);
      }
      this.model.set('_date', value);
    },

    onTimeVChange: function (event) {
      this.model.set('_time', $(event.target).val());
    },

    onDateMChange: function () {
      var name = this.model.attributes.name;
      var value = this.model.attributes._date;
      var input = this.$el.find('input[name="' + name + '_date"]');
      var picker = input.pickadate('picker');
      var pickerValue;
      var dateFormat = this.model.mapDateFormats[this.model.attributes.dateFormat] || DEFAULT_FORMAT;

      try {
        this.model.isInvalidFormat(DEFAULT_FORMAT, value);
      } catch (err) {
        window.console.log(err);
        return;
      }

      if (picker) {
        pickerValue = picker.get('select', PICKER_FORMAT);
      }

      if (value !== pickerValue) {
        if (picker) {
          if (!value || value === '0000-00-00') {
            picker.set('clear');
          } else {
            picker.set('select', value, {format: PICKER_FORMAT});
          }
        } else {
          if (this.model.attributes.nativeDatePicker) { // for native picker
            input.val(value);
          } else {
            if (value) { // for default value when picker not initialised
              value = moment(Date.parse(value)).format(dateFormat);
            }
            input.val(value);
          }
        }
      }
    },

    onTimeMChange: function () {
      var name = this.model.attributes.name;
      this.$el.find('input[name="' + name + '_time"]').val(this.model.attributes._time);
    }
  });
});
