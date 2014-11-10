define(function () {
  return [
    {
      "default": {
        "name": 'form1',
        "label": 'Form 1',
        "_elements": [
          {
            "default": {
              "name": 'id',
              "type": 'hidden'
            }
          },
          {
            "default": {
              "name": 'url',
              "label": 'URL',
              "type": 'url',
              "defaultValue": 'https://blinkm.co/ron',
              "page": 0
            }
          },
          {
            "default": {
              "name": "datenow",
              "type": "date",
              "label": "Datenow",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "picker",
              "dateFormat": "mm_dd_yyyy2",
              "dateAllowFrom": "now",
              "dateAllowTo": "now",
              "dateAllowToNowPlus": "10",
              "defaultValue": "now",
              page: 0
            }
          },
          {
            "default": {
              "name": 'email',
              "label": 'Email',
              "type": 'email',
              "defaultValue": 'ron@blinkmobile.com.au',
              "section": 'account'
              // deliberately skip page:0 here
            }
          },
          {
            "default": {
              "name": 'password',
              "label": 'Password',
              "type": 'password',
              "defaultValue": 'secret',
              "section": 'account',
              "page": 0
            }
          },
          {
            "default": {
              "name": "datefromnowplus",
              "type": "date",
              "label": "Datefromnowplus",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "picker",
              "dateFormat": "mm_dd_yyyy2",
              "dateAllowFrom": "now_plus",
              "dateAllowFromNowPlus": "-2",
              "dateAllowTo": "now_plus",
              "dateAllowToNowPlus": "1",
              "defaultValue": "now_plus",
              "defaultDateNowPlus": "1",
              page: 1
            }
          },
          {
            "default": {
              "name": 'streetAddress',
              "label": 'Street Address',
              "type": 'textarea',
              "defaultValue": 'Suite 2\r\n125 Donnison Street',
              "section": 'address',
              "page": 1
            }
          },
          {
            "default": {
              name: 'city',
              label: 'City',
              type: 'text',
              defaultValue: 'Gosford',
              section: 'address',
              page: 1
            }
          },
          {
            "default": {
              name: 'telephone',
              label: 'Telephone',
              type: 'telephone',
              defaultValue: '+61 439 901 787',
              page: 2
            }
          },
          {
            "default": {
              "name": "datefromdate",
              "type": "date",
              "label": "Datefromdate",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "picker",
              "dateFormat": "mm_dd_yyyy",
              "dateAllowFrom": "date",
              "dateAllowFromDate": "03/01/2014",
              "dateAllowTo": "date",
              "dateAllowToDate": "03/31/2014",
              "defaultValue": "date",
              "defaultDateDate": "03/03/2014",
              page: 2
            }
          },
          {
            "default": {
              name: 'number',
              label: 'Number',
              "type": 'number',
              min: 15,
              max: 400,
              step: 5,
              defaultValue: 35,
              page: 2
            }
          },
          {
            "default": {
              name: 'currency',
              label: 'Currency',
              "type": 'number',
              minDecimals: 2,
              maxDecimals: 2,
              defaultValue: '876.54',
              page: 2
            }
          }
        ],
        _sections: [
          {
            "default": {
              "name": 'account',
              "class": 'myClass'
            }
          },
          {
            "default": {
              name: 'address',
              "class": 'myClass'
            }
          }
        ]
      }
    }
  ];
});
