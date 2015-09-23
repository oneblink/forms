define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {
  testUtils.defineFormLoadSuite('test_form', 'add');

  suite('29: AllFields', function () {
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

          assert.equal($elem.last()[0].tagName, 'SPAN');
          assert($($elem.last()[0]).hasClass('bm-formelement__bm-hint'));
          assert.equal($($elem[$elem.length - 2])[0].tagName, 'LABEL');
          assert.equal($($elem[$elem.length - 2]).text(), '');
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

          assert.equal($elem.last()[0].tagName, 'SPAN');
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

    suite('rowclass model property is added to the element class ', function () {
      suiteSetup(function () {
        Forms.current.attributes.pages.goto(0);
      });

      [ '_heading_1',
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
        'checkbox',
        'date',
        'time',
        'date_time',
        'camera',
        'image_library',
        'file_upload',
        'location',
        'sketch_signature',
        '_heading_3',
        'value',
        'logged_in_user_id',
        'user_attribute',
        'get_value'
      ].forEach(function (name) {
        test(name + ' has the rowclass property set', function () {
          assert.lengthOf($('.' + name + '-default-class'), 1);
        });
      });
    });

    suite('rowclass model property is added to the element class ', function () {
      suiteSetup(function (done) {
        Forms.current.attributes.pages.goto(1);
        setTimeout(done, 100);
      });

      [ '_heading_2',
        'conditional_radio',
        'conditional_calc',
        'subform',
        'validation_req',
        'select_box2'].forEach(function (name) {
          test(name + ' has the rowclass property set', function () {
            assert.lengthOf($('.' + name + '-default-class'), 1);
          });
        });
    });

    suite('BEM classes', function () {
      suiteSetup(function () {
        Forms.current.attributes.pages.goto(0);
      });

      test('are set correcty on FORM elements', function () {
        assert.isTrue(Forms.current.get('_view').$el.hasClass('bm-form'));
      });

      test('are set correctly on form ELEMENTs', function () {
        assert.lengthOf($('.bm-formelement'), 29);
      });

      suite('Subform Fields', function () {
        suiteSetup(function () {
          Forms.current.attributes.pages.goto(1);
        });

        test('have the bm-formelement class set', function () {
          assert.isTrue(Forms.current.getElement('subform').get('_view').$el.hasClass('bm-formelement'));
        });

        test('do not have the bm-form class set', function () {
          assert.isFalse(Forms.current.getElement('subform').get('_view').$el.hasClass('bm-form'));
        });

        test('child form root element have the bm-form class attribute', function () {
          var subFormModel = Forms.current.getElement('subform');
          return subFormModel.add().then(function () {
            assert.lengthOf($('section.bm-form', subFormModel.get('_view').$el), 1);
          });
        });
      });
    });
  }); // END: suite('1', ...)
});
