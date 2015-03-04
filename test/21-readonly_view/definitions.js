define(function () {
  return [
    {
      "default": {
        "name": "TestForm",
        "label": "TestForm",
        _elements: [
          {
            "default": {
              "name": "Name",
              "type": "text",
              "label": "Name",
              "page": 0
            }
          },
          {
            "default": {
              name: "Photo",
              readonly: true,
              type: "file",
              label: "Photo",
              accept: "image/*",
              capture: true
            }
          },
          {
            'default': {
              name: 'location',
              readonly: true,
              label: 'Location',
              type: 'location'
            }
          },
          {
            'default': {
              name: 'draw',
              label: 'Sign',
              readonly: true,
              type: 'draw',
              size: 'signature'
            }
          },
          {
            "default": {
              name: "Rank",
              readonly: true,
              type: "number",
              label: "Rank"
            }
          },
          {
            'default': {
              name: 'date',
              label: 'Date',
              type: 'date',
              readonly: true,
              nativeDatePicker: '1'
            }
          },
          {
            'default': {
              name: 'selecte',
              label: 'Select E',
              readonly: true,
              type: 'select',
              'class': 'mode: expanded; layout: horizontal; other;',
              options: {
                a: 'alpha',
                b: 'beta',
                g: 'gamma'
              }
            }
          },
          {
            'default': {
              name: 'multie',
              label: 'Multi E',
              type: 'multi',
              readonly: true,
              mode: 'expanded',
              other: true,
              options: {
                a: 'alpha',
                b: 'beta',
                g: 'gamma',
                c: 'ohm',
                t: 'titanium',
                s: 'silicon',
                p: 'potassium'
              }
            }
          },
          {
            'default': {
              name: 'telephone',
              label: 'Telephone',
              type: 'telephone',
              defaultValue: '+61 439 901 787',
              readonly: true
            }
          },
          {
            'default': {
              name: 'url',
              label: 'URL',
              type: 'url',
              defaultValue: 'https://blinkm.co/testingm',
              readonly: true
            }
          },
          {
            'default': {
              name: 'email',
              label: 'Email',
              type: 'email',
              defaultValue: 'geeta@blinkmobile.com.au',
              readonly: true
            }
          },
          {
            'default': {
              name: 'password',
              label: 'Password',
              type: 'password',
              defaultValue: 'nice try!!!',
              readonly: true
            }
          },
          {
            'default': {
              name: 'streetAddress',
              label: 'Street Address',
              type: 'textarea',
              defaultValue: 'Suite 2\r\n125 Donnison Street',
              readonly: true
            }
          },
          {
            "default": {
              "name": "Details",
              "readonly": true,
              "type": "text",
              "label": "Details"
            }
          }
        ]
      }
    }
  ];
});
