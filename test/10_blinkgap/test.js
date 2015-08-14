
/*global assert:true*/ // chai

define(['BlinkForms', 'testUtils', 'BIC'], function (Forms, testUtils) {

  suite('10: blinkgap', function () {
    var $page = $('[data-role=page]'),
      $content = $page.find('[data-role=content]'),
      getDrawingStub,
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

      getDrawingStub = window.sinon.stub(navigator.bgtouchdraw, 'getDrawing',
        getDrawingFn);
      window.BGTouchDraw = {
        DestinationType: {},
        EncodingType: {}
      };

      window.cordova = {
        available: true
      };

      getPictureStub = window.sinon.stub(navigator.camera, 'getPicture',
        getDrawingFn);
      window.PictureSourceType = {};

      $content.empty();
      delete Forms.current;
    });

    suite('Form', function () {

      test('BlinkForms global is an Object', function () {
        assert($.isPlainObject(Forms), 'BlinkForms is a JavaScript object');
      });

      test('initialise with form.json', function (done) {
        var form;

        Forms.getDefinition('form1', 'add').then(function (def) {
          Forms.initialize(def);
          form = Forms.current;
          assert.equal($.type(form), 'object');
          assert.equal(form.get('name'), 'form1');
          assert.equal(form.get('label'), 'Form 1');
          done();
        }, function () {
          assert.fail(true, false, 'getDefinition failed!');
          done();
        });
      });

      test('render form for jQuery Mobile', function () {
        var form = Forms.current;

        $content.append(form.$form);

        $.mobile.page({}, $page);
        $page.trigger('pagecreate');
        $page.show();
      });

      testUtils.defineLabelTest();

    }); // END: suite('Form', ...)

    suite('Drawing', function () {

      test('button calls navigator.bgtouchdraw.getDrawing', function () {
        var form = Forms.current,
          element = form.getElement('draw'),
          view = element.get('_view'),
          $button = view.$el.find('button');

        $button.trigger('click');
        assert(getDrawingStub.called);
      });

    }); // END: suite('', ...)

    suite('Images', function () {

      test('button[0] calls navigator.camera.getPicture', function () {
        var form = Forms.current,
          element = form.getElement('image_capture'),
          view = element.get('_view'),
          $button = view.$el.find('button').first();

        $button.trigger('click');
        assert(getPictureStub.called);
      });

      test('button[1] calls navigator.camera.getPicture', function () {
        var form = Forms.current,
          element = form.getElement('image'),
          view = element.get('_view'),
          $button = view.$el.find('button').last();

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
