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
              "type": "text",
              "page": 0
            }
          },
          {
            "default": {
              "name": "test1",
              "type": "text",
              "label": "Test1",
              "page": 0
            }
          },
          {
            "default": {
              "name": "test2",
              "type": "text",
              "label": "Test2",
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
              "page": 0
            }
          },
          {
            "default": {
              "name": "subform",
              "type": "subForm",
              "subForm": "subform",
              "_elements": {
                "subtext1": {
                  "hide": "",
                  "override": "",
                  "type": "textbox",
                  "id": "subtext1"
                },
                "subtext2": {
                  "hide": "",
                  "override": "",
                  "type": "textbox",
                  "id": "subtext2"
                }
              },
              "plusButtonLabel": "PLUS",
              "minusButtonLabel": "MINUS",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "subformControlPos": "below",
              "subformPerms": "allow_add",
              "preload": "no",
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
                "formElements": "*"
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
