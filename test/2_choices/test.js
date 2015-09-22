define(['BlinkForms', 'testUtils', 'underscore'], function (Forms, testUtils, _) {
  var originalOptions = { a: 'alpha', b: 'beta', g: 'gamma' };
  var newOptions = { d: 'delta', e: 'epsilon', z: 'zeta' };
  var choiceElements = [ 'selectc', 'selecte', 'multic', 'multie', 'multif',
      'selectf', 'multig', 'selecth' ];
  var multiWithOther = [ 'multic', 'multie', 'multif', 'multig' ];
  var selectWithOther = [ 'selectc', 'selecte', 'selectf', 'selecth' ];

  testUtils.defineFormLoadSuite('form1', 'add');

  suite('2: options', function () {
    test('select+other bindings between model and "other" input', function () {
      var form = Forms.current;
      selectWithOther.forEach(function (name) {
        var value;
        var element = form.getElement(name);
        var $view = element.get('_view').$el;
        var $other;
        var $checked;

        element.val('');
        $other = $view.find('input[type=text]');
        assert.notOk(element.val(), name + ': model value is falsey');
        // assert.lengthOf($selected, 0, name + ': nothing checked');
        assert.lengthOf($other, 0, name + ': other box absent');

        value = 'a';
        element.val(value);
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.equal(element.val(), value, name + ': model value correct');
        assert.lengthOf($checked, 1, name + ': 1 checked');
        assert.lengthOf($other, 0, name + ': other box absent');
        assert.equal($checked.val(), value, name + ': model value correct');

        value = '123';
        element.val(value);
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.deepEqual(element.val(), value, name + ': model value correct');
        assert.lengthOf($checked, 1, name + ': 1 checked');
        assert.lengthOf($other, 1, name + ': other box present');
        assert.equal($other.val(), '123', name + ': other box shows "123"');
        assert.equal($checked.val(), 'other', name + ': model value correct');

        element.val('');
        $other = $view.find('input[type=text]');
        assert.notOk(element.val(), name + ': model value is falsey');
        // assert.lengthOf($selected, 0, name + ': nothing checked');
        assert.lengthOf($other, 0, name + ': other box absent');

        if (element.get('nativeMenu')) {
          assert.equal($view.find('select').data('role'), 'none', name + ': data-role is not none');
        } else {
          assert.notEqual($view.find('select').data('role'), 'none', name + ': data-role is not none');
        }
      });
    });

    test('multi+other bindings between model and "other" input', function () {
      var form = Forms.current;
      multiWithOther.forEach(function (name) {
        var value;
        var element = form.getElement(name);
        var $view = element.get('_view').$el;
        var $other;
        var $checked;

        element.val('');
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.notOk(element.val(), name + ': model value is falsey');
        assert.lengthOf($checked, 0, name + ': nothing checked');
        assert.lengthOf($other, 0, name + ': other box absent');

        value = ['a'];
        element.val(value);
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.deepEqual(element.val(), value, name + ': model value correct');
        assert.lengthOf($checked, 1, name + ': 1 checked');
        assert.lengthOf($other, 0, name + ': other box absent');
        assert.deepEqual($checked.map(function () {
          return $(this).val();
        }).get(), value, name + ': model value correct');

        value = ['a', 'b'];
        element.val(value);
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.deepEqual(element.val(), value, name + ': model value correct');
        assert.lengthOf($checked, 2, name + ': 2 checked');
        assert.lengthOf($other, 0, name + ': other box absent');
        assert.deepEqual($checked.map(function () {
          return $(this).val();
        }).get(), value, name + ': model value correct');

        value = [''];
        element.val(value);
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.deepEqual(element.val(), value, name + ': model value correct');
        assert.lengthOf($checked, 1, name + ': 1 checked');
        assert.lengthOf($other, 1, name + ': other box present');
        assert.equal($other.val(), '', name + ': other box empty');

        value = ['a', ''];
        element.val(value);
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.deepEqual(element.val(), value, name + ': model value correct');
        assert.lengthOf($checked, 2, name + ': 2 checked');
        assert.lengthOf($other, 1, name + ': other box present');
        assert.equal($other.val(), '', name + ': other box empty');
        assert.deepEqual($checked.map(function () {
          return $(this).val();
        }).get(), ['a', 'other'], name + ': model value correct');

        value = ['123'];
        element.val(value);
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.deepEqual(element.val(), value, name + ': model value correct');
        assert.lengthOf($checked, 1, name + ': 1 checked');
        assert.lengthOf($other, 1, name + ': other box present');
        assert.equal($other.val(), '123', name + ': other box shows "123"');
        assert.deepEqual($checked.map(function () {
          return $(this).val();
        }).get(), ['other'], name + ': model value correct');

        value = ['a', '123'];
        element.val(value);
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.deepEqual(element.val(), value, name + ': model value correct');
        assert.lengthOf($checked, 2, name + ': 2 checked');
        assert.lengthOf($other, 1, name + ': other box present');
        assert.equal($other.val(), '123', name + ': other box shows "123"');
        assert.deepEqual($checked.map(function () {
          return $(this).val();
        }).get(), ['a', 'other'], name + ': model value correct');

        element.val('');
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.notOk(element.val(), name + ': model value is falsey');
        assert.lengthOf($checked, 0, name + ': nothing checked');
        assert.lengthOf($other, 0, name + ': other box absent');

        if (element.get('nativeMenu')) {
          assert.equal($view.find('select').data('role'), 'none', name + ': data-role is not none');
        } else {
          assert.notEqual($view.find('select').data('role'), 'none', name + ': data-role is not none');
        }
      });
    });

    test('Multi-F native collapsed', function () {
      var form = Forms.current,
        element = form.getElement('multif'),
        $fieldset = element.attributes._view.$el,
        $select = $fieldset.find('select');

      element.val([]);
      assert.deepEqual(element.val(), [], 'model.value is []');

      element.val(['a']);
      assert.deepEqual(element.val(), ['a'], 'model.value = ["a"]');

      element.val(['a', 'b']);
      assert.deepEqual(element.val(), ['a', 'b'], 'model.value = ["a", "b"]');

      assert.equal($select.data('role'), 'none', 'data-role is not none');
    });

    ['boolean', 'question'].forEach(function (name) {
      test(name + ': model->view', function (done) {
        var form = Forms.current,
          element = form.getElement(name),
          options = Object.keys(element.get('options')),
          $fieldset = element.attributes._view.$el;

        Promise.resolve()
        .then(function () {
          element.val('');
          return testUtils.wait(500);
        })
        .then(function () {
          assert.equal(element.val(), options[0], name + ': default value');
          assert.equal($fieldset.find('.ui-btn-active').css('width'), '0px');

          element.val(options[0]);
          return testUtils.wait(500);
        })
        .then(function () {
          assert.equal(element.val(), options[0], name + ': value=' + options[0]);
          assert.equal($fieldset.find('.ui-btn-active').css('width'), '0px');

          element.val(options[1]);
          return testUtils.wait(500);
        })
        .then(function () {
          assert.equal(element.val(), options[1], name + ': value=' + options[1]);
          assert.notEqual($fieldset.find('.ui-btn-active').css('width'), '0px');
        })
        .then(done, done);
      });

      test(name + ': view->model', function (done) {
        var form = Forms.current,
          element = form.getElement(name),
          options = Object.keys(element.get('options')),
          $fieldset = element.attributes._view.$el;

        Promise.resolve()
        .then(function () {
          element.val('');
          return testUtils.wait(500);
        })
        .then(function () {
          assert.equal(element.val(), options[0], name + ': default value');
          assert.equal($fieldset.find('.ui-btn-active').css('width'), '0px');

          $fieldset.find('div.ui-slider-switch').trigger('mousedown').trigger('mouseup').trigger('click');
          return testUtils.wait(500);
        })
        .then(function () {
          assert.equal(element.val(), options[1], name + ': value=' + options[1]);
          assert.notEqual($fieldset.find('.ui-btn-active').css('width'), '0px');

          $fieldset.find('div.ui-slider-switch').trigger('mousedown').trigger('mouseup').trigger('click');
          return testUtils.wait(500);
        })
        .then(function () {
          assert.equal(element.val(), options[0], name + ': value=' + options[0]);
          assert.equal($fieldset.find('.ui-btn-active').css('width'), '0px');
        })
        .then(done, done);
      });
    });

    ['selectc', 'multic', 'multif', 'multig', 'multiee'].forEach(function (name) {
      test(name + ': model->view', function () {
        var form = Forms.current,
          element = form.getElement(name),
          $el = element.attributes._view.$el;

        if (element.attributes.type === 'multi') {
          element.val(['b']);
        } else {
          element.val('b');
        }
        assert.equal($el.find('.ui-select .ui-btn-text').text(), 'beta');

        element.val('');
        if (element.attributes.type === 'multi') {
          assert.equal($el.find('.ui-select .ui-btn-text').text(), 'select one or more...');
        } else {
          assert.equal($el.find('.ui-select .ui-btn-text').text(), 'select one...');
        }
      });

      test(name + ': view->model', function () {
        var form = Forms.current;
        var element = form.getElement(name);
        var $el = element.attributes._view.$el;
        var $a = $el.children('.ui-select').find('[role=button]');
        var $popup;
        var $item;

        $a.trigger('click');
        $popup = $($a.attr('href'));
        assert.lengthOf($popup, 1);

        $item = $popup.find('[data-option-index=3]');
        assert.equal($item.text().trim(), 'gamma');

        $item.find('a').trigger('click');
        if (element.attributes.type === 'multi') {
          assert.deepEqual(element.val(), ['g']);
        } else {
          assert.equal(element.val(), 'g');
        }
      });
    });

    ['selectf', 'selecth'].forEach(function (name) {
      test(name + ': model->view', function () {
        var form = Forms.current,
          element = form.getElement(name),
          $el = element.attributes._view.$el;

        element.val('b');
        assert.equal($el.find('select').val(), 'b');

        element.val('');
        assert($el.find('select').val());
      });

      test(name + ': view->model', function () {
        var form = Forms.current,
          element = form.getElement(name),
          $el = element.attributes._view.$el;

        $el.find('select').val('g').trigger('change');
        assert.equal(element.val(), 'g');
      });
    });

    ['selecte', 'multie'].forEach(function (name) {
      test(name + ': model->view', function () {
        var form = Forms.current,
          element = form.getElement(name),
          $el = element.attributes._view.$el;

        if (element.attributes.type === 'multi') {
          element.val(['b']);
          assert.equal($el.find('.ui-checkbox-on').text().trim(), 'beta');
        } else {
          element.val('b');
          assert.equal($el.find('.ui-radio-on').text().trim(), 'beta');
        }

        if (element.attributes.type === 'multi') {
          element.val([]);
          assert.lengthOf($el.find('.ui-checkbox-on'), 0);
        } else {
          element.val('');
          assert.lengthOf($el.find('.ui-radio-on'), 0);
        }
      });

      test(name + ': view->model', function () {
        var form = Forms.current,
          element = form.getElement(name),
          $el = element.attributes._view.$el;

        if (element.attributes.type === 'multi') {
          $el.find('.ui-checkbox').eq(2).children('label').trigger('click');
          assert.deepEqual(element.val(), ['g']);
        } else {
          $el.find('.ui-radio').eq(2).children('label').trigger('click');
          assert.equal(element.val(), 'g');
        }
      });
    });

    test('elements have original a|b|g options', function () {
      var form = Forms.current;
      choiceElements.forEach(function (name) {
        var element = form.getElement(name);
        var currentOptions = element.get('options');
        assert.deepEqual(currentOptions, originalOptions, name + ' ' + JSON.stringify(currentOptions));
      });
    });

    test('elements set to d|e|z options', function () {
      var form = Forms.current;
      choiceElements.forEach(function (name) {
        var element = form.getElement(name);
        // var currentOptions = element.get('options');
        element.set('options', newOptions);
      });
    });

    test('select+other bindings between model and "other" input', function () {
      var form = Forms.current;
      selectWithOther.forEach(function (name) {
        var value;
        var element = form.getElement(name);
        var $view = element.get('_view').$el;
        var $other;
        var $checked;

        element.val('');
        $other = $view.find('input[type=text]');
        assert.notOk(element.val(), name + ': model value is falsey');
        // assert.lengthOf($selected, 0, name + ': nothing checked');
        assert.lengthOf($other, 0, name + ': other box absent');

        value = 'd';
        element.val(value);
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.equal(element.val(), value, name + ': model value correct');
        assert.lengthOf($checked, 1, name + ': 1 checked');
        assert.lengthOf($other, 0, name + ': other box absent');
        assert.equal($checked.val(), value, name + ': model value correct');

        value = '123';
        element.val(value);
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.deepEqual(element.val(), value, name + ': model value correct');
        assert.lengthOf($checked, 1, name + ': 1 checked');
        assert.lengthOf($other, 1, name + ': other box present');
        assert.equal($other.val(), '123', name + ': other box shows "123"');
        assert.equal($checked.val(), 'other', name + ': model value correct');

        element.val('');
        $other = $view.find('input[type=text]');
        assert.notOk(element.val(), name + ': model value is falsey');
        // assert.lengthOf($selected, 0, name + ': nothing checked');
        assert.lengthOf($other, 0, name + ': other box absent');

        if (element.get('nativeMenu')) {
          assert.equal($view.find('select').data('role'), 'none', name + ': data-role is not none');
        } else {
          assert.notEqual($view.find('select').data('role'), 'none', name + ': data-role is not none');
        }
      });
    });

    test('multi+other bindings between model and "other" input', function () {
      var form = Forms.current;
      multiWithOther.forEach(function (name) {
        var value;
        var element = form.getElement(name);
        var $view = element.get('_view').$el;
        var $other;
        var $checked;

        element.val('');
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.notOk(element.val(), name + ': model value is falsey');
        assert.lengthOf($checked, 0, name + ': nothing checked');
        assert.lengthOf($other, 0, name + ': other box absent');

        value = ['d'];
        element.val(value);
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.deepEqual(element.val(), value, name + ': model value correct');
        assert.lengthOf($checked, 1, name + ': 1 checked');
        assert.lengthOf($other, 0, name + ': other box absent');
        assert.deepEqual($checked.map(function () {
          return $(this).val();
        }).get(), value, name + ': model value correct');

        value = ['d', 'e'];
        element.val(value);
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.deepEqual(element.val(), value, name + ': model value correct');
        assert.lengthOf($checked, 2, name + ': 2 checked');
        assert.lengthOf($other, 0, name + ': other box absent');
        assert.deepEqual($checked.map(function () {
          return $(this).val();
        }).get(), value, name + ': model value correct');

        value = [''];
        element.val(value);
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.deepEqual(element.val(), value, name + ': model value correct');
        assert.lengthOf($checked, 1, name + ': 1 checked');
        assert.lengthOf($other, 1, name + ': other box present');
        assert.equal($other.val(), '', name + ': other box empty');

        value = ['d', ''];
        element.val(value);
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.deepEqual(element.val(), value, name + ': model value correct');
        assert.lengthOf($checked, 2, name + ': 2 checked');
        assert.lengthOf($other, 1, name + ': other box present');
        assert.equal($other.val(), '', name + ': other box empty');
        assert.deepEqual($checked.map(function () {
          return $(this).val();
        }).get(), ['d', 'other'], name + ': model value correct');

        value = ['123'];
        element.val(value);
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.deepEqual(element.val(), value, name + ': model value correct');
        assert.lengthOf($checked, 1, name + ': 1 checked');
        assert.lengthOf($other, 1, name + ': other box present');
        assert.equal($other.val(), '123', name + ': other box shows "123"');
        assert.deepEqual($checked.map(function () {
          return $(this).val();
        }).get(), ['other'], name + ': model value correct');

        value = ['d', '123'];
        element.val(value);
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.deepEqual(element.val(), value, name + ': model value correct');
        assert.lengthOf($checked, 2, name + ': 2 checked');
        assert.lengthOf($other, 1, name + ': other box present');
        assert.equal($other.val(), '123', name + ': other box shows "123"');
        assert.deepEqual($checked.map(function () {
          return $(this).val();
        }).get(), ['d', 'other'], name + ': model value correct');

        element.val('');
        $other = $view.find('input[type=text]');
        $checked = $view.find(':checked');
        assert.notOk(element.val(), name + ': model value is falsey');
        assert.lengthOf($checked, 0, name + ': nothing checked');
        assert.lengthOf($other, 0, name + ': other box absent');

        if (element.get('nativeMenu')) {
          assert.equal($view.find('select').data('role'), 'none', name + ': data-role is not none');
        } else {
          assert.notEqual($view.find('select').data('role'), 'none', name + ': data-role is not none');
        }
      });
    });

    test('FORMS-139 # select with values containing space', function () {
      // UI -> API bindings
      var form = Forms.current,
        element = form.getElement('select_space'),
        $fieldset = element.attributes._view.$el;

      $fieldset.find('label:contains(Second)').trigger('click');
      assert.equal(element.val(), 'Second', 'model.value = "Second"');
      $fieldset.find('label:contains("First value")').trigger('click');
      assert.equal(element.val(), 'First value', 'model.value = "First value"');
    });

    test('FORMS-177 # BIC-JQM: Multiselect boxes don\'t always work as expected', function () {
      var form = Forms.current,
        element = form.getElement('multiee'),
        $fieldset = element.attributes._view.$el,
        $a = $fieldset.find('a');

      assert.equal($a.length, 1);

      $a.trigger('click');

      assert.equal($('body').find($a.attr('href')).length, 1);
    });

    test('FORMS-179 # Radio button and check box groups sometimes contain an "Undefined" option', function () {
      var form = Forms.current,
        checkbox = form.getElement('Checkboxes'),
        $chkEl = checkbox.attributes._view.$el,
        radio = form.getElement('Radios'),
        $radEl = radio.attributes._view.$el;

      checkbox.set('value', ['test']);
      assert.equal($chkEl.find('input[type="text"]').length, 0, 'textbox for checkboxes is visible');
      radio.set('value', 'test');
      assert.equal($radEl.find('input[type="text"]').length, 0, 'textbox for radios is visible');
    });

    suite('FORMS-206 # choice fields that are required but not-empty still block validation', function () {
      var form,
        element,
        fields = {
          'multicollapsedrequired': ['a'],
          'multiexpandedrequired': ['a'],
          'selectcollapsedrequired': 'a',
          'selectexpandedrequired': 'a'
        };

      suiteSetup(function () {
        form = Forms.current;
      });

      _.each(fields, function (v, k) {
        test(k, function (done) {
          element = form.getElement(k);
          assert.equal(element.attributes._view.$el.children('ul').children('li').length, 1);
          element.set('value', v);
          assert.equal(element.attributes._view.$el.children('ul').children('li').length, 0);
          element.set('value', null);
          assert.equal(element.attributes._view.$el.children('ul').children('li').length, 1);
          done();
        });
      });
    });
  }); // END: suite('Form', ...)

  suite('change page', function () {
    suiteSetup(function (done) {
      choiceElements.forEach(function (name) {
        var el = Forms.current.getElement(name);
        if (el.get('type') === 'multi') {
          el.val(['d']);
        } else {
          el.val('d');
        }
      });
      Forms.current.getElement('boolean').val(1);
      Forms.current.getElement('question').val('y');
      setTimeout(function () {
        Forms.current.get('pages').goto(1);
        setTimeout(function () {
          Forms.current.get('pages').goto(0);
          done();
        }, 497);
      }, 497);
    });

    test('DOM reflects model value correctly', function () {
      choiceElements.forEach(function (name) {
        var el = Forms.current.getElement(name);
        var el$ = el.get('_view').$el;
        var input$;
        if (el.get('mode') === 'collapsed') { // select
          input$ = el$.find('select');
        } else { // input[type=radio]
          input$ = el$.find('input:checked');
        }
        assert.equal(input$.val(), 'd', name + '\'s DOM is up to date');
      });
    });

    test('DOM reflects model value correctly: boolean', function () {
      var el = Forms.current.getElement('boolean');
      var select$ = el.get('_view').$el.find('select');
      assert.equal(select$.val(), 1);
    });

    test('DOM reflects model value correctly: question', function () {
      var el = Forms.current.getElement('question');
      var select$ = el.get('_view').$el.find('select');
      assert.equal(select$.val(), 'y');
    });

    test('all [data-role=fieldcontain] enhanced', function () {
      var fieldcontain$ = $('[data-role=fieldcontain]');
      var enhanced$ = $('[data-role=fieldcontain].ui-field-contain');
      assert.equal(fieldcontain$.length, enhanced$.length);
    });

    test('all non-native fields should be jQM-enhanced', function () {
      Forms.current.get('elements')
      .where({ nativeMenu: false })
      .forEach(function (el) {
        var name = el.get('name');
        var view$ = el.get('_view').$el;
        var select$ = view$.find('select');
        var enhSelect$ = select$.closest('.ui-select');
        assert.equal(select$.length, enhSelect$.length, name + ': <select> enhanced');
      });
    });
  });
});

/*
TODO
SelectC ...chose one bugs out
*/
