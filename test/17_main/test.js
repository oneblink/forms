define(['BlinkForms', 'sinon', 'BIC'], function (Forms, sinon) {
  suite('17: main', function () {
    test('BMP is defined', function () {
      assert.isDefined(window.BMP);
    });

    test('BMP.Forms is defined', function () {
      assert.isDefined(window.BMP.Forms);
    });

    test('BMP.Forms.initialize is a function', function () {
      assert.isFunction(window.BMP.Forms.initialize);
    });

    test('BMP.Forms.version is a string', function () {
      assert.isString(window.BMP.Forms.version);
    });

    test('BMP.Forms.uuid exists', function () {
      assert.ok(window.BMP.Forms.uuid);
    });

    test('BMP.Forms.uuid.v4 is a function', function () {
      assert.isFunction(window.BMP.Forms.uuid.v4);
    });

    test('BMP.Forms.proxyBindEntityEvents is a function', function () {
      assert.isFunction(window.BMP.Forms.proxyBindEntityEvents);
    });

    test('BMP.Forms.proxyUnbindEntityEvents is a function', function () {
      assert.isFunction(window.BMP.Forms.proxyUnbindEntityEvents);
    });

    test('BMP.Forms.proxyBindFormElementEvents is a function', function () {
      assert.isFunction(window.BMP.Forms.proxyBindFormElementEvents);
    });

    test('BMP.Forms.proxyUnbindFormElementEvents is a function', function () {
      assert.isFunction(window.BMP.Forms.proxyUnbindFormElementEvents);
    });

    suite('Model defaults', function () {
      function defaultsIsAFunctionTest (model, name) {
        return test(name + '.defaults is a function', function () {
          if ('defaults' in model.prototype) {
            assert.isFunction(model.prototype.defaults);
          }
        });
      }

      suite('if #defaults exists it is a function or undefined', function () {
        _.each(Forms._models, defaultsIsAFunctionTest);
      });
    });

    suite('isValid called', function () {
      test('all possible options', function () {
        var ElementModel = Forms._models.Element;
        var element = new ElementModel();
        var isValidSpy;

        isValidSpy = sinon.spy(element, 'isValid');

        element.set('value', 'great work');
        assert.ok(isValidSpy.callCount === 1);
        element.set('value', 'great work', {});
        assert.ok(isValidSpy.callCount === 2);
        element.set('value', 'great work', {validate: false});
        assert.ok(isValidSpy.callCount === 2);
        element.set('value', 'great work', {validate: true});
        assert.ok(isValidSpy.callCount === 3);

        element.set({value: 'great work'});
        assert.ok(isValidSpy.callCount === 4);
        element.set({value: 'great work'}, {});
        assert.ok(isValidSpy.callCount === 5);
        element.set({value: 'great work'}, {validate: false});
        assert.ok(isValidSpy.callCount === 5);
        element.set({value: 'great work'}, {validate: true});
        assert.ok(isValidSpy.callCount === 6);

        element.set('blob', 'great work');
        assert.ok(isValidSpy.callCount === 7);
        element.set('blob', 'great work', {});
        assert.ok(isValidSpy.callCount === 8);
        element.set('blob', 'great work', {validate: false});
        assert.ok(isValidSpy.callCount === 8);
        element.set('blob', 'great work', {validate: true});
        assert.ok(isValidSpy.callCount === 9);
      });
    });
  });
});
