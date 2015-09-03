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
    }

  };

  return mod;

});
