define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {
  suite('4: subForms', function () {
    var form;

    setup(function () {
      return testUtils.loadForm('form1', 'add')
      .then(function () {
        form = Forms.current;
      });
    });

    teardown(function () {
      form = null;
    });

// ///////////////////////////////////////////////////////////////////////////////

    suite('Sub-Forms', function () {
      // -----------------------------------------------------------------------
      // subform: field: assigned label, plus/minus buttons: no label
      // -----------------------------------------------------------------------
      test('check `notes` subform PLUS button label', function () {
        var subFormElement = Forms.current.getElement('notes'),
          $view = subFormElement.attributes._view.$el,
          $add = $view.children('.ui-btn').children('button');
        assert($add.html(), 'Notes', 'label for PLUS `Notes` subForm not set properly');
      });

      test('add 1st `notes` subForm', function () {
        var subFormElement = Forms.current.getElement('notes');

        assert.equal(subFormElement.get('forms').length, 0, 'no subForms yet');
        return subFormElement.add().then(function () {
          assert.equal(subFormElement.get('forms').length, 1);
        });
      });

      test('remove 1st `notes` subForm + check MINUS button label', function () {
        var subFormElement, subForms, subForm, $view, $remove;
        subFormElement = Forms.current.getElement('notes');
        subForms = subFormElement.attributes.forms;

        return subFormElement.add().then(function () {
          subForm = subForms.at(0);
          $view = subForm.attributes._view.$el;
          $remove = $view.children('.ui-btn').children('button');

          assert($remove.html(), 'Notes', 'label for MINUS `Notes` subForm not set properly');
        });
      });

      // -----------------------------------------------------------------------
      // subform: field: no label, plus/minus buttons: no label
      // -----------------------------------------------------------------------
      test('check `reviews` subform PLUS button label', function () {
        var subFormElement = Forms.current.getElement('reviews'),
          $view = subFormElement.attributes._view.$el,
          $add = $view.children('.ui-btn').children('button');

        assert($add.html(), 'reviews', 'label for PLUS `reviews` subForm not set properly');
      });

      test('add 1st `reviews` subForm', function () {
        var subFormElement = Forms.current.getElement('reviews'),
          subForms = subFormElement.get('forms');

        assert.equal(subForms.length, 0, 'no subForms yet');

        return subFormElement.add().then(function () {
          assert.equal(Forms.current.getElement('reviews').get('forms').length, 1, 'no subForms yet');
        });
      });

      test('remove 1st `reviews` subForm + check MINUS button label', function () {
        var subFormElement, subForms, subForm, $view, $remove;
        subFormElement = Forms.current.getElement('reviews');
        subForms = subFormElement.attributes.forms;

        return subFormElement.add().then(function () {
          subForm = subForms.at(0);
          $view = subForm.attributes._view.$el;
          $remove = $view.children('.ui-btn').children('button');

          assert($remove.html(), 'reviews', 'label for MINUS `reviews` subForm not set properly');
        });
      });

      // -----------------------------------------------------------------------
      // -----------------------------------------------------------------------

      test('add 1st comments subForm', function () {
        var subFormElement = Forms.current.getElement('comments'),
          $view = subFormElement.attributes._view.$el,
          $add = $view.children('.ui-btn').children('button'),
          subForms = subFormElement.attributes.forms;

        assert.equal(subForms.length, 0, 'no subForms yet');
        assert($add.html(), 'PLUS', 'label for ADD `Comments` subForm not set properly');

        return subFormElement.add().then(function () {
          assert.equal(subForms.length, 1, 'no comments subForms yet');
        });
      });

      test('Data has _action set properly', function () {
        var subFormElement = Forms.current.getElement('comments');

        return subFormElement.add().then(function () {
          return Forms.current.data().then(function (data) {
            assert.equal(data._action, 'add');
            assert.equal(data.comments[0]._action, 'add');
          });
        });
      });

      test('add 2nd subForm', function () {
        var subFormElement = Forms.current.getElement('comments'),
          subForms = subFormElement.get('forms');

        assert.equal(subForms.length, 0, '0 subForm');
        return subFormElement.add().then(function () {
          subFormElement.add().then(function () {
            assert.equal(subFormElement.get('forms').length, 2, 'should be 2 subForms');
          });
        });
      });

      test('test subForms', function () {
        var subFormElement = Forms.current.getElement('comments'),
          subForms = subFormElement.attributes.forms,
          testData = [
            { comment: 'abc', '_action': 'add' },
            { comment: 'def', '_action': 'add' }
          ];

        assert.equal(subForms.length, 0, '0 subForms');

        return subFormElement.add().then(function () {
          return subFormElement.add().then(function () {
            assert.equal(subFormElement.get('forms').length, 2, 'should be 2 subForms');

            subForms.at(0).getElement('comment').val('abc');
            subForms.at(1).getElement('comment').val('def');

            return subFormElement.data()
              .then(function (d) {
                assert.deepEqual(d, testData, 'subFormElement data');
                return Forms.current.data();
              })
              .then(function (d) {
                assert.deepEqual(d.comments, testData, 'total form data');
              });
          });
        });
      });

      test('remove 1st subForm', function () {
        var subFormElement = Forms.current.getElement('comments');
        var subForms = subFormElement.attributes.forms;

        assert.equal(subForms.length, 0);

        subFormElement.add().then(function () {
          var subForm = subFormElement.get('forms').at(0);
          assert(subForm.get('_view').$el.children('.ui-btn').children('button').html(), 'MINUS', 'label for MINUS `comments` subForm not set properly');

          return subFormElement.add().then(function () {
            assert.equal(subFormElement.get('forms').length, 2, 'should be 2 subForms');

            subForm.parentElement.remove(subForm);
            assert.equal(subForms.length, 1);
          });
        });
      });

      test('test subForms', function () {
        var subFormElement = Forms.current.getElement('comments'),
          subForms = subFormElement.attributes.forms,
          testData = [
            { comment: 'def', '_action': 'add' }
          ];

        assert.equal(subForms.length, 0, '0 subForms');

        return subFormElement.add().then(function () {
          subForms.at(0).getElement('comment').val('def');
          return subFormElement.data()
            .then(function (d) {
              assert.deepEqual(d, testData, 'subFormElement data');
              return Forms.current.data();
            })
            .then(function (d) {
              assert.deepEqual(d.comments, testData, 'total form data');
            });
        });
      });

      test('remove edit subForm (leaving placeholder)', function () {
        var subFormElement = Forms.current.getElement('comments');

        return subFormElement.add().then(function () {
          var subForms = subFormElement.attributes.forms;
          var subForm = subForms.at(0);
          var $view = subForm.attributes._view.$el;
          var testData = {
            _action: 'remove',
            id: 1
          };

          assert.equal($view.children('section').length, 1);
          assert.equal(subForms.length, 1);
          assert.equal(subForms.size(), 1);

          subForm.set('_action', 'edit');
          subForm.getElement('id').set('value', 1);

          subForm.parentElement.remove(subForm);
          subFormElement = Forms.current.getElement('comments');
          subForms = subFormElement.attributes.forms;
          subForm = subForms.at(0);

          assert.deepEqual(subForm.attributes, testData, 'attributes set correctly');
          assert.equal(subForms.length, 1);
          assert.equal(subForms.size(), 1);
        });
      });

      // FORMS-98 # Forms 3: Subform minus button doesn't work
      // what exactly is this testing?!
      // test('test add subform', function (done) {
      //   var subFormElement = Forms.current.getElement('comments'),
      //     $view = subFormElement.attributes._view.$el,
      //     $add = $view.children('.ui-btn').children('button'),
      //     subForms = subFormElement.attributes.forms;

      //   assert.equal(subForms.length, 1, 'no subForms yet');
      //   assert.equal(subForms.size(), 1);
      //   $add.trigger('click');
      //   setTimeout(function () {
      //     done();
      //   }, 0);
      // });

      test('remove subForm (leaving no placeholders)', function () {
        var subFormElement, subForms, subForm, $view;
        subFormElement = Forms.current.getElement('comments');
        subForms = subFormElement.attributes.forms;

        return subFormElement.add().then(function () {
          subForm = subForms.at(0);
          $view = subForm.attributes._view.$el;

          // will have one section available in DOM
          assert.equal($view.children('section').length, 1);
          assert.equal(subForms.length, 1);
          assert.equal(subForms.size(), 1);

          subForm.parentElement.remove(subForm);
          assert.equal($view.children('section').length, 0);
          assert.equal(subForms.length, 0);
          assert.equal(subForms.size(), 0);
        });
      });
    });

// ///////////////////////////////////////////////////////////////////////////////

    suite('subform buttons', function () {
      test('add button should add a new subform', function (done) {
        var commentsSubForm = Forms.current.getElement('comments');
        var $addButton = commentsSubForm.get('_view').$el.find('.bm-button.bm-add');
        var startingLength = commentsSubForm.get('forms').length;

        $addButton.trigger('click');

        // since adding a subform is an async process
        setTimeout(function () {
          assert.isAbove(commentsSubForm.get('forms').length, startingLength);
          done();
        }, 250);
      });

      test('remove button should show a popup, and do nothing on cancel', function (done) {
        var commentsSubForm = Forms.current.getElement('comments');

        commentsSubForm.add().then(function () {
          var $removeButton = commentsSubForm.get('_view').$el.find('.bm-button.bm-remove');
          var startingLength = commentsSubForm.get('forms').length;
          $removeButton.trigger('click');
          // since adding a subform is an async process
          setTimeout(function () {
            assert.isAbove($('.bm-popup.bm-confirm').length, 0);
            $('.bm-popup.bm-confirm').find('.bm-cancel').trigger('click');
            setTimeout(function () {
              assert.equal(commentsSubForm.get('forms').length, startingLength);
              done();
            }, 250);
          }, 250);
        });
      });

      test('remove button should show a popup, and remove on confirm.', function (done) {
        var commentsSubForm = Forms.current.getElement('comments');
        var startingLength = commentsSubForm.get('forms').length;

        commentsSubForm.add().then(function () {
          var $removeButton = commentsSubForm.get('_view').$el.find('.bm-button.bm-remove');

          $removeButton.trigger('click');
          // since adding a subform is an async process
          setTimeout(function () {
            assert.isAbove($('.bm-popup.bm-confirm').length, 0);
            $('.bm-popup.bm-confirm').find('.bm-confirm').trigger('click');
            setTimeout(function () {
              assert.equal(commentsSubForm.get('forms').length, startingLength);
              done();
            }, 400);
          }, 250);
        });
      });
    });

// //////////////////////////////////////////////////////////////////////////////

    suite('after #setRecord(...) with IDs', function () {
      setup(function () {
        return form.setRecord({
          comments: [
            { id: 123, comment: 'abc', '_action': 'edit' },
            { id: 456, comment: 'def', '_action': 'edit' }
          ]
        });
      });

      test('section[data-record-index]', function () {
        return BMP.Forms.current.getElement('comments').get('forms')
                  .map(function (model) {
                    return model.get('_view');
                  })
                  .forEach(function (view, index) {
                    assert.equal(view.$el.attr('data-record-index'), '' + index);
                  });
      });

      test('section[data-record-id]', function () {
        BMP.Forms.current.getElement('comments').get('forms')
        .forEach(function (model) {
          var $el = model.get('_view').$el;
          assert.equal(
            $el.attr('data-record-id'),
            '' + model.getElement('id').val()
          );
        });
      });

      test('section[data-form]', function () {
        BMP.Forms.current.getElement('comments').get('forms')
        .forEach(function (model) {
          var $el = model.get('_view').$el;
          assert.equal($el.attr('data-form'), 'form2');
        });
      });
    });

    suite('incomplete: Edit Form', function () {
      test('initialise with form.json');

/*
      test('initialise with form.json', function (done) {
        var form = Forms.current;
        $.get("getformrecord.xml").then(
          function (data) {
            var record = {}, node, nodes;
            nodes = data.evaluate('//' + form.attributes.name, data);
            node = nodes.iterateNext();
            _.each(node.children, function (key) {
              record[key.nodeName] = key.innerHTML;
            });
            form.setRecord(record).then(function () {
              form.data().then(function (formdata) {
                assert.deepEqual(formdata, record, 'form data');
              });
            });
          }
       );
        done();
      });
    */
    });
  }); // END: suite('1', ...)
});
