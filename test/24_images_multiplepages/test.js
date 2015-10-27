define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {
  testUtils.defineFormLoadSuite('TestForm', 'add');

  suite('24: Blob fields + multiple pages', function () {
    test('Render form with data', function (done) {
      var form = Forms.current;
      $.ajax({
        type: 'GET',
        url: 'getformrecord.xml',
        dataType: 'xml'}).then(
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
                assert.ok(formdata[k], k + ' does not exist');
              });
              done();
            }, function () {
              assert(false, 'failed to set record');
              done();
            });
          });
        }
     );
    });

    suite('verifying elements on Page:', function () {
      suite('Page 0', function () {
        var elements = {
          'Photo': 1,
          'Photo1': 1,
          'Photo2': 0,
          'location': 0,
          'draw': 0
        };

        suiteSetup(function (done) {
          var form = Forms.current,
            pages = form.attributes.pages;

          BMP.Forms.once('pageInjected', function () {
            done();
          });

          pages.goto(0);
        });

        _.each(elements, function (v, i) {
          test(i + ' should be ' + (v === 1 ? 'visible' : 'invisible'), function (done) {
            var form = Forms.current,
              element,
              view;

            element = form.getElement(i);
            if (v === 1) {
              view = element.attributes._view.$el;
              if (testUtils.isPhantom()) {
                assert.lengthOf(view.children(), 2);
              } else {
                assert.lengthOf(view.children(), 3);
                assert.lengthOf(view.children('figure').children('img'), 1);
              }
            } else {
              assert.notOk(element.attributes._view);
            }

            done();
          });
        });
      });

      suite('Page 1', function () {
        var elements = {
          'Photo': 0,
          'Photo1': 0,
          'Photo2': 1,
          'location': 1,
          'draw': 1
        };

        suiteSetup(function (done) {
          var form = Forms.current,
            pages = form.attributes.pages;

          BMP.Forms.once('pageInjected', function () {
            done();
          });

          pages.goto(1);
        });

        _.each(elements, function (v, i) {
          test(i + ' should be ' + (v === 1 ? 'visible' : 'invisible'), function (done) {
            var form = Forms.current,
              element,
              view;

            element = form.getElement(i);
            if (v === 1) {
              view = element.attributes._view.$el;
              if (testUtils.isPhantom()) {
                assert.lengthOf(view.children(), 2);
              } else {
                assert.lengthOf(view.children(), 3);
                assert.lengthOf(view.children('figure').children('img'), 1);
              }
            } else {
              assert.notOk(element.attributes._view);
            }

            done();
          });
        });
      });
    });
  }); // END: suite('Form', ...)
});
