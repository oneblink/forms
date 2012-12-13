
define(['mocha', 'q'], function(mocha, Q) {
  'use strict';
  var tests = Q.defer();

  mocha.setup({
    ui: 'tdd',
    globals: ['Backbone', 'BlinkForms']
  });

  require(['../test/1/test'], function() {
    tests.resolve();
  });

  tests.promise.then(function() {
    mocha.run();
  });
});

