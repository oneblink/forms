/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {
  // var start, end, interval, intervals;

  // suite('responsiveness test', function () {
  //
  //   test('start', function () {
  //     intervals = 0;
  //     start = new Date();
  //     interval = setInterval(function () {
  //       intervals += 1;
  //     }, 50);
  //   });
  //
  // });

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

        Forms.getDefinition('inspection', 'add').then(function (def) {

          console.time('initialize');

          Forms.initialize(def);

          console.timeEnd('initialize');

          console.time('behavioursExecuted');

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

        console.time('jQueryMobile enhance');

        $page.trigger('pagecreate');
        $page.show();

        console.timeEnd('jQueryMobile enhance');
      });

      test('behavioursExecuted event', function (done) {
        Forms.once('behavioursExecuted', function () {
          console.timeEnd('behavioursExecuted');
          done();
        });
      });

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

  // suite('responsiveness test', function () {
  //
  //   test('end', function () {
  //     var timeTaken;
  //     var expectedIntervals;
  //     var minIntervals, maxIntervals;
  //     clearTimeout(interval);
  //     end = new Date();
  //     timeTaken = end - start;
  //     expectedIntervals = timeTaken / 50;
  //     minIntervals = 0.9 * expectedIntervals;
  //     maxIntervals = 1.1 * expectedIntervals;
  //     assert(intervals > minIntervals, intervals + ' > ' + minIntervals);
  //     assert(intervals < maxIntervals, intervals + ' < ' + maxIntervals);
  //   });
  //
  // });

});
