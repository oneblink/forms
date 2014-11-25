// AMD-detection borrowed from Kris Kowal's Q
// https://github.com/kriskowal/q/blob/master/q.js#L29
(function (definition) {
  if (typeof define === "function" && define.amd) {
    // Require.JS
    define([
      'feature!promises',
      'jquery',
      'underscore',
      'backbone',
      'moment',
      'picker.date',
      'picker.time',
      'jquerymobile',
      'feature!es5',
      'signaturepad'
    ], definition);

  } else {
    // no Require.JS, no AMD modules
    definition(Promise, $, _, Backbone, moment);
  }
}(function(Promise, $, _, Backbone, moment) {
  "use strict";
  // establish globals
  var BMP = window['BMP'] = window['BMP'] || {};
  BMP.Forms = BMP.Forms || {};
