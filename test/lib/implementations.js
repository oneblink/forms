/*jslint indent:2*/
/*global define, require*/ // AMD / Require.JS

/*global Promise*/ // ECMAScript 6

define(function () {
  'use strict';
  return {
    promises: [
      {
        // native ES6 Promises
        isAvailable: function () {
          // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/es6/promises.js
          return 'Promise' in window &&
            'resolve' in window.Promise &&
            'reject' in window.Promise &&
            'all' in window.Promise &&
            'race' in window.Promise &&
            (function() {
              var resolve;
              new window.Promise(function(r) { resolve = r; });
              return typeof resolve === 'function';
            }());
        },
        module: function () {
          return Promise;
        }
      },
      {
        // fallback to Bluebird
        isAvailable: function () { return true; },
        implementation: 'bluebird'
      }
    ]
  };
});
