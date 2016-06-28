define(['jquery', 'BlinkForms', 'testUtils'], function ($, Forms, testUtils) {
  var assert = window.assert;

  var types = [ 'draw', 'file', 'location', 'subForm', 'boolean', 'select',
    'multi', 'number', 'telephone', 'password', 'email', 'url', 'text',
    'textarea' ];

  var mockForm = {
    add: function () {},
    getPage: function () { return mockForm; }
  };

  types.forEach(function (type) {
    suite('37: FORMS-271: ' + type, function () {
      var content$;
      var model;
      var view;

      suiteSetup(function () {
        return testUtils.loadViews();
      });

      setup(function () {
        content$ = $('[data-role="content"]');
        model = Forms._models.Element.create({
          name: type,
          required: true,
          type: type
        }, mockForm);
        model.initializeView();
        view = model.attributes._view;
      });

      suite('view rendering precedes model validation', function () {
        setup(function () {
          view.render();
          view.$el.appendTo(content$);
          if (typeof view.onAttached === 'function') {
            view.onAttached();
          }
          model.isValid();
        });

        test('error list is beneath field input', function () {
          var last$ = view.$el.children().last();
          assert.equal(view.$el.children('.bm-errors__bm-list').length, 1);
          assert.equal(last$[0].tagName.toLowerCase(), 'ul');
        });
      });

      suite('model validation precedes view rendering', function () {
        setup(function () {
          model.isValid();
          view.render();
          view.$el.appendTo(content$);
          if (typeof view.onAttached === 'function') {
            view.onAttached();
          }
        });

        test('error list is beneath field input', function () {
          var last$ = view.$el.children().last();
          assert.equal(view.$el.children('.bm-errors__bm-list').length, 1);
          assert.equal(last$[0].tagName.toLowerCase(), 'ul');
        });
      });

      // teardown(function () {
      //   model.close();
      //   model = null;
      //   view = null;
      //   content$.empty();
      // });
    }); // END: suite('FORMS-271', ...)
  });
});
