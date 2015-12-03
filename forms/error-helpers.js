/**
 * @module  forms/blinkFormsError
 * @exports blinkFormsError
 */
define(function (require) {
  'use strict';

  // foreign modules

  var _ = require('underscore');

  // this module

  var toString = function (i18n) {
    return function (val) {
      var fn;

      if (typeof val === 'string') {
        return val;
      }

      if (typeof val !== 'object' || !('code' in val)) {
        throw new Error('Can only convert from Forms error format to localised string');
      }

      fn = _.isFunction(i18n[val.code]) && i18n[val.code];

      return fn ? fn(val) : JSON.stringify(val);
    };
  };

  var toErrorString = toString(window.i18n['BMP/Forms/validation']);
  var toWarningString = toString(window.i18n['BMP/Forms/warning']);

  function makeCustomError (code, val, errorString) {
    var ret = {};
    ret.code = code;
    ret[code] = val;

    if (errorString === undefined) {
      errorString = toErrorString(ret) || val;
    }

    ret.text = errorString;

    return ret;
  }

  function blinkFormsErrorParser (errorObject) {
    if (_.isString(errorObject)) {
      return makeCustomError('CUSTOM', errorObject);
    }

    if (_.isObject(errorObject) && !_.isArray(errorObject)) {
      // assume its the blink error format
      if (errorObject.code) {
        return errorObject;
      }

      return _.reduce(errorObject, function (memo, value, key) {
        memo[key] = blinkFormsErrorParser(value);

        return memo;
      }, {});
    }

    if (_.isArray(errorObject)) {
      return _.reduce(errorObject, function (memo, value) {
        memo.push(blinkFormsErrorParser(value));
        return memo;
      }, []);
    }

    return errorObject;
  }

  return {
    /**
     * converts a forms error object to an error string
     * @type {string}
     *
     * @return {string} The error code
     */
    toErrorString: toErrorString,
    /**
     * converts a forms warning object to an warning string
     * @type {string}
     *
     * @return {string} The warning code
     */
    toWarningString: toWarningString,

    /**
     * Create a BlinkForms Error Object
     * @param  {string} code        Blink Error code
     * @param  {*} val         The value to test
     * @param  {string} [errorString=""] - A human friendly error message
     */
    toFormsError: makeCustomError,

    fromBMP: blinkFormsErrorParser
  };
});
