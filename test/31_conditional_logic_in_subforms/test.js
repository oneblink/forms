define(['BlinkForms', 'testUtils', 'BIC'], function (Forms, testUtils) {

  suite('31: Conditional logic in sub forms', function () {
    var $page, $content, form;

    setup(function () {
      this.timeout(5e3);

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
      })
      .then(function () {
        return testUtils.whenValidationStops();
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

    testUtils.defineLabelTest();

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

      test('when not visible and valid, should not be counted towards the number of invalid fields', function () {
        var view = form.getElement('second_level_field').get('_view');
        var startNumErrors = form.getInvalidElements.length;

        return view.onAddClick()
        .then(function () {
          return testUtils.confirmValidValue('a', Forms.current.getElement('second_required'));
        })
        .then(function () {
          var conditionalElement = Forms.current.getElement('cond_hidden');
          assert.isDefined(conditionalElement);
          assert.ok(conditionalElement.get('hidden'), 'hidden');
          assert.notOk(conditionalElement.validationError);

          assert.strictEqual(form.getInvalidElements().length, startNumErrors);
        });
      });

      test('when visible and not valid, should be counted towards the number of invalid fields', function () {
        var view = form.getElement('second_level_field').get('_view');
        var conditionalElement;

        this.timeout(3e3);

        return view.onAddClick()
        .then(function () {
          return testUtils.confirmValidValue(
            'b',
            Forms.current.getElement('second_required')
          );
        })
        .then(function () {
          conditionalElement = Forms.current.getElement('cond_hidden');
          assert.isDefined(conditionalElement);
          assert.notOk(conditionalElement.get('hidden'), 'visible');

          return testUtils.confirmInvalidValue('', conditionalElement);
        })
        .then(function () {
          return testUtils.whenValidationStops();
        })
        .then(function () {
          assert.ok(conditionalElement.validationError);
          assert.deepEqual(
            [
              'first_level_req',
              'cond_hidden',
              'second_level_field'
            ],
            BMP.Forms.current.getInvalidElements().errors.map(function (el) {
              return el.id;
            })
          );
        });
      });
    });

  });
});
