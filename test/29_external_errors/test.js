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
      $content.empty();
      delete Forms.current;
    });

    test('External errors set show up on form', function(){
      var element = Forms.current.getElement('textBox1')
        , externalErrors = {
            textBox1: [{code: 'CUSTOM', CUSTOM: 'This is custom text'}]
          };
      element.val('1'); //field is marked aas required in the definition
      Forms.current.setErrors(externalErrors);

      assert.isAbove(element.get('_view').$el.find('.bm-errors__bm-list-item').text().indexOf('This is custom text'), -1);
      assert.equal(Forms.current.getErrors().textBox1[0].CUSTOM, 'This is custom text');
    });

    test('External errors set show up on form when set on an element model', function(){
      var element = Forms.current.getElement('textBox1')
        , externalErrors = [{code: 'CUSTOM', CUSTOM: 'This is custom text'}];

      element.val('1'); //field is marked aas required in the definition
      element.setExternalErrors(externalErrors);

      assert.isAbove(element.get('_view').$el.find('.bm-errors__bm-list-item').text().indexOf('This is custom text'), -1);
      assert.equal(Forms.current.getErrors().textBox1[0].CUSTOM, 'This is custom text');
    });

    test('External errors override built in errors of the same name', function(){
      var externalErrors = {
        number1: [{code: 'MAX', MAX: 5, text: 'Field Max adjusted from 100 to 5'}]
      };
      var el = Forms.current.getElement('number1');
      el.val('afdasdasdaf');
      Forms.current.setErrors(externalErrors);
      assert.equal(Forms.current.getErrors().number1[0].MAX, 5);
    });

    test('External errors should be cleared when field is altered', function(){
      Forms.current
           .getElement('textBox1')
           .val('1');

      assert.isUndefined(Forms.current.getErrors().textBox1);
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
    });
  });
});
