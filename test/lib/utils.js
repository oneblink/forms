define(['BlinkForms'], function (Forms) {

  var NO_LABELS = ['hidden', 'heading', 'message', 'subForm', 'button'];
  var CHOICES = ['select', 'multi']

  function hasLegend (el) {
    return !el.get('readonly') &&
      CHOICES.indexOf(el.get('type')) !== -1 &&
      el.get('mode') === 'expanded';
  }

  function assertEmitter (obj) {
    assert.isObject(obj, 'emitter is an object');
    assert.isFunction(obj.on, 'emitter has "on" method');
    assert.isFunction(obj.once, 'emitter has "once" method');
    assert.isFunction(obj.off, 'emitter has "off" method');
  }

  return {

    defineButtonTest: function () {
      test('jQM buttons displayed correctly', function () {
        assert.lengthOf($('.ui-btn .ui-btn'), 0, 'no buttons within buttons');
      });
    },

    defineLabelTest: function () {
      test('labels displayed correctly', function () {
        Forms.current.get('elements').forEach(function (el) {
          var name = el.get('name');
          var view$ = (el.get('_view') || {}).$el;
          var label = el.get('label');
          if (NO_LABELS.indexOf(el.get('type')) !== -1) {
            return; // skip these element types
          }
          if (el.get('hidden')) {
            return; // hidden elements don't have views
          }
          if (view$ && label) {
            if (hasLegend(el)) {
              assert(
                view$.find('legend').length > 0,
                name + ': DOM has label.ui-input-text'
             );
            } else {
              assert(
                view$.children('label.ui-input-text').length > 0,
                name + ': DOM has label.ui-input-text'
             );
            }
            assert.include(
              view$.text(),
              label, name + ': DOM text contains label String'
           );
          }
        });
      });
    },

    wait: function (ms) {
      return new Promise(function (resolve) {
        setTimeout(resolve, ms);
      });
    },

    /**
    @param {Object} emitter
    @param {String} event name
    */
    whenEventSettles: function (emitter, event) {
      assertEmitter(emitter);
      assert.isString(event);
      return new Promise(function (resolve) {
        var last = new Date();
        var handler = function () {
          last = new Date();
        };
        var checkLast = function () {
          var now = new Date();
          if ((now - last) > 1e3) {
            resolve();
          } else {
            setTimeout(checkLast, 100);
          }
        }
        setTimeout(checkLast, 100);
        emitter.on(event, handler);
      });
    },

    whenValidationStops: function () {
      return this.whenEventSettles(window.BMP.Forms, 'validated');
    },

    whenNewValueIsValidated: function (element, value) {
      return new Promise(function (resolve) {
        if (value === element.attributes.value) {
          resolve();
          return;
        }
        element.once('valid invalid', function () {
          resolve();
        });
        element.val(value);
      });
    }

  };

});
