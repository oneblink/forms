define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {

  testUtils.defineFormLoadSuite('TestForm', 'add');

  suite('22: Custom CSS', function () {

    test('Render form with data', function (done) {
      var form = Forms.current;
      $.ajax({
        type: "GET",
        url: "getformrecord.xml",
        dataType: "xml"}).then(
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
                assert.ok(formdata[k], k + " does not exist");
              });
              done();
            }, function () {
              assert(false, "failed to set record");
              done();
            });
          });
        }
     );
    });

    test('Applying custom CSS using element name/type', function (done) {
      var form = Forms.current,
        hiddenElements = form.$form.find('div:hidden'),
        elements = ['Photo', 'Photo1', 'Photo2', 'location'],
        name;

        _.each(hiddenElements, function (element) {
          name = $(element).data('name');
          if (name) {
            assert.isTrue(_.contains(elements, name));
          }
        });
      done();
    });

  }); // END: suite('Form', ...)

});
