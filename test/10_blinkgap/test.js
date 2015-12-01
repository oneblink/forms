
/*global assert:true*/ // chai

define(['BlinkForms', 'testUtils', 'sinon'], function (Forms, testUtils, sinon) {
  suite('10: blinkgap', function () {
    var getDrawingStub,
      getPictureStub,
      getDrawingFn;

    getDrawingFn = function (onSuccess) {//, onError, options) {
      // options = options || {};
      if ($.type(onSuccess) === 'function') {
        // TODO: return something better
        onSuccess('data:image/jpeg;base64,1234567890');
      }
    };

    BMP.BIC = {};
    BMP.BIC.attributes = {
      imageCaptureQuality: 40,
      imageCaptureScale: 60,
      cameraOptions: '{"quality":50}'
    };
    /**
     * execute once before everything else in this suite
     */
    suiteSetup(function () {
      var navigator = window.navigator;
      navigator.bgtouchdraw = {
        getDrawing: $.noop
      };
      navigator.camera = {
        getPicture: $.noop
      };

      getDrawingStub = sinon.stub(navigator.bgtouchdraw, 'getDrawing',
        getDrawingFn);
      window.BGTouchDraw = {
        DestinationType: {},
        EncodingType: {}
      };

      window.cordova = {
        available: true
      };

      getPictureStub = sinon.stub(navigator.camera, 'getPicture',
        getDrawingFn);
      window.PictureSourceType = {};
    });

    testUtils.defineFormLoadSuite('form1', 'add');

    suite('Drawing', function () {
      test('button calls navigator.bgtouchdraw.getDrawing', function () {
        var form = Forms.current,
          element = form.getElement('draw'),
          view = element.get('_view'),
          $button = view.$el.find('input[type="button"]');

        $button.trigger('click');
        assert(getDrawingStub.called);
      });
    }); // END: suite('', ...)

    suite('Images', function () {
      test('button[0] calls navigator.camera.getPicture', function () {
        var form = Forms.current,
          element = form.getElement('image_capture'),
          view = element.get('_view'),
          $button = view.$el.find('input[type="button"]').first();

        $button.trigger('click');
        assert(getPictureStub.called);
      });

      test('button[1] calls navigator.camera.getPicture', function () {
        var form = Forms.current,
          element = form.getElement('image'),
          view = element.get('_view'),
          $button = view.$el.find('input[type="button"]').last();

        $button.trigger('click');
        assert(getPictureStub.called);
      });

      test('toCameraOptions called', function () {
        var form = Forms.current,
          element = form.getElement('image'),
          result = {
            quality: 50,
            imageScale: 60
          };
        assert.deepEqual(element.toCameraOptions(), result);
      });
    }); // END: suite('', ...)
  }); // END: suite('1', ...)
});
