define(['BlinkForms', 'BIC'], function (Forms) {
  suite('31.3 behaviors still work when fields are hidden in a subform', function () {
    var $page, $content;
    suiteSetup(function () {
      /* eslint-disable no-unused-expressions */
      Forms.current && Forms.current.off();
      delete Forms.current;
      $content && $content.empty();
      /* eslint-enable no-unused-expressions */

      $page = $('[data-role=page]');
      $content = $page.find('[data-role=content]');

      return Forms.getDefinition('firstLevel', 'add').then(function (def) {
        Forms.initialize(def);

        $content.append(Forms.current.$form);
        $.mobile.page({}, $page);
        $page.trigger('pagecreate');
        $page.show();
      });
    });

    suite('when a field is hidden and it throws an error on subform creation', function () {
      teardown(function () {
        // release any behavior listeners
        Forms.off('behavioursExecuted');
      });

      test('the `behavioursExecuted` is still emitted', function (done) {
        Forms.on('behavioursExecuted', function () {
          done();
        });
        // you will see a console error because as per feedback, the error is
        // left in to notify the forms developer that the behaivors and subform
        // configurtation should probably be re-done
        Forms.current.getElement('second_level_test').add();
      });

      test('other field behaviors still work', function (done) {
        Forms.on('behavioursExecuted', function () {
          assert.isTrue(Forms.current.getElement('second_level_text').get('hidden'));

          done();
        });

        assert.isFalse(Forms.current.getElement('second_level_text').get('hidden'));
        Forms.current.getElement('trigger_field').val('b');
      });
    });
  });
});
