define(['underscore', 'backbone', 'models/element'],
      function(_, Backbone, Element) {
  'use strict';

  var DateElement = Element.extend({
    initialize: function() {
      Element.prototype.initialize.call(this);
    },
    /**
     * override get to handle date formats
     */
    get: function(key) {
      var val = Backbone.Model.prototype.get.call(this, key),
          date;

      if (key !== 'value') {
        return val;
      }
      // create complete ISO8601 string as per our legacy API
      // TODO: fix this for legacy browsers lacking ISO8601 support
      date = new Date(val);
      if (date.valueOf() === date.valueOf()) {
        val = date.toISOString().replace(/\.\d\d\d/, '');
      }
      return val;
    },
    /**
     * override set to handle date formats
     */
    set: function(key, val, opts) {
      var attrs,
          date;

      if (key == null) return this;
      if (typeof key === 'object') {
        attrs = key;
        opts = val;
      } else {
        (attrs = {})[key] = val;
      }
      opts || (opts = {});
      if ('value' in attrs && attrs.value) {
        // check for valid date value
        // TODO: fix this for legacy browsers lacking ISO8601 support
        date = new Date(attrs.value);
        if (date.valueOf() !== date.valueOf()) {
          return this;
        }
        // crop time and zone from date
        attrs.value = date.toISOString().replace(/T.*$/, '');
      }
      return Backbone.Model.prototype.set.call(this, attrs, opts);
    }
  });

  return DateElement;
});



