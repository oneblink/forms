define(['BlinkForms', 'testUtils', 'BIC'], function (Forms, testUtils) {

  testUtils.defineFormLoadSuite('form1', 'add');

  suite('13: date/time, pages', function () {

    test('starts at page 0', function () {
      var form = Forms.current,
        pages = form.attributes.pages,
        page = pages.current;

      assert.equal(page.index(), 0);
    });

    test('page 0 elements are visible', function () {
      var form = Forms.current,
        names = ['url', 'email', 'password'];

      names.forEach(function (name) {
        var element = form.getElement(name),
          view = element.get('_view');

        assert.isTrue(view.$el.is(':visible'), name + ' is visible');
      });
    });

    test('page 1,2 elements are not present', function () {
      var form = Forms.current,
        names = ['streetAddress', 'city', 'telephone', 'number', 'currency'];

      names.forEach(function (name) {
        var element = form.getElement(name),
          view = element.get('_view');

        assert(!view, name + ' is not present');
      });
    });

    test('go t page 2 and check datepicker element', function (done) {
      var form = Forms.current,
        pages = form.attributes.pages,
        page,
        element,
        view,
        $input,
        picker;

      pages.goto(2);
      page = pages.current;
      assert.equal(page.index(), 2);

      element = form.getElement('datefromdate');
      view = element.get('_view');
      $input = view.$el.find('input');
      assert.equal($input.hasClass('picker__input'), true);
      $input.trigger('click');
      setTimeout(function () {
        assert.equal($input.hasClass('picker__input--active'), true);
        picker = $('div[class="picker__holder"]');
        picker.trigger('click');
        done();
      }, 500);

      // assert.equal($input.hasClass('picker__input'), true);
    });

    test('all [data-role=fieldcontain] enhanced', function () {
      var fieldcontain$ = $('[data-role=fieldcontain]');
      var enhanced$ = $('[data-role=fieldcontain].ui-field-contain');
      assert.equal(fieldcontain$.length, enhanced$.length);
    });

  }); // END: suite('Pages', ...)

});
