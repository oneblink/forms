(function (window) {
  'use strict';

  window.BMP = {};

  window.mocha.ui('tdd');
  window.assert = window.chai.assert;

  require.config({
    paths: {
      backbone: 'http://cdnp.blinkm.co/backbonejs/1.0.0/backbone-min',
      jquery: 'http://cdnp.blinkm.co/jquery/1.11.1/jquery-1.11.1',
      jquerymobile: 'http://cdnp.blinkm.co/jquery.mobile/1.3.2/jquery.mobile-1.3.2.min',
      underscore: 'http://cdnp.blinkm.co/lodash/2.4.1/lodash.underscore.min',
      BlinkForms: '../../js/build/views/forms3jqm',
      BIC: '../sample-bic',
      'BMP.Blob': '../lib/bmp-blobs',
      'BMP.BlinkGap': '../../node_modules/blinkgap-utils/BMP.BlinkGap',
      signaturepad: 'http://cdnp.blinkm.co/signaturepad/2.3.0/jq.sig.min',
      picker: '../../bower_components/pickadate/lib/picker',
      'picker.date': '../../bower_components/pickadate/lib/picker.date',
      'picker.time': '../../bower_components/pickadate/lib/picker.time',
      'moment': '../../bower_components/momentjs/min/moment.min',
      bluebird: '../../node_modules/bluebird/js/browser/bluebird.min',
      feature: '../../bower_components/amd-feature/feature',
      'es5-shim': '../../bower_components/es5-shim/es5-shim.min',
      implementations: '../lib/implementations'
    },
    shim: {
      'BMP.Blob': {
        depends: ['jquery', 'underscore'],
        exports: 'BMP.Blob'
      },
      'BMP.BlinkGap': {
        depends: ['BMP.Blob'], // because BMP.BlinkGap assumes window.BMP
        exports: 'BMP.BlinkGap'
      },
      signaturepad: {
        deps: ['jquery'],
        exports: '$'
      },
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      underscore: {
        exports: '_'
      }
    }
  });
}(this));
