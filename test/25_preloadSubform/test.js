define(['BlinkForms', 'testUtils', 'BIC'], function (Forms, testUtils) {

  suite('25: preload subForms and validate _action assignment', function () {
    var $doc = $(document),
      $page = $('[data-role=page]'),
      $content = $page.find('[data-role=content]');

    /**
     * execute once before everything else in this suite
     */
    suiteSetup(function () {
      $content.empty();
      this.timeout(4000);
      delete Forms.current;
    });

    suite('Form', function () {

      test('BlinkForms global is an Object', function () {
        assert($.isPlainObject(Forms), 'BlinkForms is a JavaScript object');
      });

      test('initialise with form.json', function (done) {
        var form;

        Forms.getDefinition('Test', 'edit').then(function (def) {
          Forms.initialize(def, 'edit');
          form = Forms.current;
          assert.equal($.type(form), 'object');
          assert.equal(form.get('name'), 'Test');
          assert.equal(form.get('label'), 'Test');
          done();
        }, function () {
          assert.fail(true, false, 'getDefinition failed!');
          done();
        });
      });

      test('render form for jQuery Mobile', function (done) {
        var form = Forms.current;

        $content.append(form.$form);

        $doc.one('pageinit', function () {
          form.attributes.preloadPromise.then(function () {
            done();
          });
        });

        $.mobile.page({}, $page);
        $page.trigger('pagecreate');
        $page.show();
      });

      testUtils.defineLabelTest();

      suite('Preload subforms', function () {

        test('Parent form loaded subform correctly', function () {
          var form = Forms.current,
            element = form.getElement('Address'),
            subForms = element.attributes.forms;

          assert.equal(form.attributes._action, "edit");

          assert.equal(subForms.length, 2);
          assert.equal(subForms.at(0).attributes._action, "add");
          assert.equal(subForms.at(1).attributes._action, "add");

        });

        test('sub-sub form loaded correctly', function () {
          var element = Forms.current.getElement('Address'),
            subForms = element.attributes.forms,
            subform,
            subformElement,
            i;

          assert.equal(subForms.length, 2);

          for (i = 0; i < subForms.length; i++) {
            subform = subForms.at(i);
            subformElement = subform.getElement('Phone');
            assert.equal(subformElement.attributes.forms.length, 1);
            assert.equal(subform.attributes._action, "add");
          }

        });
      });

      suite('Subforms record holds more number of values then preload limit', function () {

        var record = {
          id: '37',
          Name: 'Harry Potter',
          Address: [
            {
              id: 1,
              Detail: 'EAST'
            }, {
              id: 2,
              Detail: 'WEST',
              Phone: [
                {
                  id: 1,
                  Phone: '456'
                },
                {
                  id: 2,
                  Phone: '456'
                }
              ]
            }, {
              id: 3,
              Detail: 'NORTH',
              Phone: [
                {
                  id: 3,
                  Phone: '789'
                },
                {
                  id: 4,
                  Phone: '789'
                },
                {
                  id: 5,
                  Phone: '789'
                }
              ]
            }, {
              id: 4,
              Detail: 'SOUTH',
              Phone: [
                {
                  id: 6,
                  Phone: '100'
                },
                {
                  id: 7,
                  Phone: '100'
                },
                {
                  id: 8,
                  Phone: '100'
                },
                {
                  id: 9,
                  Phone: '100'
                }
              ]
            }
          ]
        };

        suiteSetup(function (done) {
          var form = Forms.current;
          this.timeout(4000);
          form.setRecord(record).then(function () {
            done();
          });
        });

        test('Populated correctly', function (done) {
          var form = Forms.current;
          form.data().then(function (formdata) {
            var keys = _.keys(record);
            _.each(keys, function (k) {
              assert.ok(formdata[k], k + " does not exist");
            });
            done();
          }, function () {
            assert(false, "failed to set record");
            done();
          });
        });

        test('Subform and Sub-Subform exists', function (done) {
          var element = Forms.current.getElement('Address'),
            subForms = element.attributes.forms,
            subform,
            subformElement,
            i,
            len,
            rec;

          assert.equal(subForms.length, record.Address.length);

          for (i = 0; i < record.Address.length; i++) {
            rec = record.Address[i];
            // default sub-subform length
            len = 1;
            if (rec.Phone) {
              len = rec.Phone.length;
            }
            subform = subForms.at(i);
            subformElement = subform.getElement('Phone');
            assert.equal(subformElement.attributes.forms.length, len);
          }
          done();
        });

        test('adding new subform preloads Sub-Subform', function (done) {
          var element = Forms.current.getElement('Address'),
            $view = element.attributes._view.$el,
            $add = $view.children('.ui-btn').children('button'),
            subForms = element.attributes.forms,
            subsubform;

          assert.equal(subForms.length, 4);
          subForms.once('add', function (subform) {
            assert.equal(subForms.length, 5);
            subsubform = subForms.at(4);
            subform.attributes.preloadPromise.then(function () {
              assert.equal(subsubform.getElement('Phone').attributes.forms.length, 1);
              done();
            });
          });
          $add.trigger('click');
        });

        test('Subforms has correct actions', function () {
          var element = Forms.current.getElement('Address'),
            subForms = element.attributes.forms,
            subform,
            subformElement,
            subsubformElement,
            i, j;

          for (i = 0; i < subForms.length; i++) {
            subform = subForms.at(i);
            subformElement = subform.getElement('id');
            if (subformElement.get('value')) {
              assert.equal(subform.attributes._action, "edit");
            } else {
              assert.equal(subform.attributes._action, "add");
            }

            subformElement = subform.getElement('Phone');
            for (j = 0; j < subformElement.attributes.forms.length; j++) {
              subsubformElement = subformElement.attributes.forms.at(j);
              if (subsubformElement.getElement('id').get('value')) {
                assert.equal(subsubformElement.attributes._action, "edit");
              } else {
                assert.equal(subsubformElement.attributes._action, "add");
              }
            }
          }
        });

        test("remove newly added subform (no placeholders)", function () {
          var form = Forms.current,
            subFormElement = form.getElement('Address'),
            subForms = subFormElement.attributes.forms,
            subForm = subForms.at(4);

          assert.equal(subForms.length, 5);
          subForm.parentElement.remove(subForm);
          assert.equal(subForms.length, 4);
          return form.data().then(function (data) {
            assert.equal(data.Address.length, 4);
          });

        });

        test("remove subform with id (with placeholder)", function () {
          var form = Forms.current,
            subFormElement = form.getElement('Address'),
            subForm = subFormElement.get('forms').at(3);

          assert.equal(subFormElement.get('forms').length, 4);
          subForm.parentElement.remove(subForm);
          return form.data().then(function (data) {
            assert.equal(data.Address.length, 4);
            assert.equal(data.Address[3]._action, "remove");
            assert.equal(data.Address[3].id, 4);
          });
        });

        test("remove sub-subform with id (with placeholder)", function () {
          var form = Forms.current,
            subFormElement = form.getElement('Address'),
            subForms = subFormElement.attributes.forms,
            subForm = subForms.at(2);

          assert.equal(subForms.length, 4);
          // sub-subform
          subFormElement = subForm.getElement('Phone');
          subForms = subFormElement.attributes.forms;

          subForms.at(0).parentElement.remove(subForms.at(0));

          assert.equal(subForms.length, 3);
          return form.data().then(function (data) {
            assert.equal(data.Address[2].Phone.length, 3);
            assert.equal(data.Address[2].Phone[0]._action, "remove");
            assert.equal(data.Address[2].Phone[0].id, 3);
          });
        });

        test("remove preloaded sub-subform (with out placeholder)", function () {
          var form = Forms.current,
            subFormElement = form.getElement('Address'),
            subForms = subFormElement.attributes.forms,
            subForm = subForms.at(0);

          // sub-subform
          subFormElement = subForm.getElement('Phone');
          subForms = subFormElement.attributes.forms;
          subForm = subForms.at(0);

          assert.equal(subForms.length, 1);

          subForm.parentElement.remove(subForm);
          assert.equal(subForms.length, 0);
          return form.data().then(function (data) {
            assert.equal(data.Address[0].Phone.length, 0);
          });
        });

      });

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
