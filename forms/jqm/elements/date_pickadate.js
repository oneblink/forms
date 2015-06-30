define(['forms/jqm/elements/date', 'picker.date', 'picker.time'], function (DateView) {
  'use strict';

  var DatePickadateElement = DateView.extend({
    renderParent: function () {
      var $body = $('body'),
        $pickerHolder;

      $pickerHolder = $("<div></div>");
      $pickerHolder.attr({
        'class': 'ui-body-c'
      });
      $body.append($pickerHolder);
      DatePickadateElement.pickadateParent = $pickerHolder;
    },

    renderDate: function () {
      var $input,
        attr = this.model.attributes,
        name = attr.name;

      //pre-HTML5 fallback
      $input = $('<input type="text" />');
      $input.attr({
        name: name + '_date',
        'rv-value': 'm:_date'
      });
      this.$el.append($input);
      $input.textinput();

      return this;
    },

    renderTime: function () {
      var $input,
        attr = this.model.attributes,
        name = attr.name;

      //pre-HTML5 fallback
      $input = $('<input type="text" />');
      $input.attr({
        name: name + '_time',
        'rv-value': 'm:_time'
      });
      this.$el.append($input);
      $input.textinput();

      return this;
    },

    render: function () {
      var type = this.model.get('type'),
        $label;

      if (!DatePickadateElement.pickadateParent) {
        this.renderParent();
      }

      this.$el.empty();
      this.renderLabel();

      if (type !== 'time') {
        this.renderDate();
      }

      /* FORMS-108: keep date and time fields in line */
      if (type === 'datetime') {
        $label = $(document.createElement('label'));
        $label.attr({
          'class': 'ui-input-text'
        });
        this.$el.append($label);
      }

      if (type !== 'date') {
        this.renderTime();
      }

      this.$el.fieldcontain();
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
        default:
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
        default:
        }
      }
      settings.container = DatePickadateElement.pickadateParent;
      return settings;
    },

    prepareTimeSettings: function () {
      var attr = this.model.attributes,
        settings = {};

      settings.format = this.mapTimeFormats[attr.timeFormat] || "HH:i";
      if (attr.minuteStep) {
        settings.interval = parseInt(attr.minuteStep, 10);
      }
      settings.container = DatePickadateElement.pickadateParent;
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
    },

    onAttached: function () {
      var type = this.model.attributes.type;
      var name = this.model.attributes.name;
      var date$, time$;
      if (type !== 'time') {
        date$ = this.$el.find('input[name=' + name + '_date]');
        date$.pickadate(this.prepareDateSettings());
      }
      if (type !== 'date') {
        time$ = this.$el.find('input[name=' + name + '_time]');
        time$.pickatime(this.prepareTimeSettings());
      }
    }
  }, {
    // static
    pickadateParent: null
  });

  return DatePickadateElement;
});
