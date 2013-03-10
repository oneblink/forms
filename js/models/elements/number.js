define(['models/element'], function(Element) {
  'use strict';

  var NumberElement = Element.extend({
    initialize: function() {
      Element.prototype.initialize.call(this);
    },
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
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

    validators:{
      minValue: function(value,minValue){
         return value < minValue;   
      },
      maxValue: function(value,maxValue){
          return value > maxValue;
      },
      maxDecimalPlaces: function(value,maxDecimalPlaces){
           return (new RegExp('^(?:\\d*\\.\\d{1,'+maxDecimalPlaces+'}|\\d+)$')).test(value);
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
          errors.value.push({code: "max value error"});
        }
        if (this.validators.minValue(attrs.value, attrs.min)) {
          errors.value = errors.value || [];
          errors.value.push({code: "min value error"});
        }
        if (!this.validators.maxDecimalPlaces(attrs.value, attrs.maxDecimalPlaces)) {
          errors.value = errors.value || [];
          errors.value.push({code: "maxinum decimal places error"});
        }
      }
      if (!_.isEmpty(errors)) {
        return errors;
      }
    }
  });

  return NumberElement;
});


