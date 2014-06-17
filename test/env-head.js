/*jslint indent:2*/
/*global define, require*/ // AMD / Require.JS

(function (window) {
  'use strict';

  window.mocha.ui('tdd');
  window.assert = window.chai.assert;

  require.config({
    paths: {
      BlinkForms: '../../js/build/views/forms3jqm',
      BIC: '../sample-bic',
      'BMP.Blob': '../lib/bmp-blobs',
      signaturepad: 'http://cdnp.blinkm.co/signaturepad/2.3.0/jq.sig.min',
      picker: '../../bower_components/pickadate/lib/picker',
      'picker.date': '../../bower_components/pickadate/lib/picker.date',
      'picker.time': '../../bower_components/pickadate/lib/picker.time',
      'moment': '../../bower_components/momentjs/min/moment.min',
      bluebird: '../../bower_components/bluebird/js/browser/bluebird',
      feature: '../../bower_components/amd-feature/feature',
      implementations: '../lib/implementations'
    },
    shim: {
      'BMP.Blob': {
        depends: ['jquery', 'underscore'],
        exports: 'BMP'
      },
      signaturepad: {
        deps: ['jquery'],
        exports: '$'
      }
    }
  });
}(this));
