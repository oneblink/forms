/*global suite:true, test:true, setup:true, teardown:true*/ // mocha
/*global suiteSetup:true, suiteTeardown:true*/ // mocha
/*global assert:true*/ // chai

define(['BlinkForms', 'BIC'], function (Forms) {
  suite('4: subForms', function () {
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

        Forms.getDefinition('form1', 'add').then(function (def) {
          Forms.initialize(def, 'add');
          form = Forms.current;
          assert.equal($.type(form), 'object');
          assert.equal(form.get('name'), 'form1');
          assert.equal(form.get('label'), 'Form 1');
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

    }); // END: suite('Form', ...)

    suite('Sub-Forms', function () {

      test('add 1st subForm', function (done) {
        var subFormElement = Forms.current.getElement('comments'),
          $view = subFormElement.attributes._view.$el,
          $add = $view.children('.ui-btn').children('button'),
          subForms = subFormElement.attributes.forms;

        assert.equal(subForms.length, 0, 'no subForms yet');
        $add.trigger('click');
        setTimeout(function () {
          done();
        }, 0);
      });

      test('Data has _action set properly', function (done) {

        BMP.Forms.current.data().then(function (data) {
          assert.equal(data._action, "add");
          assert.equal(data.comments[0]._action, "add");
          done();
        });
      });

      test('add 2nd subForm', function (done) {
        var subFormElement = Forms.current.getElement('comments'),
          $view = subFormElement.attributes._view.$el,
          $add = $view.children('.ui-btn').children('button'),
          subForms = subFormElement.attributes.forms;

        assert.equal(subForms.length, 1, '1 subForm');
        $add.trigger('click');
        setTimeout(function () {
          done();
        }, 0);
      });

      test('test subForms', function (done) {
        var subFormElement = Forms.current.getElement('comments'),
          subForms = subFormElement.attributes.forms,
          testData = [
            { comment: 'abc' },
            { comment: 'def' }
          ];

        assert.equal(subForms.length, 2, '2 subForms');
        subForms.at(0).getElement('comment').val('abc');
        subForms.at(1).getElement('comment').val('def');
        subFormElement.data()
          .then(function (d) {
            assert.deepEqual(d, testData, 'subFormElement data');
            return Forms.current.data();
          })
          .then(function (d) {
            assert.deepEqual(d.comments, testData, 'total form data');
            done();
          });
      });

      test('remove 1st subForm', function (done) {
        var subFormElement = Forms.current.getElement('comments'),
          subForms = subFormElement.attributes.forms,
          subForm = subForms.at(0),
          $view = subForm.attributes._view.$el,
          $remove = $view.children('.ui-btn').children('button');

        assert.equal(subForms.length, 2);

        $remove.trigger('click');
        setTimeout(function () {
          assert.equal(subForms.length, 1);
          done();
        }, 0);
      });

      test('test subForms', function (done) {
        var subFormElement = Forms.current.getElement('comments'),
          subForms = subFormElement.attributes.forms,
          testData = [
            { comment: 'def' }
          ];

        assert.equal(subForms.length, 1, '1 subForm');
        subForms.at(0).getElement('comment').val('def');
        subFormElement.data()
          .then(function (d) {
            assert.deepEqual(d, testData, 'subFormElement data');
            return Forms.current.data();
          })
          .then(function (d) {
            assert.deepEqual(d.comments, testData, 'total form data');
            done();
          });
      });

      test('remove edit subForm (leaving placeholder)', function (done) {
        var subFormElement = Forms.current.getElement('comments'),
          subForms = subFormElement.attributes.forms,
          subForm = subForms.at(0),
          $view = subForm.attributes._view.$el,
          $remove = $view.children('.ui-btn').children('button'),
          testData = {
            _action: "remove",
            id: 1
          };

        assert.equal($view.children('section').length, 1);
        assert.equal(subForms.length, 1);
        assert.equal(subForms.size(), 1);

        subForm.set('_action', 'edit');
        subForm.set('id', 1);

        $remove.trigger('click');
        setTimeout(function () {
          subFormElement = Forms.current.getElement('comments');
          subForms = subFormElement.attributes.forms;
          subForm = subForms.at(0);

          assert.deepEqual(subForm.attributes, testData, "attributes set correctly");
          assert.equal(subForms.length, 1);
          assert.equal(subForms.size(), 1);
          done();
        }, 0);
      });

      //FORMS-98 # Forms 3: Subform minus button doesn't work
      test('test add subform', function (done) {
        var subFormElement = Forms.current.getElement('comments'),
          $view = subFormElement.attributes._view.$el,
          $add = $view.children('.ui-btn').children('button'),
          subForms = subFormElement.attributes.forms;

        assert.equal(subForms.length, 1, 'no subForms yet');
        assert.equal(subForms.size(), 1);
        $add.trigger('click');
        setTimeout(function () {
          done();
        }, 0);
      });

      test('remove subForm (leaving no placeholders)', function (done) {
        var subFormElement = Forms.current.getElement('comments'),
          subForms = subFormElement.attributes.forms,
          subForm = subForms.at(1),
          $view = subForm.attributes._view.$el,
          $remove = $view.children('.ui-btn').children('button');

        //will have one section available in DOM
        assert.equal($view.children('section').length, 1);
        assert.equal(subForms.length, 2);
        assert.equal(subForms.size(), 2);

        $remove.trigger('click');

        setTimeout(function () {
          //will have zero section available in DOM
          assert.equal($view.children('section').length, 0);
          assert.equal(subForms.length, 1);
          assert.equal(subForms.size(), 1);
          done();
        }, 0);
      });

    });

    suite('incomplete: Edit Form', function () {

      test('initialise with form.json');

/*
      test('initialise with form.json', function (done) {
        var form = Forms.current;
        $.get("getformrecord.xml").then(
          function (data) {
            var record = {}, node, nodes;
            nodes = data.evaluate('//' + form.attributes.name, data);
            node = nodes.iterateNext();
            _.each(node.children, function (key) {
              record[key.nodeName] = key.innerHTML;
            });
            form.setRecord(record).then(function () {
              form.data().then(function (formdata) {
                assert.deepEqual(formdata, record, 'form data');
              });
            });
          }
        );
        done();
      });
    */
    });

  }); // END: suite('1', ...)

});
