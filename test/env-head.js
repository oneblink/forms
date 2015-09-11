(function (window) {
  'use strict';

  var ROOT_PREFIX = window.__karma__ ? '/base/' : '../../';
  var TEST_PREFIX = ROOT_PREFIX + 'test/';

  window.ROOT_PREFIX = ROOT_PREFIX;
  window.TEST_PREFIX = TEST_PREFIX;

  window.BMP = {};

  window.mocha.ui('tdd');

  function writeToHead (html) {
    if (document.head) {
      document.head.insertAdjacentHTML('beforeend', html);
    } else {
      document.write(html);
    }
  }

  if (document.querySelectorAll('title').length !== 1) {
    writeToHead('<title>tests</title>');
  }

  if (document.querySelectorAll('meta[charset]').length !== 1) {
    writeToHead('<meta charset="utf-8" />');
  }

  if (document.querySelectorAll('meta[name=viewport][content*=device-width]').length !== 1) {
    writeToHead('<meta name="viewport" content="width=device-width, initial-scale=1" />');
  }

  [
    window.ROOT_PREFIX + 'node_modules/mocha/mocha.css',
    'http://cdnp.blinkm.co/jquery.mobile/1.3.2/jquery.mobile-1.3.2.min.css',
    window.ROOT_PREFIX + 'css/testrunner.css',
    window.ROOT_PREFIX + 'node_modules/pickadate/lib/themes/default.css',
    window.ROOT_PREFIX + 'node_modules/pickadate/lib/themes/default.date.css',
    window.ROOT_PREFIX + 'node_modules/pickadate/lib/themes/default.time.css'
  ].forEach(function (href) {
    if (document.querySelectorAll('link[rel=stylesheet][href="' + href +
    '"]').length !== 1) {
      writeToHead('<link rel="stylesheet" href="' + href + '" />');
    }
  });

  require.config({
    paths: {
      backbone: 'http://cdnp.blinkm.co/backbonejs/1.2.1/backbone',
      jquery: 'http://cdnp.blinkm.co/jquery/1.11.3/jquery-1.11.3',
      jquerymobile: 'http://cdnp.blinkm.co/jquery.mobile/1.3.2/jquery.mobile-1.3.2',
      underscore: 'http://cdnp.blinkm.co/underscorejs/1.8.3/underscore',
      BlinkForms: ROOT_PREFIX + 'build/forms3jqm.min', // using the unminified makes it far easier to debug in tests
      // BlinkForms: ROOT_PREFIX + 'build/forms3jqm.min',
      BIC: TEST_PREFIX + 'sample-bic',
      '@jokeyrhyme/promised-requirejs': ROOT_PREFIX + 'node_modules/@jokeyrhyme/promised-requirejs/dist/index',
      'BMP.Blob': TEST_PREFIX + 'lib/bmp-blobs',
      'BMP.BlinkGap': ROOT_PREFIX + 'node_modules/blinkgap-utils/BMP.BlinkGap',
      signaturepad: 'http://cdnp.blinkm.co/signaturepad/2.3.0/jq.sig.min',
      picker: ROOT_PREFIX + 'node_modules/pickadate/lib/picker',
      'picker.date': ROOT_PREFIX + 'node_modules/pickadate/lib/picker.date',
      'picker.time': ROOT_PREFIX + 'node_modules/pickadate/lib/picker.time',
      moment: ROOT_PREFIX + 'node_modules/moment/min/moment.min',
      bluebird: ROOT_PREFIX + 'node_modules/bluebird/js/browser/bluebird.min',
      feature: ROOT_PREFIX + 'node_modules/amd-feature/feature',
      'es5-shim': ROOT_PREFIX + 'node_modules/es5-shim/es5-shim.min',
      implementations: TEST_PREFIX + 'lib/implementations',
      chai: ROOT_PREFIX + 'node_modules/chai/chai',
      sinon: ROOT_PREFIX + 'node_modules/sinon/lib/sinon',
      testUtils: TEST_PREFIX + 'lib/utils'
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
