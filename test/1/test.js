/*global suite:true, test:true, setup:true, teardown:true*/ // mocha

define(['jquery', 'chai', 'text!/test/1/form.json'], function($, chai, json) {
  'use strict';

  var assert = chai.assert,
      obj = JSON.parse(json);

  suite('init', function() {
    setup(function() {
    });

    test('form.json is a JSON object', function() {
      assert.equal($.type(obj), 'object');
    });

    teardown(function() {
    });
  });
});
