var cdn = 'https://d1c6dfkb81l78v.cloudfront.net/';

require.config({
  baseUrl: 'js',
  paths: {
    backbone: cdn + 'backbonejs/0.9.2/backbone.min',
    jquery: cdn + 'jquery/1.8.3/jq.min',
    underscore: cdn + 'underscorejs/1.4.3/u.min'
  },
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    }
  },
  enforceDefine: true
});

define(['jquery'], function($) {
  Forms = window.BlinkForms = {};
});
