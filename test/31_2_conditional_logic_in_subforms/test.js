define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {
  testUtils.defineFormLoadSuite('firstLevel', 'add');

  suite('31.2 confirm that behaviour runs multiple times', function () {
    suite('second_level_field', function () {
      suiteSetup(function (done) {
        var form;
        var element;
        var $view;
        var $add;

        form = Forms.current;
        element = form.getElement('second_level_field');
        $view = element.get('_view').$el;
        $add = $view.children('.ui-btn').children('button');
        element.get('forms').on('add', function () {
          done();
        });
        $add.trigger('click');
      });

      _.times(4, function () {
        test('`second_required` to non-empty, should hide `cond_hidden`', function (done) {
          var form = Forms.current.getElement('second_level_field').get('forms').at(0);
          var element = form.getElement('second_required');
          var elementView = element.get('_view');
          var $input = elementView.$el.find('input');
          var hidden = form.getElement('cond_hidden');
          var view;

          hidden.once('change:hidden', function () {
            view = hidden.get('_view');
            assert.equal(view.$el.css('display'), 'none');
            done();
          });

          $input.val('a');
          $input.trigger('change');
        });

        test('`second_required` to empty, should show `cond_hidden`', function (done) {
          var form = Forms.current.getElement('second_level_field').get('forms').at(0);
          var element = form.getElement('second_required');
          var elementView = element.get('_view');
          var $input = elementView.$el.find('input');
          var hidden = form.getElement('cond_hidden');
          var view;

          hidden.once('change', function () {
            view = hidden.get('_view');
            assert.equal(view.$el.css('display'), 'block');
            done();
          });

          $input.val('');
          $input.trigger('change');
        });
      });
    });
  });
});
