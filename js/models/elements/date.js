define(['models/element'], function(Element) {
  'use strict';

  var DateElement = Element.extend({
    initialize: function() {
      Element.prototype.initialize.call(this);
      this.on('change:_date change:_time', this.prepareValue);
      this.on('change:value', this.prepareDateTime);
    },
    /**
     * update value to match _date and/or _time
     */
    prepareValue: function() {
      var type = this.attributes.type;
      if (type === 'date') {
        this.set('value', this.attributes._date);
      } else if (type === 'time') {
        this.set('value', this.attributes._time);
      } else { // type === 'datetime'
        // TODO: somehow stop this from firing twice
        this.set('value', this.attributes._date + 'T' + this.attributes._time);
      }
    },
    /**
     * update _date and/or _time to match value
     */
    prepareDateTime: function() {
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
    }
  });

  return DateElement;
});



