define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {

  suite('33: Pages with subforms', function () {
    var form;

    var gotoPage = function (page) {
      form.get('pages').goto(page);
    };

    var elementNames = [
      'text_area-comment',
      'password-comment',
      'email-comment',
      'url-comment',
      'phone_number-comment',
      'number-comment',
      'currency-comment',
      'select-comment',
      'star_rating-comment',
      'multi-comment',
      'checkbox-comment',
      'date-comment',
      'time-comment',
      'timestamp-comment',
      'camera-comment',
      'image_library-comment',
      'file_upload-comment',
      'textbox-comment',
      'location-comment',
      'sketch_signature-comment',
      'avalue-comment',
      'logged_in_user_id-comment',
      'user_attribute-comment',
      'get_value-comment'];

    suite('changing pages shouldnt remove labels', function () {

      suiteSetup(function () {
        return testUtils.loadForm('form1', 'add')
        .then(function () {
          form = Forms.current;
          gotoPage(1);
          return Forms.current.getElement('comments').add();
        });
      });

      elementNames.forEach(function (elementName) {
        test(elementName + ' element has a label', function () {
          var element = Forms.current.getElement(elementName);
          var elementView = element.get('_view');
          var labelText = $('label', elementView.$el).text();
          assert.isString(labelText);
          assert.notStrictEqual(labelText, '');
        });
      });

      testUtils.defineButtonTest();

      suite('change page', function () {
        suiteSetup(function () {

          gotoPage(0);
          gotoPage(1);
        });

        elementNames.forEach(function (elementName) {
          test(elementName + ' element has a label when page is changed', function () {
            var elementView = Forms.current.getElement(elementName).get('_view');
            var labelText = $('label', elementView.$el).text();
            assert.isString(labelText);
            assert.notStrictEqual(labelText, '');
          });
        });

        testUtils.defineButtonTest();

      });

    });

  });

});
