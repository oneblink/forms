
/*global assert, sinon*/ // chai

define(['BlinkForms', 'testUtils', 'BIC'], function (Forms, testUtils) {

  suite('23_1: Location Native field', function () {
    var $doc = $(document),
      $page = $('[data-role=page]'),
      $content = $page.find('[data-role=content]');

    window.MSApp = {};

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

      test('LOCATE button - success callback + no location', function (done) {
        var element = Forms.current.getElement('location2'),
          $view = element.attributes._view.$el,
          $locate = $view.find('.ui-btn').children('button').first(),
          spy;

        window.navigator.map = {
          confirmLocation: function (onSuccess, onError, options) {
            assert.isFunction(onSuccess);
            assert.isFunction(onError);
            assert.ok(options.latitude);
            assert.ok(options.longitude);

            onSuccess(null);

            element.attributes._view.on('confirmLocation', function (loc) {
              assert.equal(loc, null);
              element.attributes._view.off('confirmLocation');
              done();

            });
          }
        };

        spy = sinon.spy(window.navigator.map, "confirmLocation");

        assert.equal(spy.callCount, 0);

        $locate.trigger('click');

        assert.equal(spy.callCount, 1);

      });

      test('LOCATE button - success callback + location', function (done) {
        var element = Forms.current.getElement('location2'),
          $view = element.attributes._view.$el,
          $locate = $view.find('.ui-btn').children('button').first(),
          spy;

        window.navigator.map = {
          confirmLocation: function (onSuccess, onError, options) {
            var sampleLocation = {"latitude": -33.867487, "longitude": 151.20699, "accuracy": 25000};
            assert.isFunction(onSuccess);
            assert.isFunction(onError);
            assert.ok(options.latitude);
            assert.ok(options.longitude);

            onSuccess(sampleLocation);

            setTimeout(function () {
              assert.deepEqual(element.get('value'), sampleLocation);
              done();
            }, 1);
          }
        };

        spy = sinon.spy(window.navigator.map, "confirmLocation");

        assert.equal(spy.callCount, 0);

        $locate.trigger('click');

        assert.equal(spy.callCount, 1);

      });

      test('LOCATE button - error callback', function (done) {
        var element = Forms.current.getElement('location2'),
          $view = element.attributes._view.$el,
          $locate = $view.find('.ui-btn').children('button').first(),
          spy;

        window.navigator.map = {
          confirmLocation: function (onSuccess, onError, options) {
            var spy2 = sinon.spy(window.console, "error");
            assert.isFunction(onSuccess);
            assert.isFunction(onError);
            assert.ok(options.latitude);
            assert.ok(options.longitude);

            assert(!onError("test error"));

            setTimeout(function () {
              assert.equal(spy2.callCount, 1);
              done();
            }, 1);
          }
        };

        spy = sinon.spy(window.navigator.map, "confirmLocation");

        assert.equal(spy.callCount, 0);

        $locate.trigger('click');

        assert.equal(spy.callCount, 1);

      });

      test('CLEAR button works as expected', function (done) {
        var element = Forms.current.getElement('location2'),
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
