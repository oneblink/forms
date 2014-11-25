/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {

  suite('15: subForms render', function () {
    var $doc = $(document),
      $page = $('[data-role=page]'),
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

        Forms.getDefinition('Test', 'add').then(function (def) {
          Forms.initialize(def, 'add');
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
          done();
        });

        $.mobile.page({}, $page);
        $page.trigger('pagecreate');
        $page.show();
      });

      // test('promise is resolved', function (done) {
      //   var record = {
      //     id: '37',
      //     name: 'Harry Potter',
      //     address: [
      //       {
      //         id: 1,
      //         detail: 'what a whiner'
      //       },{
      //         id: 2,
      //         detail: 'great day'
      //       }
      //     ]
      //   };
      //
      //   Forms.current.setRecord(record).then(function () {
      //     assert(true, 'success handler for promise called');
      //     done();
      //   });
      // });

      test('Edit form with subforms', function (done) {
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

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
