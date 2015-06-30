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
          Forms.current.set('numErrorsShown', 0); //dont want a limit
          $(window).scrollTop(0);
        });
    });

    teardown(function(){
      // $content.empty();
      // delete Forms.current;
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

      $content.empty();
      delete Forms.current;
    });

    test('2nd level form returns 1 subform', function(){
      return Forms.current.getElement('second_level_form').get('_view').onAddClick().then(function(){
        var subForms;
        var subSubForms;
        subForms = Forms.current.getSubforms();
        assert.equal(subForms.second_level_form.length, 1);

        subSubForms = subForms.second_level_form.invoke('getSubforms')[0];
        assert.isDefined(subSubForms.third_level_form);

        $content.empty();
        delete Forms.current;
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

                    $content.empty();
                    delete Forms.current;
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

                    $content.empty();
                    delete Forms.current;
                  });
    });

    test('2nd level form errors are scrolled scrolled to', function(done){
      var origScrollTop = $(window).scrollTop();
      var view = Forms.current.getElement('second_level_form').get('_view');
      return view.onAddClick()
                 .then(function(){
                  var subForms = Forms.current.getSubforms();
                  var invalid = _.compact(subForms.second_level_form.invoke('getInvalidElements') );
                  //make sure we have an error
                  assert.isAbove(invalid.length, 0);

                  //get the first invalid element and scroll
                  invalid[0].errors[0].get('_view').scrollTo({
                    always: function(){
                      assert.notEqual($(window).scrollTop(), origScrollTop);
                      $content.empty();
                      delete Forms.current;
                      done();
                    }
                  });
                 });
    });

    test('3rd level form errors are scrolled scrolled to correctly', function(done){
      var origScrollTop = $(window).scrollTop();
      var view = Forms.current.getElement('second_level_form').get('_view');

      return view.onAddClick() //add second level
                 .then(function(){
                    var t = Forms.current.getElement('third_level_form').get('_view');
                    return t.onAddClick(); //add third level
                 })
                 .then(function(){
                    var subForms = Forms.current.getSubforms();
                    var moreSubforms = subForms.second_level_form.invoke('getSubforms');
                    var invalidThirdLevel;
                    //make sure we have an error
                    assert.isAbove(moreSubforms.length, 0);
                    assert.isTrue(moreSubforms[0].hasOwnProperty('third_level_form'));
                    //get the first invalid element and scroll
                    invalidThirdLevel = moreSubforms[0].third_level_form.models[0].getInvalidElements();
                    assert.isAbove(invalidThirdLevel.errors.length, 0);

                    invalidThirdLevel.errors[0].get('_view').scrollTo({
                      always: function(){
                        assert.notEqual($(window).scrollTop(), origScrollTop);
                        done();
                      }
                    });
                 });
    });
  });
});
