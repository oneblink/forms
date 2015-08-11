/* eslint-env mocha */
/* global assert */ // chai

define(['BlinkForms', 'BIC'], function (Forms) {

  suite('32 - Pristine and dirty states', function () {
    var $page = $('[data-role=page]'),
        $content = $page.find('[data-role=content]');

    var elementNames = [
      'text_area',
      'password',
      'email',
      'url',
      'phone_number',
      'number',
      'currency',
      'radio',
      'select',
      'star_rating',
      'multi',
      'checkboxes',
      'checkbox',
      'date',
      'time',
      'timestamp',
      'camera',
      'image_library',
      'file_upload',
      'textbox',
      'location',
      'sketch_signature',
      'avalue',
      'logged_in_user_id',
      'user_attribute',
      'get_value'];



    suite('#setPristine', function () {
      //make sure that the form is in a pristine state for each test.
      suiteSetup(function () {
        $content.empty();
        return Forms.getDefinition('every_field_type', 'add').then(function (def) {
          Forms.initialize(def);
          $content.append(Forms.current.$form);
          $.mobile.page({}, $page);
          $page.trigger('pagecreate');
          $page.show();
          $(window).scrollTop(0);
        });
      });

      teardown(function () {
        Forms.current.setPristine();
      });

      test('should set the form and all its elements to pristine', function () {
        var dirty = { 'isDirty': true, isPristine: false };
        // first make everything be dirty
        Forms.current.set(dirty);
        Forms.current.get('elements').each(function (element) {
          if (element.id !== '_heading_1') {
            element.set(dirty, { silent: true });
          }
        });

        //now make the form aqnd its contents pritine
        Forms.current.setPristine();

        assert.isFalse(Forms.current.get('isDirty'));
        assert.isTrue(Forms.current.get('isPristine'));
        Forms.current.get('elements').each(function (element) {
          if (element.id !== '_heading_1') {
            assert.isFalse(element.get('isDirty'));
            assert.isTrue(element.get('isPristine'));
          }
        });
      });
    });

    suite('Default Value', function () {
      suiteSetup(function () {
        $content.empty();
        return Forms.getDefinition('every_field_type', 'add').then(function (def) {
          Forms.initialize(def);
          $content.append(Forms.current.$form);
          $.mobile.page({}, $page);
          $page.trigger('pagecreate');
          $page.show();
          $(window).scrollTop(0);
        });
      });

      teardown(function () {
        Forms.current.off();
        Forms.current.setPristine();
      });

      test('Fields with DefaultValue should be pristine', function () {
        var el = Forms.current.getElement('textbox');
        assert.isTrue(el.get('isPristine'));
        assert.isFalse(el.get('isDirty'));
      });
    });

    suite('Fields that use the value attribute', function () {
      // make sure that the form is in a pristine state for each test.
      suiteSetup(function () {
        $content.empty();
        return Forms.getDefinition('every_field_type', 'add').then(function (def) {
          Forms.initialize(def);
          $content.append(Forms.current.$form);
          $.mobile.page({}, $page);
          $page.trigger('pagecreate');
          $page.show();
          $(window).scrollTop(0);
        });
      });

      teardown(function () {
        Forms.current.setPristine();
      });

      // generate tests
      elementNames.forEach(function (elementName) {
        test(elementName + ' model isDirty attribute should be set to true when model.val() is used', function () {

          var elementModel = Forms.current.getElement(elementName);
          assert.isFalse(elementModel.get('isDirty'));
          elementModel.val('abc');
          assert.isTrue(elementModel.get('isDirty'));
        });

        test('setting ' + elementName + ' models isDirty Attribute to true also marks the parent form as dirty', function () {
          var elementModel = Forms.current.getElement(elementName);

          assert.isFalse(Forms.current.get('isDirty'));
          elementModel.val('abcd');
          assert.isTrue(Forms.current.get('isDirty'));
        });
      });
    });

    suite('elements that use the blob attribute', function () {
      suiteSetup(function () {
        $content.empty();
        return Forms.getDefinition('every_field_type', 'add').then(function (def) {
          Forms.initialize(def);
          $content.append(Forms.current.$form);
          $.mobile.page({}, $page);
          $page.trigger('pagecreate');
          $page.show();
          $(window).scrollTop(0);
        }).then(function () {
          return Forms.current.get('pages').goto(1);
        });
      });

      teardown(function () {
        Forms.current.setPristine();
      });

      test('signature Panel', function () {
        var signaturePanel = Forms.current.getElement('sketch_signature');

        $('[name="sketch_signature"]').trigger('click');
        $('button[type=submit]', '.sigPad').trigger('click');

        assert.isTrue(signaturePanel.get('isDirty'));
      });
    });

    suite('elements in subforms', function () {
      suiteSetup(function () {
        $content.empty();
        return Forms.getDefinition('every_field_type', 'add').then(function (def) {
          Forms.initialize(def);
          $content.append(Forms.current.$form);
          $.mobile.page({}, $page);
          $page.trigger('pagecreate');
          $page.show();
          $(window).scrollTop(0);
        }).then(function () {
          Forms.current.get('pages').goto(1);

          // add a subform
          return Forms.current.getElement('subform').add();
        });
      });

      teardown(function () {
        Forms.current.setPristine();
      });

      test('Add subform makes form dirty', function () {
        assert.isTrue(Forms.current.get('isDirty'));
      });

      test('changing an element in a subform sets the main form dirty', function () {
        var subFormElement = Forms.current.getElement('first_level_req');
        assert.isDefined(subFormElement);

        Forms.current.setPristine();
        subFormElement.val("123");

        assert.isTrue(Forms.current.get('isDirty'));
      });

      test('Adding a subform to a subform should make the parent subform and form dirty', function () {
        return Forms.current.getElement('second_level_field').add().then(function () {
          assert.isTrue(Forms.current.getElement('second_level_field').get('isDirty'));
          assert.isTrue(Forms.current.get('isDirty'));
        });
      });
    });
  });
});

