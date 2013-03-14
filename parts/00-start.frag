// AMD-detection borrowed from Kris Kowal's Q
// https://github.com/kriskowal/q/blob/master/q.js#L29
/*jslint sloppy:true*/ // don't force ES5 strict mode (need globals here)
(function (definition) {
  if (typeof define === "function" && define.amd) {
    // Require.JS
    define([
      'jquery',
      'underscore',
      'backbone',
      'rivets',
      'q',
      'jquerymobile'
    ], definition);

  } else {
    // no Require.JS, no AMD modules
    definition($, _, Backbone, rivets, Q);
  }
}(function($, _, Backbone, rivets, Q) {
  'use strict';
/*jslint sloppy:false*/ // let JSLint bug us again about ES5 strict mode
  // establish globals
  var BMP = window['BMP'] = window['BMP'] || {};
  BMP.Forms = BMP.Forms || {};
