define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {
  if (testUtils.isPhantom()) {
    return;
  }

  testUtils.defineFormLoadSuite('form1', 'edit');

  suite('28: MaxSubforms', function () {
    suite('Form', function () {
      test('Render form with data', function (done) {
        var form = Forms.current;

        $.ajax({
          type: 'GET',
          url: 'getformrecord.xml',
          dataType: 'xml'}).then(
          function (data) {
            var record = {}, node, nodes;
            nodes = data.evaluate('//' + form.attributes.name, data);
            node = nodes.iterateNext();
            _.each(node.children, function (key) {
              record[key.nodeName] = key.innerHTML;
            });
            form.setRecord(record).then(function () {
              form.data().then(function (formdata) {
                var keys = ['id', 'Location', 'Name', '_action'];
                _.each(keys, function (k) {
                  assert.ok(formdata[k], k + ' does not exist');
                });
                done();
              }, function () {
                assert(false, 'failed to set record');
                done();
              });
            });
          }
       );
      });
    }); // END: suite('Form', ...)

    suite('added functions work correctly', function () {
      var form;

      suiteSetup(function () {
        form = Forms.current;
      });

      suite('getRealLength, getButtonLabel', function () {
        var subFormElement, $fieldEl, $add, subForms, subForm, $view, $remove, attr;

        suiteSetup(function () {
          subFormElement = form.getElement('Location');
          attr = subFormElement.attributes;
          $fieldEl = subFormElement.attributes._view.$el;
          $add = $fieldEl.children('.ui-btn').children('button');
          subForms = subFormElement.attributes.forms;
        });

        test('initial state', function () {
          // initially there will be 3 subforms
          assert.equal(subFormElement.getRealLength(), 3);
          assert.equal($add.text(), attr.plusButtonLabel + subFormElement.getButtonLabel());
        });

        test('click 1st remove button', function (done) {
          subForm = subForms.at(0);
          $view = subForm.attributes._view.$el;
          $remove = $view.children('.ui-btn').children('input[type=button]');

          Promise.resolve()
          .then(function () {
            $remove.trigger('click');
            return testUtils.wait(300);
          })
          .then(function () {
            $('.bm-popup.bm-confirm').find('[data-onclick="onContinueClick"]').trigger('click');
            return testUtils.wait(300);
          })
          .then(function () {
            // then there will be 2 subforms + 1 marked removed
            assert.equal(subFormElement.getRealLength(), 2);
            assert.equal(subForms.length, 3);
            assert.equal($add.text(), attr.plusButtonLabel + subFormElement.getButtonLabel());
            done();
          });
        });

        test('click add button', function (done) {
          Promise.resolve()
          .then(function () {
            $add.trigger('click');
            return new Promise(function (resolve) {
              subForms.once('add', function () { resolve(); });
            });
          })
          .then(function () {
            // then there will be 3 subforms + 1 marked removed
            assert.equal(subFormElement.getRealLength(), 3);
            assert.equal(subForms.length, 4);
            assert.equal($add.text(), attr.plusButtonLabel + subFormElement.getButtonLabel());
            done();
          });
        });

        test('remove newly added subform', function (done) {
          subForm = subForms.at(3);
          $view = subForm.attributes._view.$el;
          $remove = $view.children('.ui-btn').children('input[type=button]');

          Promise.resolve()
          .then(function () {
            $remove.trigger('click');
            return testUtils.wait(300);
          })
          .then(function () {
            $('.bm-popup.bm-confirm').find('[data-onclick="onContinueClick"]').trigger('click');
            return testUtils.wait(300);
          })
          .then(function () {
            // then there will be 2 subforms + 1 marked removed
            assert.equal(subFormElement.getRealLength(), 2);
            assert.equal(subForms.length, 3);
            assert.equal($add.text(), attr.plusButtonLabel + subFormElement.getButtonLabel());
            done();
          });
        });
      });
    });

    suite('add/remove buttons behave correctly (parent subform) (maxSubform = 3)', function () {
      var form;
      var subFormElement, $fieldEl, $add;

      suiteSetup(function () {
        form = Forms.current;
        subFormElement = form.getElement('Location');

        $fieldEl = subFormElement.attributes._view.$el;
        $add = $fieldEl.children('.ui-btn').children('button');
      });

      test("'add' button should be enabled", function () {
        assert.equal($add.prop('disabled'), false);
      });

      test("'add' button disabled after adding one form", function (done) {
        // adding one more subform makes 3 subforms on view, which is maxSubform limit
        $add.trigger('click');
        setTimeout(function () {
          assert.equal($add.prop('disabled'), true);
          done();
        }, 0);
      });

      test("'add' button enabled after removing one form", function (done) {
        var subForms, subForm, $view, $remove;

        subForms = subFormElement.attributes.forms;
        subForm = subForms.at(2);
        $view = subForm.attributes._view.$el;
        $remove = $view.children('.ui-btn').children('input[type=button]');

        Promise.resolve()
        .then(function () {
          $remove.trigger('click');
          return testUtils.wait(300);
        })
        .then(function () {
          $('.bm-popup.bm-confirm').find('[data-onclick="onContinueClick"]').trigger('click');
          return testUtils.wait(300);
        })
        .then(function () {
          assert.equal($add.prop('disabled'), false);
          done();
        });
      });
    });

    suite('add/remove buttons behave correctly (child subform) (maxSubform = 1)', function () {
      var form;
      var subFormElement, $fieldEl, $add;

      suiteSetup(function () {
        form = Forms.current.getElement('Location').get('forms').at(1);
        subFormElement = form.getElement('Phone');

        $fieldEl = subFormElement.attributes._view.$el;
        $add = $fieldEl.children('.ui-btn').children('button');
      });

      test("'add' button should be disabled because it has 2 subforms (preloaded from getFormRecord)", function () {
        assert.equal(subFormElement.getRealLength(), 2);
        assert.equal($add.prop('disabled'), true);
      });

      suite('after removing one form', function () {
        var subForms, subForm, $view, $remove;

        suiteSetup(function (done) {
          subForms = subFormElement.attributes.forms;
          subForm = subForms.at(0);
          $view = subForm.attributes._view.$el;
          $remove = $view.children('.ui-btn').children('input[type=button]');

          Promise.resolve()
          .then(function () {
            $remove.trigger('click');
            return testUtils.wait(300);
          })
          .then(function () {
            $('.bm-popup.bm-confirm').last().find('[data-onclick="onContinueClick"]').trigger('click');
            return testUtils.wait(300);
          })
          .then(function () {
            done();
          });
        });

        test("'add' button disabled", function () {
          assert.equal($add.prop('disabled'), true);
          assert.equal(subForms.length, 2);
          assert.equal(subFormElement.getRealLength(), 1);
        });
      });

      suite('after removing one more form', function () {
        var subForms, subForm, $view, $remove;

        suiteSetup(function (done) {
          subForms = subFormElement.attributes.forms;
          // form index 0 will have status removed because its an edit form
          subForm = subForms.at(1);
          $view = subForm.attributes._view.$el;
          $remove = $view.children('.ui-btn').children('input[type=button]');

          Promise.resolve()
          .then(function () {
            $remove.trigger('click');
            return testUtils.wait(300);
          })
          .then(function () {
            $('.bm-popup.bm-confirm').last().find('[data-onclick="onContinueClick"]').trigger('click');
            return testUtils.wait(300);
          })
          .then(function () {
            done();
          });
        });

        test("'add' button enabled", function () {
          assert.equal($add.prop('disabled'), false);
          assert.equal(subForms.length, 2);
          assert.equal(subFormElement.getRealLength(), 0);
        });
      });

      suite('after adding one form', function () {
        var subForms;

        suiteSetup(function (done) {
          subForms = subFormElement.attributes.forms;

          $add.trigger('click');
          subForms.once('add', function () { done(); });
        });

        test("'add' button disabled", function () {
          assert.equal($add.prop('disabled'), true);
          assert.equal(subForms.length, 3);
          assert.equal(subFormElement.getRealLength(), 1);
        });

        test('no error is displayed', function () {
          var $errorList = $add.closest('[data-element-type="subForm"]').find('.bm-errors__bm-list');
          assert.equal($errorList.children().length, 0);
        });
      });

      suite('after adding 2 forms', function () {
        var subForms;

        suiteSetup(function () {
          subForms = subFormElement.attributes.forms;

          return subFormElement.add();
        });

        test("'add' button disabled", function () {
          assert.equal($add.prop('disabled'), true);
          assert.equal(subForms.length, 4);
          assert.equal(subFormElement.getRealLength(), 2);
        });

        test('MAXSUBFORM error is displayed', function () {
          var $errorList = $add.closest('[data-element-type="subForm"]').find('.bm-errors__bm-list');
          assert.equal($errorList.children().length, 1);
          assert.equal($errorList.children().first().text(), 'no more than 1 form');
        });
      });
    });
  }); // END: suite('1', ...)
});
