/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {

  suite('27: performance', function () {
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

        console.time('getDefinition');

        Forms.getDefinition('inspection', 'add').then(function (def) {

          console.timeEnd('getDefinition');

          console.time('initialize');

          Forms.initialize(def);

          console.timeEnd('initialize');

          form = Forms.current;
          assert.equal($.type(form), 'object');
          assert.equal(form.get('name'), 'inspection');
          done();
        }, function () {
          assert.fail(true, false, 'getDefinition failed!');
          done();
        });
      });

      test('render form for jQuery Mobile', function () {
        var form = Forms.current;

        console.time('append');

        $content.append(form.$form);

        console.timeEnd('append');

        $.mobile.page({}, $page);
        $page.trigger('pagecreate');
        $page.show();
      });

      test('blah', function () {

      });

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
