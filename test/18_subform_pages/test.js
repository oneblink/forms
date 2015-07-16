/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'testUtils', 'BIC'], function (Forms, testUtils) {

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

      test('render form for jQuery Mobile', function (done) {
        var form = Forms.current;

        $content.append(form.$form);

        $.mobile.page({}, $page);
        $page.trigger('pagecreate');
        $page.show();
        form.attributes.preloadPromise.then(function() {
          done();
        });
      });

      testUtils.defineLabelTest();

      test('testing subform paging', function (done) {
        var form = Forms.current,
          pages = form.attributes.pages,
          subFormElement,
          subForms,
          testData = [
            { Rank: 1, _action: 'add' },
            { Rank: 2, _action: 'add' },
            { Rank: 3, _action: 'add' }
          ],
          addPromises = [];

        this.timeout(3000);

        //move to page 1 (page having subform)
        pages['goto'](1);
        subFormElement = Forms.current.getElement('subform01');

        //switched to adding subforms using .add()
        //instead of clicking on add button
        //other tests can confirm add click works alright
        addPromises.push(subFormElement.add());
        addPromises.push(subFormElement.add());
        addPromises.push(subFormElement.add());

        Promise.all(addPromises).then(function() {
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
        });

      });

      test('Coming back to page with subform', function (done) {
        var form = Forms.current,
          pages = form.attributes.pages,
          subFormElement,
          testData = [
            { Rank: 1, _action: 'add' },
            { Rank: 2, _action: 'add' },
            { Rank: 3, _action: 'add' }
          ];

        subFormElement = Forms.current.getElement('subform01');
        //go to page 2
        pages['goto'](2);
        //go to page 1
        pages['goto'](1);

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

        pages['goto'](0);
        section1 = pages.current.attributes._view.el;

        pages['goto'](1);
        section2 = pages.current.attributes._view.el;

        pages['goto'](2);
        section3 = pages.current.attributes._view.el;

        assert.notEqual(section1, section2, 'page1 and page2 section element is same');
        assert.notEqual(section2, section3, 'page2 and page3 section element is same');
        assert.notEqual(section3, section1, 'page3 and page1 section element is same');

        pages['goto'](0);
        newSection = pages.current.attributes._view.el;
        assert.notEqual(section1, newSection, 'page1 section changed');

        pages['goto'](1);
        newSection = pages.current.attributes._view.el;
        assert.notEqual(section2, newSection, 'page2 section changed');

        pages['goto'](2);
        newSection = pages.current.attributes._view.el;
        assert.notEqual(section3, newSection, 'page3 section changed');

        pages['goto'](1);
        newSection = pages.current.attributes._view.el;
        assert.notEqual(section2, newSection, 'page2 section changed');
      });

      test('no crazy nested buttons', function () {
        var crazy$ = $('div.ui-btn > div.ui-btn > button.ui-btn-hidden');
        assert.lengthOf(crazy$, 0);
      });

      test('no crazy nested inputs', function () {
        var crazy$ = $('div.ui-input-text > div.ui-input-text > input.ui-input-text');
        assert.lengthOf(crazy$, 0);
      });

      test('all [data-role=fieldcontain] enhanced', function () {
        var fieldcontain$ = $('[data-role=fieldcontain]');
        var enhanced$ = $('[data-role=fieldcontain].ui-field-contain');
        assert.equal(fieldcontain$.length, enhanced$.length);
      });

      test('Fields in subforms on other pages can be found and scrolled to', function(){
        var pages = Forms.current.get('pages');
        var previousPage;
        pages['goto'](0);
        previousPage = pages.current.cid;
        Forms.current.get("_view").goToElement('status');

        assert.notEqual(pages.current.cid, previousPage);
      });

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
