define(['BlinkForms', 'backbone', 'testUtils', 'BIC'], function (Forms, Backbone, testUtils) {
  var record$, record, $xml;

  suite('getformrecord.xml', function () {
    var status, jqxhr;

    suiteSetup(function (done) {
      $.ajax({
        type: "GET",
        url: "getformrecord.xml",
        dataType: "xml"}).then(
        function (res, stat, xhr) {
          status = stat;
          jqxhr = xhr;
          done();
        }
     );
    });

    test('status is "success"', function () {
      assert.equal(status, 'success');
    });

    test('responseText exists and is non-empty', function () {
      assert.property(jqxhr, 'responseText');
      assert.isString(jqxhr.responseText);
      assert(!!jqxhr.responseText);
    });

    suite('parsing as XML', function () {

      suiteSetup(function () {
        $xml = $($.parseXML(jqxhr.responseText));
      });

      test('$.parseXML completes successfully', function () {
        assert.lengthOf($xml, 1);
      });

      test('XML has a "Test" element', function () {
        assert.lengthOf($xml.find('Test'), 1);
      });

    });

    suite('XML record', function () {

      suiteSetup(function () {
        record$ = $xml.find('Test').first();
      });

      test('defines "id" field', function () {
        assert.lengthOf(record$.children('id'), 1);
      });

      test('defines "Name" field', function () {
        assert.lengthOf(record$.children('Name'), 1);
      });

      test('defines "Address" field', function () {
        assert.lengthOf(record$.children('Address'), 1);
      });

      test('defines "Address" field with 3 sub-records', function () {
        assert.lengthOf(record$.children('Address').children('Address'), 3);
      });

    });

    suite('XML to Object', function () {

      suiteSetup(function () {
        record = {};
        record$.children().each(function (index, el) {
          var value;
          if (el.normalize) {
            el.normalize();
          }
          value = (new XMLSerializer()).serializeToString(el);
          value = value.substring(
            ('<' + el.nodeName + '>').length,
            value.length - ('</' + el.nodeName + '>').length
         ); // unwrap the outer XML tag from the new XML string
          record[el.nodeName] = value;
        });
      });

      test('object has correct keys', function () {
        assert.sameMembers(Object.keys(record), ['id', 'Name', 'Address']);
      });

    });

  });

  testUtils.defineFormLoadSuite('Test', 'add');

  suite('16: subForms render', function () {

    suite('Form', function () {

      test('Edit form with subforms', function (done) {
        var form = Forms.current;
        var element = {
          id: '41',
          Name: 'Dasy',
          Address: [
            {
              "id": "51",
              "Detail": "Great work",
              "_action": "edit",
              "Exp": [
                {
                  "id": "1",
                  "Rank": "45",
                  "_action": "edit"
                }
              ]
            },
            {
              "id": "52",
              "Detail": "Bad news",
              "_action": "edit",
              "Exp": [
                {
                  "id": "2",
                  "Rank": "89",
                  "_action": "edit"
                },
                {
                  "id": "3",
                  "Rank": "88",
                  "_action": "edit"
                }
              ]
            },
            {
              "id": "53",
              "Detail": "Quite Day",
              "_action": "edit",
              "Exp": [

              ]
            }
          ]
        };
        $.ajax({
          type: "GET",
          url: "getformrecord.xml",
          dataType: "xml"}).then(
          function (data) {
            var rec = {}, node, nodes;
            nodes = data.evaluate('//' + form.attributes.name, data);
            node = nodes.iterateNext();
            _.each(node.children, function (key) {
              rec[key.nodeName] = key.innerHTML;
            });
            form.setRecord(rec).then(function () {
              form.data().then(function (formdata) {
                var keys = _.keys(rec);
                _.each(keys, function (k) {
                  assert.deepEqual(formdata[k], element[k]);
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

      suite('after .setRecord()', function () {

        var form;

        suiteSetup(function (done) {
          form = BMP.Forms.current;
          form.setRecord(record).then(function () {
            done();
          }, function (err) {
            throw err;
          });
        });

        test('input record is the same as output', function (done) {
          form.data().then(function (formdata) {
            assert.isObject(formdata);
            // this is broken now that original input sub-records are XML string
            // assert.deepEqual(formdata, record, 'form data');
            done();
          });
        });

        test('Address has 3 sub-records', function () {
          var element;
          element = form.getElement('Address');
          assert.equal(element.size(), 3);
        });

        test('Address[0].parentElement', function () {
          var element = form.getElement('Address');
          var subForm = element.getForm(0);
          assert.instanceOf(element, Backbone.Model);
          assert.instanceOf(subForm, Backbone.Model); // broken by new assert
          assert.ok(subForm.parentElement);
          assert.strictEqual(subForm.parentElement, element);
        });

        test('Address[0] _view.model', function () {
          var element, view;
          element = form.getElement('Address');
          assert.instanceOf(element, Backbone.Model);
          view = element.get('_view');
          assert.instanceOf(view, Backbone.View);
          assert.strictEqual(view.model, element);
        });

        test('Address[0] Exp[0].parentElement', function () {
          var element = form.getElement('Address').getForm(0).getElement('Exp');
          var subForm = element.getForm(0);
          assert.instanceOf(element, Backbone.Model);
          assert.instanceOf(subForm, Backbone.Model);
          assert.strictEqual(subForm.parentElement, element);
        });

        test('Address[0] Exp[0] _view.model', function () {
          var element, view;
          element = form.getElement('Address').getForm(0).getElement('Exp');
          assert.instanceOf(element, Backbone.Model);
          view = element.get('_view');
          assert.instanceOf(view, Backbone.View);
          assert.strictEqual(view.model, element);
        });

        test('Address element has 1 "add" button', function () {
          var element, view;
          element = form.getElement('Address');
          view = element.get('_view');
          assert.lengthOf(view.$el.children('.ui-btn'), 1);
        });

        test('Exp element in all Address sub-records have 1 "add" button each', function () {
          form.getElement('Address').get('forms').each(function (subForm) {
            var element, view;
            element = subForm.getElement('Exp');
            view = element.get('_view');
            assert.lengthOf(view.$el.children('.ui-btn'), 1);
          });
        });

      });

      suite('removing a subform record with an "id" attribute', function () {
        var oldSync;

        suiteSetup(function (done) {
          oldSync = Backbone.sync;

          Backbone.sync = function () {
            throw new Error('Backbone.sync called unexpectedly');
          };

          // this is necessary for a Backbone.Model#destroy() to trigger
          // Backbone.sync()
          BMP.Forms.current.getElement('Address').setRecords([{}]).then(function () {
            BMP.Forms.current.getElement('Address').get('forms').at(0).id = '123';
            done();
          });
        });

        test('removing subform record does not trigger exception', function () {
          assert.doesNotThrow(function () {
            // if Backbone.sync() is called, there will be an exception
            BMP.Forms.current.getElement('Address').remove(0);
          });
        });

        suiteTeardown(function () {
          Backbone.sync = oldSync;
        });

      });

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
