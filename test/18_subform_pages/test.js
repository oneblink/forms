/*global suite:true, test:true, setup:true, teardown:true*/ // mocha
/*global suiteSetup:true, suiteTeardown:true*/ // mocha
/*global assert:true*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {

  suite('18: Subforms with pages', function () {
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

        Forms.getDefinition('pageErrors', 'add').then(function (def) {
          Forms.initialize(def);
          form = Forms.current;
          assert.equal($.type(form), 'object');
          assert.equal(form.get('name'), 'pageErrors');
          assert.equal(form.get('label'), 'pageErrors');
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

      // test('comparing pages sections1', function () {
      //   var form = Forms.current,
      //   pages = form.attributes.pages,
      //   page1,
      //   newPage,
      //   section1,
      //   section2,
      //   section3,
      //   newSection;
      //
      //   pages.goto(0);
      //   section1 = pages.current.attributes._view.el;
      //
      //   pages.goto(1);
      //   section2 = pages.current.attributes._view.el;
      //
      //   pages.goto(2);
      //   section3 = pages.current.attributes._view.el;
      //
      //   assert.notEqual(section1, section2, 'page1 and page2 section element is same');
      //   assert.notEqual(section2, section3, 'page2 and page3 section element is same');
      //   assert.notEqual(section3, section1, 'page3 and page1 section element is same');
      //
      //   pages.goto(0);
      //   newSection = pages.current.attributes._view.el;
      //   assert.notEqual(section1, newSection, 'page1 section changed');
      //
      //   pages.goto(1);
      //   newSection = pages.current.attributes._view.el;
      //   assert.notEqual(section2, newSection, 'page2 section changed');
      //
      //   pages.goto(2);
      //   newSection = pages.current.attributes._view.el;
      //   assert.notEqual(section3, newSection, 'page3 section changed');
      //
      //   pages.goto(1);
      //   newSection = pages.current.attributes._view.el;
      //   assert.notEqual(section2, newSection, 'page2 section changed');
      // });

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
