/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {

  suite('9: pages', function () {
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

    }); // END: suite('Form', ...)

    suite('Pages', function () {

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

        pages['goto'](1);
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

        pages['goto'](2);
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

    }); // END: suite('Pages', ...)

  }); // END: suite('1', ...)

});
