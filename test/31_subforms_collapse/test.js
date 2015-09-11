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
    });
  }); // END: suite('1', ...)
});
