/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {

  suite('17: Blob fields', function () {
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

      test('img elements present', function () {
        var elements = ['Photo', 'Photo1', 'Photo2'],
          element,
          view;
        _.each(elements, function (key) {
          element = BMP.Forms.current.getElement(key);
          setTimeout(function () {
            view = element.attributes._view.$el.children('figure');
            assert.lengthOf(view.children('img'), 1);
          }, 1000);
        });
      });

      test('fixBlobFieldValue test', function () {
        var values = ['/9j/4AAQSkZJRgABAgEASABIAAD/4RYPRXhpZgAATU0AKgAAAAgAB', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD'],
          results = ['data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/4RYPRXhpZgAATU0AKgAAAAgAB', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD'],
          result,
          form = BMP.Forms._models.Form;
        _.each(values, function (value) {
          result = form.addMimetype(value, 'image/jpeg');
          assert.isTrue(_.contains(results, result));
        });
      });

      test('elements mimetype', function () {
        var elements = {'Photo': 'image/jpeg', 'Photo1': 'image/png', 'Photo2': 'image/jpeg'},
          element,
          value,
          parts,
          mime;
        _.each(elements, function (mimetype, key) {

          setTimeout(function () {
            element = BMP.Forms.current.getElement(key);
            value = element.val();
            parts = value.split(';');
            parts = parts[0].split(':');
            mime = parts[1];
            assert.equal(mimetype, mime);
          }, 1000);
        });
      });
    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
