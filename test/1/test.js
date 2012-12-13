/*global suite:true, test:true, setup:true, teardown:true*/ // mocha

define(['jquery', 'chai', 'text!/test/1/form.json'], function($, chai, json) {
  'use strict';

  var assert = chai.assert,
      Forms = window.BlinkForms;

  suite('1', function() {
    var obj;

    setup(function() {
      obj = JSON.parse(json);
    });

    test('form.json is a JSON object', function() {
      assert.equal($.type(obj), 'object');
    });

    suite('Form', function() {

      test('BlinkForms global is defined', function() {
        assert.equal($.type(Forms), 'object');
      });

      test('initialise with form.json', function() {
        var form;
        Forms.initialize(obj);
        form = Forms.currentFormObject;
        assert.equal($.type(form), 'object');
        assert.equal(form.get('name'), 'form1');
        assert.equal(form.get('label'), 'Form 1');
      });

    });

    teardown(function() {
    });
  });
});
