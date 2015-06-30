/*eslint-env mocha*/
/*global assert:true*/ // chai

/*
  To ensure correct, isolated, unit test behavior,
  everything except the file being tested should be mocked or stubbed out.
*/
define(['squire'], function(Squire){
  'use strict';

  suite('views/jqm/error-summary.js', function(){
    var errorSummaryView; //test subject

    var injector;
    var FormsMock;
    var elementsCollectionMock;
    var ErrorViewConstructor;

    setup(function(done){
      elementsCollectionMock = new Backbone.Collection();
      elementsCollectionMock.getFieldErrors = function(){
        return {code: 'MAX', MAX: 5, text: 'Field Max adjusted from 100 to 5'};
      };

      FormsMock = {
        current: {
          get: function(){
            return {
              goToField: $.noop
            };
          }
        }
      };
      injector = new Squire();

      injector.mock({
          'main': FormsMock,
          'text!views/jqm/templates/error-summary.html': 'original'
        })
        .require(['views/jqm/error-summary'], function(ErrorSummaryView){
          //#################
          ErrorViewConstructor = ErrorSummaryView;
          errorSummaryView = new ErrorSummaryView({ collection: elementsCollectionMock });
          done();
        });
    });

    teardown(function(){
      injector = null;
      elementsCollectionMock = null;
      FormsMock = null;
    });

    test('template should be overridable', function(){
      ErrorViewConstructor.template = function(){ return 'overridden'; };

      assert.equal(errorSummaryView.render().$el.html(), 'overridden');

    });

  });
});
