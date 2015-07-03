define([
  'forms/models/element',
  'moment'
], function (Element, moment) {
  'use strict';

  var DateElement = Element.extend({
    initialize: function () {
      var attr = this.attributes,
        dateFormat,
        timeFormat,
        dateValue = null,
        timeValue = null;

      /* THIS CODE NEEDS TO BE REMOVED WITH PLATFORM 2.26+ */
      if (attr.picker) {
        switch(attr.picker) {
          case "shown":
            attr.readonly = true;
            break;
          case "hidden":
            attr.hidden = true;
            break;
          default:
            break;
        }
      }

      Element.prototype.initialize.call(this);
      this.on('change:_date change:_time', this.prepareValue);
      this.on('change:value', this.prepareDateTime);
      if (attr.defaultValue) {
        switch (attr.type) {
        case 'date':
          dateFormat = this.mapDateFormats[attr.dateFormat] || "YYYY-MM-DD";
          if (attr.defaultValue === 'now') {
            dateValue = moment();
          } else if (attr.defaultValue === 'now_plus') {
            dateValue = moment().add(parseInt(attr.defaultDateNowPlus, 10), 'd');
          } else if (attr.defaultValue === 'date') {
            dateValue = moment(Date.parse(attr.defaultDateDate));
          }
          if (dateValue !== null) {
            this.set('value', dateValue.format(dateFormat));
          }
          break;
        case 'time':
          timeFormat = this.mapTimeFormats[attr.timeFormat] || "HH:mm";
          if (attr.defaultValue === 'now') {
            timeValue = moment();
          } else if (attr.defaultValue === 'now_plus') {
            timeValue = moment().add(parseInt(attr.nowPlusAmount, 10), 'm');
          }
          if (timeValue !== null) {
            this.set('value', timeValue.format(timeFormat));
          }
          break;
        case 'datetime':
          dateFormat = this.mapDateFormats[attr.dateFormat] || "YYYY-MM-DD";
          timeFormat = this.mapTimeFormats[attr.timeFormat] || "HH:mm";
          if (attr.defaultValue === 'now') {
            timeValue = dateValue = moment();
          } else if (attr.defaultValue === 'now_plus') {
            timeValue = dateValue = moment();
            timeValue.add('m', parseInt(attr.nowPlusAmount, 10));
          }
          if (dateValue !== null) {
            this.attributes._date = dateValue.format(dateFormat);
            this.trigger('change:_date');
          }
          if (timeValue !== null) {
            this.attributes._time = timeValue.format(timeFormat);
            this.trigger('change:_time');
          }
          break;
        default:
        }
      }
    },
    initializeView: function () {
      var Forms = BMP.Forms,
        view,
        View,
        attr = this.attributes;

      this.removeView();
      if (attr.readonly) {
        View = Forms._views.ReadOnlyElement;
        view = new View({model: this});
      } else if (parseInt(attr.nativeDatetimePicker, 10) === 1
          || parseInt(attr.nativeDatePicker, 10) === 1
          || parseInt(attr.nativeTimePicker, 10) === 1) {
        view = new Forms._views.DateElement({model: this});
      } else {
        view = new Forms._views.DatePickadateElement({model: this});
      }
      this.set('_view', view);
    },
    /**
     * update value to match _date and/or _time
     */
    prepareValue: function () {
      var type = this.attributes.type,
        date,
        time;
      if (type === 'date') {
        this.set('value', this.attributes._date);
      } else if (type === 'time') {
        this.set('value', this.attributes._time);
      } else { // type === 'datetime'
        date = this.attributes._date;
        time = this.attributes._time;
        // TODO: somehow stop this from firing twice
        if (!date) {
          date = "0000-00-00";
        }
        if (!time) {
          time = "00:00";
        }
        this.set('value', date + 'T' + time);
      }
    },
    /**
     * update _date and/or _time to match value
     */
    prepareDateTime: function () {
      var type = this.attributes.type,
        value = this.attributes.value,
        time,
        date,
        parts;

      if (type === 'date') {
        this.set('_date', value);
      } else if (type === 'time') {
        this.set('_time', value);
      } else { // type === 'datetime'
        time = this.attributes._time;
        date = this.attributes._date;
        parts = value.split('T');
        if (parts[0]) {
          this.set('_date', parts[0], {silent: true});
        }
        if (parts[1]) {
          this.set('_time', parts[1], {silent: true});
        }
        if (time !== this.attributes._time) {
          this.trigger('change:_time');
        }
        if (date !== this.attributes._date) {
          this.trigger('change:_date');
        }
      }
    },
    /**
     * @return {Date} a JavaScript Date object.
     */
    toDate: function () {
      var type = this.attributes.type,
        iso;

      if (type === 'date') {
        return new Date(this.attributes._date);
      }
      if (type === 'time') {
        iso = (new Date()).toISOString();
        return iso.replace(/T[0-9.:Z+\-]*$/, 'T' + this.attributes._time);
      }
      // type === 'datetime'
      return new Date(this.attributes._date + 'T' + this.attributes._time);
    },
    mapDateFormats: {
      'yyyy_mm_dd': 'YYYY-MM-DD',
      'mm_dd_yyyy': 'MM-DD-YYYY',
      'dd_mm_yyyy2': 'DD/MM/YYYY',
      'yyyy_mm_dd2': 'YYYY/MM/DD',
      'mm_dd_yyyy2': 'MM/DD/YYYY',
      'dd_mm_yyyy': 'DD-MM-YYYY'
    },
    mapTimeFormats: {
      'hh:mm': 'HH:mm',
      'hh_mm_ss': 'HH:mm', //HH:MM:SS
      'h_mm_ss': 'hh:mm A',//HH:MM:SS AM/PM %r
      'h_mm': 'hh:mm A' //HH:MM AM/PM
    }
  });

  return DateElement;
});
