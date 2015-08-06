/*
  To ensure correct, isolated, unit test behavior, everything except the model file is mocked.
*/
define(['models/elements/file'],
function (FileModel) {
  'use strict';

  var noop = function () {};

  suite('models/elements/file.js', function () {

    // ////////////////////////////////////////////////////////////////////////

    suite('Setup', function () {
      setup(function () {

        window.BMP = {
          Forms: {
            _views: {
              BlobReadOnlyElement: noop,
              BGImageElement: noop,
              WebRTCImageElement: noop,
              FileElement: noop
            }
          },
          BlinkGap: {
            hasCamera: noop
          }
        };
      });

      teardown(function () {
        window.BMP = null;
      });

      test('the view "BlobReadOnlyElement" is correctly set', function () {
        var mock = sinon.mock(window.BMP.Forms._views)
          , BlobReadOnlyElement = mock.expects('BlobReadOnlyElement')
          , WebRTCimageElementExpectation = mock.expects('WebRTCImageElement')
          , BGimageElementExpectation = mock.expects('BGImageElement')
          , model;

        BlobReadOnlyElement.once();
        BGimageElementExpectation.never();
        WebRTCimageElementExpectation.never();

        model = new FileModel({readonly: true});
        model.initializeView();

        model = new FileModel({readonly: false});
        model.initializeView();

        BlobReadOnlyElement.verify();
        WebRTCimageElementExpectation.verify();
        BGimageElementExpectation.verify();

        mock.restore();
      });

      test('the view "BGImageElement" is correctly set', function () {
        var mock = sinon.mock(window.BMP.Forms._views)
          , hasCameraStub = sinon.stub(window.BMP.BlinkGap, 'hasCamera')
          , BlobReadOnlyElement = mock.expects('BlobReadOnlyElement')
          , WebRTCimageElementExpectation = mock.expects('WebRTCImageElement')
          , BGimageElementExpectation = mock.expects('BGImageElement')
          , model;

        hasCameraStub.returns(true);

        BlobReadOnlyElement.never();
        BGimageElementExpectation.once();
        WebRTCimageElementExpectation.never();

        model = new FileModel({accept: 'image'});
        model.initializeView();

        model = new FileModel({accept: 'xxximage'});
        model.initializeView();

        model = new FileModel({accept: undefined});
        model.initializeView();

        BlobReadOnlyElement.verify();
        WebRTCimageElementExpectation.verify();
        BGimageElementExpectation.verify();

        mock.restore();
      });

      test('the view "WebRTCImageElement" is correctly set', function () {
        var mock = sinon.mock(window.BMP.Forms._views)
          , getUserMediaPresentStub
          , BlobReadOnlyElement = mock.expects('BlobReadOnlyElement')
          , WebRTCimageElementExpectation = mock.expects('WebRTCImageElement')
          , BGimageElementExpectation = mock.expects('BGImageElement')
          , model;

        BlobReadOnlyElement.never();
        BGimageElementExpectation.never();
        WebRTCimageElementExpectation.once();

        model = new FileModel({capture: true});
        getUserMediaPresentStub = sinon.stub(model, 'getUserMediaPresent');
        getUserMediaPresentStub.returns(true);
        model.initializeView();

        model = new FileModel({capture: false});
        getUserMediaPresentStub = sinon.stub(model, 'getUserMediaPresent');
        getUserMediaPresentStub.returns(true);
        model.initializeView();

        model = new FileModel({capture: true});
        getUserMediaPresentStub = sinon.stub(model, 'getUserMediaPresent');
        getUserMediaPresentStub.returns(false);
        model.initializeView();

        BlobReadOnlyElement.verify();
        WebRTCimageElementExpectation.verify();
        BGimageElementExpectation.verify();

        mock.restore();
      });

      test('the view "FileElement" is correctly set', function () {
        var mock = sinon.mock(window.BMP.Forms._views)
          , BlobReadOnlyElement = mock.expects('BlobReadOnlyElement')
          , WebRTCimageElementExpectation = mock.expects('WebRTCImageElement')
          , BGimageElementExpectation = mock.expects('BGImageElement')
          , fileElementExpectation = mock.expects('FileElement')
          , model;

        BlobReadOnlyElement.never();
        BGimageElementExpectation.never();
        WebRTCimageElementExpectation.never();
        fileElementExpectation.once();

        model = new FileModel({
          accept: 'xxximage',
          capture: false
        });
        model.initializeView();

        BlobReadOnlyElement.verify();
        WebRTCimageElementExpectation.verify();
        BGimageElementExpectation.verify();
        fileElementExpectation.verify();

        mock.restore();
      });

    });

    // ////////////////////////////////////////////////////////////////////////

    suite('Blob saving', function () {
      setup(function () {
        window.BMP = {
          Blob: {
            fromDataURI: noop
          }
        };
      });

      teardown(function () {
        window.BMP = null;
      });

      test('Blob data is set with correct jpeg header', function () {
        var model = new FileModel()
          , fromDataUriStub = sinon.stub(window.BMP.Blob, "fromDataURI")
          , data = 'abc123';

        fromDataUriStub.returnsArg(0);

        model.setBlobFromString(data);

        assert.equal(model.get('blob'), 'data:image/jpeg;base64,' + data);
      });

      test('jpeg header is not duplicated when setting blob data', function () {
        var model = new FileModel()
          , fromDataUriStub = sinon.stub(window.BMP.Blob, 'fromDataURI')
          , data = 'data:image/jpeg;base64,abc123';

        fromDataUriStub.returnsArg(0);

        model.setBlobFromString(data);

        assert.equal(model.get('blob'), 'data:image/jpeg;base64,abc123');
      });

      test('empty data is not set', function () {
        var model = new FileModel()
          , fromDataUriMock = sinon.mock(window.BMP.Blob)
          , data = null;

        fromDataUriMock.expects('fromDataURI').never();

        model.set('blob', '123');
        model.setBlobFromString(data);

        assert.equal(model.get('blob'), '123');
        fromDataUriMock.verify();
      });
    });

// ////////////////////////////////////////////////////////////////////////

    suite('Camera Tests', function () {
      setup(function () {
        window.BMP = {
          BIC: {
            attributes: {
              imageCaptureQuality: undefined,
              imageCaptureScale: undefined,
              cameraOptions: undefined
            }
          }
        };
      });

      teardown(function () {
        window.BMP = null;
      });

      test('Destination type should be 0', function () {
        var model = new FileModel()
          , cameraOptions;

        cameraOptions = model.toCameraOptions();
        assert.strictEqual(cameraOptions.destinationType, 0);
      });

      test('Quality and image scale values are correct', function () {
        var attrs = window.BMP.BIC.attributes
          , model
          , results;

        attrs.imageCaptureQuality = 1;
        attrs.imageCaptureScale = 2;
        attrs.cameraOptions = {};

        model = new FileModel();
        results = model.toCameraOptions();

        assert.strictEqual(results.quality, 1);
        assert.strictEqual(results.imageScale, 2);
      });

      test('Quality and image scale values are not set', function () {
        var attrs = window.BMP.BIC.attributes
          , model
          , results;

        attrs.imageCaptureQuality = undefined;
        attrs.imageCaptureScale = undefined;
        attrs.cameraOptions = {};

        model = new FileModel();
        results = model.toCameraOptions();

        assert.isUndefined(results.quality);
        assert.isUndefined(results.imageScale);
      });

      test('Camera Options should override BIC options', function () {
        var attrs = window.BMP.BIC.attributes
          , model
          , results;

        attrs.imageCaptureQuality = 1;
        attrs.imageCaptureScale = 2;
        attrs.cameraOptions = JSON.stringify({
          quality: 100,
          imageScale: 200,
          destinationType: 300
        });

        model = new FileModel();
        results = model.toCameraOptions();

        assert.strictEqual(results.quality, 100);
        assert.strictEqual(results.imageScale, 200);
        assert.strictEqual(results.destinationType, 300);
      });

    });
  });

});
