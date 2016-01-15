define([
  'underscore',
  'BlinkForms',
  'testUtils'
], function (_, Forms, testUtils) {
  testUtils.defineFormLoadSuite('form1', 'add');

  suite('35: signature field blocks validation', function () {
    var form;

    suiteSetup(function () {
      form = Forms.current;
    });

    test('errors before rendering form with data', function () {
      var invalidFld = form.getInvalidElements().length;
      assert.equal(invalidFld, 10, ' invalid elements in form' + invalidFld);
    });

    test('Render form with data', function (done) {
      $.ajax({
        type: 'GET',
        url: 'getformrecord.xml',
        dataType: 'xml'}).then(
        function (data) {
          var record = {}, node, nodes;

          nodes = data.evaluate('//' + form.attributes.name, data);
          node = nodes.iterateNext();
          _.each(node.children, function (key) {
            record[key.nodeName] = key.innerHTML;
          });

          form.setRecord(record).then(function () {
            form.data().then(function (formdata) {
              var keys = _.keys(record);
              _.each(keys, function (k) {
                assert.ok(formdata[k], k + ' does not exist');
              });
              done();
            }, function () {
              assert(false, 'failed to set record');
              done();
            });
          });
        }
     );
    });

    test('errors After rendering form with data', function () {
      var elements = ['date', 'datetime', 'time', 'date_n', 'datetime_n', 'time_n'];
      var invalidEle = 1;

      if (testUtils.isPhantom()) {
        assert.ok(form.getInvalidElements().length === 10, ' invalid elements in form(phantom)');
      } else {
        assert.isUndefined(form.getInvalidElements(), ' no invalid elements in form');
        $('input[type=button][name="Signature"]').trigger('click');
        $('button[data-action=clear]', '.sigPad').trigger('click');
        assert.equal(form.getInvalidElements().length, 1, ' invalid elements in form');

        elements.forEach(function (fld) {
          var ele = form.getElement(fld);
          ele.val('');
          invalidEle++;
          assert.equal(form.getInvalidElements().length, invalidEle, ' invalid elements in form');
        });
      }
    });
  }); // END: suite('1', ...)
});
