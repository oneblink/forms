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
      assert.equal(invalidFld, 4, ' invalid elements in form');
    });

    test('Render form with data', function (done) {
      // var form = Forms.current;
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
      if (testUtils.isPhantom()) {
        assert.ok(form.getInvalidElements().length === 4, ' invalid elements in form(phantom)');
      } else {
        assert.isUndefined(form.getInvalidElements(), ' no invalid elements in form');
        $('button[name="Signature"]').trigger('click');
        $('button[data-action=clear]', '.sigPad').trigger('click');
        assert.equal(form.getInvalidElements().length, 1, ' invalid elements in form');
      }
    });
  }); // END: suite('1', ...)
});
