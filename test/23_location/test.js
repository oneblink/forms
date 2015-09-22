define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {
  if (testUtils.isPhantom()) {
    return;
  }

  testUtils.defineFormLoadSuite('TestForm', 'add');

  suite('23: Location field', function () {
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
              var keys = ['id', 'location1', 'location2', '_action'];
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

    test('location elements present', function (done) {
      var elements = {'location1': 1, 'location2': 1, 'location3': 0, 'location4': 0},
        element,
        view;

      _.each(elements, function (val, key) {
        element = BMP.Forms.current.getElement(key);
        view = element.attributes._view.$el.children('figure');
        assert.lengthOf(view.children('img'), val);
      });
      done();
    });

    test('location data is correct', function (done) {
      var form = Forms.current,
        elements = {
          id: '1',
          _action: 'add',
          location1: '{"latitude":-33.867487,"longitude":151.20699,"altitude":null,"accuracy":25000,"altitudeAccuracy":null,"heading":null,"speed":null}',
          location2: '{"latitude":-33.867487,"longitude":151.20699,"altitude":null,"accuracy":25000,"altitudeAccuracy":null,"heading":null,"speed":null}'
        };

      form.data().then(function (formdata) {
        setTimeout(function () {
          assert.deepEqual(formdata, elements, 'form data');
          done();
        }, 0);
      }, function () {
        assert(false, 'failed to set record');
        done();
      });
    });

    test('LOCATE button works as expected', function (done) {
      var element = Forms.current.getElement('location4'),
        $view = element.attributes._view.$el,
        $add = $view.find('.ui-btn').children('button'),
        $dialog,
        keys = ['accuracy', 'altitude', 'altitudeAccuracy', 'heading', 'latitude', 'longitude', 'speed'],
        value;

      this.timeout(10000);

      $add.trigger('click');

      setTimeout(function () {
        $dialog = $('#bmp-forms-location').find('button');
        $dialog.first().trigger('click');
        value = element.get('value');
        _.each(keys, function (k) {
          assert(_.has(value, k), k + ' does not exist');
        });
        done();
      }, 7000);
    });

    test('CLEAR button works as expected', function (done) {
      var element = Forms.current.getElement('location4'),
        $view = element.attributes._view.$el,
        $clear = $view.find('.ui-btn').children('button').last(),
        value;

      $clear.trigger('click');

      setTimeout(function () {
        value = element.get('value');
        assert.notOk(value, 'value still exists');
        done();
      }, 0);
    });
  }); // END: suite('Form', ...)
});
