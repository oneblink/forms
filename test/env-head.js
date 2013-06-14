/*jslint indent:2*/

(function (window) {
  'use strict';

  window.mocha.ui('tdd');
  window.assert = window.chai.assert;

  window.require.config({
    paths: {
      BlinkForms: '../../BlinkForms-jQueryMobile.min',
      BIC: '../sample-bic',
      'BMP.Blob': '../lib/bmp-blobs',
      signaturePad: 'http://cdnp.blinkm.co/signaturepad/2.3.0/jq.sig.min'
    },
    shim: {
      'BMP.Blob': {
        depends: ['jquery', 'underscore'],
        exports: 'BMP'
      },
      signaturePad: {
        deps: ['jquery'],
        exports: '$'
      }
    }
  });
}(this));
