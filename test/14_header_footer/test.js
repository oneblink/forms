define(['BlinkForms', 'testUtils', 'BIC'], function (Forms, testUtils) {

  suite('14: Forms Header/Footer', function () {
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

      testUtils.defineLabelTest();

      test('render form with header and footer', function () {
        var form = Forms.current,
          header = form.attributes._view.$el.find('header'),
          footer = form.attributes._view.$el.find('footer');

        assert(header);
        assert.equal(header.text(), 'Heading........');
        assert(footer);
        assert.equal(footer.text(), 'Footer........');
      });

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
