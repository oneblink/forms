define(function () {
  return [
    {
      'default': {
        name: 'form1',
        label: 'Form 1',
        _elements: [
          {
            'default': {
              name: 'id',
              type: 'hidden'
            }
          },
          {
            'default': {
              name: 'text',
              label: 'Text',
              type: 'text'
            }
          },
          {
            'default': {
              name: 'email',
              label: 'Email',
              type: 'email'
            }
          },
          {
            'default': {
              name: 'number',
              label: 'Number',
              type: 'number'
            }
          },
          {
            'default': {
              name: 'message',
              type: 'message',
              html: '<p>Output from automatic calculations shown below...</p>'
            }
          },
          {
            'default': {
              name: 'calc1exp',
              label: 'calc1 expression',
              type: 'message',
              html: '',
              persist: true
            }
          },
          {
            'default': {
              name: 'calc2fn',
              label: 'calc2 function',
              type: 'message',
              html: '',
              persist: true
            }
          },
          {
            'default': {
              name: 'text1',
              label: 'Text 1',
              type: 'text'
            }
          },
          {
            'default': {
              name: 'text2',
              label: 'Text 2',
              type: 'text'
            }
          },
          {
            'default': {
              name: 'text3',
              label: 'Text 3',
              type: 'text'
            }
          }
        ],
        _behaviours: [
          {
            'default': {
              name: 'auto_calculations',
              "trigger": {
                "formElements": "*"
              },
              check: null,
              actions: [
                'set_calc1exp',
                'set_calc2fn'
              ],
              actionsIfFalse: []
            }
          },
          {
            'default': {
              name: 'auto_condition_email',
              "trigger": {
                "formElements": "*"
              },
              check: 'text_not_empty',
              actions: [{
                action: 'show_email',
                autoReverse: true
              }],
              actionsIfFalse: []
            }
          },
          {
            'default': {
              name: 'auto_condition_number',
              "trigger": {
                "formElements": "*"
              },
              check: 'text_not_empty_and_email_not_empty',
              actions: [{
                action: 'show_number',
                autoReverse: true
              }],
              actionsIfFalse: []
            }
          }, {
            'default': {
              name: 'auto_calculations_old',
              formElements: '*',
              actions: [
                'set_calc1exp',
                'set_calc2fn'
              ]
            }
          },
          {
            "default": {
              "name": "showText2_text1IsNot",
              "trigger": {
                "formElements": "*"
              },
              "check": "text1IsNot",
              "actions": [
                {
                  "action": "showText2",
                  "autoReverse": true
                }
              ]
            }
          },
          {
            "default": {
              "name": "showText3_text1IsNotAaa",
              "trigger": {
                "formElements": "*"
              },
              "check": "text1IsNotAaa",
              "actions": [
                {
                  "action": "showText3",
                  "autoReverse": true
                }
              ]
            }
          }
        ],
        _checks: [
          {
            'default': {
              name: 'text_not_empty',
              exp: {
                operator: '!empty',
                operands: [{
                  operator: 'formElement.value',
                  operands: ['text']
                }]
              }
            }
          },
          {
            'default': {
              name: 'text_not_empty_and_email_not_empty',
              exp: {
                operator: 'and',
                operands: [
                  {
                    operator: '!empty',
                    operands: [{
                      operator: 'formElement.value',
                      operands: ['text']
                    }]
                  },
                  {
                    operator: '!empty',
                    operands: [{
                      operator: 'formElement.value',
                      operands: ['email']
                    }]
                  }
                ]
              }
            }
          },
          {
            "default": {
              "name": "text1IsNot",
              "exp": {
                "operator": "!=",
                "operands": [
                  {
                    "operator": "formElement.value",
                    "operands": [
                      "text1"
                    ]
                  }
                ]
              }
            }
          },
          {
            "default": {
              "name": "text1IsNotAaa",
              "exp": {
                "operator": "!=",
                "operands": [
                  {
                    "operator": "formElement.value",
                    "operands": [
                      "text1"
                    ]
                  },
                  "aaa"
                ]
              }
            }
          }
        ],
        _actions: [
          {
            'default': {
              name: 'set_calc1exp',
              javascript: "[number]",
              outputTarget: 'calc1exp'
            }
          },
          {
            'default': {
              name: 'set_calc2fn',
              javascript: "function () { return [number]; }",
              outputTarget: 'calc2fn'
            }
          },
          {
            'default': {
              name: 'show_email',
              manipulations: [{
                target: 'email',
                properties: {
                  hidden: false,
                  persist: true
                }
              }]
            }
          },
          {
            'default': {
              name: 'show_number',
              manipulations: [{
                target: 'number',
                properties: {
                  hidden: false,
                  persist: true
                }
              }]
            }
          },
          {
            "default": {
              "name": "showText2",
              "manipulations": [
                {
                  "target": "text2",
                  "properties": {
                    "hidden": false,
                    "persist": true
                  }
                }
              ]
            }
          },
          {
            "default": {
              "name": "showText3",
              "manipulations": [
                {
                  "target": "text3",
                  "properties": {
                    "hidden": false,
                    "persist": true
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ];
});
