define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {
  testUtils.defineFormLoadSuite('form1', 'add');

  suite('9: pages', function () {
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

    test('go to page 1, triggers event', function (done) {
      var form = Forms.current,
        pages = form.attributes.pages,
        page;

      Forms.once('pageInjected', function (p) {
        page = pages.current;
        assert.equal(page, p);
        assert.equal(page.index(), 1);
        done();
      });

      pages.goto(1);
    });

    test('page 1 elements are visible', function () {
      var form = Forms.current,
        names = ['streetAddress', 'city'];

      names.forEach(function (name) {
        var element = form.getElement(name),
          view = element.get('_view');

        assert.isTrue(view.$el.is(':visible'), name + ' is visible');
      });
    });

    test('page 0,2 elements are not present', function () {
      var form = Forms.current,
        names = ['url', 'email', 'password', 'telephone', 'number',
          'currency'];

      names.forEach(function (name) {
        var element = form.getElement(name),
          view = element.get('_view');

        assert(!view, name + ' is not present');
      });
    });

    test('go to page 2, triggers event', function (done) {
      var form = Forms.current,
        pages = form.attributes.pages,
        page;

      Forms.once('pageInjected', function (p) {
        page = pages.current;
        assert.equal(page, p);
        assert.equal(page.index(), 2);
        done();
      });

      pages.goto(2);
    });

    test('page 2 elements are visible', function () {
      var form = Forms.current,
        names = ['telephone', 'number', 'currency'];

      names.forEach(function (name) {
        var element = form.getElement(name),
          view = element.get('_view');

        assert.isTrue(view.$el.is(':visible'), name + ' is visible');
      });
    });

    test('page 2 number slider is still slider', function () {
      var form = Forms.current,
        numberSlider = form.getElement('numberSlider'),
        $input = numberSlider.attributes._view.$el.find('input'),
        pages = form.attributes.pages;

      // ui-slider is rendered
      assert(numberSlider.attributes._view.$el.find('div.ui-slider'));

      // input value is equal to model
      assert.equal($input.val(), numberSlider.get('value'));

      // set model value and should change input value
      numberSlider.set("value", 100);
      assert.equal($input.val(), numberSlider.get('value'));

      // set input value, and trigger change, should change model value
      $input.val(200);
      numberSlider.attributes._view.$el.trigger("change");
      assert.equal($input.val(), numberSlider.get('value'));

      // switch pages back and forth
      pages.goto(1);
      pages.goto(2);
      // ui-slider should be on page
      assert(numberSlider.attributes._view.$el.find('div.ui-slider'));
      // model value should be the same
      assert.equal(numberSlider.get('value'), 200);
      // input value should be the same
      assert.equal($input.val(), numberSlider.get('value'));
    });

    test('page 0,1 elements are not present', function () {
      var form = Forms.current,
        names = ['url', 'email', 'password', 'streetAddress', 'city'];

      names.forEach(function (name) {
        var element = form.getElement(name),
          view = element.get('_view');

        assert(!view, name + ' is not present');
      });
    });

    test('BMP.Forms.current.data() returns everything', function (done) {
      Forms.current.data().then(function (data) {
        assert.equal(data.url, 'https://blinkm.co/ron');
        assert.equal(data.email, 'ron@blinkmobile.com.au');
        assert.equal(data.password, 'secret');
        assert.equal(data.streetAddress, 'Suite 2\r\n125 Donnison Street');
        assert.equal(data.city, 'Gosford');
        assert.equal(data.telephone, '+61 439 901 787');
        assert.equal(data.number, 35);
        assert.equal(data.currency, 876.54);
        done();
      });
    });

    test('Forms.current.get("_view").goToElement() can goto fields on other pages', function () {
      var previousPage = BMP.Forms.current.get('pages').current.cid;
      Forms.current.get("_view").goToElement('email');

      assert.notEqual(BMP.Forms.current.get('pages').current.cid, previousPage);
      assert.isTrue($('[name="email"]').is(':visible'));
    });
  }); // END: suite('Pages', ...)
});
