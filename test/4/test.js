/*global suite:true, test:true, setup:true, teardown:true*/ // mocha
/*global suiteSetup:true, suiteTeardown:true*/ // mocha
/*global assert:true*/ // chai

define(['q', 'BlinkForms', 'BIC'], function(Q, Forms) {

  suite('1: date/time', function() {
    var obj,
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

        Forms.getDefinition('form1').then(function(def) {
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

      test('render form for jQuery Mobile', function() {
        var form = Forms.currentFormObject;

        $content.append(form.$form);

        $.mobile.page({}, $page);
        $page.trigger('pagecreate');
        $page.show();
      });

    }); // END: suite('Form', ...)

    /**
     * execute once after everything else in this suite
     */
    suiteTeardown(function() {
  //      delete window.BlinkForms.currentFormObject;
    });

  }); // END: suite('1', ...)

});
