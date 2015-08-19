define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {

  testUtils.defineFormLoadSuite('form1', 'add');

  suite('14: Forms Header/Footer', function () {

    test('render form with header and footer', function () {
      var form = Forms.current,
        header = form.attributes._view.$el.find('header'),
        footer = form.attributes._view.$el.find('footer');

      assert(header);
      assert.equal(header.text(), 'Heading........');
      assert(footer);
      assert.equal(footer.text(), 'Footer........');
    });

  }); // END: suite('Form', ...)

});
