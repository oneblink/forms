/* eslint-disable accessor-pairs */ // we're using the "set" keyword for method
define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');
  var _ = require('underscore');

  // local modules

  var Element = require('forms/models/element');
  var utils = require('forms/lib/utils');

  // this module

  var NumberElement;

  function toValid (value) {
    if (value === '') {
      return value;
    }
    if ($.isNumeric(value)) {
      value = parseFloat(value, 10);
    }
    if (isNaN(value)) {
      value = '';
    }
    return value;
  }

  NumberElement = Element.extend({
    initialize: function () {
      var self = this;
      var attrs = self.attributes;
      var schemaMap = {
        maxDecimalPlaces: 'maxDecimals',
        minDecimalPlaces: 'minDecimals'
      };
      var numerics = [
        'min',
        'max',
        'defaultValue',
        'step',
        'maxDecimals',
        'minDecimals'
      ];
      var intVal;

      Object.keys(schemaMap).forEach(function (key) {
        if (schemaMap[key] && attrs[key]) {
          attrs[schemaMap[key]] = attrs[key];
        }
      });

      numerics.forEach(function (i) {
        if (attrs[i] && !_.isNumber(attrs[i])) {
          intVal = Number(attrs[i]);
          if (isNaN(intVal) === false) {
            attrs[i] = intVal;
          }
        }
      });

      if (attrs.max && !attrs.min) {
        attrs.min = 0;
      }

      Element.prototype.initialize.apply(this, arguments);
    },

    initializeView: function () {
      var Forms = BMP.Forms;
      var attrs = this.attributes;
      var min = attrs.min;
      var max = attrs.max;
      var view;

      this.removeView();
      if (attrs.readonly) {
        view = new Forms._views.ReadOnlyElement({model: this});
      } else if (_.isNumber(min) && _.isNumber(max) && attrs.useSlider) {
        view = new Forms._views.SliderElement({model: this});
      } else {
        view = new Forms._views.NumberElement({model: this});
      }

      this.set('_view', view);
      return view;
    },

    validators: {
      minValue: function (value, minValue) {
        return value < minValue;
      },
      maxValue: function (value, maxValue) {
        return value > maxValue;
      },
      maxDecimals: function (value, maxDecimals) {
        var regexp = new RegExp('^(?:(-)?\\d*\\.\\d{1,' + maxDecimals + '}|\\d+)$');
        return regexp.test(value);
        // var pos = ('' + value).reverse().indexOf('.');
        // return -1 === pos || pos < maxDecimals;
      },
      minDecimals: function (value, minDecimals) {
        // todo: int validates against min-decimals, regexp needs to be fixed
        var regexp = new RegExp('^(?:(-)?\\d*\\.\\d{' + minDecimals + ',}|\\d+)$');
        return regexp.test(value);
      }
    },

    runValidation: function (attrs) {
      var errors = Element.prototype.runValidation.apply(this, arguments) || {};
      if (attrs === undefined) {
        attrs = this.attributes;
      }
      if (attrs.value) {
        if (this.validators.maxValue(attrs.value, attrs.max)) {
          errors.value = errors.value || [];
          errors.value.push({code: 'MAX', MAX: attrs.max});
        }
        if (this.validators.minValue(attrs.value, attrs.min)) {
          errors.value = errors.value || [];
          errors.value.push({code: 'MIN', MIN: attrs.min});
        }
        if (attrs.maxDecimals && !this.validators.maxDecimals(attrs.value,
            attrs.maxDecimals)) {
          errors.value = errors.value || [];
          errors.value.push({code: 'MAXDECIMALS', MAX: attrs.maxDecimals});
        }
        if (attrs.minDecimals && !this.validators.minDecimals(attrs.value,
            attrs.minDecimals)) {
          errors.value = errors.value || [];
          errors.value.push({code: 'MINDECIMALS', MIN: attrs.minDecimals});
        }
      }

      return _.isEmpty(errors) ? undefined : errors;
    },

    set: function () {
      var args = arguments;
      var value = utils.getValueFromBBSet('value', args);
      if (value !== undefined) {
        value = toValid(value);
        args = utils.updateBBSetArguments('value', value, args);
      }
      return Element.prototype.set.apply(this, args);
    }
  });

  return NumberElement;
});
