/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {

  suite('8: blobs', function () {
    var $page = $('[data-role=page]'),
      $content = $page.find('[data-role=content]');

    /**
     * execute once before everything else in this suite
     */
    suiteSetup(function () {
      $content.empty();
      delete Forms.current;
    });

    suite('Form', function () {

      test('BlinkForms global is an Object', function () {
        assert($.isPlainObject(Forms), 'BlinkForms is a JavaScript object');
      });

      test('initialise with form.json', function (done) {
        var form;

        Forms.getDefinition('form1', 'add').then(function (def) {
          Forms.initialize(def);
          form = Forms.current;
          assert.equal($.type(form), 'object');
          assert.equal(form.get('name'), 'form1');
          assert.equal(form.get('label'), 'Form 1');
          done();
        }, function () {
          assert.fail(true, false, 'getDefinition failed!');
          done();
        });
      });

      test('render form for jQuery Mobile', function () {
        var form = Forms.current;

        $content.append(form.$form);

        $.mobile.page({}, $page);
        $page.trigger('pagecreate');
        $page.show();
      });

      test('location button is enabled', function (done) {
        var form = Forms.current,
          element = form.getElement('location'),
          view = element.get('_view'),
          button = view.$el.find('button');

        element.once('change:value change:errors', function () {
          setTimeout(function () {
            assert.isFalse(button.hasClass('ui-disabled'));
            done();
          }, 100);
        });

        button.trigger('click');

      });

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
