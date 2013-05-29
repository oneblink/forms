/*global suite:true, test:true, setup:true, teardown:true*/ // mocha
/*global suiteSetup:true, suiteTeardown:true*/ // mocha
/*global assert:true*/ // chai

define(['underscore', 'q', 'BlinkForms', 'BIC'], function (_, Q, Forms) {

  suite('6: automated behaviours', function () {
    var obj,
      $page = $('[data-role=page]'),
      $content = $page.find('[data-role=content]');

    /**
     * execute once before everything else in this suite
     */
    suiteSetup(function () {
      $content.empty();
      delete Forms.currentFormObject;
    });

    suite('Form', function () {

      test('BlinkForms global is an Object', function () {
        assert($.isPlainObject(Forms), 'BlinkForms is a JavaScript object');
      });

      test('initialise with form.json', function (done) {
        var form;

        Forms.getDefinition('form1', 'add').fail(function () {
          assert.fail(true, false, 'getDefinition failed!');
        }).done(function (def) {
          Forms.initialize(def);
          form = Forms.currentFormObject;
          assert.equal($.type(form), 'object');
          assert.equal(form.get('name'), 'form1');
          assert.equal(form.get('label'), 'Form 1');
          done();
        });

      });

      test('render form for jQuery Mobile', function () {
        var form = Forms.currentFormObject;

        $content.append(form.$form);

        $.mobile.page({}, $page);
        $page.trigger('pagecreate');
        $page.show();
      });

    }); // END: suite('Form', ...)

    suite('Message', function () {

      test('no label gives full width output', function () {
        var form = BMP.Forms.currentFormObject,
          element = form.getElement('message'),
          view = element.attributes._view;

        assert(view.$el.attr('data-rv-html'), 'whole View bound');
      });

      test('label set displays like an input formElement', function () {
        var form = BMP.Forms.currentFormObject,
          element = form.getElement('message'),
          view = element.attributes._view;

        element.set('label', 'Message');
        // TODO: asserts
      });

      test('defaults to persist=false (no storage)', function (done) {
        var form = BMP.Forms.currentFormObject,
          element = form.getElement('message');

        assert.isFalse(element.get('persist'));

        form.data().done(function (data) {
          assert.notProperty(data, 'message');
          done();
        });
      });

      test('persist=true submits message HTML', function (done) {
        var form = BMP.Forms.currentFormObject,
          element = form.getElement('message');

        element.set('persist', true);
        form.data().done(function (data) {
          assert.property(data, 'message');
          assert.isString(data.message);
          assert.match(data.message, /automatic calculations/);
          done();
        });
      });

      suiteTeardown(function () {
        var form = BMP.Forms.currentFormObject,
          element = form.getElement('message');

        element.set('persist', false);
        element.unset('label');
      });

    }); // END: suite('Form', ...)

    suite('Behaviours: set one Element value at a time', function () {

      suiteSetup(function () {
        var form = BMP.Forms.currentFormObject,
          element = form.getElement('text');

        element.val('');
      });

      test('per-definition, 3 Behaviours are defined', function () {
        var form = BMP.Forms.currentFormObject;
        assert.lengthOf(form.attributes.behaviours, 3);
      });

      test('Text is visible', function () {
        var form = BMP.Forms.currentFormObject,
          element = form.getElement('text'),
          view = element.attributes._view;

        assert(!view.isHidden());
      });

      test('per-definition, Email is initially hidden', function () {
        var form = BMP.Forms.currentFormObject,
          element = form.getElement('email'),
          view = element.attributes._view;

        assert(view.isHidden());
      });

      test('per-definition, Number is initially hidden', function () {
        var form = BMP.Forms.currentFormObject,
          element = form.getElement('number'),
          view = element.attributes._view;

        assert(view.isHidden());
      });

      test('record data does not include hidden fields', function (done) {
        var form = BMP.Forms.currentFormObject;
        form.data().done(function (data) {
          assert.notProperty(data, 'email');
          assert.notProperty(data, 'number');
          done();
        });
      });

      suite('after Text=abc', function () {

        suiteSetup(function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('text');

          element.val('abc');
        });

        test('Text is visible', function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('text'),
            view = element.attributes._view;

          assert(!view.isHidden());
        });

        test('Email is visible', function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('email'),
            view = element.attributes._view;

          assert(!view.isHidden());
        });

        test('Number is still hidden', function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('number'),
            view = element.attributes._view;

          assert(view.isHidden());
        });

        test('record data does not include hidden fields', function (done) {
          var form = BMP.Forms.currentFormObject;
          form.data().done(function (data) {
            assert.notProperty(data, 'number');
            done();
          });
        });

        suite('after Email=abc@abc.com', function () {

          suiteSetup(function () {
            var form = BMP.Forms.currentFormObject,
              element = form.getElement('email');

            element.val('abc@abc.com');
          });

          test('Text is visible', function () {
            var form = BMP.Forms.currentFormObject,
              element = form.getElement('text'),
              view = element.attributes._view;

            assert(!view.isHidden());
          });

          test('Email is visible', function () {
            var form = BMP.Forms.currentFormObject,
              element = form.getElement('email'),
              view = element.attributes._view;

            assert(!view.isHidden());
          });

          test('Number is visible', function () {
            var form = BMP.Forms.currentFormObject,
              element = form.getElement('number'),
              view = element.attributes._view;

            assert(!view.isHidden());
          });

        }); // END: after Email=abc@abc.com

      }); // END: after Text=abc

    }); // END: suite('Behaviours: one Element value at a time', ...)

    suite('Behaviours: unset middle Element value', function () {

      suiteSetup(function () {
        var form = BMP.Forms.currentFormObject;

        form.getElement('text').val('abc');
        form.getElement('email').val('abc@abc.com');
        form.getElement('number').val(123);
      });

      test('Text is visible', function () {
        var form = BMP.Forms.currentFormObject,
          element = form.getElement('text'),
          view = element.attributes._view;

        assert(!view.isHidden());
      });

      test('per-definition, Email is initially visible', function () {
        var form = BMP.Forms.currentFormObject,
          element = form.getElement('email'),
          view = element.attributes._view;

        assert(!view.isHidden());
      });

      test('per-definition, Number is initially visible', function () {
        var form = BMP.Forms.currentFormObject,
          element = form.getElement('number'),
          view = element.attributes._view;

        assert(!view.isHidden());
      });

      test('record data includes set values', function (done) {
        var form = BMP.Forms.currentFormObject;
        form.data().done(function (data) {
          assert.equal(data.text, 'abc');
          assert.equal(data.email, 'abc@abc.com');
          assert.equal(data.number, 123);
          done();
        });
      });

      suite('after unset Email value', function () {

        suiteSetup(function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('email');

          element.val('');
        });

        test('Text is visible', function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('text'),
            view = element.attributes._view;

          assert(!view.isHidden());
        });

        test('Email is visible', function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('email'),
            view = element.attributes._view;

          assert(!view.isHidden());
        });

        test('Number is hidden', function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('number'),
            view = element.attributes._view;

          assert(view.isHidden());
        });

        test('record data does not include hidden fields', function (done) {
          var form = BMP.Forms.currentFormObject;
          form.data().done(function (data) {
            assert.equal(data.text, 'abc');
            assert.notProperty(data, 'email');
            assert.notProperty(data, 'number');
            done();
          });
        });

      }); // END: after unset Email

    }); // END: suite('Behaviours: unset middle Element value', ...)

    suite('Behaviours: unset top Element value', function () {

      suiteSetup(function () {
        var form = BMP.Forms.currentFormObject;

        form.getElement('text').val('abc');
        form.getElement('email').val('abc@abc.com');
        form.getElement('number').val(123);
      });

      test('Text is visible', function () {
        var form = BMP.Forms.currentFormObject,
          element = form.getElement('text'),
          view = element.attributes._view;

        assert(!view.isHidden());
      });

      test('per-definition, Email is initially visible', function () {
        var form = BMP.Forms.currentFormObject,
          element = form.getElement('email'),
          view = element.attributes._view;

        assert(!view.isHidden());
      });

      test('per-definition, Number is initially visible', function () {
        var form = BMP.Forms.currentFormObject,
          element = form.getElement('number'),
          view = element.attributes._view;

        assert(!view.isHidden());
      });

      test('record data includes set values', function (done) {
        var form = BMP.Forms.currentFormObject;
        form.data().done(function (data) {
          assert.equal(data.text, 'abc');
          assert.equal(data.email, 'abc@abc.com');
          assert.equal(data.number, 123);
          done();
        });
      });

      suite('after unset Text value', function () {

        suiteSetup(function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('text');

          element.val('');
        });

        test('Text is visible', function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('text'),
            view = element.attributes._view;

          assert(!view.isHidden());
        });

        test('Email is hidden', function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('email'),
            view = element.attributes._view;

          assert(view.isHidden());
        });

        test('Number is hidden', function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('number'),
            view = element.attributes._view;

          assert(view.isHidden());
        });

        test('record data does not include hidden fields', function (done) {
          var form = BMP.Forms.currentFormObject;
          form.data().done(function (data) {
            assert.notProperty(data, 'text');
            assert.notProperty(data, 'email');
            assert.notProperty(data, 'number');
            done();
          });
        });

      }); // END: after unset Text

    }); // END: suite('Behaviours: unset middle Element value', ...)

    suite('Behaviours: v2 Calculations', function () {

      suiteSetup(function () {
        var form = BMP.Forms.currentFormObject;

        form.getElement('number').val(123);
      });


      test('record data includes set values', function (done) {
        var form = BMP.Forms.currentFormObject;
        form.data().done(function (data) {
          assert.equal(data.calc1exp, 123);
          assert.equal(data.calc2fn, 123);
          done();
        });
      });

      suite('after unset Number value', function () {

        suiteSetup(function () {
          var form = BMP.Forms.currentFormObject;

          form.getElement('number').val('');
        });

        test('record data includes Calculation fields', function (done) {
          var form = BMP.Forms.currentFormObject;
          form.data().done(function (data) {
            assert.equal(data.calc1exp, 0);
            assert.equal(data.calc2fn, 0);
            done();
          });
        });

      }); // END: after unset Text

    }); // END: suite('Behaviours: unset middle Element value', ...)

    /**
     * execute once after everything else in this suite
     */
    suiteTeardown(function () {
//      delete Forms.currentFormObject;
    });

  }); // END: suite('1', ...)

});
