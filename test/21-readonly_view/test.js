/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {

  suite('21: Readonly View ', function () {
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

        Forms.getDefinition('TestForm', 'add').then(function (def) {
          Forms.initialize(def, 'add');
          form = Forms.current;
          assert.equal($.type(form), 'object');
          assert.equal(form.get('name'), 'TestForm');
          assert.equal(form.get('label'), 'TestForm');
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

      test('Render form with data', function (done) {
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

      test('no input/button elements present', function (done) {
        var form = Forms.current,
          element,
          view,
          figure,
          elements = ['Photo', 'location', 'draw', 'Rank', 'Details'];

          _.each(elements, function (name) {
            element = form.getElement(name);
            view = element.attributes._view.$el;
            figure = view.children('figure');
            assert.lengthOf(figure.children('image'), 0);
            assert.lengthOf(view.children('button'), 0);
            assert.lengthOf(view.children('a'), 0);
            assert.lengthOf(view.children('input'), 0);
          });
        done();
      });

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
