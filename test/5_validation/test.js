/*eslint-env mocha*/
/*global assert*/ // chai

define([
  'underscore',
  'BlinkForms',
  'BIC'
], function (_, Forms) {

  suite('5: validation', function () {
    var $page = $('[data-role=page]'),
      $content = $page.find('[data-role=content]'),
      runTests = function (cases, element) {
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
        setTimeout(function () {
          assert.isObject(subFormElement.validate(), "subform validation fails");
          subForms.at(0).getElement('comment').val('def');
          assert.isUndefined(subFormElement.validate(), "subform validation passes");
          done();
        }, 0);
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

        element.val('GosfordGosfordGosfordGosford');//max length fixed is 20
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

        //default value is 35 which doesnot match pattern
        runTests(cases, element);

      });

      test('Max Decimal Places Check', function () {
        var form = Forms.current,
          element = form.getElement('number');

        //removed pattern in order to test decimal places
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

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
