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

      test('go t page 2 and check datepicker element', function (done) {
        var form = Forms.current,
          pages = form.attributes.pages,
          page,
          element,
          view,
          $input,
          picker;

        pages['goto'](2);
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

        //assert.equal($input.hasClass('picker__input'), true);
      });

    }); // END: suite('Pages', ...)

  }); // END: suite('1', ...)

});
