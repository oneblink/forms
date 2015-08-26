define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {

  suite('17: Blob fields', function () {

    /**
     * execute once before everything else in this suite
     */
    suiteSetup(function () {
      if (!window.navigator.getUserMedia) {
        window.navigator.getUserMedia = {};
      }
      if (!window.URL) {
        window.URL = {};
      }
      if (!window.URL.createObjectURL) {
        window.URL.createObjectURL = {};
      }
    });

    testUtils.defineFormLoadSuite('TestForm', 'add');

    suite('Form', function () {

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
          }
       );
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

      suite('WebRtc Prints correct Buttons', function () {
        test('button present', function () {
          var elements = ['camera', 'Photo', 'Photo1', 'Photo2'],
            form = BMP.Forms.current,
            element,
            view;
          elements.forEach(function (key) {
            element = form.getElement(key);
            view = element.attributes._view.$el;
            assert.equal(view.find('a[data-role="button"]').hasClass('webrtc_image'), true);
          });
        });
      });

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
