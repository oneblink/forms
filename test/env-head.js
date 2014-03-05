/*jslint indent:2*/

(function (window) {
  'use strict';

  window.mocha.ui('tdd');
  window.assert = window.chai.assert;

  window.require.config({
    paths: {
      BlinkForms: '../../js/build/views/forms3jqm',
      BIC: '../sample-bic',
      'BMP.Blob': '../lib/bmp-blobs',
      signaturePad: 'http://cdnp.blinkm.co/signaturepad/2.3.0/jq.sig.min',
      picker: '//amsul.ca/pickadate.js/lib/picker',
      'picker.date': '//amsul.ca/pickadate.js/lib/picker.date',
      'picker.time': '//amsul.ca/pickadate.js/lib/picker.time',
      'moment': '//momentjs.com/downloads/moment.min'
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
