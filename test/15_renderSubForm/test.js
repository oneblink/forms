define(['BlinkForms', 'testUtils'], function (Forms, testUtils) {
  testUtils.defineFormLoadSuite('Test', 'add');

  suite('15: subForms render', function () {
    test('Edit form with subforms', function (done) {
      var form = Forms.current;
      var element = {
        id: '37',
        Name: 'Greg',
        Address: [
          {
            "id": "39",
            "Detail": "David",
            "_action": "edit"
          },
          {
            "id": "40",
            "Detail": "Andrew",
            "_action": "edit"
          },
          {
            "id": "41",
            "Detail": "Harry",
            "_action": "edit"
          }
        ]
      };
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

    test('form with subform', function (done) {
        var result;
        var xml = "<Address><Address><id>1</id><Detail>what a whiner</Detail></Address><Address><id>2</id><Detail>great day</Detail></Address><Address><id>3</id><Detail>great food</Detail></Address></Address>";
        var record = {
          Address: [
            {
              id: "1",
              Detail: 'what a whiner'
            },
            {
              id: "2",
              Detail: 'great day'
            },
            {
              id: "3",
              Detail: 'great food'
            }

          ]
        };
        xml = $.parseXML(xml);
        xml = xml.firstElementChild || xml.documentElement;
        result = Forms._models.Form.xmlToJson(xml, {});
        assert.deepEqual(record, result);
        done();
    });

    test('subform with subform', function (done) {
        var result;
        var xml = "<Address><Address><id>51</id><Detail>Great work</Detail><Exp><Exp><id>1</id><Rank>45</Rank></Exp></Exp></Address><Address><id>52</id><Detail>Bad news</Detail><Exp><Exp><id>2</id><Rank>89</Rank></Exp><Exp><id>3</id><Rank>88</Rank></Exp></Exp></Address><Address><id>53</id><Detail>Quite Day</Detail><Exp/></Address></Address>";
        var record = {
          Address: [
            {
              id: '51',
              Detail: 'Great work',
              Exp: [
                {
                  id: '1',
                  Rank: '45'
                }
              ]
            },
            {
              id: '52',
              Detail: 'Bad news',
              Exp: [
                {
                  id: '2',
                  Rank: '89'
                },
                {
                  id: '3',
                  Rank: '88'
                }
              ]
            },
            {
              id: '53',
              Detail: 'Quite Day',
              Exp: ''
            }

          ]
        };
        xml = $.parseXML(xml);
        xml = xml.firstElementChild || xml.documentElement;
        result = Forms._models.Form.xmlToJson(xml, {});
        assert.deepEqual(record, result);
        done();
    });

    test('subforms with further subforms', function (done) {
        var result;
        var xml = "<Address><Address><id>51</id><Detail>Great work</Detail><Exp><Exp><id>1</id><Rank>45</Rank><Status/></Exp></Exp></Address><Address><id>52</id><Detail>Bad news</Detail><Exp><Exp><id>2</id><Rank>89</Rank><Status><Status><Age>45</Age></Status></Status></Exp><Exp><id>3</id><Rank>88</Rank><Status/></Exp></Exp></Address><Address><id>53</id><Detail>Quite Day</Detail><Exp/></Address></Address>";
        var record = {
            "Address": [
                {
                  id: "51",
                  Detail: "Great work",
                  Exp: [
                    {
                      id: "1",
                      Rank: "45",
                      Status: ""
                    }
                  ]
                },
                {
                  id: "52",
                  Detail: "Bad news",
                  Exp: [
                    {
                      id: "2",
                      Rank: "89",
                      Status: [
                        {
                          Age: "45"
                        }
                      ]
                    },
                    {
                      id: "3",
                      Rank: "88",
                      Status: ""
                    }
                  ]
                },
                {
                  id: '53',
                  Detail: 'Quite Day',
                  Exp: ""
                }
            ]
        };
        xml = $.parseXML(xml);
        xml = xml.firstElementChild || xml.documentElement;
        result = Forms._models.Form.xmlToJson(xml, {});
        assert.deepEqual(record, result);
        done();
    });

    suite('subform field name different than subform', function () {
      test('form with subform', function (done) {
          var result;
          var xml = "<Subform><Address><id>1</id><Detail>what a whiner</Detail></Address><Address><id>2</id><Detail>great day</Detail></Address><Address><id>3</id><Detail>great food</Detail></Address></Subform>";
          var record = {
            Subform: [
              {
                id: "1",
                Detail: 'what a whiner'
              },
              {
                id: "2",
                Detail: 'great day'
              },
              {
                id: "3",
                Detail: 'great food'
              }

            ]
          };
          xml = $.parseXML(xml);
          xml = xml.firstElementChild || xml.documentElement;
          result = Forms._models.Form.xmlToJson(xml, {});
          assert.deepEqual(record, result);
          done();
      });

      test('subforms with further subform', function (done) {
          var result;
          var xml = "<subform><Address><id>51</id><Detail>Great work</Detail><Description><Exp><id>1</id><Rank>45</Rank><Status/></Exp></Description></Address><Address><id>52</id><Detail>Bad news</Detail><Description><Exp><id>2</id><Rank>89</Rank><Status><Status><Age>45</Age></Status></Status></Exp><Exp><id>3</id><Rank>88</Rank><Status/></Exp></Description></Address><Address><id>53</id><Detail>Quite Day</Detail><Description/></Address></subform>";
          var record = {
            subform: [
              {
                id: '51',
                Detail: 'Great work',
                Description: [
                  {
                    id: '1',
                    Rank: '45',
                    Status: ''
                  }
                ]
              },
              {
                id: '52',
                Detail: 'Bad news',
                Description: [
                  {
                    id: '2',
                    Rank: '89',
                    Status: [
                      {
                        Age: '45'
                      }
                    ]
                  },
                  {
                    id: '3',
                    Rank: '88',
                    Status: ''
                  }
                ]
              },
              {
                id: '53',
                Detail: 'Quite Day',
                Description: ''
              }

            ]
          };
          xml = $.parseXML(xml);
          xml = xml.firstElementChild || xml.documentElement;
          result = Forms._models.Form.xmlToJson(xml, {});
          assert.deepEqual(record, result);
          done();
      });

      test('subform with subform', function (done) {
          var result;
          var xml = "<subform><subform1><id>1</id><Age>45</Age><status><subform2><id>1</id><Detail>Great Day</Detail><Rank>4</Rank></subform2><subform2><id>2</id><Detail>welcome </Detail><Rank>3</Rank></subform2></status></subform1><subform1><id>2</id><Age>48</Age><status/></subform1><subform1><id>3</id><Age>56</Age><status><subform2><id>3</id><Detail>standards</Detail><Rank>8</Rank></subform2></status></subform1></subform>";
          var record = {
            subform: [
              {
                id: '1',
                Age: '45',
                status: [
                  {
                    id: '1',
                    Detail: "Great Day",
                    Rank: '4'
                  },
                  {
                    id: '2',
                    Detail: "welcome ",
                    Rank: '3'
                  }
                ]
              },
              {
                id: '2',
                Age: '48',
                status: ""
              },
              {
                id: '3',
                Age: '56',
                status: [
                  {
                    id: "3",
                    Detail: "standards",
                    Rank: '8'
                  }
                ]
              }
            ]
          };
          xml = $.parseXML(xml);
          xml = xml.firstElementChild || xml.documentElement;
          result = Forms._models.Form.xmlToJson(xml, {});
          assert.deepEqual(record, result);
          done();
      });
    });
  }); // END: suite('Form', ...)
});
