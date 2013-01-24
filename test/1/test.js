/*global suite:true, test:true, setup:true, teardown:true*/ // mocha

define(['jquery', 'q', 'chai', 'text!/test/1/form.json', 'views/jqm/form'],
       function($, Q, chai, json, View) {
  'use strict';

  var assert = chai.assert;

  suite('1', function() {
    var obj,
        $form = $('form');

    /**
     * execute once before everything else in this suite
     */
    suiteSetup(function() {
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
                setTimeout(check, 47);
              }
            };

        check();
        dfrd.promise.then(done);
      });

      test('BlinkForms global is an Object', function() {
        var Forms = window.BlinkForms;
        assert.equal($.type(Forms), 'object');
      });

      test('initialise with form.json', function() {
        var Forms = window.BlinkForms,
            form;
        Forms.initialize(obj);
        form = Forms.currentFormObject;
        assert.equal($.type(form), 'object');
        assert.equal(form.get('name'), 'form1');
        assert.equal(form.get('label'), 'Form 1');
      });

      test('render form for jQuery Mobile', function() {
        var Forms = window.BlinkForms,
            form = Forms.currentFormObject,
            view;

        view = new View({
          $el: $form,
          el: $form[0],
          model: form
        });
        view.render();
      });

    }); // END: suite('Form', ...)

    /**
     * execute once after everything else in this suite
     */
    suiteTeardown(function() {
//      delete window.BlinkForms.currentFormObject;
    });

  }); // END: suite('1', ...)
});
