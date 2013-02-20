/*global suite:true, test:true, setup:true, teardown:true*/ // mocha
/*global suiteSetup:true, suiteTeardown:true*/ // mocha
/*global assert:true*/ // chai

define(['q', 'BlinkForms', 'BIC'], function(Q, Forms) {

  suite('4: subForms', function() {
    var obj,
        $doc = $(document),
        $page = $('[data-role=page]'),
        $content = $page.find('[data-role=content]');

    /**
     * execute once before everything else in this suite
     */
    suiteSetup(function() {
      $content.empty();
      delete window.BlinkForms.currentFormObject;
    });

    suite('Form', function() {

      test('BlinkForms global is an Object', function() {
        assert($.isPlainObject(Forms), 'BlinkForms is a JavaScript object');
      });

      test('initialise with form.json', function(done) {
        var form;

        Forms.getDefinition('form1', 'add').then(function(def) {
          Forms.initialize(def);
          form = Forms.currentFormObject;
          assert.equal($.type(form), 'object');
          assert.equal(form.get('name'), 'form1');
          assert.equal(form.get('label'), 'Form 1');
          done();
        }).fail(function() {
          assert.fail(true, false, 'getDefinition failed!');
        });

      });

      test('render form for jQuery Mobile', function(done) {
        var form = Forms.currentFormObject;

        $content.append(form.$form);

        $doc.one('pageinit', function() {
          done();
        });

        $.mobile.page({}, $page);
        $page.trigger('pagecreate');
        $page.show();
      });

    }); // END: suite('Form', ...)

    suite('Sub-Forms', function() {

      test('add 1st subForm', function(done) {
        var subFormElement = Forms.currentFormObject.getElement('comments'),
            $view = subFormElement.attributes._view.$el,
            $add = $view.children('.ui-btn').children('button'),
            subForms = subFormElement.attributes.forms;

        assert.equal(subForms.length, 0, 'no subForms yet');
        $add.trigger('click');
        setTimeout(function() {
          done();
        }, 0);
      });

      test('add 2nd subForm', function(done) {
        var subFormElement = Forms.currentFormObject.getElement('comments'),
            $view = subFormElement.attributes._view.$el,
            $add = $view.children('.ui-btn').children('button'),
            subForms = subFormElement.attributes.forms;

        assert.equal(subForms.length, 1, '1 subForm');
        $add.trigger('click');
        setTimeout(function() {
          done();
        }, 0);
      });

      test('test subForms', function(done) {
        var subFormElement = Forms.currentFormObject.getElement('comments'),
            $view = subFormElement.attributes._view.$el,
            subForms = subFormElement.attributes.forms,
            testData = [
              { comment: 'abc' },
              { comment: 'def' }
            ];

        assert.equal(subForms.length, 2, '2 subForms');
        subForms.at(0).getElement('comment').val('abc');
        subForms.at(1).getElement('comment').val('def');
        subFormElement.data()
        .then(function(d) {
          assert.deepEqual(d, testData, 'subFormElement data');
          return Forms.currentFormObject.data();
        })
        .then(function(d) {
          assert.deepEqual(d.comments, testData, 'total form data');
          done();
        });
      });

      test('remove 1st subForm', function(done) {
        var subFormElement = Forms.currentFormObject.getElement('comments'),
            subForms = subFormElement.attributes.forms,
            subForm = subForms.at(0),
            $view = subForm.attributes._view.$el,
            $remove = $view.children('.ui-btn').children('button');

        $remove.trigger('click');
        setTimeout(function() {
          done();
        }, 0);
      });

      test('test subForms', function(done) {
        var subFormElement = Forms.currentFormObject.getElement('comments'),
            $view = subFormElement.attributes._view.$el,
            subForms = subFormElement.attributes.forms,
            testData = [
              { comment: 'def' }
            ];

        assert.equal(subForms.length, 1, '1 subForm');
        subForms.at(0).getElement('comment').val('def');
        subFormElement.data()
        .then(function(d) {
          assert.deepEqual(d, testData, 'subFormElement data');
          return Forms.currentFormObject.data();
        })
        .then(function(d) {
          assert.deepEqual(d.comments, testData, 'total form data');
          done();
        });
      });

    });

    /**
     * execute once after everything else in this suite
     */
    suiteTeardown(function() {
  //      delete window.BlinkForms.currentFormObject;
    });

  }); // END: suite('1', ...)

});
