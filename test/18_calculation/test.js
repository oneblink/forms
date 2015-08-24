define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {

  testUtils.defineFormLoadSuite('form1', 'add');

  suite('18: calculations', function () {

    suite('Behaviours: v2 Calculations', function () {

      suiteSetup(function () {
        var form = BMP.Forms.current;

        form.getElement('test1').val("test11");
        form.getElement('test2').val("test22");
      });

      test('record data includes set values', function (done) {
        var form = BMP.Forms.current,
          element = form.getElement('calc_button'),
          $view = element.attributes._view.$el,
          $calc = $view.children('.ui-btn').children('button');

        $calc.trigger('click');
        setTimeout(function () {
          form.data().then(function (data) {
            assert.equal(data.calc, "test11test22");
            done();
          });
        }, 200);
      });

      test('changing field value does not run behaviour', function (done) {
        var form = BMP.Forms.current;

        form.getElement('test1').val("test12");
        form.getElement('test2').val("test12");

        form.data().then(function (data) {
          assert.equal(data.calc, "test11test22");
          done();
        });

      });

    }); // END: suite('Behaviours: unset middle Element value', ...)

  }); // END: suite('1', ...)

});
