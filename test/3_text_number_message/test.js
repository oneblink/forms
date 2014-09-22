/*global suite:true, test:true, setup:true, teardown:true*/ // mocha
/*global suiteSetup:true, suiteTeardown:true*/ // mocha
/*global assert:true*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {

  suite('3: text/number/message', function () {
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

      test('BlinkForms global is an Object', function () {
        assert($.isPlainObject(Forms), 'BlinkForms is a JavaScript object');
      });

      test('initialise with form.json', function (done) {
        var form;

        Forms.getDefinition('form1', 'add').then(function (def) {
          Forms.initialize(def);
          form = Forms.current;
          assert.equal($.type(form), 'object');
          assert.equal(form.get('name'), 'form1');
          assert.equal(form.get('label'), 'Form 1');
          done();
        }, function () {
          assert.fail(true, false, 'getDefinition failed!');
          done();
        });
      });

      test('render form for jQuery Mobile', function () {
        var form = Forms.current;

        $content.append(form.$form);

        $.mobile.page({}, $page);
        $page.trigger('pagecreate');
        $page.show();
      });

    }); // END: suite('Form', ...)

    suite('Message', function () {

      test('no label gives full width output', function () {
        var form = BMP.Forms.current,
          element = form.getElement('message'),
          view = element.attributes._view;

        assert(view.$el.attr('rv-html'), 'whole View bound');
      });

      test('label set displays like an input formElement', function () {
        var form = BMP.Forms.current,
          element = form.getElement('calculation'),
          view = element.attributes._view;

        assert.lengthOf(view.$el.children('label'), 1);
        assert.lengthOf(view.$el.children('[rv-html]'), 1);
      });

    }); // END: suite('Form', ...)

    suite('placeholder', function () {

      test('placeholderText settings are set in attributes', function () {
        var form, elements;
        form = BMP.Forms.current;
        elements = form.get('elements');
        elements.each(function (element) {
          var placeholder, el$, input$, name;
          placeholder = element.get('placeholderText');
          if (placeholder !== undefined) {
            name = element.get('name');
            el$ = element.get('_view').$el;
            input$ = el$.find('[placeholder="' + placeholder + '"]');
            assert.lengthOf(input$, 1, name + ' has placeholder');
          }
        });
      });

    }); // END: suite('Form', ...)

    suite('headings', function () {

      test('1st heading is an h1', function () {
        var form, element, view;
        form = BMP.Forms.current;
        element = form.getElement('heading');
        view = element.get('_view');
        assert.lengthOf(view.$el, 1);
        assert.equal(view.$el[0].nodeName, 'H1');
      });

      test('2nd heading is an h2', function () {
        var form, element, view;
        form = BMP.Forms.current;
        element = form.getElement('heading2');
        view = element.get('_view');
        assert.lengthOf(view.$el, 1);
        assert.equal(view.$el[0].nodeName, 'H2');
      });

      test('3rd heading is an h3', function () {
        var form, element, view;
        form = BMP.Forms.current;
        element = form.getElement('heading3');
        view = element.get('_view');
        assert.lengthOf(view.$el, 1);
        assert.equal(view.$el[0].nodeName, 'H3');
      });

    });

  }); // END: suite('1', ...)

});
