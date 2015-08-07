define([
  'underscore',
  'sinon',
  'BlinkForms',
  'testUtils',
  'BIC'
], function (_, sinon, Forms, testUtils) {

  function runTests (cases, element) {
    var key, value;
    if (!Object.keys(cases).length) {
      return Promise.resolve();
    }

    key = Object.keys(cases).shift();
    value = cases[key];
    delete cases[key];

    // deal with the first case
    return testUtils.whenNewValueIsValidated(element, value)
    .then(function () {
      var error;
      assert.isObject(
        element.validationError,
        element.attributes.name + ': invalid'
      );
      assert.isArray(
        element.validationError.value,
        element.attributes.name + ': invalid: ' + value
      );
      error = _.find(element.validationError.value, function (e) {
        return _.isObject(e) && e.code === key;
      });
      assert.isObject(
        error,
        element.attributes.name + ': invalid: ' + key
      );

      // handle the remaining cases
      return runTests(cases, element);
    });
  }

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
    var $page = $('[data-role=page]');
    var $content = $page.find('[data-role=content]');
    var elements;

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

      test('render form for jQuery Mobile', function (done) {
        var form = Forms.current;

        $content.append(form.$form);

        $.mobile.page({}, $page);
        $page.trigger('pagecreate');
        $page.show();
        form.attributes.preloadPromise.then(function () {
          done();
        });
      });

      testUtils.defineLabelTest();

      test('initial validation settles within 5sec', function () {
        this.timeout(5e3);
        return testUtils.whenValidationStops();
      });

    }); // END: suite('Form', ...)

    suite('Validation', function () {

      test('textbox required/char-limit=10 test', function () {
        var form = Forms.current;
        var element = form.getElement('textBox1');
        var cases = {
          REQUIRED: '',
          MAXLENGTH: 'abcdefghijk'
        };

        return testUtils.confirmValidValue('test', element)
        .then(function () {
          return runTests(cases, element);
        });
      });

      test('number required/max=100/min=0/max-decimals=3/min-decimals=2 test', function () {
        var form = Forms.current;
        var element = form.getElement('number1');
        var cases = {
          MIN: '-1',
          MAX: '101',
          MINDECIMALS: '100.1',
          MAXDECIMALS: '100.1111'
        };
        this.timeout(Object.keys(cases) * 750);

        return testUtils.confirmValidValue('1', element)
        .then(function () {
          return runTests(cases, element);
        });
      });

      test('email required test', function () {
        var form = Forms.current;
        var element = form.getElement('email');
        var cases = {
          REQUIRED: '',
          EMAIL: 'test@test'
        };

        assert.notOk(element.validationError);

        return runTests(cases, element);
      });

      test('URL required test', function () {
        var form = Forms.current;
        var element = form.getElement('url');
        var cases = {
          REQUIRED: ''
        };

        assert.notOk(element.validationError);

        return runTests(cases, element);
      });

      test('telephone required test', function () {
        var form = Forms.current;
        var element = form.getElement('telephone');
        var cases = {
          REQUIRED: ''
        };

        assert.notOk(element.validationError);

        return runTests(cases, element);
      });

      test('required text', function () {
        var form = Forms.current;
        var element = form.getElement('city');
        var cases = {
          REQUIRED: ''
        };

        assert.notOk(element.validationError);

        return runTests(cases, element)
        .then(function () {
          return testUtils.confirmValidValue('Gosford', element);
        });
      });

      test('max length test', function () {
        var form = Forms.current;
        var element = form.getElement('city');
        var cases = {
          MAXLENGTH: 'GosfordGosfordGosfordGosford'
        };

        assert.notOk(element.validationError);

        return runTests(cases, element)
        .then(function () {
          return testUtils.confirmValidValue('Gosford', element);
        });
      });

      test('pattern test', function () {
        var form = Forms.current;
        var element = form.getElement('city');
        var cases = {
          PATTERN: '12Gosford'
        };

        assert.notOk(element.validationError);

        return runTests(cases, element)
        .then(function () {
          return testUtils.confirmValidValue('Gosford', element);
        });
      });

      test('Min/Max Value Check', function () {
        var form = Forms.current;
        var element = form.getElement('number');
        var cases = {
          PATTERN: 100, // only matches 2-digit numbers
          MIN: 10,
          MAX: 550
        };

        this.timeout(4 * 750);

        // default value is 350 which does not match pattern
        return testUtils.confirmValidValue(30, element)
        .then(function () {
          return runTests(cases, element);
        });
      });

      test('Max Decimal Places Check', function () {
        var form = Forms.current;
        var element = form.getElement('number');
        var cases = {
          MAXDECIMALS: 45.5699
        };

        // removed pattern in order to test decimal places
        delete element.attributes.pattern;

        return testUtils.confirmValidValue(45.25, element)
        .then(function () {
          return runTests(cases, element);
        });
      });

      test('Min Decimal Places Check', function () {
        var form = Forms.current;
        var element = form.getElement('currency');
        var cases = {
          MAXDECIMALS: 45.32365,
          MINDECIMALS: 45.1
        };

        // removed pattern in order to test decimal places
        delete element.attributes.pattern;

        return testUtils.confirmValidValue(45.25, element)
        .then(function () {
          return runTests(cases, element);
        });
      });

      test('Select, required', function () {
        var form = Forms.current;
        var element = form.getElement('select');
        var cases;

        this.timeout(4 * 750);

        return testUtils.confirmValidValue('a', element)
        .then(function () {
          cases = {
            REQUIRED: ''
          };
          return runTests(cases, element);
        })
        .then(function () {
          cases = {
            REQUIRED: 'other'
          };
          return runTests(cases, element);
        })
        .then(function () {
          return testUtils.confirmValidValue('b', element);
        });
      });

      test('Multi select, required', function () {
        var form = Forms.current;
        var element = form.getElement('multi');
        var cases;

        this.timeout(4 * 750);

        return testUtils.confirmValidValue(['a'], element)
        .then(function () {
          cases = {
            REQUIRED: []
          };
          return runTests(cases, element);
        })
        .then(function () {
          cases = {
            REQUIRED: ['other']
          };
          return runTests(cases, element);
        })
        .then(function () {
          return testUtils.confirmValidValue(['b'], element);
        });
      });

      test('valid events are bubbled via Forms.current', function (done) {
        var form = Forms.current;
        var element = form.getElement('city');
        var handler = function () {
          assert.notOk(element.validationError);
          done();
        };

        form.once('invalid valid', handler);
        element.val('Paris');
      });

      test('invalid events are bubbled via Forms.current', function (done) {
        var form = Forms.current;
        var element = form.getElement('city');
        var handler = function () {
          assert.isObject(element.validationError, 'now has a validation error');
          assert.isArray(element.validationError.value, 'something wrong with value');
          done();
        };

        form.once('invalid valid', handler);
        element.val('');
      });

      test('subform[req,min1,max=3]: empty vs REQUIRED', function () {
        var subFormElement = Forms.current.getElement('comments');
        return subFormElement.setRecords([])
        .then(function () {
          return testUtils.whenValidationStops();
        })
        .then(function () {
          assert.isObject(subFormElement.validationError);
          assert.isArray(subFormElement.validationError.value);
          assert.lengthOf(subFormElement.validationError.value, 1);
          assert.ok(subFormElement.validationError.value.every(function (err) {
            return err.code === 'REQUIRED';
          }), 'REQUIRED');
        });
      });

      test('subform[req,min1,max=3]: > MAXSUBFORM', function () {
        var subFormElement = Forms.current.getElement('comments');
        return subFormElement.setRecords([
          { comment: 'abc' },
          { comment: 'def' },
          { comment: 'ghi' },
          { comment: 'jki' }
        ])
        .then(function () {
          return testUtils.whenValidationStops();
        })
        .then(function () {
          assert.isObject(subFormElement.validationError);
          assert.isArray(subFormElement.validationError.value);
          assert.lengthOf(subFormElement.validationError.value, 1);
          assert.ok(subFormElement.validationError.value.every(function (err) {
            return err.code === 'MAXSUBFORM';
          }), 'MAXSUBFORM');
        });
      });

      test('subform[req,min1,max=3]: 3 valid records', function () {
        var subFormElement = Forms.current.getElement('comments');
        return subFormElement.setRecords([
          { comment: 'abc' },
          { comment: 'def' },
          { comment: 'ghi' }
        ])
        .then(function () {
          return testUtils.whenValidationStops();
        })
        .then(function () {
          assert.notOk(subFormElement.validationError);
        });
      });

      test('subform[min=2]: < MINSUBFORM', function () {
        var subFormElement = Forms.current.getElement('names');
        return subFormElement.setRecords([
          { comment: 'abc' }
        ])
        .then(function () {
          return testUtils.whenValidationStops();
        })
        .then(function () {
          assert.isObject(subFormElement.validationError);
          assert.isArray(subFormElement.validationError.value);
          assert.lengthOf(subFormElement.validationError.value, 1);
          assert.ok(subFormElement.validationError.value.every(function (err) {
            return err.code === 'MINSUBFORM';
          }), 'MINSUBFORM');
        });
      });

      test('TODO: test valid subform number containing invalid subrecord');

    }); // END: suite('Form', ...)

    elements = ['textBox1', 'number1', 'password1', 'text', 'url', 'email', 'password', 'streetAddress', 'city', 'telephone', 'number', 'currency', 'select', 'multi'];
    // 'heading', 'message', 'comments', 'names'

    elements.forEach(function (name) {

      suite('"' + name + '" element label', function () {
        var element, view;

        suiteSetup(function () {
          var form = BMP.Forms.current;

          element = form.getElement(name);
          view = element.attributes._view;
        });

        test('label is correct', function () {
          var label$ = view.$el.find('label').first();
          var attr = element.attributes;

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
