define(['BlinkForms', 'testUtils', 'BIC'], function (Forms, testUtils) {
  suite('34: Removing a subform ', function () {
    var $page, $content;

    var record = {
      id: '37',
      Name: 'Harry Potter',
      Address: [
        {
          id: 1,
          Detail: 'EAST'
        },
        {
          id: 2,
          Detail: 'WEST',
          Phone: [
            {
              id: 1,
              Phone: '456'
            },
            {
              id: 2,
              Phone: '456'
            }
          ]
        },
        {
          id: 3,
          Detail: 'NORTH',
          Phone: [
            {
              id: 3,
              Phone: '789'
            },
            {
              id: 4,
              Phone: '789'
            },
            {
              id: 5,
              Phone: '789'
            }
          ]
        }, {
          id: 4,
          Detail: 'SOUTH',
          Phone: [
            {
              id: 6,
              Phone: '100'
            },
            {
              id: 7,
              Phone: '100'
            },
            {
              id: 8,
              Phone: '100'
            },
            {
              id: 9,
              Phone: '100'
            }
          ]
        }
      ]
    };

    /**
     * execute once before everything else in this suite
     */
    suiteSetup(function () {
      $page = $('[data-role=page]');
      $content = $page.find('[data-role=content]');
    });

    setup(function () {
      $content.empty();

      return Forms.getDefinition('Test', 'edit').then(function (def) {
        Forms.initialize(def, 'edit');
        $content.append(Forms.current.$form);
        assert.equal($.type(Forms.current), 'object');
        assert.equal(Forms.current.get('name'), 'Test');
        assert.equal(Forms.current.get('label'), 'Test');

        return Forms.current.setRecord(record);
      });
    });

    testUtils.defineLabelTest();

    suite('when a subform is removed', function () {
      test('FormModel.getRecord() includes it as "removed"', function () {
        var addressSubform = Forms.current.getElement('Address');
        addressSubform.remove(1);

        return Forms.current.getRecord().then(function (result) {
          assert.equal(result.Address[1]._action, 'remove');
        });
      });

      function validIdTest (valueToTest) {
        return function () {
          var addressSubform = Forms.current.getElement('Address');
          addressSubform.getForm(1).getElement('id').val(valueToTest);
          addressSubform.remove(1);

          return Forms.current.getRecord().then(function (result) {
            assert.equal(result.Address[1]._action, 'remove');
          });
        };
      }

      test('and has a string id, FormModel.getRecord() includes it as "removed"', validIdTest('ABCD-0000-EFGH'));
      test('and it has an id value of 0, FormModel.getRecord() includes it as "removed"', validIdTest(0));

      function removalTest (valueToTest) {
        return function () {
          var addressSubform = Forms.current.getElement('Address');
          var initialLength = addressSubform.get('forms').length;
          var removedId = addressSubform.getForm(1).id;

          // set id element to empty
          addressSubform.getForm(1).getElement('id').val(valueToTest);
          addressSubform.remove(1);

          return Forms.current.getRecord().then(function (result) {
            var returnedList = result.Address;
            assert.equal(returnedList.length, initialLength - 1);
            // make sure that the right subform was removed
            returnedList.forEach(function (subform) {
              assert.notEqual(subform.id, removedId);
            });
          });
        };
      }

      test('and it has an id value of an empty string, FormModel.getRecord() does not include it at all', removalTest(''));
      test('and it has an id value of null, FormModel.getRecord() does not include it at all', removalTest(null));
      // NaN?! because typeof NaN === 'number'
      test('and it has an id value of NaN, FormModel.getRecord() does not include it at all', removalTest(NaN));

      function intentionalRemovalTest (valueToTest) {
        return function () {
          var addressSubform = Forms.current.getElement('Address');
          var initialLength = addressSubform.get('forms').length;
          var removedId = addressSubform.getForm(1).id;

          addressSubform.remove(1);
          // the only way a subform can have no id is if the form has no id field value (tested above)
          // or it is removed by a developer after the subform has been removed ( doubtful they would do that),
          // so lets simulate that unlikely scenario  here.
          addressSubform.getForm(1).set('id', valueToTest);

          return Forms.current.getRecord().then(function (result) {
            var returnedList = result.Address;
            assert.equal(returnedList.length, initialLength - 1);
            // make sure that the right subform was removed
            returnedList.forEach(function (subform) {
              assert.notEqual(subform.id, removedId);
            });
          });
        };
      }

      test('and id value is removed by a developer by setting to an empty string, FormModel.getRecord() does not include it at all', intentionalRemovalTest(''));
      test('and id value is removed by a developer by setting to null, FormModel.getRecord() does not include it at all', intentionalRemovalTest(null));
      test('and id value is removed by a developer by setting to undefined, FormModel.getRecord() does not include it at all', intentionalRemovalTest(undefined));
      test('and id value is removed by a developer by setting to NaN, FormModel.getRecord() does not include it at all', intentionalRemovalTest(NaN));
    });

    // the code for sub-sub forms is exactly the same as subforms, so we just need
    // to confirm the basic removal behavior works
    suite('when a sub subform is removed', function () {
      test('FormModel.getRecord() includes it as "removed"', function () {
        var northAddressSubform = Forms.current.getSubforms().Address.at(2);
        var phoneSubformElement = northAddressSubform.getElement('Phone');
        phoneSubformElement.remove(1);

        return Forms.current.getRecord().then(function (result) {
          assert.equal(result.Address[2].Phone[1]._action, 'remove');
        });
      });

      test('if it has no id, FormModel.getRecord() does not include it at all', function () {
        var northAddressSubform = Forms.current.getSubforms().Address.at(2);
        var phoneSubformElement = northAddressSubform.getElement('Phone');
        var initialLength = phoneSubformElement.get('forms').length;
        var removedId = phoneSubformElement.getForm(1).id;

        phoneSubformElement.remove(1);
        phoneSubformElement.getForm(1).set('id', null);

        return Forms.current.getRecord().then(function (result) {
          var phoneSubFormList = result.Address[2].Phone;
          assert.equal(phoneSubFormList.length, initialLength - 1);

          phoneSubFormList.forEach(function (phoneSubform) {
            assert.notEqual(phoneSubform.id, removedId);
          });
        });
      });
    });
  });
});
