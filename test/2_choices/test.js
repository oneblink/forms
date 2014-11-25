/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {

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

      test('select-1 collapsed', function () {
        var form = Forms.current,
          element = form.getElement('selectc'),
          $fieldset = element.attributes._view.$el,
          $span = $fieldset.find('.ui-btn-text');

        element.val('');
        assert.equal(element.val(), '', 'model.value is ""');

        element.val('a');
        assert.equal(element.val(), 'a', 'model.value = "a"');
        assert.equal($span.text(), 'alpha', 'jQM shows "alpha"');

        element.val('b');
        assert.equal(element.val(), 'b', 'model.value = "b"');
        assert.equal($span.text(), 'beta', 'jQM shows "beta"');

        // TODO: test UI causes side-effect in model
      });

      test('select-multi collapsed', function () {
        var form = Forms.current,
          element = form.getElement('multic'),
          $fieldset = element.attributes._view.$el,
          $span = $fieldset.find('.ui-btn-text');

        element.val([]);
        assert.deepEqual(element.val(), [], 'model.value is []');

        element.val(['a']);
        assert.deepEqual(element.val(), ['a'], 'model.value = ["a"]');
        assert.equal($span.text(), 'alpha', 'jQM shows "alpha"');

        element.val(['a', 'b']);
        assert.deepEqual(element.val(), ['a', 'b'], 'model.value = ["a", "b"]');
        assert.equal($span.text(), 'alpha, beta', 'jQM shows "alpha, beta"');

        // TODO: test UI causes side-effect in model
      });

      test('select-1 expanded', function () {
        var form = Forms.current,
          element = form.getElement('selecte'),
          $fieldset = element.attributes._view.$el;

        element.val('');
        assert.equal(element.val(), '', 'model.value is ""');
        assert.equal($fieldset.find('ui-btn-active').length, 0, 'jQM is blank');

        element.val('a');
        assert.equal(element.val(), 'a', 'model.value = "a"');

        element.val('b');
        assert.equal(element.val(), 'b', 'model.value = "b"');

        $fieldset.find('label:contains(gamma)').trigger('click');
        assert.equal(element.val(), 'g', 'model.value = "g"');
      });

      test('select-multi expanded', function () {
        var form = Forms.current,
          element = form.getElement('multie'),
          $fieldset = element.attributes._view.$el;

        element.val('');
        assert.equal(element.val(), '', 'model.value is ""');
        assert.equal($fieldset.find('ui-btn-active').length, 0, 'jQM is blank');

        element.val(['a']);
        assert.deepEqual(element.val(), ['a'], 'model.value = ["a"]');

        element.val(['a', 'b']);
        assert.deepEqual(element.val(), ['a', 'b'], 'model.value = ["a", "b"]');

        $fieldset.find('.ui-btn-text:contains(beta)').trigger('click');
        $fieldset.find('.ui-btn-text:contains(gamma)').trigger('click');
        assert.deepEqual(element.val(), ['a', 'g'], 'model.value = ["a", "g"]');
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

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
