define(['BlinkForms', 'testUtils', 'BIC'], function (Forms, testUtils) {
  var $page = $('[data-role=page]');
  var $content = $page.find('[data-role=content]');

  function loadForm (record) {
    if (Forms.current) {
      Forms.current.off();
      delete Forms.current;
    }
    $content.empty();

    return Forms.getDefinition('firstLevel', 'add').then(function (def) {
      Forms.initialize(def);
      $content.append(Forms.current.$form);
      $.mobile.page({}, $page);
      $page.trigger('pagecreate');
      $page.show();
      $(window).scrollTop(0);
    })
    .then(function () {
      return Forms.current.setRecord(record);
    })
    .then(function () {
      return testUtils.whenValidationStops();
    });
  }

  suite('30: Subforms inside Subforms', function () {

    setup(function () {
      this.timeout(3e3);
      return loadForm({});
    });

    test('Top Level elements collection returns 1 sub form', function () {
      var subForms = Forms.current.getSubforms();
      var p, counter = 0;
      assert.isObject(subForms);
      assert.isDefined(subForms.second_level_form);
      for (p in subForms) {
        if (subForms.hasOwnProperty(p)) {
          counter++;
        }
      }

      assert.equal(counter, 1);
    });

  });

  // END: 30: Subforms inside Subforms *****************

  suite('after .add()', function () {

    setup(function () {
      this.timeout(3e3);
      return loadForm({ second_level_form: [{}] });
    });

    test('2nd level form returns 1 subform', function () {
      var subForms;
      var subSubForms;
      subForms = Forms.current.getSubforms();
      assert.equal(subForms.second_level_form.length, 1);

      subSubForms = subForms.second_level_form.invoke('getSubforms')[0];
      assert.isDefined(subSubForms.third_level_form);
    });

    test('2nd level form errors are scrolled to', function () {
      var origScrollTop = $(window).scrollTop();
      var invalid = Forms.current.getInvalidElements();
      // make sure we have an error
      assert.isAbove(invalid.length, 0);

      // get the first invalid element and scroll
      return invalid.errors[0].get('_view').scrollTo().then(function () {
        assert.notEqual($(window).scrollTop(), origScrollTop);
      });
    });

    test('subform change:value events bubble up to Forms.current', function (done) {
      testUtils.whenValidationStops()
      .then(function () {
        Forms.current.on('change:value', function (model, val) {
          assert.equal(model.id, 'second_required');
          assert.equal(val, 123);
          done();
        });
        Forms.current.getElement('second_required').val(123);
      });
    });

    test('subform invalid events bubble up to Forms.current', function (done) {
      Forms.current.once('invalid', function (model, error) {
        assert.equal(model.id, 'second_required');
        assert.equal(error.value[0].code, 'REQUIRED');
        done();
      });
      Forms.current.getElement('second_required').val('');
    });

    test('subform valid events bubble up to Forms.current', function (done) {
      this.timeout(3e3); // takes a while for the bubbling to finish

      Forms.current.getElement('first_level_req').val(123);

      testUtils.whenValidationStops()
      .then(function () {
        Forms.current.once('valid', function (model, error) {
          assert.equal(model.id, 'second_required');
          assert.notOk(error);
          done();
        });
        Forms.current.getElement('second_required').val(123);
      });
    });

  });

  // END: after .add() **********

  suite('after 2x .add()', function () {

    setup(function () {
      this.timeout(3e3);
      return loadForm({ second_level_form: [ {}, {} ] });
    });

    test('2nd level form returns 2 subforms', function () {
      var subForms;
      var subSubForms;
      subForms = Forms.current.getSubforms();
      assert.equal(subForms.second_level_form.length, 2);
      subSubForms = subForms.second_level_form.models[0].getSubforms();
      assert.isDefined(subSubForms.third_level_form);
    });

  });

  // END: after 2x .add() ***********

  suite('after .add() and an .add() nested within that', function () {

    setup(function () {
      this.timeout(3e3);
      return loadForm({
        second_level_form: [ {
          third_level_form: [ {} ]
        } ]
      });
    });

    test('3rd level form errors are scrolled to correctly', function () {
      var origScrollTop = $(window).scrollTop();
      var subForms = Forms.current.getSubforms();
      var moreSubforms = subForms.second_level_form.getSubforms();
      var invalidThirdLevel;

      // make sure we have an error
      assert.isAbove(moreSubforms.length, 0);
      assert.isTrue(moreSubforms[0].hasOwnProperty('third_level_form'));
      // get the first invalid element and scroll
      invalidThirdLevel = moreSubforms[0].third_level_form.models[0].getInvalidElements();
      assert.isAbove(invalidThirdLevel.errors.length, 0);

      return invalidThirdLevel.errors[0].get('_view').scrollTo().then(function () {
        assert.notEqual($(window).scrollTop(), origScrollTop);
      });
    });

    test('3rd level subform change:value events bubble up to Forms.current', function (done) {
      Forms.current.once('change:value', function (model, val) {
        assert.equal(model.id, 'third_level_req');
        assert.equal(val, 'abc');
        done();
      });
      Forms.current.getElement('third_level_req').val('abc');
    });

    test('3rd level subform invalid events bubble up to Forms.current', function (done) {
      Forms.current.once('invalid', function (model, error) {
        assert.equal(model.id, 'third_level_req');
        assert.equal(error.value[0].code, 'REQUIRED');
        done();
      });
      Forms.current.getElement('third_level_req').val('');
    });

    test('3rd level subform valid events bubble up to Forms.current', function (done) {
      this.timeout(10e3); // takes a while for the bubbling to finish

      Forms.current.getElement('first_level_req').val(123);
      Forms.current.getElement('second_required').val(123);

      testUtils.whenValidationStops()
      .then(function () {
        Forms.current.once('valid', function (model, error) {
          assert.equal(model.id, 'third_level_req');
          assert.notOk(error);
          done();
        });
        Forms.current.getElement('third_level_req').val('hello');
      });
    });

  });

  // END: after .add() and an .add() nested within that ******

});
