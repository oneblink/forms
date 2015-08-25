define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');
  var _ = require('underscore');
  var moment = require('moment');

  // local modules

  var ElementView = require('forms/jqm/element');

  // this module

  var DateElementView = ElementView.extend({
    events: {
      'change [data-onchange="onDateVChange"]': 'onDateVChange',
      'change [data-onchange="onTimeVChange"]': 'onTimeVChange'
    },

    // extending super's modelEvents
    modelEvents: _.extend({}, ElementView.prototype.modelEvents, {
      'change:_date': 'onDateMChange',
      'change:_time': 'onDateMChange'
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
      var type = this.model.get('type');

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
      var type = this.model.get('type');

      if (type !== 'time') {
        this.onDateMChange();
      }
      if (type !== 'date') {
        this.onTimeMChange();
      }
    },

    onDateVChange: function (event) {
      var dateFormat = this.model.mapDateFormats[this.model.attributes.dateFormat] || 'YYYY-MM-DD';
      var value = $(event.target).val();

      try {
        this.model.isInvalidFormat(dateFormat, value);
      } catch (err) {
        window.console.log(err);
        return;
      }
      if (value) {
        value = moment(value, dateFormat).format('YYYY-MM-DD');
      }
      this.model.set('_date', value);
    },

    onTimeVChange: function (event) {
      this.model.set('_time', $(event.target).val());
    },

    onDateMChange: function () {
      var name = this.model.attributes.name;
      var value = this.model.get('_date');
      var input = this.$el.find('input[name="' + name + '_date"]');
      var picker = input.pickadate('picker');
      var pickerValue;
      var dateFormat = this.model.mapDateFormats[this.model.get('dateFormat')] || 'YYYY-MM-DD';

      try {
        this.model.isInvalidFormat('YYYY-MM-DD', value);
      } catch (err) {
        window.console.log(err);
        return;
      }

      if (picker) {
        pickerValue = picker.get('select', 'yyyy-mm-dd');
      }

      if (value !== pickerValue) {
        if (picker) {
          if (!value || value === '0000-00-00') {
            picker.set('clear');
          } else {
            picker.set('select', value, {format: 'yyyy-mm-dd'});
          }
        } else {
          if (this.model.attributes.nativeDatePicker) { //for native picker
            input.val(value);
          } else {
            if (value) { // for default value when picker not initialised
              input.val(moment(Date.parse(value)).format(dateFormat));
            }
          }
        }
      }
    },

    onTimeMChange: function () {
      var name = this.model.attributes.name;
      this.$el.find('input[name="' + name + '_time"]').val(this.model.get('_time'));
    }

  });

  return DateElementView;
});
