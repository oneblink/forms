// need the BIC module to set up `.getDefinition()`, etc
define([
  'BlinkForms', '@jokeyrhyme/promised-requirejs', 'BIC'
], function (Forms, promisedRequire) {

  var NO_LABELS = ['hidden', 'heading', 'message', 'subForm', 'button'];
  var CHOICES = ['select', 'multi']

  function hasLegend (el) {
    return !el.get('readonly') &&
      CHOICES.indexOf(el.get('type')) !== -1 &&
      el.get('mode') === 'expanded';
  }

  var mod = {

    isPhantom: function () {
      return navigator.userAgent.toLowerCase().indexOf('phantom') !== -1;
    },

    loadViews: function () {
      return promisedRequire('forms/jqm');
    },

    loadForm: function (name, action) {
      var $page = $('[data-role=page]');
      var $content = $page.find('[data-role=content]');

      $content.empty();
      if (Forms.current) {
        // Forms.current.close(); // breaks test/4
        delete Forms.current;
      }

      // explicitly wait for views to be ready, the BIC does this the same way
      return promisedRequire('forms/jqm')
      .then(function () {
        return Forms.getDefinition(name, action)
      })
      .then(function (def) {
        Forms.initialize(def, action);
        form = Forms.current;

        return new Promise(function (resolve) {
          $(document).one('pageinit', function () {
            resolve();
          });

          $content.append(form.$form);
          $.mobile.page({}, $page);
          $page.trigger('pagecreate');
          $page.show();
        });
      });
    },

    defineFormLoadSuite: function (name, action) {
      suite(name + ': ' + action, function () {
        var $page = $('[data-role=page]');
        var $content = $page.find('[data-role=content]');

        test('BlinkForms global is an Object', function () {
          assert($.isPlainObject(Forms), 'BlinkForms is a JavaScript object');
        });

        test('initialise with form.json', function () {
          return mod.loadForm(name, action)
          .then(function () {
            var form = Forms.current;
            assert.equal($.type(form), 'object');
            assert.equal(form.get('name'), name);
          });
        });

        mod.defineLabelTest();
      });
    },

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
    @param {FormElementModel} element
    @param {*} value
    @returns {Promise}
    */
    confirmValueIsValid: function (element, value) {
      var name = element.attributes.name;
      element.val(value);
      assert.notOk(element.validate(), name + ': no validation errors');
      return mod.wait(600)
      .then(function () {
        var ul$ = element.attributes._view.$el.children('.bm-errors__bm-list');
        assert.lengthOf(ul$, 0, name + ': view displays no errors');
      });
      return Promise.resolve();
    },

    /**
    @param {FormElementModel} element
    @param {*} value
    @returns {Promise}
    */
    confirmValueIsInvalid: function (element, value, errors) {
      var errors;
      element.val(value);
      errors = element.validate();
      assert.ok(errors, element.attributes.name + ': has errors');
      assert.ok(element.validationError, '.validationError set');
      assert.isArray(errors.value);
      return mod.wait(600)
      .then(function () {
        var ul$ = element.attributes._view.$el.children('.bm-errors__bm-list');
        assert.lengthOf(ul$, 1, name + ': view displays errors');
      });
      return Promise.resolve();
    },

    generateBigFormDefinition: function () {
      var NAME = 'test';
      var TYPES = ['boolean', 'button', 'datetime', 'date', 'time', 'draw', 'email', 'file', 'hidden', 'location', 'number', 'password', 'telephone', 'text', 'textarea', 'url'];
      var CHOICE_TYPES = ['select', 'multi'];
      var DISPLAY_TYPES = ['heading', 'message'];
      var page = 0;
      var def = {
        default: {
          name: NAME,
          _elements: []
        }
      };
      var OPTIONS = (function () {
        var options = {};
        var option;
        while (Object.keys(options).length < 30) {
          option = 'option' + (Object.keys(options).length + 1);
          options[option] = option;
        }
        return options;
      }());
      var isRequired = function () {
        return def.default._elements.length % 2 === 0;
      };
      var generateName = function (type) {
        return type + (def.default._elements.length + 1);
      }
      var addTypedElements = function () {
        TYPES.forEach(function (type) {
          def.default._elements.push({
            default: {
              name: generateName(type),
              type: type,
              page: page,
              required: isRequired()
            }
          });
        });
      };
      var addDisplayElements = function () {
        DISPLAY_TYPES.forEach(function (type) {
          def.default._elements.push({
            default: {
              name: generateName(type),
              type: type,
              html: generateName(type), // for message
              text: generateName(type), // for heading
              page: page
            }
          });
        });
      };
      var addChoiceElements = function () {
        CHOICE_TYPES.forEach(function (type) {
          def.default._elements.push({
            default: {
              name: generateName(type),
              type: type,
              page: page,
              options: OPTIONS,
              required: isRequired()
            }
          });
        });
      };
      while (def.default._elements.length < 300) {
        page = Math.floor(def.default._elements.length / 30);
        addDisplayElements();
        addTypedElements();
        def.default._elements.push({
          default: {
            name: generateName('subForm'),
            type: 'subForm',
            page: page,
            required: isRequired(),
            subForm: NAME
          }
        });
        addChoiceElements();
      }
      return def;
    },

    decorateConsoleTime: function (fn, name) {
      return function () {
        var result;
        console.time(name);
        result = fn.apply(this, arguments);
        console.timeEnd(name);
        return result;
      };
    }

  };

  return mod;

});
