/*global suite:true, test:true, setup:true, teardown:true*/ // mocha
/*global suiteSetup:true, suiteTeardown:true*/ // mocha
/*global assert:true*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {

  suite('18: calculations', function () {
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

    }); // END: suite('Form', ...)

    suite('Behaviours: v2 Calculations', function () {

      suiteSetup(function () {
        var form = BMP.Forms.current;

        form.getElement('test1').val("test11");
        form.getElement('test2').val("test22");
      });


      test('record data includes set values', function (done) {
        var form = BMP.Forms.current,
          element = form.getElement('calc_button'),
          $view = element.attributes._view.$el,
          $calc = $view.children('.ui-btn').children('button');

        $calc.trigger('click');
        form.data().then(function (data) {
          assert.equal(data.calc, "test11test22");
          done();
        });

      });

      test('changing field value does not run behaviour', function (done) {
        var form = BMP.Forms.current;

        form.getElement('test1').val("test12");
        form.getElement('test2').val("test12");

        form.data().then(function (data) {
          assert.equal(data.calc, "test11test22");
          done();
        });

      });

    }); // END: suite('Behaviours: unset middle Element value', ...)

  }); // END: suite('1', ...)

});
