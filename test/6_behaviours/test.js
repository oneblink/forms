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

      test('no label gives full width output', function () {});

      test('label set displays like an input formElement', function () {});

      test('defaults to persist=false (no storage)', function () {});

      test('persist=true submits message HTML', function () {});

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

      test('per-definition, calc1exp is empty', function () {
        test('per-definition, Number is initially hidden', function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('calc1exp');

          assert(!element.val());
        });
      });

      test('per-definition, calc2exp is empty', function () {
        test('per-definition, Number is initially hidden', function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('calc2fn');

          assert(!element.val());
        });
      });

      suite('after Text=abc', function () {

        suiteSetup(function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('text');

          element.val('abc');
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

        test('calc1exp is still empty', function () {
          test('per-definition, Number is initially hidden', function () {
            var form = BMP.Forms.currentFormObject,
              element = form.getElement('calc1exp');

            assert(!element.val());
          });
        });

        test('calc2exp is still empty', function () {
          test('per-definition, Number is initially hidden', function () {
            var form = BMP.Forms.currentFormObject,
              element = form.getElement('calc2fn');

            assert(!element.val());
          });
        });

        suite('after Email=abc@abc.com', function () {

          suiteSetup(function () {
            var form = BMP.Forms.currentFormObject,
              element = form.getElement('email');

            element.val('abc@abc.com');
          });

          test('Number is default value', function () {
            var form = BMP.Forms.currentFormObject,
              element = form.getElement('number');

            assert(!element.val());
          });

          /*
          test('calc1exp is zero', function () {});

          test('calc2exp is zero', function () {});
          */

          suite('after Number=123', function () {

            suiteSetup(function () {});

            test('Number is 123', function () {});

            /*
            test('calc1exp is 123', function () {});

            test('calc2exp is 123', function () {});
            */

          }); // END: after Number=123

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

      /*
      test('per-definition, calc1exp is empty', function () {
        test('per-definition, Number is initially hidden', function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('calc1exp');

          assert(!element.val());
        });
      });

      test('per-definition, calc2exp is empty', function () {
        test('per-definition, Number is initially hidden', function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('calc2fn');

          assert(!element.val());
        });
      });
      */

      suite('after unset Email value', function () {

        suiteSetup(function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('email');

          element.val('');
        });

        /*
        test('Number is hidden', function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('number'),
            view = element.attributes._view;

          assert(view.isHidden());
        });
        */

        /*
        test('Number is hidden', function () {
          var form = BMP.Forms.currentFormObject,
            element = form.getElement('number');

          assert(view.isHidden());
        });

        test('calc1exp is zero', function () {});

        test('calc2exp is zero', function () {});
        */

      }); // END: after unset Email

    }); // END: suite('Behaviours: one Element value at a time', ...)

    /**
     * execute once after everything else in this suite
     */
    suiteTeardown(function () {
//      delete Forms.currentFormObject;
    });

  }); // END: suite('1', ...)

});
