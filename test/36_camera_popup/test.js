define(['backbone', 'BlinkForms', 'testUtils', 'sinon', 'Squire'], function (Backbone, Forms, testUtils, sinon, Squire) {
  testUtils.defineFormLoadSuite('form1', 'add');

  suite('36: Camera Popup', function () {
    var PopupModel = null;
    var mediaHelper = {
      getMedia: function () {},
      getDevices: function () {}
    };
    var getMediaStub = sinon.stub(mediaHelper, 'getMedia');
    var getDevicesStub = sinon.stub(mediaHelper, 'getDevices');
    var injector = new Squire();

    setup(function (done) {
      getDevicesStub.returns(Promise.resolve([]));

      injector.mock('forms/helpers/bm-media-helper', mediaHelper);
      injector.require(['forms/models/popups/webcam-popup'], function (Model) {
        PopupModel = Model;

        done();
      });
    });

    teardown(function () {
      getDevicesStub.reset();
      getMediaStub.reset();
    });

    suite('model', function () {
      var popupModel = null;

      setup(function () {
        popupModel = new PopupModel();
      });

      teardown(function () {
        popupModel = null;
      });

      test('default attributes are as expected', function () {
        var popupModalDefaults = {
          title: '',
          message: '',

          cancelButtonText: 'No',
          cancelButtonIcon: 'delete',

          confirmButtonText: 'Yes',
          confirmButtonIcon: 'check',

          dissmissible: true
        };

        var webcamDefaults = {
          orientation: 0,
          rotateBy: 90,

          isPermissionGranted: false,

          title: 'Access Needed',

          stream: null,
          videoSources: [],
          destinationMimeType: 'image/png',

          cancelButtonText: 'Close',

          confirmButtonText: 'Use'
        };

        assert.deepEqual(popupModel.attributes, _.extend({}, popupModalDefaults, webcamDefaults));
      });

      test('getVideoDevices sets only video sources', function () {
        var mockDevices = [{id: 0, kind: 'video'}, {id: 1, kind: 'audio'}];
        getDevicesStub.returns(Promise.resolve(mockDevices));

        return popupModel.getVideoDevices().then(function () {
          assert.isArray(popupModel.get('videoSources'));
          assert.lengthOf(popupModel.get('videoSources'), 1);
          assert.deepEqual(popupModel.get('videoSources')[0], mockDevices[0]);
        });
      });

      test('attributes.stream that have a falsy value should not create an object url', function () {
        assert.strictEqual(popupModel.streamToURL(), '');

        popupModel.attributes.stream = null;
        assert.strictEqual(popupModel.streamToURL(), '');

        popupModel.attributes.stream = NaN;
        assert.strictEqual(popupModel.streamToURL(), '');

        popupModel.attributes.stream = undefined;
        assert.strictEqual(popupModel.streamToURL(), '');

        popupModel.attributes.stream = '';
        assert.strictEqual(popupModel.streamToURL(), '');
      });

      test('#stopStream() calls stop() on the active stream', function () {
        var stream = {
          getTracks: function () {}
        };

        var tracks = [1, 2, 3, 4, 5].map(function () {
          var obj = {stop: function () {}};
          sinon.stub(obj, 'stop');
          return obj;
        });
        var streamStub = sinon.stub(stream, 'getTracks');
        streamStub.returns(tracks);

        popupModel.set('stream', stream);
        popupModel.stopStream();
        tracks.forEach(function (track) {
          assert.strictEqual(track.stop.callCount, 1);
        });
        assert.notOk(popupModel.get('stream'), 'stream was not removed from the model');
      });

      test('#changeInputDevice() passes the correct options format to #getMedia', function () {
        var streamID = 1;
        var expected = {
          video: {
            optional: [
              {sourceId: streamID}
            ]
          },
          audio: false
        };

        getMediaStub.returns(Promise.resolve('stream'));

        return popupModel.changeInputDevice(streamID).then(function (stream) {
          var spyCall = getMediaStub.getCall(0);
          assert.deepEqual(spyCall.args[0], expected);
        });
      });

      suite('orientation', function () {
        test('should default to portrait', function () {
          assert.isTrue(popupModel.isPortrait());
        });

        test('should be in portrait if oritenation % 180 === 0', function () {
          [0, 1, 2, 3, 4, 5].forEach(function (multiplier) {
            popupModel.attributes.orientation = multiplier * 180;
            assert.isTrue(popupModel.isPortrait());
          });
        });

        test('should not be in portrait if oritenation % 180 !== 0', function () {
          [1, 3, 5].forEach(function (multiplier) {
            popupModel.attributes.orientation = multiplier * 90;
            assert.isFalse(popupModel.isPortrait());
          });
        });

        test('should go past 360', function () {
          var i = 20;
          while (i--) {
            popupModel.rotate();
          }

          assert.isAbove(popupModel.get('orientation'), 360);
        });

        test('#getClampedOrientation() should clamp orientation between 0 and 360', function () {
          var i = 21;
          while (i--) {
            popupModel.rotate();
          }

          assert.equal(90, popupModel.getClampedOrientation());
        });

        test('#getClampedOrientation() should clamp a negative orientation between 0 and 360', function () {
          popupModel.attributes.orientation = -90;
          assert.equal(270, popupModel.getClampedOrientation());
        });

        test('#getOrientationAsRadian() should return the orientation as a clamped radian', function () {
          var expected = 90 * (Math.PI / 180);
          popupModel.rotate(360 + 90);
          assert.strictEqual(popupModel.getOrientationAsRadian(), expected);
        });
      });
    });

    suite('view', function () {
      var popupModel = null;
      var PopupView = null;
      var popupView = null;

      suiteSetup(function () {
        PopupView = Forms._views.WebcamPopupView;
      });

      teardown(function () {
        popupView.remove();
        popupView = null;
        popupModel = null;
      });

// ############# access denied

      suite('when webcam access has not been granted', function () {
        setup(function () {
          popupModel = new PopupModel();
          popupView = new PopupView({model: popupModel}).render();
          popupView.$el
            .popup()
            .trigger('create');
        });

        test('"access needed" popup is shown', function () {
          var $errorEl;
          $errorEl = $('.bm-webrtc__bm-error', popupView.$el);
          assert.lengthOf($errorEl, 1);
          assert.equal($.trim($errorEl.text()), 'Please allow access to the camera and try again.');
        });

        test('Cancel button click calls reject with an Error', function () {
          var rejectSpy = sinon.spy();
          popupView._reject = rejectSpy;
          $('[data-onclick="on-cancel-click"]', popupView.$el).trigger('click');

          assert.equal(rejectSpy.callCount, 1);
          assert.equal(rejectSpy.getCall(0).args[0].message, 'cancel');
          popupView._reject = undefined;
        });
      });

// ############# access granted

      suite('when webcam access has been granted', function () {
        setup(function () {
          popupModel = new PopupModel({
            isPermissionGranted: true
          });
          popupView = new PopupView({model: popupModel}).render();
        });

        test('the webcam popup is shown', function () {
          assert.lengthOf($('video', popupView.$el), 1);
        });

// ############# button events

        suite('button events', function () {
          test('Rotate button click calls model rotate function', function () {
            var rotateSpy = sinon.spy(popupModel, 'rotate');
            $('[data-onclick="on-rotate-click"]', popupView.$el).trigger('click');
            assert.equal(rotateSpy.callCount, 1);
            rotateSpy.restore();
          });

          test('Cancel button click calls reject with an Error', function () {
            var rejectSpy = sinon.spy();
            popupView._reject = rejectSpy;
            $('[data-onclick="on-cancel-click"]', popupView.$el).trigger('click');

            assert.equal(rejectSpy.callCount, 1);
            assert.equal(rejectSpy.getCall(0).args[0].message, 'cancel');
            popupView._reject = undefined;
          });

          test('Confirm button click calls resolve', function () {
            var resolveSpy = sinon.spy();
            popupView._resolve = resolveSpy;
            $('[data-onclick="on-confirm-click"]', popupView.$el)
              .removeProp('disabled')
              .trigger('click');

            assert.equal(resolveSpy.callCount, 1);
            popupView._resolve = undefined;
          });
        });

// ############# Model Events

        suite('model events', function () {
          test('changing orientation rotates video', function () {
            var cssTransform;
            var expectedTransform = 'rotate(90deg)';
            popupModel.rotate();
            cssTransform = $('video', popupView.$el).css('transform');
            assert.equal(cssTransform, expectedTransform);
          });

          test('updating souce list to one souce does not show dropdown', function () {
            var mockDevices = [{id: 0, kind: 'video'}, {id: 1, kind: 'audio'}];
            getDevicesStub.returns(Promise.resolve(mockDevices));
            return popupModel.getVideoDevices().then(function () {
              assert.equal(popupView.$deviceSelectorContainer.css('display'), 'none');
            });
          });

          test('updating souce list to more than one souce shows dropdown', function () {
            var mockDevices = [{id: 0, kind: 'video'}, {id: 1, kind: 'video'}];
            getDevicesStub.returns(Promise.resolve(mockDevices));

            return popupModel.getVideoDevices().then(function () {
              assert.equal(popupView.$deviceSelectorContainer.css('display'), 'block');
            });
          });
        });
      });
    });
  });
});
