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
              name: 'url',
              label: 'URL',
              type: 'url',
              defaultValue: 'https://blinkm.co/ron'
            }
          },
          {
            'default': {
              name: 'email',
              label: 'Email',
              type: 'email',
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
              defaultValue: 'Suite 2\n125 Donnison Street',
              section: 'address'
            }
          },
          {
            'default': {
              name: 'city',
              label: 'City',
              type: 'text',
              defaultValue: 'Gosford',
              section: 'address'
            }
          },
          {
            'default': {
              name: 'telephone',
              label: 'Telephone',
              type: 'telephone',
              defaultValue: '+61 439 901 787'
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
              defaultValue: 35
            }
          },
          {
            'default': {
              name: 'currency',
              label: 'Currency',
              type: 'number',
              minDecimals: 2,
              maxDecimals: 2,
              defaultValue: '876.54'
            }
          },
          {
            'default': {
              name: "_heading_1",
              type: "heading",
              headingText: "Heading using old definition",
              headingPosition: "left",
              headingFontFace: "arial",
              page: 0
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
            "default": {
              name: "_message_1",
              type: "message",
              messageText: "Message using <em><strong>old definition<strong> structure</em>",
              page: 0
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
              name: 'calculation',
              label: 'Calculation',
              type: 'message',
              html: 'This is could be HTML generated by a <em>Behaviour</em>.',
              persist: true
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
    }
  ];
});