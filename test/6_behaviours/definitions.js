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
          }
        ],
        _behaviours: [
          {
            'default': {
              name: 'auto_calculations',
              formElements: "*",
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
              formElements: "*",
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
              formElements: "*",
              check: 'text_not_empty_and_email_not_empty',
              actions: [{
                action: 'show_number',
                autoReverse: true
              }],
              actionsIfFalse: []
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
          }
        ]
      }
    }
  ];
});
