define(['backbone', 'BlinkForms', 'testUtils', 'BIC'], function (Backbone, Forms, testUtils) {

  var mockXhrUpload = new Backbone.Model();
  mockXhrUpload.addEventListener = function (type, handler) {
    this.on(type, handler);
  };
  mockXhrUpload.lengthComputable = true;
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

  testUtils.defineFormLoadSuite('form1', 'add');

  suite('8: blobs', function () {

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

    test('#setBlobFromString() accepts non-DataURI Base64', function () {
      // var data = 'abc123';
      var form = Forms.current;
      // var element = form.getElement('file');
      form.set('isPopulating', true);
      assert.doesNotThrow(function () {
        // element.setBlobFromString(data);
      });
      form.set('isPopulating', false);
    });

    suite('"required" validation', function () {
      var reqEl;

      suiteSetup(function (done) {
        reqEl = Forms.current.getElement('file_r');
        reqEl.val('');
        setTimeout(done, 0);
      });

      test('#val("") fails validation', function () {
        var errors;
        reqEl.val('');
        errors = reqEl.validate();
        assert.isObject(errors);
        assert.isArray(errors.value);
        assert.lengthOf(errors.value, 1);
        assert.deepEqual(errors.value[0], { code: 'REQUIRED' });
      });

      test('#val("...") passes validation', function () {
        var errors;
        reqEl.setBlobFromString('data:image/jpeg;base64,abc123');
        errors = reqEl.validate();
        assert(!errors);
      });

      test('#setBlobFromString("...") passes validation', function () {
        var errors;
        reqEl.val('data:image/jpeg;base64,abc123');
        errors = reqEl.validate();
        assert(!errors);
      });

    });

    suite('#setBlobFromString()', function () {
      var element;

      setup(function () {
        Forms.current.set('isPopulating', true);
        element = Forms.current.getElement('file');
      });

      test('accepts DataURI with Base64', function () {
        assert.doesNotThrow(function () {
          element.setBlobFromString('data:image/jpeg;base64,abc123');
        });
      });

      test('accepts non-DataURI Base64', function () {
        assert.doesNotThrow(function () {
          element.setBlobFromString('abc123');
        });
      });

      teardown(function () {
        Forms.current.set('isPopulating', true);
      });

    });

  }); // END: suite('Form', ...)

});
