define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {

  testUtils.defineFormLoadSuite('form1', 'add');

  suite('7: record population', function () {
    var record = {
      id: 'harry7',
      name: 'Harry Potter',
      comments: [
        {
          id: '1',
          comment: 'what a whiner'
        },
        {
          id: '2',
          comment: 'get a comb'
        }
      ]
    };

    test('promise is resolved', function (done) {
      Forms.current.setRecord(record).then(function () {
        assert(true, 'success handler for promise called');
        done();
      });
    });

    test('"name" element populated', function () {
      var form = BMP.Forms.current;
      assert.equal(form.getElement('name').val(), 'Harry Potter');
    });

    test('"id" element created and populated', function () {
      var form = BMP.Forms.current;
      assert.equal(form.getElement('id').val(), 'harry7');
    });

    test('"comments" has 2 subRecords', function () {
      var form = BMP.Forms.current,
        comments = form.getElement('comments');

      assert.equal(comments.size(), 2);
    });

    test('"comment[0]" populated correctly', function () {
      var form = BMP.Forms.current,
        sub = form.getElement('comments').getForm(0),
        comment = sub.getElement('comment');

      assert.equal(comment.val(), 'what a whiner');
    });

    test('"comment[1]" populated correctly', function () {
      var form = BMP.Forms.current,
        sub = form.getElement('comments').getForm(1),
        comment = sub.getElement('comment');

      assert.equal(comment.val(), 'get a comb');
    });

    suite('comments.setRecords() with 3 subForms', function () {

      suiteSetup(function () {
        record = {
          id: 'harry7',
          name: 'Harry Potter',
          comments: [
            {
              id: '1',
              comment: 'what a whiner'
            },
            {
              id: '2',
              comment: 'get a comb'
            },
            {
              id: '3',
              comment: 'nice scar'
            }
          ]
        };
      });

      test('promise is resolved', function (done) {
        Forms.current.setRecord(record).then(function () {
          assert(true, 'success handler for promise called');
          done();
        });
      });

      test('"comments" has 3 subRecords', function () {
        var form = BMP.Forms.current,
          comments = form.getElement('comments');

        assert.equal(comments.size(), 3);
      });

      test('"comment[0]" populated correctly', function () {
        var form = BMP.Forms.current,
          sub = form.getElement('comments').getForm(0),
          comment = sub.getElement('comment');

        assert.equal(comment.val(), 'what a whiner');
      });

      test('"comment[1]" populated correctly', function () {
        var form = BMP.Forms.current,
          sub = form.getElement('comments').getForm(1),
          comment = sub.getElement('comment');

        assert.equal(comment.val(), 'get a comb');
      });

      test('"comment[2]" populated correctly', function () {
        var form = BMP.Forms.current,
          sub = form.getElement('comments').getForm(2),
          comment = sub.getElement('comment');

        assert.equal(comment.val(), 'nice scar');
      });

    }); // END: suite('comments.setRecord() with 3...', ...)

    suite('comments.setRecords() with 1 subForms', function () {

      suiteSetup(function () {
        record = {
          id: 'harry7',
          name: 'Harry Potter',
          comments: [
            {
              id: '3',
              comment: 'nice scar'
            }
          ]
        };
      });

      test('promise is resolved', function (done) {
        Forms.current.setRecord(record).then(function () {
          assert(true, 'success handler for promise called');
          done();
        });
      });

      test('"comments" has 1 subRecord', function () {
        var form = BMP.Forms.current,
          comments = form.getElement('comments');

        assert.equal(comments.size(), 1);
      });

      test('"comment[0]" populated correctly', function () {
        var form = BMP.Forms.current,
          sub = form.getElement('comments').getForm(0),
          comment = sub.getElement('comment');

        assert.equal(comment.val(), 'nice scar');
      });
    }); // END: suite('comments.setRecord() with 3...', ...)

  });

});
