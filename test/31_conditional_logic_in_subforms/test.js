define(['BlinkForms', 'BIC'], function (Forms) {

  suite('31: Conditional logic in sub forms', function () {
    var $page, $content, form;

    setup(function () {
      /* eslint-disable no-unused-expressions */
      Forms.current && Forms.current.off();
      delete Forms.current;
      $content && $content.empty();
      /* eslint-enable no-unused-expressions */
      $page = undefined;
      $content = undefined;
      form = undefined;

      $page = $('[data-role=page]');
      $content = $page.find('[data-role=content]');

      return Forms.getDefinition('firstLevel', 'add').then(function (def) {
        Forms.initialize(def);
        form = Forms.current;

        $content.append(Forms.current.$form);
        $.mobile.page({}, $page);
        $page.trigger('pagecreate');
        $page.show();
      });
    });

    teardown(function () {
      // Forms.current.off();
      // $content.empty();
      // delete Forms.current;

      // $page = undefined;
      // $content = undefined;
      // form = undefined;
    });

    suite('required fields', function () {
      test('when visible and not valid, should be counted towards the number of invalid fields', function () {
        var view = form.getElement('second_level_field').get('_view');
        var startNumErrors = form.getInvalidElements().length;

        return view.onAddClick().then(function () {
          var conditionalElement = Forms.current.getElement('cond_hidden');

          assert.isDefined(conditionalElement);
          assert.isDefined(conditionalElement.validationError);
          assert.isAbove(form.getInvalidElements().length, startNumErrors);

        });
      });

      test('when visible and valid, should not be counted towards the number of invalid fields', function (done) {
        var view = form.getElement('second_level_field').get('_view');
        var startNumErrors = form.getInvalidElements.length;

        view.onAddClick().then(function () {
          var conditionalElement = Forms.current.getElement('cond_hidden');
          Forms.current.getElement('second_required').val('a');

          conditionalElement.on('change:hidden', function () {
            assert.isDefined(conditionalElement);
            assert.equal(!conditionalElement.validationError, true);

            assert.strictEqual(form.getInvalidElements().length, startNumErrors);

            done();
          });
        });
      });

      test('when not visible and not valid, should not be counted towards the number of invalid fields', function (done) {
        var view = form.getElement('second_level_field').get('_view');

        view.onAddClick().then(function () {
          var conditionalElement = Forms.current.getElement('cond_hidden');
          assert.isDefined(conditionalElement);

          conditionalElement.on('change:hidden', function () {
            assert.equal(!conditionalElement.validationError, true);

            // make sure that the conditional element is included in the
            // list of invalid elements
            Forms.current.getInvalidElements().errors.forEach(function (element) {
              assert.notEqual(element.cid, conditionalElement.cid);
            });
            done();
          });

          Forms.current.getElement('second_required').val('a');
        });
      });
    });

    suite('fields in a subform', function () {
      setup(function () {
        return Forms.current.getElement('second_level_field').add();
      });

      test('that are defined as hidden have the hidden attribute set', function () {
        assert.isTrue(Forms.current.getElement('third_level_field').get('hidden'));
      });

      test('that are not defined as hidden have the hidden attribute set', function () {
        assert.isFalse(Forms.current.getElement('second_required').get('hidden'));
      });

      test('dont break when referenced by conditional logic', function () {

      });
    });

  });
});
