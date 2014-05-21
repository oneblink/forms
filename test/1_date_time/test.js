/*global suite:true, test:true, setup:true, teardown:true*/ // mocha
/*global suiteSetup:true, suiteTeardown:true*/ // mocha
/*global assert:true*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {

  var nativedate = [
    'date',
    'datetime'
  ], nativetime = [
    'time',
    'datetime'
  ], pickadate = [
    'datenow',
    'datefromnowplus',
    'datefromdate',
    'datetimenow'
  ], pickatime = [
    'timenow',
    'timenowplus',
    'timenowtime',
    'datetimenow'
  ];



  suite('1: date/time', function () {
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

      test('use native picker defaults to native picker', function (done) {
        nativedate.forEach(function (fld) {
          assert.equal($('input[name="' + fld + '_date"]').attr('type'), 'date');
        });
        nativetime.forEach(function (fld) {
          assert.equal($('input[name="' + fld + '_time"]').attr('type'), 'time');
        });
        setTimeout(done, 197);
      });

      test('use pick-a-date picker where native picker is not checked', function () {
        pickadate.forEach(function (fld) {
          var $elem = $('input[name="' + fld + '_date"]');
          assert.equal($elem.hasClass('picker__input'), true);
          assert.equal($elem.next('div').hasClass('picker'), true);
        });
        pickatime.forEach(function (fld) {
          var $elem = $('input[name="' + fld + '_time"]');
          assert.equal($elem.hasClass('picker__input'), true);
          assert.equal($elem.next('div').hasClass('picker'), true);
          assert.equal($elem.next('div').hasClass('picker--time'), true);
        });
      });

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
