/*global suite:true, test:true, setup:true, teardown:true*/ // mocha

define(['jquery', 'q', 'chai', 'text!/test/1/form.json'],
       function($, Q, chai, json) {
  'use strict';

  var assert = chai.assert,
      Forms;

  suite('1', function() {
    var obj;

    setup(function() {
      obj = JSON.parse(json);
    });

    test('form.json is a JSON object', function() {
      assert.equal($.type(obj), 'object');
    });

    suite('Form', function() {

      test('wait for BlinkForms global', function(done) {
        var dfrd = Q.defer(),
            check = function() {
              if (window.BlinkForms) {
                dfrd.resolve();
              } else {
                setTimeout(check, 197);
              }
            };

        check();
        dfrd.promise.then(done);
      });

      test('BlinkForms global is an Object', function() {
        Forms = window.BlinkForms;
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
