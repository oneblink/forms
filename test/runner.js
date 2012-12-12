
define(['mocha'], function(mocha) {
  'use strict';

  mocha.setup({ui: 'tdd'});

  require(['../test/1/test']);

  setTimeout(function() {
    mocha.run();
  }, 497);
});

