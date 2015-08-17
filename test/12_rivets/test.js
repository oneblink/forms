define(['jquery', 'BlinkForms', 'testUtils', 'BIC'], function ($, Forms, testUtils) {
  'use strict';

  suite('12: rivets / data-binding', function () {
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
      var definition;

      test('BlinkForms global is an Object', function () {
        assert($.isPlainObject(Forms), 'BlinkForms is a JavaScript object');
      });

      test('Forms.getDefinition()', function (done) {
        Forms.getDefinition('form1', 'add').then(function (def) {
          definition = def;
          assert(true, 'getDefinition succeeded!');
          done();
        }, function () {
          assert.fail(true, false, 'getDefinition failed!');
          done();
        });
      });

      test('Forms.initialize(definition)', function () {
        var form;
        Forms.initialize(definition);
        form = Forms.current;
        assert.equal($.type(form), 'object');
        assert.equal(form.get('name'), 'form1');
        assert.equal(form.get('label'), 'Form 1');
      });

      test('render form for jQuery Mobile', function () {
        var form = Forms.current;

        $content.append(form.$form);

        $.mobile.page({}, $page);
        $page.trigger('pagecreate');
        $page.show();
      });

      testUtils.defineLabelTest();

    }); // END: suite('Form', ...)

    suite('DOM Bindings', function () {

      var elements;

      elements = ['url', 'email', 'password', 'streetAddress', 'city', 'telephone', 'number', 'currency'];

      elements.forEach(function (name) {

        suite('"' + name + '" element value', function () {
          var element, view;

          suiteSetup(function () {
            var form = BMP.Forms.current;

            element = form.getElement(name);
            view = element.attributes._view;
          });

          test('input value matches `defaultValue`', function () {
            var input$ = view.$el.find('input, textarea').first();

            assert(input$.length, 'input exists');
            assert.equal(input$.val(), element.get('value'));
          });

          test('input value is bound', function () {
            var input$ = view.$el.find('input, textarea').first();

            element.set('value', 123);
            assert.equal(input$.val(), 123);
          });

//           test('backbone is told to validate', function () {
//             var spy = sinon.spy(element, 'set');
//             var input$ = view.$el.find('input, textarea').first();

//             input$.focus().val(123).blur();
// window.console.log(spy.args);
//             assert.equal(spy.args[0][2].validate, true);
//             spy.reset();
//           });

        });

      });

      elements = ['url', 'email', 'password', 'streetAddress', 'city', 'telephone', 'number', 'currency', 'calculation'];

      elements.forEach(function (name) {

        suite('"' + name + '" element label', function () {
          var element, view;

          suiteSetup(function () {
            var form = BMP.Forms.current;

            element = form.getElement(name);
            view = element.attributes._view;
          });

          test('label is correct', function () {
            var label$ = view.$el.find('label').first();

            assert(label$.length, 'label exists');
            assert.equal(label$.text(), element.get('label'));
          });

          test('label is bound', function () {
            var label$ = view.$el.find('label').first();

            element.set('label', 'ABC');
            assert.equal(label$.text(), 'ABC');
          });

          suiteTeardown(function () {
            element.set('label', element.attributes.name);
          });

        });

      });

      elements = ['message', 'calculation'];

      elements.forEach(function (name) {

        suite('"' + name + '" element html', function () {
          var element, view, html$, dom$;

          suiteSetup(function () {
            var form = BMP.Forms.current;

            element = form.getElement(name);
            view = element.attributes._view;
            html$ = $.parseHTML(element.get('html'));
            if (element.get('label')) {
              dom$ = $(view.$el.children('div').first()[0].childNodes);
            } else {
              dom$ = $(view.$el[0].childNodes);
            }
          });

          test('html is correct', function () {
            assert.lengthOf(dom$, html$.length);

            dom$.each(function (index, child) {
              var source;
              source = html$[index];
              assert.equal(source.nodeType, child.nodeType);
              assert.equal(source.tagName, child.tagName);
              assert.equal(source.textContent, child.textContent);
            });

          });

          test('html is bound', function () {
            html$ = $.parseHTML('<span>1</span>2<em>3</em>4<strong>5</strong>6<div>7</div>');
            element.set('html', '<span>1</span>2<em>3</em>4<strong>5</strong>6<div>7</div>');
            if (element.get('label')) {
              dom$ = $(view.$el.children('div').first()[0].childNodes);
            } else {
              dom$ = $(view.$el[0].childNodes);
            }

            assert.lengthOf(dom$, html$.length);

            dom$.each(function (index, child) {
              var source;
              source = html$[index];
              assert.equal(source.nodeType, child.nodeType);
              assert.equal(source.tagName, child.tagName);
              assert.equal(source.textContent, child.textContent);
            });

          });

        });

      });

    }); // END: suite('Form', ...)

    suite('Message and Headings', function () {
      test('Message field with old-definition structure', function () {
        assert.equal($('[data-name="_message_1"]').html(), "Message using <em><strong>old definition<strong> structure</strong></strong></em>");
      });
      test('Heading field with old-definition structure', function () {
        assert.equal($('[data-name="_heading_1"]').find('h1').html(), "Heading using old definition");
        assert.equal($('[data-name="_heading_1"]').find('p').html(), "<span>Small text to support heading</span>");
      });
    });

  }); // END: suite('12', ...)

});
