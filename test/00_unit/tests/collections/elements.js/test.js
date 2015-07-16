/*eslint-env mocha*/
/*global assert:true*/ // chai
/*
  To ensure correct, isolated, unit test behavior,
  everything except the file being tested should be mocked or stubbed out.
*/
define(['collections/elements', 'models/element'],
function( ElementsCollection, ElementModel ){
  'use strict';

  suite('collections/elements.js', function(){
    var elementsCollection
      , model1
      , model2
      , model3
      , model4;

    setup(function(){
      elementsCollection = new ElementsCollection();
      model1 = new ElementModel({ name: 'model1', id: 'model1' });
      model2 = new ElementModel({ name: 'model2', id: 'model2' });
      model3 = new ElementModel({ name: 'model3', id: 'model3' });
      model4 = new ElementModel({ name: 'model4', id: 'model4' });

      elementsCollection.add([model1, model2, model3, model4]);

      model1.validationError = { value: [{code: 'EMAIL'}]};
      model2.validationError = { value: [{code: 'MAX'}, {code: 'REQUIRED'}]};
      model3.validationError = null;
      model4.validationError = { value: [{code: 'EMAIL'}]};

      ElementModel.prototype.hasErrors = function(){
        return this.validationError && !_.isEmpty(this.validationError);
      };
    });

    teardown(function(){
      elementsCollection = null;
      model1 = null;
      model2 = null;
      model3 = null;
      model4 = null;
    });

    suite('#getErrors()', function(){
      test('should return 3 error objects', function(){
        assert.equal(_.keys(elementsCollection.getErrors()).length, 3);
      });

      test('should limit the return to the first error', function(){
        assert.equal(_.keys(elementsCollection.getErrors(1)).length, 1);
      });

      test('should handle negative numbers', function(){
        assert.equal(_.keys(elementsCollection.getErrors(-10)).length, 0);
      });
    });

    suite('#setExternalErrors()', function(){

      test('should ignore an invalid model id', function(){
        var errorList = {
          modelNotExist: [{code: 'blah1'}]
        };

        elementsCollection.setErrors(errorList);

        assert.isUndefined(elementsCollection.get('modelNotExist'));
      });

    });

  });
});
