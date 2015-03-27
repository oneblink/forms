/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {

  var originalOptions = { a: 'alpha', b: 'beta', g: 'gamma' };
  var choiceElements = [ 'selectc', 'selecte', 'multic', 'multie', 'multif',
      'selectf', 'multig', 'selecth' ];
  var multiWithOther = [ 'multic', 'multie', 'multif', 'multig' ];
  var collapsed = [ 'selectc', 'multic', 'selectf' ];

  suite('2: options', function () {
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

      test('select-1 collapsed API -> UI bindings', function () {
        var form = Forms.current,
          element = form.getElement('selectc'),
          $fieldset = element.attributes._view.$el,
          $span = $fieldset.find('.ui-btn-text'),
          $select = $fieldset.find('select'),
          $other;

        element.val('');
        $other = $fieldset.find('input[type = text]');
        assert.equal($select.val(), 'select one...', 'form element value is "select one"..."');
        assert.equal($other.length, 0, 'other box absent');

        element.val('a');
        $other = $fieldset.find('input[type = text]');
        assert.equal($select.val(), 'a', 'form element value = "a"');
        assert.equal($span.text(), 'alpha', 'jQM shows "alpha"');
        assert.equal($other.length, 0, 'other box absent');

        element.val('b');
        $other = $fieldset.find('input[type = text]');
        assert.equal($select.val(), 'b', 'form element value = "b"');
        assert.equal($span.text(), 'beta', 'jQM shows "beta"');
        assert.equal($other.length, 0, 'other box absent');

        element.val('other');
        $other = $fieldset.find('input[type = text]');
        assert.equal($select.val(), 'other', 'form element value = "other"');
        assert.equal($other.length, 1, 'other box exists');
        assert.equal($other.val(), '', 'other box is empty');

        // Include this test here to make the other box dissapear
        // Then test what happens when an 'other' value is directly inserted
        // This pattern repeated in all test suites below for coverage
        element.val('');
        $other = $fieldset.find('input[type = text]');
        assert.equal($select.val(), 'select one...', 'form element value is "select one"..."');
        assert.equal($other.length, 0, 'other box absent');

        element.val('cat');
        $other = $fieldset.find('input[type = text]');
        assert.equal($select.val(), 'other', 'form element value = "other"');
        assert.equal($other.length, 1, 'other box exists');
        assert.equal($other.val(), 'cat', 'other box is has value "cat"');
      });

      test('select-1 collapsed UI -> API bindings');

      test('select-1 expanded API -> UI bindings', function () {
        var form = Forms.current,
        element = form.getElement('selecte'),
        $fieldset = element.attributes._view.$el,
        $selected,
        $other;

        element.val('');
        $selected = $fieldset.find('input[type = radio]:checked');
        $other = $fieldset.find('input[type = text]');
        assert.equal($selected.length, 0, 'no form element selected');
        assert.equal($other.length, 0, 'other box absent');

        element.val('a');
        $selected = $fieldset.find('input[type = radio]:checked').val();
        $other = $fieldset.find('input[type = text]');
        assert.equal($selected, 'a', 'form element value = "a"');
        assert.equal($other.length, 0, 'other box absent');

        element.val('b');
        $selected = $fieldset.find('input[type = radio]:checked').val();
        $other = $fieldset.find('input[type = text]');
        assert.equal($selected, 'b', 'form element value = "b"');
        assert.equal($other.length, 0, 'other box absent');

        element.val('other');
        $selected = $fieldset.find('input[type = radio]:checked').val();
        $other = $fieldset.find('input[type = text]');
        assert.equal($selected, 'other', 'form element value = "other"');
        assert.equal($other.length, 1, 'other box exists');
        assert.equal($other.val(), '', 'other box is empty');

        element.val('');
        $selected = $fieldset.find('input[type = radio]:checked');
        $other = $fieldset.find('input[type = text]');
        assert.equal($selected.length, 0, 'no form element selected');
        assert.equal($other.length, 0, 'other box absent');

        element.val('cat');
        $selected = $fieldset.find('input[type = radio]:checked').val();
        $other = $fieldset.find('input[type = text]');
        assert.equal($selected, 'other', 'form element value = "other"');
        assert.equal($other.length, 1, 'other box exists');
        assert.equal($other.val(), 'cat', 'other box is "cat"');
      });

      test('select-1 expanded UI -> API bindings', function () {
        // UI -> API bindings
        var form = Forms.current,
        element = form.getElement('selecte'),
        $fieldset = element.attributes._view.$el;

        $fieldset.find('label:contains(gamma)').trigger('click');
        assert.equal(element.val(), 'g', 'model.value = "g"');
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

          if (collapsed.indexOf(name) !== -1) {
            assert.notEqual($view.find('select').data("role"), "none", name + ': data-role is not none');
          }
        });
      });

      test('Select-F native collapsed', function () {
        var form = Forms.current,
          element = form.getElement('selectf'),
          $fieldset = element.attributes._view.$el,
          $select = $fieldset.find('select');

        element.val('');
        assert.equal(element.val(), '', 'model.value is ""');

        element.val('a');
        assert.equal(element.val(), 'a', 'model.value = "a"');

        element.val('b');
        assert.equal(element.val(), 'b', 'model.value = "b"');

        assert.equal($select.data("role"), "none", "data-role is not none");

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

        assert.equal($select.data("role"), "none", "data-role is not none");

      });

      test('Select-H native collapsed', function () {
        var form = Forms.current,
          element = form.getElement('selecth'),
          $fieldset = element.attributes._view.$el,
          $select = $fieldset.find('select'),
          $other;

        element.val('');
        assert.equal(element.val(), '', 'model.value is ""');

        element.val('other');
        assert.equal(element.val(), 'other', 'model.value = "other"');

        element.val('other');
        $other = $fieldset.find('input[type = text]');
        $other.val("test");
        $other.change();
        assert.equal(element.val(), 'test', 'model.value = "test"');

        assert.equal($select.data("role"), "none", "data-role is not none");

      });

      test('boolean 0/1', function (done) {
        var form = Forms.current,
          element = form.getElement('boolean'),
          $fieldset = element.attributes._view.$el;

        element.val('');
        assert.equal(element.val(), '', 'model.value is ""');
        assert.equal($fieldset.find('ui-btn-active').length, 0, 'jQM is blank');

        element.val(0);
        assert.equal(element.val(), 0, 'model.value = 0');

        setTimeout(function () {
          element.val(1);
          assert.equal(element.val(), 1, 'model.value = 1');

          setTimeout(function () {
            $fieldset.find('div.ui-slider-switch').trigger('mousedown').trigger('mouseup').trigger('click');
            assert.equal(element.val(), 0, 'model.value = 0');
            done();
          }, 500);

        }, 500);


      });

      test('boolean n/y', function (done) {
        var form = Forms.current,
          element = form.getElement('question'),
          $fieldset = element.attributes._view.$el;

        element.val('');
        assert.equal(element.val(), '', 'model.value is ""');
        assert.equal($fieldset.find('ui-btn-active').length, 0, 'jQM is blank');

        element.val('n');
        assert.equal(element.val(), 'n', 'model.value = "n"');

        setTimeout(function () {
          element.val('y');
          assert.equal(element.val(), 'y', 'model.value = "y"');

          setTimeout(function () {
            $fieldset.find('div.ui-slider-switch').trigger('mousedown').trigger('mouseup').trigger('click');
            assert.equal(element.val(), 'n', 'model.value = "n"');
            done();
          }, 500);
        }, 500);

      });

      test('elements have original a|b|g options', function () {
        var form = Forms.current;
        choiceElements.forEach(function (name) {
          var element = form.getElement(name);
          var currentOptions = element.get('options');
          assert.deepEqual(currentOptions, originalOptions, name + ' ' + JSON.stringify(currentOptions));
        });
      });

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});


/*
TODO
SelectC ...chose one bugs out
*/
