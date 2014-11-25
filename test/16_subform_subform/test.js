/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {
  var record$, record, $xml;

  suite('getformrecord.xml', function () {
    var status, jqxhr;

    suiteSetup(function (done) {
      $.get("getformrecord.xml").then(
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

  suite('16: subForms render', function () {
    var $doc = $(document),
      $page = $('[data-role=page]'),
      $content = $page.find('[data-role=content]');

    /**
     * execute once before everything else in this suite
     */
    suiteSetup(function () {
      $content.empty();
      delete Forms.current;
    });

    suite('Form', function () {

      test('BlinkForms global is an Object', function () {
        assert($.isPlainObject(Forms), 'BlinkForms is a JavaScript object');
      });

      test('initialise with form.json', function (done) {
        var form;

        Forms.getDefinition('Test', 'add').then(function (def) {
          Forms.initialize(def, 'add');
          form = Forms.current;
          assert.equal($.type(form), 'object');
          assert.equal(form.get('name'), 'Test');
          assert.equal(form.get('label'), 'Test');
          done();
        }, function () {
          assert.fail(true, false, 'getDefinition failed!');
          done();
        });
      });

      test('render form for jQuery Mobile', function (done) {
        var form = Forms.current;

        $content.append(form.$form);

        $doc.one('pageinit', function () {
          done();
        });

        $.mobile.page({}, $page);
        $page.trigger('pagecreate');
        $page.show();

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
            assert.deepEqual(formdata, record, 'form data');
            done();
          });
        });

        test('Address has 3 sub-records', function () {
          var element;
          element = form.getElement('Address');
          assert.equal(element.size(), 3);
        });

        test('Address[0].parentElement', function () {
          var element, subForm;
          element = form.getElement('Address');
          assert.instanceOf(element, Backbone.Model);
          subForm = element.getForm(0);
          assert.instanceOf(subForm, Backbone.Model);
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
          var element, subForm;
          element = form.getElement('Address').getForm(0).getElement('Exp');
          assert.instanceOf(element, Backbone.Model);
          subForm = element.getForm(0);
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

      });

    }); // END: suite('Form', ...)

  }); // END: suite('1', ...)

});
