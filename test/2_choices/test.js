/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {

  var originalOptions = { a: 'alpha', b: 'beta', g: 'gamma' };
  var choiceElements = [ 'selectc', 'selecte', 'multic', 'multie', 'multif',
      'selectf', 'multig', 'selecth' ];

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

      test('select-multi collapsed API -> UI bindings', function () {
        var form = Forms.current,
          element = form.getElement('multic'),
          $fieldset = element.attributes._view.$el,
          $span = $fieldset.find('.ui-btn-text'),
          $select = $fieldset.find('select'),
          $selected,
          $other,
          val;

        element.val([]);
        $selected = $select.find(':checked');
        $other = $fieldset.find('input[type = text]');
        assert.equal($span.text(), 'select one or more...', 'jQM shows "select one or more..."');
        assert.equal($selected.length, 0, 'no elements selected');
        assert.equal($other.length, 0, 'other box absent');

        element.val(['a']);
        $selected = $select.find(':checked');
        $other = $fieldset.find('input[type = text]');
        assert.equal($span.text(), 'alpha', 'jQM shows "alpha"');
        assert.equal($selected.length, 1, '1 element selected');
        val = _.map($selected, function (input) {
          return $(input).val();
        });
        assert.deepEqual(val, ['a'], 'element has a selected');
        assert.equal($other.length, 0, 'other box absent');

        element.val(['a', 'b']);
        $selected = $select.find(':checked');
        $other = $fieldset.find('input[type = text]');
        assert.equal($span.text(), 'alpha, beta', 'jQM shows "alpha, beta"');
        assert.equal($selected.length, 2, '2 elements selected');
        val = _.map($selected, function (input) {
          return $(input).val();
        });
        assert.deepEqual(val, ['a', 'b'], 'element has a & b selected');
        assert.equal($other.length, 0, 'other box absent');

        element.val(['a', 'b', 'other']);
        $selected = $select.find(':checked');
        $other = $fieldset.find('input[type = text]');
        assert.equal($span.text(), 'alpha, beta, other', 'jQM shows "alpha, beta, other"');
        assert.equal($selected.length, 3, '3 elements selected');
        val = _.map($selected, function (input) {
          return $(input).val();
        });
        assert.deepEqual(val, ['a', 'b', 'other'], 'element has a, b & other selected');
        assert.equal($other.length, 1, 'other box present');
        assert.equal($other.val(), '', 'other box empty');

        element.val([]);
        $selected = $select.find(':checked');
        $other = $fieldset.find('input[type = text]');
        assert.equal($span.text(), 'select one or more...', 'jQM shows "select one or more..."');
        assert.equal($selected.length, 0, 'no elements selected');
        assert.equal($other.length, 0, 'other box absent');

        element.val(['a', 'b', 'cat']);
        $selected = $select.find(':checked');
        $other = $fieldset.find('input[type = text]');
        assert.equal($span.text(), 'alpha, beta, other', 'jQM shows "alpha, beta, other"');
        assert.equal($selected.length, 3, '3 elements selected');
        val = _.map($selected, function (input) {
          return $(input).val();
        });
        assert.deepEqual(val, ['a', 'b', 'other'], 'element has a, b & other selected');
        assert.equal($other.length, 1, 'other box present');
        assert.equal($other.val(), 'cat', 'other box contains "cat"');

        assert.notEqual($select.data("role"), "none", "data-role is none");
      });

      test('select-multi expanded API -> UI bindings', function () {
        var form = Forms.current,
          element = form.getElement('multie'),
          $fieldset = element.attributes._view.$el,
          $selected,
          $other,
          val;

        element.val('');
        $selected = $fieldset.find(':checked');
        $other = $fieldset.find('input[type = text]');
        assert.equal($selected.length, 0, 'no items selected');
        assert.equal($other.length, 0, 'other box absent');

        element.val(['a']);
        $selected = $fieldset.find(':checked');
        $other = $fieldset.find('input[type = text]');
        assert.equal($selected.length, 1, '1 item selected');
        val = _.map($selected, function (input) {
          return $(input).val();
        });
        assert.deepEqual(val, ['a'], 'element has a selected');
        assert.equal($other.length, 0, 'other box absent');

        element.val(['a', 'b']);
        $selected = $fieldset.find(':checked');
        $other = $fieldset.find('input[type = text]');
        assert.equal($selected.length, 2, '2 items selected');
        val = _.map($selected, function (input) {
          return $(input).val();
        });
        assert.deepEqual(val, ['a', 'b'], 'element has a & b selected');
        assert.equal($other.length, 0, 'other box absent');

        element.val(['a', 'b', 'other']);
        $selected = $fieldset.find(':checked');
        $other = $fieldset.find('input[type = text]');
        assert.equal($selected.length, 3, '3 items selected');
        val = _.map($selected, function (input) {
          return $(input).val();
        });
        assert.deepEqual(val, ['a', 'b', 'other'], 'element has a, b & other selected');
        assert.equal($other.length, 1, 'other box present');
        assert.equal($other.val(), '', 'other box empty');

        element.val('');
        $selected = $fieldset.find(':checked');
        $other = $fieldset.find('input[type = text]');
        assert.equal($selected.length, 0, 'no items selected');
        assert.equal($other.length, 0, 'other box absent');

        element.val(['a', 'b', 'cat']);
        $selected = $fieldset.find(':checked');
        $other = $fieldset.find('input[type = text]');
        assert.equal($selected.length, 3, '3 items selected');
        val = _.map($selected, function (input) {
          return $(input).val();
        });
        assert.deepEqual(val, ['a', 'b', 'other'], 'element has a, b, other selected');
        assert.equal($other.length, 1, 'other box present');
        assert.equal($other.val(), 'cat', 'other box contains "cat"');

        $fieldset.find('.ui-btn-text:contains(beta)').trigger('click');
        $fieldset.find('.ui-btn-text:contains(gamma)').trigger('click');
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

      test('Multi-G native collapsed', function () {
        var form = Forms.current,
          element = form.getElement('multig'),
          $fieldset = element.attributes._view.$el,
          $select = $fieldset.find('select'),
          $other;

        element.val([]);
        assert.deepEqual(element.val(), [], 'model.value is []');

        element.val(['other']);
        assert.sameMembers(element.val(), ['other'], 'model.value = ["other"]');

        element.val(['other']);
        $other = $fieldset.find('input[type = text]');
        $other.val("test123");
        $other.change();
        assert.sameMembers(element.val(), ['test123'], 'model.value = ["test123"]');

        element.val(['a', 'other']);
        assert.sameMembers(element.val(), ['a', 'other'], 'model.value = ["a", "other"]');

        element.val(['b', 'other']);
        $other = $fieldset.find('input[type = text]');
        $other.val("test");
        $other.change();
        assert.sameMembers(element.val(), ['b', 'test'], 'model.value = ["b", "test"]');

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
