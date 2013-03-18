define(['models/element'], function(Element) {
  'use strict';

  var NumberElement = Element.extend({
    initialize: function() {
      Element.prototype.initialize.call(this);
    },
    set: function(key, val, options) {
      var attrs;
      if (key === null) {
        return this;
      }
      if (_.isObject(key)) {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }
      options = options || {};

      // tamper with 'value' if present
      if (attrs.value !== 'undefined' && attrs.value !== null) {
        // TODO: round to 'step' if present with 'min' and/or 'max'
        attrs.value = Number(attrs.value);
      }
      return Element.prototype.set.call(this, attrs, options);
    },

    validators: {
      minValue: function(value, minValue) {
        return value < minValue;
      },
      maxValue: function(value, maxValue) {
        return value > maxValue;
      },
      maxDecimals: function(value, maxDecimals) {
        var regexp = new RegExp('^(?:\\d*\\.\\d{1,' + maxDecimals + '}|\\d+)$');
        return regexp.test(value);
      },
      minDecimals: function(value, minDecimals) {
        var regexp = new RegExp('^(?:\\d*\\.\\d{' + minDecimals + ',}|\\d+)$');
        return regexp.test(value);
      }
    },
    validate: function(attrs) {
      var errors = {};
      if (attrs === undefined) {
        attrs = this.attributes;
      }
      if (attrs.value) {
        if (this.validators.maxValue(attrs.value, attrs.max)) {
          errors.value = errors.value || [];
          errors.value.push({code: 'max value error'});
        }
        if (this.validators.minValue(attrs.value, attrs.min)) {
          errors.value = errors.value || [];
          errors.value.push({code: 'min value error'});
        }
        if (!this.validators.maxDecimals(attrs.value,
            attrs.maxDecimals)) {
          errors.value = errors.value || [];
          errors.value.push({code: 'maximum decimal places error'});
        }
        if (attrs.minDecimals && !this.validators.minDecimals(attrs.value,
            attrs.minDecimals)) {
          errors.value = errors.value || [];
          errors.value.push({code: 'minimum decimal places error'});
        }
      }
      return _.isEmpty(errors) ? undefined : errors;
    }
  });

  return NumberElement;
});
