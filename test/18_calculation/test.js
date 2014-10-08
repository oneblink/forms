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

        form.getElement('number').val(123);
      });


      test('record data includes set values', function (done) {
        var form = BMP.Forms.current;
        form.data().then(function (data) {
          assert.equal(data.calc1exp, 123);
          assert.equal(data.calc2fn, 123);
          done();
        });
      });

      suite('after unset Number value', function () {

        suiteSetup(function () {
          var form = BMP.Forms.current;

          form.getElement('number').val('');
        });

        test('record data includes Calculation fields', function (done) {
          var form = BMP.Forms.current;
          form.data().then(function (data) {
            assert.equal(data.calc1exp, 0);
            assert.equal(data.calc2fn, 0);
            done();
          });
        });

      }); // END: after unset Text

    }); // END: suite('Behaviours: unset middle Element value', ...)

  }); // END: suite('1', ...)

});
