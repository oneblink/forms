/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {

  suite('7: record population', function () {
    var $page = $('[data-role=page]'),
      $content = $page.find('[data-role=content]');

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

        Forms.getDefinition('form1', 'add').then(function (def) {
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

    }); // END: suite('Form', ...)

    suite('form.setRecord() with 2 nested subForms', function () {
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

  }); // END: suite('1', ...)

});
