define([
  'backbone', 'BlinkForms', 'sinon', 'BIC'
], function (Backbone, Forms, sinon) {
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

    test('BMP.Forms.setAttributesFromClass', function () {
      var model = new Backbone.Model({
        class: 'id: 123; name: def; label: DEF; css-class',
        id: 123,
        label: 'ABC',
        name: 'abc'
      });
      BMP.Forms.setAttributesFromClass(model);
      assert.equal(model.attributes.class, 'css-class');
      assert.equal(model.attributes.id, 123, '"id" is blacklisted');
      assert.equal(model.attributes.label, 'DEF');
      assert.equal(model.attributes.name, 'abc', '"name" is blacklisted');
    });

    test('Model#removeView() implemented where #initializeView() is', function () {
      Object.keys(Forms._models).forEach(function (name) {
        var Model = Forms._models[name];
        if (Model.prototype.initializeView) {
          assert.isFunction(Model.prototype.removeView, name + '#removeView()');
        }
      });
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

    suite('error-helper', function () {
      suite('toErrorString', function () {
        test('correctly converts a forms error object to a string', function () {
          assert.equal(BMP.Forms.errorHelpers.toErrorString({code: 'MAX', MAX: 3}), 'must not be higher than 3');
        });

        test('returns a string', function () {
          assert.isString(BMP.Forms.errorHelpers.toErrorString('a custom string'));
          assert.equal(BMP.Forms.errorHelpers.toErrorString('a custom string'), 'a custom string');
        });

        test('throws when object is not to spec', function () {
          assert.throws(function () {
            BMP.Forms.errorHelpers.toErrorString({field: 'value'});
          });
        });

        test('throws when anything other than string or object is used', function () {
          assert.throws(function () {
            BMP.Forms.errorHelpers.toErrorString(1);
          });

          assert.throws(function () {
            BMP.Forms.errorHelpers.toErrorString([1, 2, 3]);
          });

          assert.throws(function () {
            BMP.Forms.errorHelpers.toErrorString(null);
          });

          assert.throws(function () {
            BMP.Forms.errorHelpers.toErrorString(undefined);
          });
          assert.throws(function () {
            BMP.Forms.errorHelpers.toErrorString(function () {});
          });
        });
      });

      suite('toFormsError', function () {
        test('returns a Forms error object with text', function () {
          var result = BMP.Forms.errorHelpers.toFormsError('MAX', 3);

          assert.isObject(result);
          assert.property(result, 'code');
          assert.property(result, 'MAX');
          assert.property(result, 'text');

          assert.equal(result.text, 'must not be higher than 3');
        });
      });

      suite('fromBMP', function () {
        test('returns a custom error', function () {
          var errorString = 'custom';
          var result = BMP.Forms.errorHelpers.fromBMP(errorString);
          assert.isObject(result);
          assert.property(result, 'code');
          assert.property(result, 'CUSTOM');
          assert.property(result, 'text');
          assert.equal(result.text, errorString);
        });

        test('converts a server $errors to a FORMS error object', function () {
          var externalErrors = {
            'text_area': ' is required',
            'textbox': ' is required',
            'location': ' is required',
            'sketch_signature': ' is required',
            'subform': {
              'errors': [{
                'code': 'REQUIRED'
              }]
            }
          };

          var expected = {
            'text_area': {
              'code': 'CUSTOM',
              'CUSTOM': ' is required',
              'text': ' is required'
            },
            'textbox': {
              'code': 'CUSTOM',
              'CUSTOM': ' is required',
              'text': ' is required'
            },
            'location': {
              'code': 'CUSTOM',
              'CUSTOM': ' is required',
              'text': ' is required'
            },
            'sketch_signature': {
              'code': 'CUSTOM',
              'CUSTOM': ' is required',
              'text': ' is required'
            },
            'subform': {
              'errors': [{
                'code': 'REQUIRED'
              }]
            }
          };

          assert.deepEqual(BMP.Forms.errorHelpers.fromBMP(externalErrors), expected);
        });
      });
    });
  });
});
