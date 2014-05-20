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
      picker: '../../bower_components/pickadate/lib/picker',
      'picker.date': '../../bower_components/pickadate/lib/picker.date',
      'picker.time': '../../bower_components/pickadate/lib/picker.time',
      'moment': '../../bower_components/momentjs/min/moment.min'
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
