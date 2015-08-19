
/*global assert, sinon*/ // chai

define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {

  window.MSApp = {};

  if (navigator.userAgent.toLowerCase().indexOf('phantom') !== -1) {
    return;
  }

  testUtils.defineFormLoadSuite('TestForm', 'add');

  suite('23_1: Location Native field', function () {

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
        spy, spyStatic;

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
        },
        getStaticMap: function (onSuccess, onError) {
          assert.isFunction(onSuccess);
          assert.isFunction(onError);
        }
      };

      spy = sinon.spy(window.navigator.map, "confirmLocation");
      spyStatic = sinon.spy(window.navigator.map, "getStaticMap");

      element.once('change:value', function () {
        assert.equal(spyStatic.callCount, 0);
      });

      assert.equal(spy.callCount, 0);

      $locate.trigger('click');

      assert.equal(spy.callCount, 1);

    });

    test('LOCATE button - success callback + location', function (done) {
      var element = Forms.current.getElement('location2'),
        $view = element.attributes._view.$el,
        $locate = $view.find('.ui-btn').children('button').first(),
        spy, spyStatic;

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
        },
        getStaticMap: function (onSuccess, onError) {
          assert.isFunction(onSuccess);
          assert.isFunction(onError);
        }
      };

      spy = sinon.spy(window.navigator.map, "confirmLocation");
      spyStatic = sinon.spy(window.navigator.map, "getStaticMap");

      element.once('change:value', function () {
        assert.equal(spyStatic.callCount, 1);
      });

      assert.equal(spy.callCount, 0);

      $locate.trigger('click');

      assert.equal(spy.callCount, 1);

    });

    test('LOCATE button - error callback', function (done) {
      var element = Forms.current.getElement('location2'),
        $view = element.attributes._view.$el,
        $locate = $view.find('.ui-btn').children('button').first(),
        spy, spyStatic;

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
            window.console.error.restore();
            done();
          }, 1);
        },
        getStaticMap: function (onSuccess, onError) {
          assert.isFunction(onSuccess);
          assert.isFunction(onError);
        }
      };

      spy = sinon.spy(window.navigator.map, "confirmLocation");
      spyStatic = sinon.spy(window.navigator.map, "getStaticMap");

      element.once('change:value', function () {
        assert.equal(spyStatic.callCount, 0);
      });

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

    test('LOCATE button - success callback + location + getStaticImage > success', function (done) {
      var element = Forms.current.getElement('location2'),
        $view = element.attributes._view.$el,
        $locate = $view.find('.ui-btn').children('button').first(),
        spy, spyStatic, sampleImage;

      sampleImage = "data:image/jpeg;base64,blah";

      window.navigator.map = {
        confirmLocation: function (onSuccess, onError, options) {
          var sampleLocation = {
            "latitude": -33.867487,
            "longitude": 151.20699,
            "accuracy": 25000
          };
          assert.isFunction(onSuccess);
          assert.isFunction(onError);
          assert.ok(options.latitude);
          assert.ok(options.longitude);

          onSuccess(sampleLocation);
        },
        getStaticMap: function (onSuccess, onError) {
          assert.isFunction(onSuccess);
          assert.isFunction(onError);

          onSuccess(sampleImage);
        }
      };

      spy = sinon.spy(window.navigator.map, "confirmLocation");
      spyStatic = sinon.spy(window.navigator.map, "getStaticMap");

      element.once('change:value', function () {
        var $img;
        assert.equal(spy.callCount, 1);
        assert.equal(spyStatic.callCount, 1);
        // there will be atleast one image and src would be the content sent by onSuccess
        $img = element.get('_view').$el.find('img');
        assert.equal($img.length, 1, "image not found");
        assert.equal(element.get('_view').$el.find('img').attr('src'), sampleImage, "invalid image src");

        done();
      });

      assert.equal(spy.callCount, 0);

      $locate.trigger('click');
    });

    test('LOCATE button - success callback + location + getStaticImage > error', function (done) {
      var element = Forms.current.getElement('location2'),
        $view = element.attributes._view.$el,
        $locate = $view.find('.ui-btn').children('button').first(),
        spy, spyStatic, spyError;

      window.navigator.map = {
        confirmLocation: function (onSuccess, onError, options) {
          var sampleLocation = {
            "latitude": -33.861234,
            "longitude": 151.20699,
            "accuracy": 25000
          };
          assert.isFunction(onSuccess);
          assert.isFunction(onError);
          assert.ok(options.latitude);
          assert.ok(options.longitude);

          onSuccess(sampleLocation);
        },
        getStaticMap: function (onSuccess, onError) {
          assert.isFunction(onSuccess);
          assert.isFunction(onError);

          onError("map cannot be displayed");
        }
      };

      spy = sinon.spy(window.navigator.map, "confirmLocation");
      spyStatic = sinon.spy(window.navigator.map, "getStaticMap");
      spyError = sinon.spy(window.console, "error");

      element.once('change:value', function () {
        var $img;
        assert.equal(spy.callCount, 1);
        assert.equal(spyStatic.callCount, 1);
        assert.equal(spyError.callCount, 1);
        // there won't be any image, because of error call
        $img = element.get('_view').$el.find('img');
        assert.equal($img.length, 0, "image not found");
        window.console.error.restore();

        done();
      });

      assert.equal(spy.callCount, 0);

      $locate.trigger('click');
    });

  }); // END: suite('Form', ...)

});
