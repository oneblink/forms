require.config({
  baseUrl: 'js',
  paths: {
    backbone: 'https://d1c6dfkb81l78v.cloudfront.net/backbonejs/0.9.10/backbone.min',
    jquery: [
      'https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min',
      'https://d1c6dfkb81l78v.cloudfront.net/jquery/1.9.0/jquery.min'
    ],
    q: 'lib/q-0.8.11.min',
    underscore: 'https://d1c6dfkb81l78v.cloudfront.net/underscorejs/1.4.3/u.min',
    // require.js plugins
    domReady: 'lib/domReady-2.0.1',
    text: 'lib/text-2.0.3',
    // testing libraries
    chai: 'lib/chai-1.4.0',
    mocha: 'lib/mocha-1.7.4',
    // boot / entry points
    main: ['main.min', 'main'],
    testRunner: '../test/runner'
  },
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    chai: {
      exports: 'chai'
    },
    mocha: {
      exports: 'mocha'
    }
  },
  enforceDefine: true
});

define('js/config', function() {
  return true;
});
