define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {
  suite('31: Conditional logic in sub forms', function () {
    var form;

    setup(function () {
      return testUtils.loadForm('firstLevel', 'add')
      .then(function () {
        form = Forms.current;
      });
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
  });
});
