define(['BlinkForms'], function (Forms) {

  var NO_LABELS = ['hidden', 'heading', 'message', 'subForm', 'button'];
  var CHOICES = ['select', 'multi']

  function hasLegend (el) {
    return !el.get('readonly') &&
      CHOICES.indexOf(el.get('type')) !== -1 &&
      el.get('mode') === 'expanded';
  }

  return {

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

});
