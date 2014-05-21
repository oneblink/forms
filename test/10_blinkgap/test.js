/*global suite:true, test:true, setup:true, teardown:true*/ // mocha
/*global suiteSetup:true, suiteTeardown:true*/ // mocha
/*global assert:true*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {

  suite('10: blinkgap', function () {
    var $page = $('[data-role=page]'),
      $content = $page.find('[data-role=content]'),
      getDrawingStub,
      getPictureStub,
      getDrawingFn;

    getDrawingFn = function (onSuccess) {//, onError, options) {
      //options = options || {};
      if ($.type(onSuccess) === 'function') {
        // TODO: return something better
        onSuccess('data:image/jpeg;base64,1234567890');
      }
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

    }); // END: suite('', ...)

  }); // END: suite('1', ...)

});
