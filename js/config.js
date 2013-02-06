require.config({
  baseUrl: 'js',
  paths: {
    // testing libraries
    chai: 'lib/chai-1.4.0',
    mocha: 'lib/mocha-1.7.4',
    // boot / entry points
    BlinkForms: '../BlinkForms',
    testRunner: '../test/runner'
  },
  shim: {
    chai: {
      exports: 'chai'
    },
    mocha: {
      exports: 'mocha'
    }
  }
});

