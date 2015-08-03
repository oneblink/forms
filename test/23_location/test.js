/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'testUtils', 'BIC'], function (Forms, testUtils) {

  suite('23: Location field', function () {
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

      if (navigator.userAgent.toLowerCase().indexOf('phantom') !== -1) {
        return;
      }

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
                var keys = ['id', 'location1', 'location2', '_action'];
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

      test('location elements present', function (done) {
        var elements = {'location1': 1, 'location2': 1, 'location3': 0, 'location4': 0},
          element,
          view;

        _.each(elements, function (val, key) {
          element = BMP.Forms.current.getElement(key);
          view = element.attributes._view.$el.children('figure');
          assert.lengthOf(view.children('img'), val);
        });
        done();
      });

      test('location data is correct', function (done) {
        var form = Forms.current,
          elements = {
            id: "1",
            _action: "add",
            location1: '{"latitude":-33.867487,"longitude":151.20699,"altitude":null,"accuracy":25000,"altitudeAccuracy":null,"heading":null,"speed":null}',
            location2: '{"latitude":-33.867487,"longitude":151.20699,"altitude":null,"accuracy":25000,"altitudeAccuracy":null,"heading":null,"speed":null}'
          };

        form.data().then(function (formdata) {
          setTimeout(function () {
            assert.deepEqual(formdata, elements, "form data");
            done();
          }, 0);
        }, function () {
          assert(false, "failed to set record");
          done();
        });
      });

      test('LOCATE button works as expected', function (done) {
        var element = Forms.current.getElement('location4'),
          $view = element.attributes._view.$el,
          $add = $view.find('.ui-btn').children('button'),
          $dialog,
          keys = ['accuracy', 'altitude', 'altitudeAccuracy', 'heading', 'latitude', 'longitude', 'speed'],
          value;

        this.timeout(10000);

        $add.trigger('click');

        setTimeout(function () {
          $dialog = $('#bmp-forms-location').find('button');
          $dialog.first().trigger('click');
          value = element.get('value');
          _.each(keys, function (k) {
            assert(_.has(value, k), k + " does not exist");
          });
          done();
        }, 7000);
      });

      test('CLEAR button works as expected', function (done) {
        var element = Forms.current.getElement('location4'),
          $view = element.attributes._view.$el,
          $clear = $view.find('.ui-btn').children('button').last(),
          value;

        $clear.trigger('click');

        setTimeout(function () {
            value = element.get('value');
            assert.notOk(value, "value still exists");
            done();
        }, 0);
      });


    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
