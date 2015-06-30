/*eslint-env mocha*/
/*global assert:true*/ // chai
/*global sinon:true*/
/*
  To ensure correct, isolated, unit test behavior,
  everything except the file being tested should be mocked or stubbed out.
*/
define(['squire'],
function( Squire ){
  'use strict';

  suite('views/jqm/form.js', function(){
    var formView; //test subject

    var injector;

    var errorSummaryMock;
    var FormsMock;
    var elementModelMock;
    var elementsCollectionMock;
    var formModelMock;

    setup(function(done){
      errorSummaryMock = new Backbone.View();
      FormsMock = _.extend({}, Backbone.Events);
      elementModelMock = new Backbone.Model();
      elementsCollectionMock = new Backbone.Collection();
      formModelMock = new Backbone.Model({ elements: elementsCollectionMock });

      injector = new Squire();

      injector.mock({
          'main': FormsMock,
          'views/jqm/error-summary': errorSummaryMock
        })
        .require(['views/jqm/form'], function(FormView){
          //#################
          formView = new FormView({ model: formModelMock });
          done();
        });
    });

    teardown(function(){
      FormsMock = null;
      formView = null;
      formModelMock = null;
      elementsCollectionMock = null;
      errorSummaryMock = null;
      elementModelMock = null;
    });

    suite('#goToField()', function(){

      test('it should reject becasue fieldName is empty', function(){
        return formView.goToField().then(function(){
          throw new Error('goToField should not of been resolved.');
        }, function(err){
          assert.equal(err.message, 'No field name specified');
        });

      });

      test('it should reject becasue field doesnt exist', function(){
        var getElementStub = sinon.stub();
        getElementStub.returns(undefined);

        formModelMock.getElement = getElementStub;

        return formView.goToField('abc').then(function(){
          throw new Error('goToField should not of been resolved.');
        }, function(err){
          assert.equal(err.message, 'Could not find element');
        });

      });

      test('should resolve with the correct model', function(){
        var elementView = new Backbone.View();
        var getElementStub = sinon.stub();
        var formGetStub = sinon.stub(formModelMock, 'get');
        var elementModelGetStub = sinon.stub(elementModelMock, 'get');

        var indexObj = {
          index: function(){ return 1; }
        };

        elementView.scrollTo = function(options){
          $('body').animate({scrollTop: 0}, options);
        };

        formModelMock.getElement = getElementStub;
        getElementStub.withArgs('test').returns(elementModelMock);

        elementModelGetStub.withArgs('page').returns(indexObj);
        elementModelGetStub.withArgs('_view').returns(elementView);

        formGetStub.withArgs('pages').returns({
          current: indexObj
        });

        return formView.goToField('test').then(function(returnedModel){
          assert.equal(returnedModel, elementView);
        });
      });
    });

    test('it should listen to the change:value and invalid events on element Collection', function(){
      var renderErrorsStub = sinon.stub(formView, 'renderErrors', function(){});

      elementsCollectionMock.trigger('invalid');
      assert.isTrue(renderErrorsStub.calledOnce);
      elementsCollectionMock.trigger('change:value');
      assert.isTrue(renderErrorsStub.calledTwice);
      renderErrorsStub.restore();
    });
  });
});
