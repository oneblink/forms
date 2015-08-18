define([
  'underscore',
  'sinon',
  'BlinkForms',
  'testUtils',
  'BIC'
], function (_, sinon, Forms, testUtils) {

  suite('i18n', function () {
    /* eslint-disable new-cap */

    test('i18n[BMP/geolocation]', function () {
      assert.isFunction(window.i18n['BMP/geolocation'].PERMISSION_DENIED);
      assert.isString(window.i18n['BMP/geolocation'].PERMISSION_DENIED());
    });

    test('i18n[BMP/Forms/validation]', function () {
      assert.isFunction(window.i18n['BMP/Forms/validation'].REQUIRED);
      assert.isString(window.i18n['BMP/Forms/validation'].REQUIRED());
    });

    /* eslint-enable new-cap */
  });

  suite('5: validation', function () {
    var elements;
    var runTests = function (cases, element) {
      var error;

      _.each(cases, function (v, i) {
        element.val(v);
        assert.isObject(element.validate(), 'now has a validation error');
        assert.isArray(element.validate().value, 'something wrong with value');
        error = _.find(element.validate().value, function (e) {
          return _.isObject(e) && e.code === i;
        });

        assert.isObject(error, 'contained ' + i + ' error');
      });
    };

    testUtils.defineFormLoadSuite('form1', 'add');

    suite('Validation', function () {

      test('textbox required/char-limit=10 test', function () {
        var form = Forms.current,
          element = form.getElement('textBox1'),
          cases = {
            "REQUIRED": "",
            "MAXLENGTH": "abcdefghijk"
          };

        element.val('test');
        assert.isUndefined(element.validate(), 'no validation errors');

        runTests(cases, element);

      });

      test('number required/max=100/min=0/max-decimals=3/min-decimals=2 test', function () {
        var form = Forms.current,
          element = form.getElement('number1'),
          cases = {
            "MIN": "-1",
            "MAX": "101",
            "MINDECIMALS": "100.1",
            "MAXDECIMALS": "100.1111"
          };

        element.val('1');
        assert.isUndefined(element.validate(), 'no validation errors');

        runTests(cases, element);
      });

      test('email required test', function () {
        var form = Forms.current,
          element = form.getElement('email'),
          cases = {
            "REQUIRED": "",
            "EMAIL": "test@test"
          };

        assert.isUndefined(element.validate(), 'no validation errors');

        runTests(cases, element);
      });

      test('URL required test', function () {
        var form = Forms.current,
          element = form.getElement('url'),
          cases = {
            "REQUIRED": ""
          };

        assert.isUndefined(element.validate(), 'no validation errors');

        runTests(cases, element);
      });

      test('telephone required test', function () {
        var form = Forms.current,
          element = form.getElement('telephone'),
          cases = {
            "REQUIRED": ""
          };

        assert.isUndefined(element.validate(), 'no validation errors');

        runTests(cases, element);
      });

      test('subform validations test', function (done) {
        var subFormElement = Forms.current.getElement('comments'),
          $view = subFormElement.attributes._view.$el,
          $add = $view.children('.ui-btn').children('button'),
          subForms = subFormElement.attributes.forms;

        assert.equal(subForms.length, 0, 'no subForms yet');
        $add.trigger('click');
        subForms.once('add', function () {
          assert.isObject(subFormElement.validate(), "subform validation fails");
          subForms.at(0).getElement('comment').val('def');
          assert.isUndefined(subFormElement.validate(), "subform validation passes");
          done();
        });
      });

      test('required text', function () {
        var form = Forms.current,
          element = form.getElement('city'),
          requiredError;

        assert.isUndefined(element.validate(), 'no validation errors');

        element.val('');
        assert.isObject(element.validate(), 'now has a validation error');
        assert.isArray(element.validate().value, 'something wrong with value');

        requiredError = _.find(element.validate().value, function (error) {
          return _.isObject(error) && error.code === 'REQUIRED';
        });
        assert.isObject(requiredError, 'contained REQUIRED error');
        element.val('Gosford');
      });
      test('max length test', function () {
        var form = Forms.current,
          element = form.getElement('city');

        element.val('GosfordGosfordGosfordGosford'); // max length fixed is 20
        assert.isObject(element.validate(), 'max length error');
        element.val('Gosford');
      });

      test('pattern test', function () {
        var form = Forms.current,
          element = form.getElement('city');

        element.val('12Gosford');
        assert.isObject(element.validate(), 'Pattern error');
        element.val('Gosford');
      });

      test('Min/Max Value Check', function () {
        var form = Forms.current,
          element = form.getElement('number'),
          cases = {
            'PATTERN': 35,
            'MIN': 10,
            'MAX': 550
          };

        assert.isDefined(element.validate(), 'no validation error');

        // default value is 35 which doesnot match pattern
        runTests(cases, element);

      });

      test('Max Decimal Places Check', function () {
        var form = Forms.current,
          element = form.getElement('number');

        // removed pattern in order to test decimal places
        delete element.attributes.pattern;

        element.val(45.1);
        assert.isUndefined(element.validate(), 'no decimal place error');

        element.val(45.25);
        assert.isUndefined(element.validate(), 'has correct decimal places');

        element.val(45.5699);
        assert.isObject(element.validate(), 'decimal place error');
        element.val(100);
      });

      test('Min Decimal Places Check', function () {
        var form = Forms.current,
          element = form.getElement('currency');

        element.val(45.163);
        assert.isUndefined(element.validate(), 'no min decimal place error');

        element.val(45);
        assert.isUndefined(element.validate(), 'has correct decimal places');

        element.val(45.3);
        assert.isObject(element.validate(), 'min decimal places error');

        element.val(45.32365);
        assert.isObject(element.validate(), 'max decimal places error');
      });

      test('Select, required', function () {
        var form = Forms.current,
          element = form.getElement('select'),
          cases;

        element.val('a');
        assert.isUndefined(element.validate(), 'no validation errors');

        cases = {
          "REQUIRED": ""
        };
        runTests(cases, element);

        cases = {
          "REQUIRED": "other"
        };
        runTests(cases, element);
      });

      test('Multi select, required', function () {
        var form = Forms.current,
          element = form.getElement('multi'),
          cases;

        element.val(['a']);
        assert.isUndefined(element.validate(), 'no validation errors');

        cases = {
          "REQUIRED": []
        };
        runTests(cases, element);

        cases = {
          "REQUIRED": ["other"]
        };
        runTests(cases, element);

      });

      function subformValidationTest (errors, element, counter) {
        var validation,
          errorCounter = 0;

        validation = element.validate();
        _.each(validation.value, function (v) {
          assert.notEqual(errors.indexOf(v.code), -1, '(' + counter + ') contained ' + v.code + ' error');
          if (errors.indexOf(v.code) !== -1) {
            errorCounter++;
          }
        });
        assert.equal(errorCounter, validation.value.length, "(" + counter + ") number of total error doesn't match validation array");
        assert.equal(errorCounter, errors.length, "(" + counter + ") number of total error doesn't match");
      }

      test('subform require, min=1 subform test', function () {
        var subFormElement = Forms.current.getElement('comments'),
          subForms = subFormElement.attributes.forms,
          subForm = subForms.at(0),
          errors = ['REQUIRED'];

        assert.equal(subForms.length, 1, 'no subForms yet');

        subForm.parentElement.remove(subForm);
        subformValidationTest(errors, subFormElement, 1);
      });

      test('maximum number of subforms test', function (done) {
        var subFormElement = Forms.current.getElement('comments'),
          $view = subFormElement.attributes._view.$el,
          $add = $view.children('.ui-btn').children('button'),
          subForms = subFormElement.attributes.forms,
          errors;
        this.timeout(3000);
        assert.equal(subForms.length, 0, 'no subForms yet');
        $add.trigger('click');
        $add.trigger('click');
        $add.trigger('click');
        $add.trigger('click');
        setTimeout(function () {
          assert.isObject(subFormElement.validate(), "subform validation fails");

          errors = ['MAXSUBFORM', 'SUBFORM'];
          subformValidationTest(errors, subFormElement, 1);

          subForms.at(0).getElement('comment').val('def');
          subForms.at(1).getElement('comment').val('def');
          subformValidationTest(errors, subFormElement, 2);

          subForms.at(2).getElement('comment').val('def');
          subForms.at(3).getElement('comment').val('def');
          errors = ['MAXSUBFORM'];
          subformValidationTest(errors, subFormElement, 3);

          done();
        }, 1000);
      });

      test('subform require, min=2 subform test', function (done) {
        var subFormElement = Forms.current.getElement('names'),
          $view = subFormElement.attributes._view.$el,
          $add = $view.children('.ui-btn').children('button'),
          subForms = subFormElement.attributes.forms,
          errors;

        assert.equal(subForms.length, 0, 'no subForms yet');

        subFormElement.attributes.preloadPromise.then(function () {
          assert.isObject(subFormElement.validate(), "subform validation fails");
          errors = ['REQUIRED', 'MINSUBFORM'];
          subformValidationTest(errors, subFormElement, 1);

          $add.trigger('click');
          subForms.once('add', function () {
            errors = ['MINSUBFORM', 'SUBFORM'];
            subformValidationTest(errors, subFormElement, 2);

            $add.trigger('click');
            subForms.once('add', function () {
              errors = ['SUBFORM'];
              subformValidationTest(errors, subFormElement, 2);
              done();
            });
          });
        });
      });

      test('validation events are bubbled via Forms.current', function () {
        var form = Forms.current,
          element = form.getElement('city'),
          listenerSpy = sinon.spy();

        form.on('invalid change:value change:blob', listenerSpy);
        assert.isUndefined(element.validate(), 'no validation errors');

        element.val('');
        assert.isObject(element.validate(), 'now has a validation error');
        assert.isArray(element.validate().value, 'something wrong with value');

        assert.isAbove(listenerSpy.callCount, 0);
        listenerSpy.reset();

      });
    }); // END: suite('Validation', ...)

    suite('onKeyDown vs performance', function () {

      test('HTMLInput views have per-instance #onKeyDown()', function () {
        Forms.current.attributes.elements
        .filter(function (el) {
          return [
            'email', 'number', 'password', 'telephone', 'text', 'textarea', 'url'
          ].indexOf(el.attributes.type) !== -1;
        })
        .filter(function (el) {
          return !!el.attributes._view;
        })
        .forEach(function (el) {
          var view = el.attributes._view;
          assert.isFunction(view.onKeyDown, el.id + ' has #onKeyDown()');
          assert.notStrictEqual(
            view.onKeyDown,
            view.constructor.prototype.onKeyDown,
            el.id + '\'s #onKeyDown() is not from prototype'
          );
        });
      });

      test('#onKeyDown() is debounced', function (done) {
        var el = Forms.current.getElement('textBox1');
        var input$ = el.attributes._view.$el.find('input');
        var VALUE = 'debounced?';
        input$.val(VALUE);
        input$.trigger('change');
        assert.notEqual(el.val(), VALUE, 'changes do NOT take immediate effect');
        setTimeout(function () {
          assert.equal(el.val(), VALUE, 'changes DO eventually take effect');
          done();
        }, 1500);
      });

    });

    elements = ['textBox1', 'number1', 'password1', 'text', 'url', 'email', 'password', 'streetAddress', 'city', 'telephone', 'number', 'currency', 'select', 'multi'];
    /* 'heading', 'message', 'comments', 'names' */

    elements.forEach(function (name) {

      suite('"' + name + '" element label', function () {
        var element, view;

        suiteSetup(function () {
          var form = BMP.Forms.current;

          element = form.getElement(name);
          view = element.attributes._view;
        });

        test('label is correct', function () {
          var label$ = view.$el.find('label').first(),
            attr = element.attributes;

          if (attr.required) {
            assert.notEqual(attr.label.indexOf('*'), -1, name + ' is required');
          } else {
            assert.equal(attr.label.indexOf('*'), -1, name + ' is not required');
          }
          assert(label$.length, 'label exists');
          assert.equal(label$.text(), element.get('label'));
        });

        test('label is bound', function () {
          var label$ = view.$el.find('label').first();

          element.set('label', 'ABC');
          assert.equal(label$.text(), 'ABC');
        });

        suiteTeardown(function () {
          element.set('label', element.attributes.name);
        });

      });

    });

  }); // END: suite('1', ...)

});
