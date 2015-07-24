/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {

  suite('30: Subforms inside Subforms', function () {
    var $page = $('[data-role=page]'),
      $content = $page.find('[data-role=content]');


    setup(function () {
      return Forms.getDefinition('firstLevel', 'add').then(function (def) {
          Forms.initialize(def);
          $content.append(Forms.current.$form);
          $.mobile.page({}, $page);
          $page.trigger('pagecreate');
          $page.show();
          $(window).scrollTop(0);
        });
    });

    teardown(function(){
      Forms.current.off();
      $content.empty();
      delete Forms.current;
    });

    test('Top Level elements collection returns 1 sub form', function(){
      var subForms = Forms.current.getSubforms();
      var p, counter = 0;
      assert.isObject(subForms);
      assert.isDefined(subForms.second_level_form);
      for (p in subForms){
        if (subForms.hasOwnProperty(p)){
          counter++;
        }
      }

      assert.equal(counter, 1);
    });

    test('2nd level form returns 1 subform', function(){
      return Forms.current.getElement('second_level_form').get('_view').onAddClick().then(function(){
        var subForms;
        var subSubForms;
        subForms = Forms.current.getSubforms();
        assert.equal(subForms.second_level_form.length, 1);

        subSubForms = subForms.second_level_form.invoke('getSubforms')[0];
        assert.isDefined(subSubForms.third_level_form);
      });
    });

    test('2nd level form returns 2 subforms', function(){
      var view = Forms.current.getElement('second_level_form').get('_view');
      return view.onAddClick()
                  .then(view.onAddClick.bind(view))
                  .then(function(){
                    var subForms;
                    var subSubForms;
                    subForms = Forms.current.getSubforms();
                    assert.equal(subForms.second_level_form.length, 2);
                    subSubForms = subForms.second_level_form.models[0].getSubforms();
                    assert.isDefined(subSubForms.third_level_form);
                  });
    });



    test('2nd level form returns 2 subforms', function(){
      var view = Forms.current.getElement('second_level_form').get('_view');
      return view.onAddClick()
                  .then(view.onAddClick.bind(view))
                  .then(function(){
                    var subForms;
                    var subSubForms;
                    subForms = Forms.current.getSubforms();
                    assert.equal(subForms.second_level_form.length, 2);
                    subSubForms = subForms.second_level_form.models[0].getSubforms();
                    assert.isDefined(subSubForms.third_level_form);
                  });
    });

    test('2nd level form errors are scrolled to', function(){
      var origScrollTop = $(window).scrollTop();
      var view = Forms.current.getElement('second_level_form').get('_view');
      return view.onAddClick()
                 .then(function(){
                  var invalid = Forms.current.getInvalidElements();
                  //make sure we have an error
                  assert.isAbove(invalid.length, 0);

                  //get the first invalid element and scroll
                  return invalid.errors.at(0).get('_view').scrollTo().then(function(){
                    assert.notEqual($(window).scrollTop(), origScrollTop);
                  });
                 });
    });

    test('3rd level form errors are scrolled to correctly', function(){
      var origScrollTop = $(window).scrollTop();
      var view = Forms.current.getElement('second_level_form').get('_view');

      return view.onAddClick() //add second level
                 .then(function(){
                    var t = Forms.current.getElement('third_level_form').get('_view');
                    return t.onAddClick(); //add third level
                 })
                 .then(function(){
                    var subForms = Forms.current.getSubforms();
                    var moreSubforms = subForms.second_level_form.getSubforms();
                    var invalidThirdLevel;
                    //make sure we have an error
                    assert.isAbove(moreSubforms.length, 0);
                    assert.isTrue(moreSubforms[0].hasOwnProperty('third_level_form'));
                    //get the first invalid element and scroll
                    invalidThirdLevel = moreSubforms[0].third_level_form.models[0].getInvalidElements();
                    assert.isAbove(invalidThirdLevel.errors.length, 0);

                    return invalidThirdLevel.errors.at(0).get('_view').scrollTo().then(function(){
                      assert.notEqual($(window).scrollTop(), origScrollTop);
                    });
                 });
    });

    test('subform invalid events bubble up to Forms.current', function(done){
      var view = Forms.current.getElement('second_level_form').get('_view');

      view.onAddClick()
          .then(function(){
            Forms.current.on('invalid', function(model, error){
              assert.equal(model.id, 'second_required');
              assert.equal(error.value[0].code, 'REQUIRED');
              done();
            });
            Forms.current.getElement('second_required').val('');
          });
    });

    test('subform change:value events bubble up to Forms.current', function(done){
      var view = Forms.current.getElement('second_level_form').get('_view');

      view.onAddClick()
          .then(function(){
            Forms.current.on('change:value', function(model, val){
              assert.equal(model.id, 'second_required');
              assert.equal(val, 123);
              done();
            });
            Forms.current.getElement('second_required').val(123);
          });
    });


    test('3rd level subform invalid events bubble up to Forms.current', function(done){
      var view = Forms.current.getElement('second_level_form').get('_view');

      return view.onAddClick() //add second level
                 .then(function(){
                    var t = Forms.current.getElement('third_level_form').get('_view');
                    return t.onAddClick(); //add third level
                 })
                 .then(function(){
                    var thirdLevelRequiredField = Forms.current.getElement('third_level_req');

                    Forms.current.on('invalid', function(model, error){
                      assert.equal(model.id, 'third_level_req');
                      assert.equal(error.value[0].code, 'REQUIRED');
                      done();
                    });

                    thirdLevelRequiredField.val('');
                 });
    });

    test('3rd level subform invalid events bubble up to Forms.current', function(done){
      var view = Forms.current.getElement('second_level_form').get('_view');

      return view.onAddClick() //add second level
                 .then(function(){
                    var t = Forms.current.getElement('third_level_form').get('_view');
                    return t.onAddClick(); //add third level
                 })
                 .then(function(){
                    var thirdLevelRequiredField = Forms.current.getElement('third_level_req');

                    Forms.current.on('change:value', function(model, value){
                      assert.equal(model.id, 'third_level_req');
                      assert.equal(value, 'hello');
                      done();
                    });

                    thirdLevelRequiredField.val('hello');
                 });
    });
  });
});
