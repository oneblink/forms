define(['BlinkForms', 'testUtils', 'BIC'], function (Forms, testUtils) {

  function isPhantom () {
    return navigator.userAgent.toLowerCase().indexOf('phantom') !== -1;
  }

  suite('24: Blob fields + multiple pages', function () {
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

      testUtils.defineLabelTest();

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

      suite('verifying elements on Page:', function () {

        suite('Page 0', function () {

          var elements = {
            "Photo": 1,
            "Photo1": 1,
            "Photo2": 0,
            "location": 0,
            "draw": 0
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

            test(i + ' should be ' + (v === 1 ? "visible" : "invisible"), function (done) {
              var form = Forms.current,
                element,
                view;

              element = form.getElement(i);
              if (v === 1) {
                view = element.attributes._view.$el;
                if (isPhantom()) {
                  assert.lengthOf(view.children(), 2);
                } else {
                  assert.lengthOf(view.children('label, div, figure'), 3);
                  assert.lengthOf(view.children('figure').children('img'), 1);
                }
              } else {
                assert.isUndefined(element.attributes._view);
              }

              done();
            });
          });
        });

        suite('Page 1', function () {

          var elements = {
            "Photo": 0,
            "Photo1": 0,
            "Photo2": 1,
            "location": 1,
            "draw": 1
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

            test(i + ' should be ' + (v === 1 ? "visible" : "invisible"), function (done) {
              var form = Forms.current,
                element,
                view;

              element = form.getElement(i);
              if (v === 1) {
                view = element.attributes._view.$el;
                if (isPhantom()) {
                  assert.lengthOf(view.children(), 2);
                } else {
                  assert.lengthOf(view.children('label, div, figure'), 3);
                  assert.lengthOf(view.children('figure').children('img'), 1);
                }
              } else {
                assert.isUndefined(element.attributes._view);
              }

              done();
            });
          });
        });

      });

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
