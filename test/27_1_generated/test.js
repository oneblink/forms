define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {
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

      test('initialise with form.json', function () {
        var form;

        this.timeout(3e3); // default is 2e3, sometimes just need a bit longer

        return Forms.getDefinition('test', 'add')
        .then(function (def) {
          console.time('initialize');
          console.time('preloadPromise');

          Forms.initialize(def);

          console.timeEnd('initialize');

          form = Forms.current;
          assert.equal($.type(form), 'object');
          assert.equal(form.get('name'), 'test');

          return form.attributes.preloadPromise;
        })
        .then(function () {
          console.timeEnd('preloadPromise');
        });
      });

      test('render form for jQuery Mobile', function () {
        var form = Forms.current;

        console.time('append');
        console.time('pageInjected');

        Forms.once('pageInjected', function () {
          console.timeEnd('pageInjected');
        });

        $content.append(form.$form);

        console.timeEnd('append');

        $.mobile.page({}, $page);

        console.time('jQueryMobile enhance');

        $page.trigger('pagecreate');
        $page.show();

        console.timeEnd('jQueryMobile enhance');
      });

      testUtils.defineLabelTest();

      test('add subForm31 x4', function () {
        console.time('add subForm31 x4');
        return Forms.current.setRecord({
          subForm31: [{}, {}, {}, {}]
        })
        .then(function () {
          console.timeEnd('add subForm31 x4');
        });
      });

      test('add subForm64 x4', function () {
        console.time('add subForm64 x4');
        return Forms.current.setRecord({
          subForm64: [{}, {}, {}, {}]
        })
        .then(function () {
          console.timeEnd('add subForm64 x4');
        });
      });

      test('turn to page[1]', function (done) {
        var calls = 0;
        var onPageInjected = function () {
          // should be 5 calls: apex + 4 sub-records
          calls += 1;
          if (calls === 5) {
            Forms.off('pageInjected', onPageInjected);
            console.timeEnd('turn to page[1]');
            done();
          }
        };
        this.timeout(3e3); // default is 2e3, sometimes just need a bit longer

        console.time('turn to page[1]');
        Forms.on('pageInjected', onPageInjected);
        Forms.current.get('pages').goto(1);
      });
    }); // END: suite('Form', ...)
  }); // END: suite('1', ...)
});
