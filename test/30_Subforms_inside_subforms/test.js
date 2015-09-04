define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {
  suite('30: Subforms inside Subforms', function () {
    setup(function () {
      return testUtils.loadForm('firstLevel', 'add')
      .then(function () {
        $(window).scrollTop(0);
      });
    });

    test('Top Level elements collection returns 1 sub form', function () {
      var subForms = Forms.current.getSubforms();
      var p, counter = 0;
      assert.isObject(subForms);
      assert.isDefined(subForms.second_level_test);
      for (p in subForms) {
        if (subForms.hasOwnProperty(p)) {
          counter++;
        }
      }

      assert.equal(counter, 1);
    });

    test('2nd level form returns 1 subform', function () {
      return Forms.current.getElement('second_level_test').add().then(function () {
        var subForms;
        var subSubForms;
        subForms = Forms.current.getSubforms();
        assert.equal(subForms.second_level_test.length, 1);

        subSubForms = subForms.second_level_test.invoke('getSubforms')[0];
        assert.isDefined(subSubForms.third_level);
      });
    });

    test('2nd level form returns 2 subforms', function () {
      var subform = Forms.current.getElement('second_level_test');
      return subform.add()
                  .then(subform.add.bind(subform))
                  .then(function () {
                    var subForms;
                    var subSubForms;
                    subForms = Forms.current.getSubforms();
                    assert.equal(subForms.second_level_test.length, 2);
                    subSubForms = subForms.second_level_test.models[0].getSubforms();
                    assert.isDefined(subSubForms.third_level);
                  });
    });

    test('2nd level form returns 2 subforms', function () {
      var subform = Forms.current.getElement('second_level_test');
      return subform.add()
                  .then(subform.add.bind(subform))
                  .then(function () {
                    var subForms;
                    var subSubForms;
                    subForms = Forms.current.getSubforms();
                    assert.equal(subForms.second_level_test.length, 2);
                    subSubForms = subForms.second_level_test.models[0].getSubforms();
                    assert.isDefined(subSubForms.third_level);
                  });
    });

    test('2nd level form errors are scrolled to', function () {
      var origScrollTop = $(window).scrollTop();
      var subform = Forms.current.getElement('second_level_test');
      return subform.add()
                 .then(function () {
                  var invalid = Forms.current.getInvalidElements();
                  // make sure we have an error
                  assert.isAbove(invalid.length, 0);

                  // get the first invalid element and scroll
                  return invalid.errors[0].get('_view').scrollTo().then(function () {
                    assert.notEqual($(window).scrollTop(), origScrollTop);
                  });
                });
    });

    test('3rd level form errors are scrolled to correctly', function () {
      var origScrollTop = $(window).scrollTop();
      var subform = Forms.current.getElement('second_level_test');

      return subform.add() // add second level
                  .then(function () {
                    return Forms.current.getElement('third_level').add(); // add third level
                  })
                  .then(function () {
                    var subForms = Forms.current.getSubforms();
                    var moreSubforms = subForms.second_level_test.getSubforms();
                    var invalidThirdLevel;
                    // make sure we have an error
                    assert.isAbove(moreSubforms.length, 0);
                    assert.isTrue(moreSubforms[0].hasOwnProperty('third_level'));
                    // get the first invalid element and scroll
                    invalidThirdLevel = moreSubforms[0].third_level.models[0].getInvalidElements();
                    assert.isAbove(invalidThirdLevel.errors.length, 0);

                    return invalidThirdLevel.errors[0].get('_view').scrollTo().then(function () {
                      assert.notEqual($(window).scrollTop(), origScrollTop);
                    });
                  });
    });

    test('subform invalid events bubble up to Forms.current', function (done) {
      var subform = Forms.current.getElement('second_level_test');

      subform.add()
              .then(function () {
                Forms.current.on('invalid', function (model, error) {
                  assert.equal(model.id, 'second_level_text');
                  assert.equal(error.value[0].code, 'REQUIRED');
                  done();
                });
                Forms.current.getElement('second_level_text').val('');
              });
    });

    test('subform change:value events bubble up to Forms.current', function (done) {
      var subform = Forms.current.getElement('second_level_test');

      subform.add()
              .then(function () {
                Forms.current.on('change:value', function (model, val) {
                  assert.equal(model.id, 'second_level_text');
                  assert.equal(val, 123);
                  done();
                });
                Forms.current.getElement('second_level_text').val(123);
              });
    });

    test('3rd level subform invalid events bubble up to Forms.current', function (done) {
      var subform = Forms.current.getElement('second_level_test');

      return subform.add() // add second level
                  .then(function () {
                    return Forms.current.getElement('third_level').add(); // add third level
                  })
                  .then(function () {
                    var thirdLevelRequiredField = Forms.current.getElement('third_level_req');

                    Forms.current.on('invalid', function (model, error) {
                      assert.equal(model.id, 'third_level_req');
                      assert.equal(error.value[0].code, 'REQUIRED');
                      done();
                    });

                    thirdLevelRequiredField.val('');
                  });
    });

    test('3rd level subform invalid events bubble up to Forms.current', function (done) {
      var subform = Forms.current.getElement('second_level_test');

      return subform.add() // add second level
                  .then(function () {
                    return Forms.current.getElement('third_level').add(); // add third level
                  })
                  .then(function () {
                    var thirdLevelRequiredField = Forms.current.getElement('third_level_req');

                    Forms.current.on('change:value', function (model, value) {
                      assert.equal(model.id, 'third_level_req');
                      assert.equal(value, 'hello');
                      done();
                    });

                    thirdLevelRequiredField.val('hello');
                  });
    });

    suite('hidden subform fields', function () {
      setup(function () {
        return Forms.current.getElement('second_level_test').add();
      });

      test('hidden fields with underscore in the name are not shown', function () {
        assert.isUndefined(Forms.current.getElement('hidden_when_first'));
      });

      test('fields with a hide attribute that is falsy are shown', function () {
        var model = Forms.current.getElement('hidden_when_text_is_a'),
            view = model.get('_view');

        assert.isFalse(model.get('hidden'));
        assert.isTrue(view.$el.is(':visible'));
      });
    });
  });
});
