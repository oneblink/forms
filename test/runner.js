
define(['mocha', 'q', 'underscore'], function(mocha, Q, _) {
  'use strict';
  var tests = [],
      promises;

  mocha.setup({
    ui: 'tdd',
    globals: ['Backbone', 'BlinkForms']
  });

  tests.push(Q.defer());
  require(['../test/1/test'], function() {
    tests[0].resolve();
  });

  promises = _.map(tests, function(dfrd) {
    return dfrd.promise;
  });

  Q.all(promises).then(function() {
    mocha.run();
  });
});

