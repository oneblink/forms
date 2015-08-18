define(['BlinkForms', 'testUtils', 'BIC'], function (Forms, testUtils) {

  if (navigator.userAgent.toLowerCase().indexOf('phantom') !== -1) {
    return;
  }

  testUtils.defineFormLoadSuite('form1', 'add');

  suite('26: cascading select boxes', function () {

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

              var keys = ['id', 'country', 'city', 'state', 'form2', 'form3', '_action'];
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

    suite('after .setRecord() from xml', function () {

      var form;

      suiteSetup(function (done) {
        form = BMP.Forms.current;
        done();
      });

      test('PARENT: Cascading Selects are loaded correctly', function (done) {
        var country = form.getElement('country'),
          state = form.getElement('state'),
          city = form.getElement('city'),
          expected = {
            country: {"Australia": "Australia", "India": "India"},
            state: {
              "NSW": "NSW",
              "VIC": "VIC",
              "QLD": "QLD",
              "SA": "SA",
              "TAS": "TAS",
              "WA": "WA",
              "NT": "NT",
              "ACT": "ACT"
            },
            city: {
              "10": "Gosford",
              "11": "Sydney",
              "12": "Woy Woy",
              "13": "Wagga Wagga"
            }
          };

        setTimeout(function () {
          assert.deepEqual(expected.country, country.attributes.options);
          assert.deepEqual(expected.state, state.attributes.options);
          assert.deepEqual(expected.city, city.attributes.options);
          done();
        }, 500);
      });

      test('FORM2: Cascading Selects should load country+state correctly', function (done) {
        var subformField = form.getElement("form2"),
          country,
          state,
          city,
          subform,
          expected;

          subform = subformField.getForm(0);

          country = subform.getElement('country1');
          state = subform.getElement('state1');
          city = subform.getElement('city1');
          expected = {
            country: {"Australia": "Australia", "India": "India"},
            state: {
              "NSW": "NSW",
              "VIC": "VIC",
              "QLD": "QLD",
              "SA": "SA",
              "TAS": "TAS",
              "WA": "WA",
              "NT": "NT",
              "ACT": "ACT"
            },
            city: {
              "a": "a",
              "b": "b"
            }
          };

        setTimeout(function () {
          assert.deepEqual(expected.country, country.attributes.options);
          assert.deepEqual(expected.state, state.attributes.options);
          assert.deepEqual(expected.city, city.attributes.options);
          done();
        }, 500);
      });

      test('FORM3: Cascading Selects should not load anything', function (done) {
        var subformField = form.getElement("form3"),
          country,
          state,
          city,
          subform,
          expected;

        subform = subformField.getForm(0);

        country = subform.getElement('field1');
        state = subform.getElement('field2');
        city = subform.getElement('field3');
        expected = {
          country: {"a": "a", "b": "b"},
          state: {"a": "a", "b": "b"},
          city: {"a": "a", "b": "b"}
        };

        setTimeout(function () {
          assert.deepEqual(expected.country, country.attributes.options);
          assert.deepEqual(expected.state, state.attributes.options);
          assert.deepEqual(expected.city, city.attributes.options);
          done();
        }, 500);
      });

    }); // END: suite('after .setRecord() from xml', ...)

    suite('change parent values', function () {

      var form;

      suiteSetup(function (done) {
        form = BMP.Forms.current;
        done();
      });

      test('change country and state should update', function (done) {
        var country = form.getElement('country'),
          state = form.getElement('state'),
          city = form.getElement('city'),
          expected = {
            country: {"Australia": "Australia", "India": "India"},
            state: {
              "Gujarat": "Gujarat",
              "Maharashtra": "Maharashtra",
              "Rajasthan": "Rajasthan"
            },
            city: {
              "10": "Gosford",
              "11": "Sydney",
              "12": "Woy Woy",
              "13": "Wagga Wagga"
            }
          };

        country.set('value', "India");

        setTimeout(function () {
          assert.deepEqual(expected.country, country.attributes.options);
          assert.deepEqual(expected.state, state.attributes.options);
          assert.deepEqual(expected.city, city.attributes.options);
          done();
        }, 500);
      });

      test('change state and city should update', function (done) {
        var country = form.getElement('country'),
          state = form.getElement('state'),
          city = form.getElement('city'),
          expected = {
            country: {"Australia": "Australia", "India": "India"},
            state: {
              "Gujarat": "Gujarat",
              "Maharashtra": "Maharashtra",
              "Rajasthan": "Rajasthan"
            },
            city: {
              "107": "Udaypur",
              "108": "Jaipur"
            }
          };

        state.set('value', "Rajasthan");

        setTimeout(function () {
          assert.deepEqual(expected.country, country.attributes.options);
          assert.deepEqual(expected.state, state.attributes.options);
          assert.deepEqual(expected.city, city.attributes.options);
          done();
        }, 500);
      });
    }); // END: suite('change parent values', ...)

    suite('change form2 values', function () {

      var form, subform;

      suiteSetup(function (done) {
        form = BMP.Forms.current;
        subform = form.getElement('form2').getForm(0);
        done();
      });

      test('country should contain new options', function (done) {
        var country,
          expected;

        country = subform.getElement('country1');
        expected = {"Australia": "Australia", "India": "India"};

        setTimeout(function () {
          assert.deepEqual(expected, country.attributes.options);
          done();
        }, 500);
      });

      test('change country and state should update', function (done) {
        var country = subform.getElement('country1'),
          state = subform.getElement('state1'),
          city = subform.getElement('city1'),
          expected = {
            state1: {
              "Gujarat": "Gujarat",
              "Maharashtra": "Maharashtra",
              "Rajasthan": "Rajasthan"
            },
            city1: {
              "a": "a",
              "b": "b"
            }
          };

        country.set("value", "India");

        setTimeout(function () {
          assert.deepEqual(expected.state1, state.attributes.options);
          assert.deepEqual(expected.city1, city.attributes.options);
          done();
        }, 500);
      });

      test('change state and city should not update (cascade resource does not exist)', function (done) {
        var state = subform.getElement('state1'),
          city = subform.getElement('city1'),
          expected = {
            "a": "a",
            "b": "b"
          };

        state.set('value', "Gujarat");

        setTimeout(function () {
          assert.deepEqual(expected, city.attributes.options);
          done();
        }, 500);
      });

    }); // END: suite('change form2 values', ...)

    suite('change form3 values', function () {

      var form, subform;

      suiteSetup(function (done) {
        form = BMP.Forms.current;
        subform = form.getElement('form3').getForm(0);
        done();
      });

      test('country should contain old options (cascade fails)', function (done) {
        var country,
          expected;

        country = subform.getElement('field1');
        expected = {"a": "a", "b": "b"};

        setTimeout(function () {
          assert.deepEqual(expected, country.attributes.options);
          done();
        }, 500);
      });

      test('change country and nothing will change (cascade resource does not exist)', function (done) {
        var country = subform.getElement('field1'),
          state = subform.getElement('field2'),
          city = subform.getElement('field3'),
          expected = {
            state: {
              "a": "a",
              "b": "b"
            },
            city: {
              "a": "a",
              "b": "b"
            }
          };

        country.set("value", "b");

        setTimeout(function () {
          assert.deepEqual(expected.state, state.attributes.options);
          assert.deepEqual(expected.city, city.attributes.options);
          done();
        }, 500);
      });

      test('change state and city should not update (cascade resource does not exist)', function (done) {
        var state = subform.getElement('field2'),
          city = subform.getElement('field3'),
          expected = {
              "a": "a",
              "b": "b"
            };

        state.set('value', "b");

        setTimeout(function () {
          assert.deepEqual(expected, city.attributes.options);
          done();
        }, 500);
      });

    }); // END: suite('change form3 values', ...)

  }); // END: suite('1', ...)

});
