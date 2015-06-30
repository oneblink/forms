/**
 * @module  forms/blinkFormsError
 * @exports blinkFormsError
 */
define(function(){
  'use strict';

  var toString = function(i18n){
    return function(val){
      var fn = _.isFunction(i18n[val.code]) && i18n[val.code];

      return fn ? fn(val) : JSON.stringify(val);
    };
  };

  var blinkFormsError = BMP.Forms.blinkFormsErrorHelper = {
    /**
     * converts a forms error object to an error string
     * @type {string}
     *
     * @return {string} The error code
     */
    toErrorString: toString(window.i18n['BMP/Forms/validation']),
    /**
     * converts a forms warning object to an warning string
     * @type {string}
     *
     * @return {string} The warning code
     */
    toWarningString: toString(window.i18n['BMP/Forms/warning']),

    /**
     * Create a BlinkForms Error Object
     * @param  {string} code        Blink Error code
     * @param  {*} val         The value to test
     * @param  {string} [errorString=""] - A human friendly error message
     */
    toFormsError: function(code, val, errorString){
      var ret = {};

      if ( errorString === undefined){
        errorString = blinkFormsError.toErrorString(val) || val;
      }

      ret.code = code;
      ret[code] = val;
      ret.text = errorString;

      return ret;
    },

    fromBIC: function(){}
  };

  return blinkFormsError;
});
