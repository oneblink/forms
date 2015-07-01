(function (window) {
  'use strict';

  window.BMP = {};

  window.mocha.ui('tdd');
  window.assert = window.chai.assert;

  document.write('<link rel="stylesheet" href="../../node_modules/pickadate/lib/themes/default.css" />');
  document.write('<link rel="stylesheet" href="../../node_modules/pickadate/lib/themes/default.date.css" />');
  document.write('<link rel="stylesheet" href="../../node_modules/pickadate/lib/themes/default.time.css" />');

  require.config({
    paths: {
      backbone: 'http://cdnp.blinkm.co/backbonejs/1.1.2/backbone',
      jquery: 'http://cdnp.blinkm.co/jquery/1.11.3/jquery-1.11.3',
      jquerymobile: 'http://cdnp.blinkm.co/jquery.mobile/1.3.2/jquery.mobile-1.3.2',
      underscore: 'http://cdnp.blinkm.co/lodash/2.4.1/lodash.underscore',
      BlinkForms: '../../build/forms3jqm.min',
      BIC: '../sample-bic',
      'BMP.Blob': '../lib/bmp-blobs',
      'BMP.BlinkGap': '../../node_modules/blinkgap-utils/BMP.BlinkGap',
      signaturepad: 'http://cdnp.blinkm.co/signaturepad/2.3.0/jq.sig.min',
      picker: '../../node_modules/pickadate/lib/picker',
      'picker.date': '../../node_modules/pickadate/lib/picker.date',
      'picker.time': '../../node_modules/pickadate/lib/picker.time',
      'moment': '../../node_modules/momentjs/min/moment.min',
      bluebird: '../../node_modules/bluebird/js/browser/bluebird.min',
      feature: '../../node_modules/amd-feature/feature',
      'es5-shim': '../../node_modules/es5-shim/es5-shim.min',
      implementations: '../lib/implementations',
      sinon: '../../node_modules/sinon/lib/sinon',
      testUtils: '../lib/utils'
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
