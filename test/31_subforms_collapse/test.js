/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'testUtils', 'BIC'], function (Forms, testUtils) {
  suite('4: subForms', function () {
    var $page = $('[data-role=page]');
    var $content = $page.find('[data-role=content]');

    var form;

    suiteSetup(function() {
      $content.empty();
      delete Forms.current;
      return Forms.getDefinition('form1', 'add').then(function(def){
        Forms.initialize(def, 'add');
        form = Forms.current;

        $content.append(form.$form);
        $.mobile.page({}, $page);
        $page.trigger('pagecreate');
        $page.show();

        return Forms;
      });
    });

    test('collapsing sub-form elements have summaryPromise', function () {
      return Promise.all(['notes', 'comments'].map(function (name) {
        var el = BMP.Forms.current.getElement(name);
        assert(el.attributes.summaryPromise);
        return el.attributes.summaryPromise.then(function (names) {
          assert.deepEqual(names, ['comment'], name);
        });
      }));
    });

  }); // END: suite('1', ...)

});
