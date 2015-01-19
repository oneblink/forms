/*eslint-env mocha*/
/*global assert*/ // chai

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

      test('testing subform paging', function (done) {
        var form = Forms.current,
          pages = form.attributes.pages,
          subFormElement,
          $view,
          $add,
          subForms,
          testData = [
            { Rank: '1', _action: "add"},
            { Rank: '2', _action: "add" },
            { Rank: '3', _action: "add" }
          ];

        //move to page 1 (page having subform)
        pages.goto(1);
        subFormElement = Forms.current.getElement('subform01');
        $view = subFormElement.attributes._view.$el;
        $add = $view.children('.ui-btn').children('button');
        //adding 1st subform
        $add.trigger('click');
        //adding 2nd subform
        $add.trigger('click');
        //adding 3rd subform
        $add.trigger('click');

        setTimeout(function () {
          subForms = subFormElement.attributes.forms;
          //adding data to subform elements
          subForms.at(0).getElement('Rank').val('1');
          subForms.at(1).getElement('Rank').val('2');
          subForms.at(2).getElement('Rank').val('3');

          assert.equal(subForms.at(0).attributes._view.$el.find('input[name="Rank"]').val(), 1);
          assert.equal(subForms.at(1).attributes._view.$el.find('input[name="Rank"]').val(), 2);
          assert.equal(subForms.at(2).attributes._view.$el.find('input[name="Rank"]').val(), 3);

          //check the data of subform element
          subFormElement.data()
            .then(function (d) {
              assert.deepEqual(d, testData, 'subFormElement data');
              done();
            });
        }, 0);

      });

      test('Coming back to page with subform', function (done) {
        var form = Forms.current,
          pages = form.attributes.pages,
          subFormElement,
          testData = [
            { Rank: '1', _action: "add"},
            { Rank: '2', _action: "add" },
            { Rank: '3', _action: "add" }
          ];

        subFormElement = Forms.current.getElement('subform01');
        //go to page 2
        pages.goto(2);
        //go to page 1
        pages.goto(1);

        //check the data of subform element again
        subFormElement.data()
          .then(function (d) {
            assert.deepEqual(d, testData, 'subFormElement data');
            done();
          });
      });

      test('comparing pages sections', function () {
        var form = Forms.current,
          pages = form.attributes.pages,
          section1,
          section2,
          section3,
          newSection;

        pages.goto(0);
        section1 = pages.current.attributes._view.el;

        pages.goto(1);
        section2 = pages.current.attributes._view.el;

        pages.goto(2);
        section3 = pages.current.attributes._view.el;

        assert.notEqual(section1, section2, 'page1 and page2 section element is same');
        assert.notEqual(section2, section3, 'page2 and page3 section element is same');
        assert.notEqual(section3, section1, 'page3 and page1 section element is same');

        pages.goto(0);
        newSection = pages.current.attributes._view.el;
        assert.notEqual(section1, newSection, 'page1 section changed');

        pages.goto(1);
        newSection = pages.current.attributes._view.el;
        assert.notEqual(section2, newSection, 'page2 section changed');

        pages.goto(2);
        newSection = pages.current.attributes._view.el;
        assert.notEqual(section3, newSection, 'page3 section changed');

        pages.goto(1);
        newSection = pages.current.attributes._view.el;
        assert.notEqual(section2, newSection, 'page2 section changed');
      });

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
