/*global suite:true, test:true, setup:true, teardown:true*/ // mocha
/*global suiteSetup:true, suiteTeardown:true*/ // mocha
/*global assert:true*/ // chai

define(['underscore', 'q', 'BlinkForms', 'BIC'], function(_, Q, Forms) {

  suite('5: validation', function() {
    var obj,
        $page = $('[data-role=page]'),
        $content = $page.find('[data-role=content]');

    /**
     * execute once before everything else in this suite
     */
    suiteSetup(function() {
      $content.empty();
      delete Forms.currentFormObject;
    });

    suite('Form', function() {

      test('BlinkForms global is an Object', function() {
        assert($.isPlainObject(Forms), 'BlinkForms is a JavaScript object');
      });

      test('initialise with form.json', function(done) {
        var form;

        Forms.getDefinition('form1', 'add').fail(function() {
          assert.fail(true, false, 'getDefinition failed!');
        }).done(function(def) {
          Forms.initialize(def);
          form = Forms.currentFormObject;
          assert.equal($.type(form), 'object');
          assert.equal(form.get('name'), 'form1');
          assert.equal(form.get('label'), 'Form 1');
          done();
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

    suite('Validation', function() {

      test('required text', function() {
        var form = Forms.currentFormObject,
            element = form.getElement('city'),
            requiredError;

        assert.isUndefined(element.validate(), 'no validation errors');
        
        element.val('');
        assert.isObject(element.validate(), 'now has a validation error');
        assert.isArray(element.validate().value, 'something wrong with value');

        requiredError = _.find(element.validate().value, function(error) {
          return _.isObject(error) && error.code === 'REQUIRED';
        });
        assert.isObject(requiredError, 'contained REQUIRED error');
        element.val('East Gosford');
      });
      
      test('Min/Max Value Check', function() {
        var form = Forms.currentFormObject,
            element = form.getElement('number');

        assert.isUndefined(element.validate(), 'no validation error');
 
        element.val(10);
        assert.isObject(element.validate(), 'minimum value error');
        
        element.val(550);
        assert.isObject(element.validate(), 'maximum value error');
      
      });

      test('Max Decimal Places Check', function() {
        var form = Forms.currentFormObject,
            element = form.getElement('number');
            
        element.val(45);
        assert.isUndefined(element.validate(), 'no decimal place error');
        
        element.val(45.25);
        assert.isUndefined(element.validate(), 'no decimal place error');
        
        element.val(45.569);
        assert.isObject(element.validate(), 'no decimal place error');
        
      });
    }); // END: suite('Form', ...)

    /**
     * execute once after everything else in this suite
     */
    suiteTeardown(function() {
//      delete Forms.currentFormObject;
    });

  }); // END: suite('1', ...)

});
