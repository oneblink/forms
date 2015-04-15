define(function () {
  return [
    {
      'default': {
        name: 'form1',
        label: 'Form 1',
        header: 'Heading........',
        footer: 'Footer........',
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
              name: 'number',
              label: 'Number',
              type: 'number',
              min: "15",
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
