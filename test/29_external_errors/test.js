/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {

  suite('29: External Errors', function () {
    var $page = $('[data-role=page]'),
      $content = $page.find('[data-role=content]');


    setup(function (done) {
      Forms.getDefinition('form1', 'edit').then(function (def) {
          Forms.initialize(def);
          $content.append(Forms.current.$form);
          $.mobile.page({}, $page);
          $page.trigger('pagecreate');
          $page.show();
          Forms.current.set('numErrorsShown', 0); //dont want a limit
          done();
        }, function () {
          assert.fail(true, false, 'Setup Failed');
          done();
        });
    });

    teardown(function(){
      // commented out so that the last test can leave a functional DOM in place so we can
      // manually test
      // $content.empty();
      // delete Forms.current;
    });

    test('External errors set show up on form', function(){
      var element = Forms.current.getElement('textBox1')
        , externalErrors = {
            textBox1: [{code: 'CUSTOM', CUSTOM: 'This is custom text'}]
          };
      element.val('1'); //field is marked aas required in the definition
      Forms.current.setErrors(externalErrors);

      assert.isAbove(element.get('_view').$el.find('.bm-errors__bm-listitem').text().indexOf('This is custom text'), -1);
      assert.equal(Forms.current.getErrors().textBox1[0].CUSTOM, 'This is custom text');

      $content.empty();
      delete Forms.current;
    });

    test('External errors set show up on form when set on an element model', function(){
      var element = Forms.current.getElement('textBox1')
        , externalErrors = [{code: 'CUSTOM', CUSTOM: 'This is custom text'}];

      element.val('1'); //field is marked aas required in the definition
      element.setExternalErrors(externalErrors);

      assert.isAbove(element.get('_view').$el.find('.bm-errors__bm-listitem').text().indexOf('This is custom text'), -1);
      assert.equal(Forms.current.getErrors().textBox1[0].CUSTOM, 'This is custom text');

      $content.empty();
      delete Forms.current;
    });

    test('External errors override built in errors of the same name', function(){
      var externalErrors = {
        number1: [{code: 'MAX', MAX: 5, text: 'Field Max adjusted from 100 to 5'}]
      };
      var el = Forms.current.getElement('number1');
      el.val('afdasdasdaf');
      Forms.current.setErrors(externalErrors);
      assert.equal(Forms.current.getErrors().number1[0].MAX, 5);

      $content.empty();
      delete Forms.current;
    });

    test('External errors should be cleared when field is altered', function(){
      Forms.current
           .getElement('textBox1')
           .val('1');

      assert.isUndefined(Forms.current.getErrors().textBox1);

      $content.empty();
      delete Forms.current;
    });

    test('External errors should merge by default', function(){
      var externalErrors = {
        city: [{code: 'CUSTOM', CUSTOM: 'This is custom text'}]
      };

      var form = Forms.current,
          element = form.getElement('city');
      element.val('');
      assert.equal(Forms.current.getErrors().city.length, 1);

      Forms.current.setErrors(externalErrors);
      assert.equal(Forms.current.getErrors().city.length, 2);

      $content.empty();
      delete Forms.current;
    });

    test('External errors should be at the front of the errors array', function(){
      var externalErrors = {
        city: [{code: 'CUSTOM', CUSTOM: 'This is custom text'}]
      };

      var form = Forms.current,
          element = form.getElement('city');

      element.val('');
      assert.equal(Forms.current.getErrors().city[0].code, 'REQUIRED');

      Forms.current.setErrors(externalErrors);
      assert.equal(Forms.current.getErrors().city[0].code, 'CUSTOM');

      $content.empty();
      delete Forms.current;
    });

////////////////////////////////////////////////////////////////////////////////////

    suite('subforms', function(){
      var externalErrors, subFormElement;

      setup(function(){

        externalErrors = {
          'comments': {
              'form2': {
                  '1': {
                      'comment': {
                          'code': 'CUSTOM',
                          'CUSTOM': 'field custom server error',
                          'text': 'field custom server error'
                      }
                  }
              },
              'errors': {
                code: 'CUSTOM',
                CUSTOM: 'this is a custom subform element error'
              }
          }
        };

        subFormElement = Forms.current.getElement('comments');

        // add two 'comment' subforms to the test page
        // mocha will wait for the promise to resolve before doing the tests. sweet!
        return subFormElement.add().then(function(){ return subFormElement.add(); });
      });

      teardown(function(){
        externalErrors = undefined;
        subFormElement = undefined;
      });

      test('We can set a custom error message on a subform *element*', function(){
          var errorMessages;

          Forms.current.setErrors(externalErrors);
          errorMessages = Forms.current.getErrors();

          assert.equal(errorMessages.comments[0].code, 'CUSTOM');
          assert.equal(errorMessages.comments[0].CUSTOM, 'this is a custom subform element error');

          $content.empty();
          delete Forms.current;
      });

      test('We can set a custom error message on an element in a specific subform', function(){
        var formElement, customError;

        Forms.current.setErrors(externalErrors);

        //make sure the first sub form field of the same name has no custom error
        formElement = subFormElement.getForm(0).getElement('comment');
        assert.equal(_.where(formElement.validationError, {code: 'CUSTOM'}).length, 0);

        //now make sure the correct sub form field has an error
        formElement = subFormElement.getForm(1).getElement('comment');

        assert.isDefined(formElement.validationError);
        customError = _.where(formElement.validationError.value, {code: 'CUSTOM'});

        assert.equal(customError.length, 1);
        assert.equal(customError[0].CUSTOM, 'field custom server error');
      });
    });
  });
});
