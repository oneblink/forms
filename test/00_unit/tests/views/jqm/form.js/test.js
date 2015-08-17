/*
  To ensure correct, isolated, unit test behavior,
  everything except the file being tested should be mocked or stubbed out.
*/
define(['views/jqm/form'],
function (FormView) {
  'use strict';

  suite('views/jqm/form.js', function () {
    var formView; // test subject

    var elementModelMock;
    var elementsCollectionMock;
    var formModelMock;

    setup(function () {
      elementModelMock = new Backbone.Model();
      elementsCollectionMock = new Backbone.Collection();
      formModelMock = new Backbone.Model({ elements: elementsCollectionMock });

      formView = new FormView({ model: formModelMock });
    });

    teardown(function () {
      formView = null;
      formModelMock = null;
      elementsCollectionMock = null;
      elementModelMock = null;
    });

    suite('#goToElement()', function () {

      test('it should reject becasue fieldName is empty', function () {
        return formView.goToElement().then(function () {
          throw new Error('goToElement should not of been resolved.');
        }, function (err) {
          assert.equal(err.message, 'No field specified');
        });

      });

      test('it should reject becasue field doesnt exist', function () {
        var getElementStub = sinon.stub();
        getElementStub.returns(undefined);

        formModelMock.getElement = getElementStub;

        return formView.goToElement('abc').then(function () {
          throw new Error('goToElement should not of been resolved.');
        }, function (err) {
          assert.equal(err.message, 'Could not find element');
        });

      });

      test('should resolve with the correct model', function () {
        var elementView = new Backbone.View();
        var getElementStub = sinon.stub();
        var formGetStub = sinon.stub(formModelMock, 'get');
        var elementModelGetStub = sinon.stub(elementModelMock, 'get');

        var indexObj = {
          index: function () { return 1; }
        };

        elementView.scrollTo = function (options) {
          $('body').animate({scrollTop: 0}, options);
        };

        formModelMock.getElement = getElementStub;
        getElementStub.withArgs('test').returns(elementModelMock);

        elementModelGetStub.withArgs('page').returns(indexObj);
        elementModelGetStub.withArgs('_view').returns(elementView);

        formGetStub.withArgs('pages').returns({
          current: indexObj
        });

        return formView.goToElement('test').then(function (returnedModel) {
          assert.equal(returnedModel, elementView);
        });
      });
    });
  });
});
