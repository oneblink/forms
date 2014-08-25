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
              name: 'date',
              label: 'Date',
              type: 'date',
              nativeDatePicker: '1'
            }
          },
          {
            'default': {
              name: 'time',
              label: 'Time',
              type: 'time',
              nativeTimePicker: '1'
            }
          },
          {
            'default': {
              name: 'datetime',
              label: 'Date + Time',
              type: 'datetime',
              nativeDatetimePicker: '1'
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
              "defaultValue": "now"
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
              "defaultDateNowPlus": "1"
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
              "defaultDateDate": "03/03/2014"
            }
          },
          {
            "default": {
              "name": "timenow",
              "type": "time",
              "label": "Timenow",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "picker",
              "timeFormat": "hh_mm",
              "defaultTime": "now",
              "minuteStep": "1",
              "defaultValue": "now"
            }
          },
          {
            "default": {
              "name": "timenowplus",
              "type": "time",
              "label": "Timenowplus",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "picker",
              "timeFormat": "hh_mm_ss",
              "defaultTime": "now_plus",
              "nowPlusAmount": "10",
              "minuteStep": "20",
              "defaultValue": "now_plus"
            }
          },
          {
            "default": {
              "name": "timenowtime",
              "type": "time",
              "label": "Timenowtime",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "picker",
              "timeFormat": "h_mm",
              "minuteStep": "1",
              "defaultValue": null
            }
          },
          {
            "default": {
              "name": "datetimenow",
              "type": "datetime",
              "label": "Datetimenow",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "picker",
              "dateFormat": "yyyy_mm_dd",
              "timeFormat": "hh_mm_ss",
              "minuteStep": "1",
              "defaultValue": "now"
            }
          }
        ]
      }
    }
  ];
});
