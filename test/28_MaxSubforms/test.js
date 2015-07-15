/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'testUtils', 'BIC'], function (Forms, testUtils) {

  suite('28: MaxSubforms', function () {
    var $page = $('[data-role=page]'),
      $content = $page.find('[data-role=content]');

    if (navigator.userAgent.toLowerCase().indexOf('phantom') !== -1) {
      return;
    }

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

        Forms.getDefinition('form1', 'edit').then(function (def) {
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

      testUtils.defineLabelTest();

      test('Render form with data', function (done) {
        var form = Forms.current;

        $.ajax({
          type: "GET",
          url: "getformrecord.xml",
          dataType: "xml"}).then(
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
                _.each(keys, function(k) {
                  assert.ok(formdata[k], k + " does not exist");
                });
                done();
              }, function () {
                assert(false, "failed to set record");
                done();
              });
            });
          }
        );
      });

    }); // END: suite('Form', ...)

    suite('added functions work correctly', function () {
      var form;

      suiteSetup(function() {
        form = Forms.current;
      });

      suite("getRealLength, getButtonLabel", function () {
        var subFormElement, $fieldEl, $add, subForms, subForm, $view, $remove, attr;

        suiteSetup(function () {
          subFormElement = form.getElement('Location');
          attr = subFormElement.attributes;
          $fieldEl = subFormElement.attributes._view.$el;
          $add = $fieldEl.children('.ui-btn').children('button');
          subForms = subFormElement.attributes.forms;
        });

        test('initial state', function () {
          //initially there will be 3 subforms
          assert.equal(subFormElement.getRealLength(), 3);
          assert.equal($add.text(), attr.plusButtonLabel + subFormElement.getButtonLabel());
        });

        test('click 1st remove button', function (done) {
          subForm = subForms.at(0);
          $view = subForm.attributes._view.$el;
          $remove = $view.children('.ui-btn').children('button');

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
            //then there will be 2 subforms + 1 marked removed
            assert.equal(subFormElement.getRealLength(), 2);
            assert.equal(subForms.length, 3);
            assert.equal($add.text(), attr.plusButtonLabel + subFormElement.getButtonLabel());
            done();
          });
        });

        test('click add button', function (done) {
          Promise.resolve()
          .then(function () {
            $add.trigger("click");
            return new Promise(function (resolve) {
              subForms.once('add', function() { resolve(); });
            });
          })
          .then(function () {
            //then there will be 3 subforms + 1 marked removed
            assert.equal(subFormElement.getRealLength(), 3);
            assert.equal(subForms.length, 4);
            assert.equal($add.text(), attr.plusButtonLabel + subFormElement.getButtonLabel());
            done();
          });
        });

        test('remove newly added subform', function (done) {
          subForm = subForms.at(3);
          $view = subForm.attributes._view.$el;
          $remove = $view.children('.ui-btn').children('button');

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
            //then there will be 2 subforms + 1 marked removed
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

      suiteSetup(function() {
        form = Forms.current;
        subFormElement = form.getElement('Location');

        $fieldEl = subFormElement.attributes._view.$el;
        $add = $fieldEl.children('.ui-btn').children('button');
      });

      test("'add' button should be enabled", function() {
        assert.equal($add.prop('disabled'), false);
      });

      test("'add' button disabled after adding one form", function(done) {
        //adding one more subform makes 3 subforms on view, which is maxSubform limit
        $add.trigger('click');
        setTimeout(function() {
          assert.equal($add.prop('disabled'), true);
          done();
        }, 0);
      });

      test("'add' button enabled after removing one form", function(done) {
        var subForms, subForm, $view, $remove;

        subForms = subFormElement.attributes.forms;
        subForm = subForms.at(2);
        $view = subForm.attributes._view.$el;
        $remove = $view.children('.ui-btn').children('button');

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

      suiteSetup(function() {
        form = Forms.current.getElement('Location').get('forms').at(1);
        subFormElement = form.getElement("Phone");

        $fieldEl = subFormElement.attributes._view.$el;
        $add = $fieldEl.children('.ui-btn').children('button');
      });

      test("'add' button should be disabled because it has 2 subforms (preloaded from getFormRecord)", function() {
        assert.equal(subFormElement.getRealLength(), 2);
        assert.equal($add.prop('disabled'), true);
      });

      test("'add' button disabled after removing one form", function(done) {
        var subForms, subForm, $view, $remove;

        subForms = subFormElement.attributes.forms;
        subForm = subForms.at(0);
        $view = subForm.attributes._view.$el;
        $remove = $view.children('.ui-btn').children('button');

        $remove.trigger('click');

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
          //maxSubform is 1 so button will still stay disabled
          assert.equal($add.prop('disabled'), true);
          assert.equal(subForms.length, 2);
          assert.equal(subFormElement.getRealLength(), 1);
          done();
        });
      });

      test("'add' button enabled after removing one more form", function (done) {
        var subForms, subForm, $view, $remove;

        subForms = subFormElement.attributes.forms;
        //form index 0 will have status removed because its an edit form
        subForm = subForms.at(1);
        $view = subForm.attributes._view.$el;
        $remove = $view.children('.ui-btn').children('button');

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
          //maxSubform is 1 so button will still be enabled
          assert.equal($add.prop('disabled'), false);
          assert.equal(subForms.length, 2);
          assert.equal(subFormElement.getRealLength(), 0);
          done();
        });
      });

      test("'add' button disabled after adding one form", function (done) {
        var subForms;

        subForms = subFormElement.attributes.forms;

        Promise.resolve()
        .then(function () {
          $add.trigger("click");
          return new Promise(function (resolve) {
            subForms.once('add', function() { resolve(); });
          });
        })
        .then(function () {
          assert.equal($add.prop('disabled'), true);
          assert.equal(subForms.length, 3);
          assert.equal(subFormElement.getRealLength(), 1);
          done();
        });
      });

    });


  }); // END: suite('1', ...)

});
