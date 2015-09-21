define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {
  testUtils.defineFormLoadSuite('TestForm', 'add');

  suite('21: Readonly View', function () {
    test('Render form with data', function (done) {
      var form = Forms.current;
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

    test('no input/button elements present', function (done) {
      var form = Forms.current,
        element,
        view,
        figure,
        elements = ['Photo', 'location', 'draw', 'Rank', 'Details'];

      _.each(elements, function (name) {
        element = form.getElement(name);
        view = element.attributes._view.$el;
        figure = view.children('figure');
        assert.lengthOf(figure.children('image'), 0);
        assert.lengthOf(view.children('button'), 0);
        assert.lengthOf(view.children('a'), 0);
        assert.lengthOf(view.children('input'), 0);
      });
      done();
    });
  }); // END: suite('Form', ...)
});
