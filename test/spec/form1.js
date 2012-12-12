var cdn = 'https://d1c6dfkb81l78v.cloudfront.net/';
require.config({
  baseUrl: '../../app/js',
  paths: {
    backbone: cdn + 'backbonejs/0.9.2/backbone.min',
    jquery: cdn + 'jquery/1.8.3/jq.min',
    underscore: cdn + 'underscorejs/1.4.3/u.min',
    domReady: 'lib/domReady-2.0.1',
    // testing libraries
    chai: 'lib/chai-1.4.0',
    mocha: 'lib/mocha-1.7.4'
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

define(['mocha', 'chai', 'main'], function(mocha, chai) {
});

