define(['BlinkForms', 'testUtils', 'BIC'], function (Forms, testUtils) {

  suite('29: AllFields', function () {
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

        Forms.getDefinition('test_form', 'edit').then(function (def) {
          Forms.initialize(def);
          form = Forms.current;
          assert.equal($.type(form), 'object');
          assert.equal(form.get('name'), 'test_form');
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

      testUtils.defineLabelTest();

      test('initial validation settles within 5sec', function () {
        this.timeout(5e3);
        return testUtils.whenValidationStops();
      });

    }); // END: suite('Form', ...)

    suite('label as empty placeholders for aligning', function () {
      var form;
      var withLabelFields = [
        'text_box',
        'text_area',
        'password',
        'email',
        'url',
        'phone_number',
        'number',
        'currency',
        'calculation',
        'radio_buttons',
        'select_box',
        'star_rating',
        'multi_select',
        'checkboxes',
        'date',
        'time',
        'date_time',
        'location',
        'sketch_signature'
      ];

      suiteSetup(function (done) {
        form = Forms.current;
        setTimeout(function () {
          done();
        }, 10);
      });

      withLabelFields.forEach(function (v) {
        test(v, function () {
          var field = form.getElement(v),
            attr = field.attributes,
            $view = attr._view.$el,
            $elem;

          $elem = $view.children();

          assert.equal($elem.last()[0].tagName, "SPAN");
          assert($($elem.last()[0]).hasClass('bm-formelement__bm-hint'));
          assert.equal($($elem[$elem.length - 2])[0].tagName, 'LABEL');
          assert.equal($($elem[$elem.length - 2]).text(), "");
        });
      });
    });

    suite('no labels as placeholders', function () {
      var form;
      var noLabelFields = ['subform', '_heading_2'];

      suiteSetup(function (done) {
        form = Forms.current;
        setTimeout(function () {
          form.attributes.pages.goto(1);
          done();
        }, 10);
      });

      noLabelFields.forEach(function (v) {
        test(v, function () {
          var field = form.getElement(v),
            attr = field.attributes,
            $view = attr._view.$el,
            $elem;

          $elem = $view.children();

          assert.equal($elem.last()[0].tagName, "SPAN");
          assert($($elem.last()[0]).hasClass('bm-formelement__bm-hint'));
          assert.notEqual($($elem[$elem.length - 2])[0].tagName, 'LABEL');
        });
      });
    });

    suite('no hints', function () {
      var form;
      var noLabelFields = [
        'camera',
        'image_library',
        'file_upload',
        'checkbox'
      ];

      suiteSetup(function (done) {
        form = Forms.current;
        setTimeout(function () {
          form.attributes.pages.goto(0);
          done();
        }, 10);
      });

      noLabelFields.forEach(function (v) {
        test(v, function () {
          var field = form.getElement(v),
            attr = field.attributes,
            $view = attr._view.$el,
            $elem;

          $elem = $view.children();

          assert.lengthOf($elem.find('.bm-formelement__bm-hint'), 0);
        });
      });
    });

  }); // END: suite('1', ...)

});
