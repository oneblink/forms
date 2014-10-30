define(function () {
  return [
    {
      "default": {
        name: 'form1',
        label: 'Form 1',
        "_elements": [
          {
            "default": {
              "name": "id",
              "type": "hidden"
            }
          },
          {
            "default": {
              "name": "test1",
              "type": "text",
              "label": "Test1",
              "defaultValue": "test1",
              "page": 0
            }
          },
          {
            "default": {
              "name": "test2",
              "type": "text",
              "label": "Test2",
              "defaultValue": "test2",
              "page": 0
            }
          },
          {
            "default": {
              "name": "calc_button",
              "type": "button",
              "label": "Calculate",
              "persist": false,
              "page": 0
            }
          },
          {
            "default": {
              "name": "calc",
              "type": "message",
              "label": "Calc",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "showTextbox": "show",
              "calculationType": "manual",
              "buttonText": "Calculate",
              "persist": true,
              "page": 0
            }
          }
        ],
        "_checks": [

        ],
        "_actions": [
          {
            "default": {
              "javascript": "\"[test1]\"+\"[test2]\"",
              "outputTarget": "calc",
              "name": "CALC_calc"
            }
          }
        ],
        "_behaviours": [
          {
            "default": {
              "name": "auto_calculations",
              "trigger": {
                "formElements": ["calc_button"]
              },
              "actions": [
                "CALC_calc"
              ]
            }
          }
        ]
      }
    }
  ];
});
