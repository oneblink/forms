define(['views/jqm/elements/date'], function (DateView) {
  'use strict';

  var DatePickadateElement = DateView.extend({
    renderDate: function () {
      var $input,
        attr = this.model.attributes,
        name = attr.name,
        self = this;

      //pre-HTML5 fallback
      $input = $('<input type="text" />');
      $input.attr({
        name: name + '_date',
        'data-rv-value': 'm._date'
      });
      this.$el.append($input);
      BMP.Forms.once('formReady', function () {
        $input.pickadate(self.prepareDateSettings());
      });
      return this;
    },
    renderTime: function () {
      var $input,
        attr = this.model.attributes,
        name = attr.name,
        self = this;

      //pre-HTML5 fallback
      $input = $('<input type="text" />');
      $input.attr({
        name: name + '_time',
        'data-rv-value': 'm._time'
      });
      this.$el.append($input);
      BMP.Forms.once('formReady', function () {
        $input.pickatime(self.prepareTimeSettings());
      });
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

      this.bindRivets();
      return this;
    },
    prepareDateSettings: function () {
      var attr = this.model.attributes,
        settings = {};

      settings.format = this.mapDateFormats[attr.dateFormat] || "yyyy-mm-dd";

      if (attr.dateAllowFrom) {
        switch (attr.dateAllowFrom) {
        case 'now':
          settings.min = new Date();
          break;
        case 'now_plus':
          settings.min = parseInt(attr.dateAllowFromNowPlus, 10);
          break;
        case 'date':
          settings.min = new Date(attr.dateAllowFromDate);
          break;
        }
      }

      if (attr.dateAllowTo) {
        switch (attr.dateAllowTo) {
        case 'now':
          settings.max = new Date();
          break;
        case 'now_plus':
          settings.max = parseInt(attr.dateAllowToNowPlus, 10);
          break;
        case 'date':
          settings.max = new Date(attr.dateAllowToDate);
          break;
        }
      }
      return settings;
    },
    prepareTimeSettings: function () {
      var attr = this.model.attributes,
        settings = {};

      settings.format = this.mapTimeFormats[attr.timeFormat] || "HH:i";
      if (attr.minuteStep) {
        settings.interval = parseInt(attr.minuteStep, 10);
      }
      return settings;
    },
    mapDateFormats: {
      'yyyy_mm_dd': 'yyyy-mm-dd',
      'mm_dd_yyyy': 'mm-dd-yyyy',
      'dd_mm_yyyy2': 'dd/mm/yyyy',
      'yyyy_mm_dd2': 'yyyy/mm/dd',
      'mm_dd_yyyy2': 'mm/dd/yyyy',
      'dd_mm_yyyy': 'dd-mm-yyyy'
    },
    mapTimeFormats: {
      'hh:mm': 'HH:i',
      'hh_mm_ss': 'HH:i', //HH:MM:SS
      'h_mm_ss': 'hh:i A',//HH:MM:SS AM/PM %r
      'h_mm': 'hh:i A' //HH:MM AM/PM
    }
  });

  return DatePickadateElement;
});


