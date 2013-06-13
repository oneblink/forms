require.config({
  baseUrl: 'js',
  paths: {
    // testing libraries
    chai: 'lib/chai-1.4.0',
    mocha: 'lib/mocha-1.7.4',
    // boot / entry points
    BlinkForms: '../BlinkForms-jQueryMobile.min',
    signaturePad: 'http://cdnp.blinkm.co/signaturepad/2.3.0/jq.sig.min'
  },
  shim: {
    chai: {
      exports: 'chai'
    },
    mocha: {
      exports: 'mocha'
    },
    signaturePad: {
      deps: ['jquery'],
      exports: '$'
    }
  }
});

