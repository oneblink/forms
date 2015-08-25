define(['BlinkForms', 'testUtils', 'underscore', 'moment', 'BIC'], function (Forms, testUtils, _, moment) {

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
    'datetimenow',
    'date column'
  ], pickatime = [
    'timenow',
    'timenowplus',
    'timenowtime',
    'datetimenow',
    'time column'
  ];

  function defineModelToViewTests () {
    test('model->value', function (done) {
      setTimeout(function () {
        Forms.current.get('elements').forEach(function (el) {
          var value = el.val();
          var name = el.get('name');
          var time = el.get('_time');
          var date = el.get('_date');
          var type = el.get('type');
          var time$, date$, format;
          if (type === 'hidden') {
            return;
          }
          time$ = el.get('_view').$el.find('input[name$=_time]');
          date$ = el.get('_view').$el.find('input[name$=_date]');
          if (value && !el.get('readonly')) {
            if (type !== 'time') {
              format = el.mapDateFormats[el.attributes.dateFormat] || 'YYYY-MM-DD';
              assert.lengthOf(date$, 1, name + ': has DOM date');
              if (date$.val() && date) {
                assert.equal(date$.val(), moment(date, 'YYYY-MM-DD').format(format), name + ': DOM date value');
              }
            }
            if (type !== 'date') {
              assert.lengthOf(time$, 1, name + ': has DOM time');
              assert.equal(time$.val(), time, name + ': DOM time value');
            }
          }
        });
        done();
      }, 1e3);
    });
  }

  function defineViewToModelTests () {
    test('view->model', function (done) {
      setTimeout(function () {
        Forms.current.get('elements').forEach(function (el) {
          var date;
          var time;
          var value = el.val();
          var name = el.get('name');
          var type = el.get('type');
          var time$, date$, format, result;
          var nowdate = [
            'datenow',
            'datefromnowplus',
            'dateTimeHiddenNow'
          ];

          if (type === 'hidden') {
            return;
          }
          time$ = el.get('_view').$el.find('input[name$=_time]');
          date$ = el.get('_view').$el.find('input[name$=_date]');
          if (value && !el.get('readonly')) {
            if (type !== 'time') {
              format = el.mapDateFormats[el.attributes.dateFormat] || 'YYYY-MM-DD';
              if (_.indexOf(nowdate, name) > -1) {
                date = moment().format('YYYY-MM-DD');
              } else if (name === 'datefromdate') {
                date = '2014-03-10';
              } else {
                date = "2015-06-10";
              }
              result = moment(date).format(format);
              date$.val(result);
              date$.trigger('change');
              assert.lengthOf(date$, 1, name + ': has DOM date');
              assert.equal(date$.val(), result, name + ': DOM date value');
              assert.equal(date, el.get('_date'), name + ': _date value');
            }
            if (type !== 'date') {
              time = "10:00";
              time$.val(time);
              time$.trigger('change');
              assert.lengthOf(time$, 1, name + ': has DOM time');
              assert.equal(time$.val(), time, name + ': DOM time value');
              assert.equal(time$.val(), el.get('_time'), name + ': _time value');
            }
          }
        });
        done();
      }, 1e3);
    });
  }

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

      test('all now and now_plus models have non-empty values', function () {
        Forms.current.get('elements').forEach(function (el) {
          var defaultValue = el.get('defaultValue');
          if (defaultValue && defaultValue.indexOf('now') !== -1) {
            assert.ok(el.val(), el.get('name') + ': non-empty');
          }
        });
      });

      test('all models with no default have non-empty values', function () {
        Forms.current.get('elements').forEach(function (el) {
          var defaultValue = el.get('defaultValue');
          if (!defaultValue) {
            assert.notOk(el.val(), el.get('name') + ': empty');
          }
        });
      });

      defineModelToViewTests();
      defineViewToModelTests();

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

      ['_date', '_time'].forEach(function (subtype) {
        var elements = subtype === '_date' ? pickadate : pickatime;

        elements.forEach(function (fld) {

          test('pickerElements outside page: ' + fld, function (done) {
            var form = Forms.current;

            this.timeout(3e3);

            setTimeout(function () {

              var element = form.getElement(fld);
              var $fieldset = element.attributes._view.$el;
              var $input = $fieldset.find('input[name="' + fld + subtype + '"]');
              var $root = $("#" + $input.attr('id') + "_root.picker");

              assert.equal($input.hasClass('picker__input'), true);
              assert.equal($root.length, 1);
              assert.equal($root.parent().hasClass('ui-body-c'), true);

              assert(!!element);

              done();
            }, 300);
          });

        });

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

          readonly.forEach(function (fld) {
            element = form.getElement(fld);
            $fieldset = element.attributes._view.$el;
            // should not contain any input fields
            assert.equal($fieldset.find("input").length, 0);
            assert.equal(element.attributes.picker, "shown");
            assert(element.attributes.readonly);
          });
        });

        test('check if hidden fields are actually hidden', function () {
          var form = Forms.current,
            element,
            $fieldset;
          hidden.forEach(function (fld) {
            element = form.getElement(fld);
            $fieldset = element.attributes._view.$el;
            // should have display: none set in stylesheet
            assert.equal($fieldset.css('display'), 'none');
            assert.equal(element.attributes.picker, "hidden");
            assert(element.attributes.hidden);
          });
        });

        defineModelToViewTests();
        defineViewToModelTests();
      });

      suite('native, date assignment', function () {
        var native = [
          // 'dateTimeNativePickerNone',
          'dateTimeNativePickerNow',
          'dateTimeNativePickerNowP',
          'dateTimeNativePckerNowPM'
        ];

        test('check if date fields have correct values', function () {
          var form = Forms.current,
            element,
            $fieldset,
            $input;

          native.forEach(function (fld) {
            element = form.getElement(fld);
            $fieldset = element.attributes._view.$el;
            // should contain date field
            $input = $fieldset.find("input[type='date']");
            assert.equal($input.length, 1);
            assert($input.val(), "no value assigned to $input");
          });
        });

        defineModelToViewTests();
        defineViewToModelTests();
      });

      suite('picker value assignment', function () {
        var pickadate = [
          'datenonative',
          'datetimenonative',
          'datenow',
          'datefromnowplus',
          'datefromdate',
          'datetimenow',
          'dateTimeHiddenNone',
          'dateTimeHiddenNow',
          'dateTimeHiddenNowP',
          'dateTimeHddenNowPM',
          'dateTimePickerNone',
          'dateTimePickerNow',
          'dateTimePickerNowP',
          'dateTimePckerNowPM'
        ];

        test('element value assignment reflected in picker, model, view ', function (done) {
          setTimeout(function () {
              pickadate.forEach(function (fld) {
                var form = Forms.current;
                var el = form.getElement(fld);
                var type = el.get('type');
                var nowdate = [
                  'datenow',
                  'datefromnowplus',
                  'dateTimeHiddenNow'
                ];
                var date$ = el.get('_view').$el.find('input[name$=_date]');
                var picker = date$.pickadate('picker');
                var dateFormat = el.mapDateFormats[el.attributes.dateFormat] || "YYYY-MM-DD";
                var expected, date;

                if (type !== 'time') {
                  if (_.indexOf(nowdate, fld) > -1) {
                    date = moment().format('YYYY-MM-DD');
                  } else if (fld === 'datefromdate') {
                    date = '2014-03-10';
                  } else {
                    date = "2015-06-10";
                  }
                  el.val(date);
                  expected = moment(date).format(dateFormat);

                  assert.equal(date$.val(), expected, fld + ': DOM date value');
                  assert.equal(el.get('_date'), date, fld + ': _date value');
                  if (type === 'datetime') {
                    assert.equal(el.val().split('T')[0], el.get('_date'), fld + ': element value');
                  } else {
                    assert.equal(el.val(), el.get('_date'), fld + ': element value');
                  }
                  if (picker) {
                    assert.equal(picker.get('select', 'yyyy-mm-dd'), el.get('_date'), fld + ': picker value');
                  }
                }
              });
              done();
            }, 1e3);
        });
      });

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
