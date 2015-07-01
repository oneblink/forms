/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'testUtils', 'BIC'], function (Forms, testUtils) {

  var nativedate = [
    'date',
    'datetime'
  ], nativetime = [
    'time',
    'datetime'
  ], pickadate = [
    'datenow',
    'datefromnowplus',
    'datefromdate',
    'datetimenow'
  ], pickatime = [
    'timenow',
    'timenowplus',
    'timenowtime',
    'datetimenow'
  ];



  suite('1: date/time', function () {
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

      test('use datetime field - avoid undefined', function () {
        var form = Forms.current,
          element = form.getElement('datetimenonative'),
          $fieldset = element.attributes._view.$el,
          date = $fieldset.find('input[name="datetimenonative_date"]'),
          time = $fieldset.find('input[name="datetimenonative_time"]');

        date.val("2014-02-01").change();
        assert.equal(element.val(), "2014-02-01T00:00");

        date.val("").change();
        time.val("").change();
        time.val("10:11").change();
        assert.equal(element.val(), "0000-00-00T10:11");
      });

      test('use datetime field - organise elements properly on screen', function () {
        var form = Forms.current,
          element = form.getElement('datetimenonative'),
          $fieldset = element.attributes._view.$el.children(),
          elementsInOrder = [
            'LABEL',
            'DIV',
            'LABEL',
            'DIV'
          ];

        elementsInOrder.forEach(function (v, k) {
          assert.equal($($fieldset[k]).prop('tagName'), v);
        });
      });

      test('use native picker defaults to native picker', function () {
        var form = Forms.current,
          element,
          $fieldset;
        nativedate.forEach(function (fld) {
          element = form.getElement(fld);
          $fieldset = element.attributes._view.$el;
          assert.equal($fieldset.find('input[name="' + fld + '_date"]').attr('type'), 'date');
        });
        nativetime.forEach(function (fld) {
          element = form.getElement(fld);
          $fieldset = element.attributes._view.$el;
          assert.equal($fieldset.find('input[name="' + fld + '_time"]').attr('type'), 'time');
        });
      });

      test('pickerElements outside page', function() {
        var form = Forms.current,
          element,
          $fieldset,
          $input,
          $body = $('body');

        setTimeout(function () {
          pickadate.forEach(function (fld) {
            element = form.getElement(fld);
            $fieldset = element.attributes._view.$el;
            $input = $fieldset.find('input[name="' + fld + '_date"]');

            assert.equal($input.hasClass('picker__input'), true);
            assert.equal($body.find("#" + $input.attr('id') + "_root.picker").length, 1);
            assert.equal($body.find("#" + $input.attr('id') + "_root.picker").parent().hasClass('ui-body-c'), true);
          });

          pickatime.forEach(function (fld) {
            element = form.getElement(fld);
            $fieldset = element.attributes._view.$el;
            $input = $fieldset.find('input[name="' + fld + '_time"]');

            assert.equal($input.hasClass('picker__input'), true);
            assert.equal($body.find("#" + $input.attr('id') + "_root.picker--time").length, 1);
            assert.equal($body.find("#" + $input.attr('id') + "_root.picker--time").parent().hasClass('ui-body-c'), true);
          });
        }, 100);
      });

      suite('readonly, hidden', function () {
        var readonly = [
            'dateTimeRonlyNone',
            'dateTimeRonlyNow',
            'dateTimeRonlyNowP',
            'dateTimeRonlyNowPM'
          ],
          hidden = [
            'dateTimeHiddenNone',
            'dateTimeHiddenNow',
            'dateTimeHiddenNowP',
            'dateTimeHddenNowPM'
          ];

        test('check if readonly fields are actually readonly', function () {
          var form = Forms.current,
            element,
            $fieldset;

          readonly.forEach(function(fld) {
            element = form.getElement(fld);
            $fieldset = element.attributes._view.$el;
            //should not contain any input fields
            assert.equal($fieldset.find("input").length, 0);
            assert.equal(element.attributes.picker, "shown");
            assert(element.attributes.readonly);
          });
        });

        test('check if hidden fields are actually hidden', function () {
          var form = Forms.current,
            element,
            $fieldset;
          hidden.forEach(function(fld) {
            element = form.getElement(fld);
            $fieldset = element.attributes._view.$el;
            //should have display: none set in stylesheet
            assert.equal($fieldset.css('display'), 'none');
            assert.equal(element.attributes.picker, "hidden");
            assert(element.attributes.hidden);
          });
        });

      });

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
