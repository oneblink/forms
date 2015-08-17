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
              characterLimit: "10",
              label: "Text Box, Required, Char Limit 10",
              labelPlacement: "default",
              labelStyle: "Plain",
              maxWidthPrefix: "characters",
              name: "textBox1",
              page: 0,
              required: true,
              type: "text"
            }
          },
          {
            'default': {
              label: "Number, Required, Max 100, Min 0, Min Decimals 2, Max Decimals 3",
              labelPlacement: "default",
              labelStyle: "Plain",
              max: "100",
              min: "0",
              maxDecimalPlaces: "3",
              minDecimalPlaces: "2",
              name: "number1",
              page: 0,
              required: "1",
              type: "number"
            }
          },
          {
            'default': {
              characterLimit: "10",
              label: "Password, Required, Char Limit 10",
              labelPlacement: "default",
              labelStyle: "Plain",
              maxWidthPrefix: "characters",
              name: "password1",
              page: 0,
              required: "1",
              type: "password"
            }
          },
          {
            'default': {
              name: 'text',
              label: 'TEXT',
              type: 'text',
              required: true
            }
          },
          {
            'default': {
              name: 'url',
              label: 'URL required',
              type: 'url',
              defaultValue: 'https://blinkm.co/ron',
              required: "1"
            }
          },
          {
            'default': {
              name: 'email',
              label: 'Email Required',
              type: 'email',
              required: "1",
              defaultValue: 'ron@blinkmobile.com.au',
              section: 'account'
            }
          },
          {
            'default': {
              name: 'password',
              label: 'Password',
              type: 'password',
              defaultValue: 'secret',
              section: 'account'
            }
          },
          {
            'default': {
              name: 'streetAddress',
              label: 'Street Address',
              type: 'textarea',
              defaultValue: 'Suite 2\r\n125 Donnison Street',
              section: 'address'
            }
          },
          {
            'default': {
              name: 'city',
              label: 'City',
              type: 'text',
              defaultValue: 'Gosford',
              section: 'address',
              toolTip: 'Enter City Name',
              required: true,
              pattern: '^[a-zA-Z]',
              maxLength: 20
            }
          },
          {
            'default': {
              name: 'telephone',
              label: 'Telephone Required',
              type: 'telephone',
              defaultValue: '+61 439 901 787',
              required: "1"
            }
          },
          {
            'default': {
              name: 'number',
              label: 'Number',
              type: 'number',
              min: 15,
              max: 400,
              step: 5,
              defaultValue: 350,
              maxDecimals: 2,
              pattern: '^[0-9][0-9]$',
              prefix: '$'

            }
          },
          {
            'default': {
              name: 'currency',
              label: 'Currency',
              type: 'number',
              minDecimals: 2,
              maxDecimals: 4,
              defaultValue: '876.541'
            }
          },
          {
            'default': {
              name: 'heading',
              type: 'heading',
              level: 1,
              text: 'Heading!'
            }
          },
          {
            'default': {
              name: 'message',
              type: 'message',
              html: 'This is <strong>static</strong> text.'
            }
          },
          {
            'default': {
              name: 'select',
              label: 'Select required',
              type: 'select',
              rowClass: 'mode: collapsed;',
              canSpecifyOther: "1",
              options: {
                a: 'alpha',
                b: 'beta',
                g: 'gamma'
              },
              required: "1"
            }
          },
          {
            'default': {
              name: 'multi',
              label: 'Multi required',
              type: 'multi',
              mode: 'collapsed',
              other: true,
              options: {
                a: 'alpha',
                b: 'beta',
                g: 'gamma'
              },
              required: "1"
            }
          },
          {
            'default': {
              name: 'comments',
              label: 'Comments',
              type: 'subForm',
              subForm: 'form2',
              required: "1",
              maxSubforms: 3,
              minSubforms: 1
            }
          },
          {
            'default': {
              name: 'names',
              label: 'names',
              type: 'subForm',
              subForm: 'form2',
              required: "1",
              minSubforms: 2
            }
          },
          {
            'default': {
              name: 'multicollapsedrequired',
              label: 'Multi collapsed Required',
              type: 'multi',
              mode: 'collapsed',
              required: "1",
              other: false,
              options: {
                a: 'alpha',
                b: 'beta',
                g: 'gamma'
              }
            }
          },
          {
            'default': {
              name: 'multiexpandedrequired',
              label: 'Multi Expanded Required',
              type: 'multi',
              mode: 'expanded',
              required: "1",
              other: false,
              options: {
                a: 'alpha',
                b: 'beta',
                g: 'gamma'
              }
            }
          },
          {
            'default': {
              name: 'selectcollapsedrequired',
              label: 'select collapsed Required',
              type: 'select',
              mode: 'collapsed',
              required: "1",
              other: false,
              options: {
                a: 'alpha',
                b: 'beta',
                g: 'gamma'
              }
            }
          },
          {
            'default': {
              name: 'selectexpandedrequired',
              label: 'Select Expanded Required',
              type: 'select',
              mode: 'expanded',
              required: "1",
              other: false,
              options: {
                a: 'alpha',
                b: 'beta',
                g: 'gamma'
              }
            }
          }
        ],
        _sections: [
          {
            'default': {
              name: 'account',
              'class': 'myClass'
            }
          },
          {
            'default': {
              name: 'address',
              'class': 'myClass'
            }
          }
        ]
      }
    },
    {
      'default': {
        name: 'form2',
        label: 'Form 2',
        _elements: [
          {
            'default': {
              name: 'id',
              type: 'hidden'
            }
          },
          {
            'default': {
              name: 'comment',
              label: 'Comment',
              type: 'textarea',
              required: '1'
            }
          }
        ]
      }
    }
  ];
});
