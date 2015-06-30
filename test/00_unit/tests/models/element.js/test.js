/*eslint-env mocha*/
/*global assert:true*/ // chai
/*
  To ensure correct, isolated, unit test behavior,
  everything except the file being tested should be mocked or stubbed out.
*/
define(['models/element'],
function( ElementModel /* change this to whatever you want */ ){
  'use strict';

  var noop = function(){};

  suite('models/element.js', function(){

    suite("#setExternalErrors()", function(){
      var model1
        , model2
        , model3
        , model4;

      setup(function(){
        ElementModel.prototype.initialize = noop;

        model1 = new ElementModel({ name: 'model1', id: 'model1' });
        model2 = new ElementModel({ name: 'model2', id: 'model2' });
        model3 = new ElementModel({ name: 'model3', id: 'model3' });
        model4 = new ElementModel({ name: 'model4', id: 'model4' });

        model1.validationError = { value: [{code: 'EMAIL'}]};
        model2.validationError = { value: [{code: 'MAX'}, {code: 'REQUIRED'}]};
        model3.validationError = null;
        model4.validationError = { value: [{code: 'EMAIL'}]};
      });

      teardown(function(){
        model1 = null;
        model2 = null;
        model3 = null;
        model4 = null;
      });

      test('should keep the current errors', function(){
          model1.setExternalErrors([{code: 'blah1'}], {merge: true});
          assert.equal(model1.validationError.value.length, 2);
          assert.equal(model1.validationError.value[0].code, 'EMAIL');
          assert.equal(model1.validationError.value[1].code, 'blah1');

          model2.setExternalErrors([{code: 'blah2'}, {code: 'blah3'}, {code: 'blah4'}], {merge: true});
          assert.equal(model2.validationError.value.length, 5);
          assert.equal(model2.validationError.value[0].code, 'MAX');
          assert.equal(model2.validationError.value[1].code, 'REQUIRED');
          assert.equal(model2.validationError.value[2].code, 'blah2');
          assert.equal(model2.validationError.value[3].code, 'blah3');
          assert.equal(model2.validationError.value[4].code, 'blah4');

          model3.setExternalErrors([{code: 'blah3'}, {code: 'blah4'}], {merge: true});
          assert.equal(model3.validationError.value.length, 2);
          assert.equal(model3.validationError.value[0].code, 'blah3');
          assert.equal(model3.validationError.value[1].code, 'blah4');
        });

        test('should not keep the current field errors', function(){
          model1.setExternalErrors([{code: 'blah1'}], {merge: false});
          assert.equal(model1.validationError.value.length, 1);
          assert.equal(model1.validationError.value[0].code, 'blah1');
        });

        test('should default to not keeping the current field errors', function(){
          model1.setExternalErrors([{code: 'blah1'}]);
          assert.equal(model1.validationError.value.length, 1);
          assert.equal(model1.validationError.value[0].code, 'blah1');
        });

        test('should handle an empty error list when merging', function(){
          model3.setExternalErrors([{code: 'blah3'}, {code: 'blah4'}], {merge: true});
          assert.equal(model3.validationError.value.length, 2);
          assert.equal(model3.validationError.value[0].code, 'blah3');
          assert.equal(model3.validationError.value[1].code, 'blah4');
        });

        test('should handle an empty error list when not merging', function(){
          model3.setExternalErrors([{code: 'blah3'}, {code: 'blah4'}], {merge: false});
          assert.equal(model3.validationError.value.length, 2);
          assert.equal(model3.validationError.value[0].code, 'blah3');
          assert.equal(model3.validationError.value[1].code, 'blah4');
        });

        test('should handle an empty error list when not merging and merge is default', function(){
          model3.setExternalErrors([{code: 'blah3'}, {code: 'blah4'}]);
          assert.equal(model3.validationError.value.length, 2);
          assert.equal(model3.validationError.value[0].code, 'blah3');
          assert.equal(model3.validationError.value[1].code, 'blah4');
        });
    });
  });
});
