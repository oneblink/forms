define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {
  suite('31: subForms', function () {
    suiteSetup(function () {
      return testUtils.loadForm('form1', 'add')
      .then(function () {
      });
    });

    test('collapsing sub-form elements have summaryPromise', function () {
      return Promise.all(['notes', 'comments'].map(function (name) {
        var el = BMP.Forms.current.getElement(name);
        assert(el.attributes.summaryPromise);
        return el.attributes.summaryPromise.then(function (names) {
          assert.deepEqual(names, ['datetimenow', 'comment'], name);
        });
      }));
    });

    suite('after #setRecord()', function () {
      suiteSetup(function () {
        return Forms.current.setRecord({
          comments: [
            {
              comment: 'abc'
            },
            {
              comment: 'def'
            },
            {
              comment: 'ghi'
            }
          ],
          notes: [
            {
              comment: 'abc'
            },
            {
              comment: 'def'
            },
            {
              comment: 'ghi'
            }
          ],
          reviews: [
            {
              comment: 'abc'
            },
            {
              comment: 'def'
            },
            {
              comment: 'ghi'
            }
          ]
        });
      });

      test('collapse=forms has summary and collapsible', function () {
        ['notes', 'comments'].forEach(function (name) {
          var el = BMP.Forms.current.getElement(name);
          assert.lengthOf(el.get('_view').$el.find('.ui-collapsible'), 3);
          assert.lengthOf(el.get('_view').$el.find('.bm-subform__bm-title'), 3);
          assert.lengthOf(el.get('_view').$el.find('.bm-subform__bm-summary'), 3);
        });
      });

      test('collapse=off is not collapsible', function () {
        ['reviews'].forEach(function (name) {
          var el = BMP.Forms.current.getElement(name);
          assert.lengthOf(el.get('_view').$el.find('.ui-collapsible'), 0);
        });
      });

      test('label has been set by rowclass', function () {
        var el = BMP.Forms.current.getElement('comments');
        assert.equal(el.get('_view').$el.find('.bm-subform__bm-title').first().text(), 'Custom');
      });

      test('Plus button text takes precedence over label has been set by rowclass', function () {
        assert.equal($('.bm-button.bm-add', $('section[data-name=comments]').first().children('.ui-btn')).text(), 'PLUS');
      });

      test('Minus button text takes precedence over label has been set by rowclass', function () {
        var el = BMP.Forms.current.getElement('comments');
        assert.equal(el.get('_view').$el.find('.bm-subform__bm-removebutton').first().text(), 'MINUS');
      });

      test('collapsible subforms populated by #setRecord are collapsed', function () {
        assert.lengthOf($('.ui-collapsible-collapsed', 'section[data-name=comments]'), 3);
        assert.lengthOf($('.bm-form', 'section[data-name=comments]'), 3);
      });

      test('a new subform is expanded when added', function () {
        return Forms.current.getElement('comments').get('_view').onAddClick().then(function () {
          assert.lengthOf($('.ui-collapsible-collapsed', 'section[data-name=comments]'), 3);
          assert.lengthOf($('.bm-form', 'section[data-name=comments]'), 4);
        });
      });

      test('collapsible sub forms have a single toggle trigger element', function () {
        assert.lengthOf(BMP.Forms.current.getElement('comments').getForm(0).attributes._view.$toggleTrigger, 1);
      });
    });
  }); // END: suite('1', ...)
});
