/*jslint indent:2*/

(function (window) {
  'use strict';

  window.mocha.ui('tdd');
  window.assert = window.chai.assert;

  window.require.config({
    paths: {
      BlinkForms: '../../BlinkForms-jQueryMobile',
      BIC: '../sample-bic',
      'BMP.Blob': '../lib/bmp-blobs'
    },
    shim: {
      'BMP.Blob': {
        depends: ['jquery', 'underscore'],
        exports: 'BMP'
      }
    }
  });
}(this));
