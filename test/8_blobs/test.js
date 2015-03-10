/*eslint-env mocha*/
/*global assert*/ // chai

define(['backbone', 'BlinkForms', 'BIC'], function (Backbone, Forms) {

  var mockXhrUpload = new Backbone.Model();
  mockXhrUpload.addEventListener = mockXhrUpload.on;
  mockXhrUpload.lengthComputer = true;
  mockXhrUpload.loaded = 0;
  mockXhrUpload.total = 200;
  mockXhrUpload.go = function () {
    var me = this;
    this.trigger('progress', this);
    if (this.loaded < this.total) {
      setTimeout(function () {
        me.loaded += 20;
        me.go();
      }, 100);
    }
  };

  suite('8: blobs', function () {
    var $page = $('[data-role=page]'),
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

      test('location button is enabled', function (done) {
        var form = Forms.current,
          element = form.getElement('location'),
          view = element.get('_view'),
          button = view.$el.find('button');

        element.once('change:value change:errors', function () {
          setTimeout(function () {
            assert.isFalse(button.hasClass('ui-disabled'));
          }, 1000);
        });

        button.trigger('click');

        setTimeout(function () {
          $(document.body).find('[data-action=cancel]').trigger('click');
          done();
        }, 100);
      });

      test('location button popup elements', function (done) {
        var form = Forms.current,
          element = form.getElement('location'),
          view = element.get('_view'),
          button = view.$el.find('button'),
          $body;

        button.trigger('click');

        setTimeout(function () {
          $body = $(document.body);
          assert.lengthOf($body.find('[data-action=cancel]'), 1);
          assert.lengthOf($body.find('[data-action=clear]'), 1);
          assert.lengthOf($body.find('button[type="submit"]'), 1);
          assert.lengthOf($body.find('#map-canvas'), 1);
          assert.lengthOf($body.find('#bmp-forms-location'), 1);
          $body.find('[data-action=cancel]').trigger('click');
          done();
        }, 100);
      });

      test('form&isPopulating is true during form#setRecord()', function (done) {
        var form = Forms.current;
        assert.isFalse(form.get('isPopulating'));
        form.setRecord({}).then(function () {
          assert.isFalse(form.get('isPopulating'));
          done();
        }, function (err) {
          assert.isFalse(form.get('isPopulating'));
          assert.ok(false, 'Promise should not be rejected');
          assert.notOk(err, 'Promise should not have an error');
          done();
        });
        assert.isTrue(form.get('isPopulating'));
      });

      if (navigator.userAgent.toLowerCase().indexOf('phantom') !== -1) {
        return;
      }

      suite('blobUploader with successful transfers', function () {
        var count;

        setup(function () {
          count = 0;
          Forms.current.getElement('file').set('value', '');
          Forms.blobUploader.setXHR(function (opts, callback) {
            count += 1;
            setTimeout(function () {
              callback(null, { statusCode: 200 }, opts.json || {});
            }, 1e3);
            mockXhrUpload.loaded = 0;
            mockXhrUpload.go();
            return {
              upload: mockXhrUpload
            };
          });
        });

        test('bfe[file].set("value", "...") with image/jpeg triggers blobUploader', function (done) {
          var form = Forms.current;
          var element = form.getElement('file');
          var blob1, blob2;
          Forms.blobUploader.once('drain', function () {
            assert.equal(count, 1);
            blob2 = element.get('blob');
            assert.isObject(blob2);
            done();
          });
          element.set('value', 'data:image/jpeg;base64,abc123');
          blob1 = element.get('blob');
          assert.isObject(blob1);
        });

        test('bfe[file].set("value", "...") with text/plain does not trigger blobUploader', function (done) {
          var form = Forms.current;
          var element = form.getElement('file');
          var timer;
          Forms.blobUploader.once('drain', function () {
            clearTimeout(timer);
            assert.fail(true, false, '"drain" even should never go off"');
            done();
          });
          timer = setTimeout(function () {
            assert.equal(count, 0);
            done();
          }, 500);
          element.set('value', 'data:text/plain,helloworld');
          assert.isObject(element.get('blob'));
        });

        test('form#setRecord() does not trigger blobUploader', function (done) {
          var form = Forms.current;
          var timer;
          Forms.blobUploader.once('drain', function () {
            clearTimeout(timer);
            assert.fail(true, false, '"drain" even should never go off"');
            done();
          });
          timer = setTimeout(function () {
            assert.equal(count, 0);
            done();
          }, 500);
          form.setRecord({
            file: 'abc123',
            'file_mimetype': 'image/jpeg'
          });
        });

        test('form#getRecord() contains Blob information', function (done) {
          var form = Forms.current;
          var element = form.getElement('file');
          Forms.blobUploader.once('drain', function () {
            Forms.current.getRecord().then(function (record) {
              assert.isString(record.file);
              assert.isString(record.file_mimetype);
              assert.isString(record.file_uuid);
              done();
            }, function (err) {
              assert.ok(false, 'promise should not be rejected');
              assert.ok(!err, 'should be no error');
              done();
            });
          });
          element.set('value', 'data:image/jpeg;base64,abc123');
        });

        teardown(function () {
          Forms.blobUploader.removeAllListeners('drain');
        });

      });

      suite('blobUploader with failed transfers', function () {
        var count, blob;

        suiteSetup(function () {
          count = 0;
          Forms.current.getElement('file').set('value', '');
          Forms.blobUploader.setXHR(function (opts, callback) {
            count += 1;
            setTimeout(function () {
              callback(new Error('failed!'));
            }, 1e3);
            return {};
          });
        });

        test('form#setRecord() creates a Blob', function (done) {
          var form = Forms.current;
          var element = form.getElement('file');
          element.once('change:blob', function () {
            blob = element.get('blob');
            assert.isObject(blob);
            done();
          });
          form.setRecord({
            file: 'abc123',
            'file_mimetype': 'image/jpeg'
          });
        });

        test('bfe[file].uploadBlob() triggers blobUploader', function (done) {
          var form = Forms.current;
          var element = form.getElement('file');
          assert.equal(count, 0);
          Forms.blobUploader.once('drain', function () {
            var newBlob = element.get('blob');
            assert.equal(count, 1);
            assert.isObject(newBlob);
            assert.equal(blob, newBlob, 'should be original blob');
            done();
          });
          element.uploadBlob();
        });

        test('form#getRecord() contains Blob information', function (done) {
          var form = Forms.current;
          var element = form.getElement('file');
          element.set('value', '');
          Forms.blobUploader.once('drain', function () {
            Forms.current.getRecord().then(function (record) {
              assert.isString(record.file);
              assert.isString(record.file_mimetype);
              assert.isString(record.file_uuid);
              done();
            }, function (err) {
              assert.ok(false, 'promise should not be rejected');
              assert.ok(!err, 'should be no error');
              done();
            });
          });
          element.set('value', 'data:image/jpeg;base64,abc123');
        });

        teardown(function () {
          Forms.blobUploader.removeAllListeners('drain');
        });

      });

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
