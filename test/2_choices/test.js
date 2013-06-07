/*global suite:true, test:true, setup:true, teardown:true*/ // mocha
/*global suiteSetup:true, suiteTeardown:true*/ // mocha
/*global assert:true*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {

  suite('2: options', function () {
    var $page = $('[data-role=page]'),
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

      test('select-1 collapsed', function () {
        var form = Forms.currentFormObject,
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
        var form = Forms.currentFormObject,
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
        var form = Forms.currentFormObject,
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
        var form = Forms.currentFormObject,
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

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
