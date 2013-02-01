
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

  tests.push(Q.defer());
  tests[0].promise.fin(function() {
    require(['../test/2/test'], function() {
      tests[1].resolve();
    });
  });

  tests.push(Q.defer());
  tests[1].promise.fin(function() {
    require(['../test/3/test'], function() {
      tests[2].resolve();
    });
  });

  promises = _.map(tests, function(dfrd) {
    return dfrd.promise;
  });

  Q.all(promises).then(function() {
    mocha.run();
  });
});

