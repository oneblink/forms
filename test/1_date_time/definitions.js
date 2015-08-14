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
              name: 'datenonative',
              label: 'Date - Non Native',
              type: 'date'
            }
          },
          {
            'default': {
              name: 'timenonative',
              label: 'Time - Non Native',
              type: 'time'
            }
          },
          {
            'default': {
              name: 'datetimenonative',
              label: 'Date + Time - Non Native',
              type: 'datetime'
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
              "required": 1,
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
          },
          {
            "default": {
              "name": "dateTimeRonlyNone",
              "type": "datetime",
              "label": "Date Time Ronly None",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "shown",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm",
              "minuteStep": "1",
              "defaultValue": null,
              "page": 0
            },
            "list": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "search": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "add": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "edit": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "view": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "delete": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            }
          },
          {
            "default": {
              "name": "dateTimeRonlyNow",
              "type": "datetime",
              "label": "Date Time Ronly Now",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "shown",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm",
              "defaultTimestamp": "now",
              "minuteStep": "1",
              "defaultValue": "now",
              "page": 0
            },
            "list": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "search": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "add": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "edit": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "view": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "delete": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            }
          },
          {
            "default": {
              "name": "dateTimeRonlyNowP",
              "type": "datetime",
              "label": "Date Time Ronly NowP +5min",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "shown",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm",
              "defaultTimestamp": "now_plus",
              "nowPlusAmount": "5",
              "minuteStep": "1",
              "defaultValue": "now_plus",
              "page": 0
            },
            "list": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "search": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "add": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "edit": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "view": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "delete": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            }
          },
          {
            "default": {
              "name": "dateTimeRonlyNowPM",
              "type": "datetime",
              "label": "Date Time Ronly NowP -5min",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "shown",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm",
              "defaultTimestamp": "now_plus",
              "nowPlusAmount": "-5",
              "minuteStep": "1",
              "defaultValue": "now_plus",
              "page": 0
            },
            "list": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "search": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "add": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "edit": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "view": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "delete": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            }
          },
          {
            "default": {
              "name": "dateTimeHiddenNone",
              "type": "datetime",
              "label": "Date Time Hidden None",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "hidden",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm",
              "minuteStep": "1",
              "defaultValue": null,
              "page": 0
            },
            "list": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "search": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "add": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "edit": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "view": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "delete": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            }
          },
          {
            "default": {
              "name": "dateTimeHiddenNow",
              "type": "datetime",
              "label": "Date Time Hidden Now",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "hidden",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm",
              "defaultTimestamp": "now",
              "minuteStep": "1",
              "defaultValue": "now",
              "page": 0
            },
            "list": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "search": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "add": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "edit": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "view": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "delete": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            }
          },
          {
            "default": {
              "name": "dateTimeHiddenNowP",
              "type": "datetime",
              "label": "Date Time Hidden NowP +5min",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "hidden",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm",
              "defaultTimestamp": "now_plus",
              "nowPlusAmount": "5",
              "minuteStep": "1",
              "defaultValue": "now_plus",
              "page": 0
            },
            "list": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "search": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "add": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "edit": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "view": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "delete": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            }
          },
          {
            "default": {
              "name": "dateTimeHddenNowPM",
              "type": "datetime",
              "label": "Date Time Hidden NowP -5min",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "hidden",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm",
              "defaultTimestamp": "now_plus",
              "nowPlusAmount": "-5",
              "minuteStep": "1",
              "defaultValue": "now_plus",
              "page": 0
            },
            "list": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "search": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "add": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "edit": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "view": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "delete": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            }
          },
          {
            "default": {
              "name": "dateTimePickerNone",
              "type": "datetime",
              "label": "Date Time Picker None",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "picker",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm",
              "minuteStep": "1",
              "defaultValue": null,
              "page": 0
            },
            "list": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "search": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "add": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "edit": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "view": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "delete": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            }
          },
          {
            "default": {
              "name": "dateTimePickerNow",
              "type": "datetime",
              "label": "Date Time Picker Now",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "picker",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm",
              "defaultTimestamp": "now",
              "minuteStep": "1",
              "defaultValue": "now",
              "page": 0
            },
            "list": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "search": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "add": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "yyyy_mm_dd",
              "timeFormat": "hh_mm"
            },
            "edit": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "yyyy_mm_dd",
              "timeFormat": "hh_mm"
            },
            "view": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "delete": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            }
          },
          {
            "default": {
              "name": "dateTimePickerNowP",
              "type": "datetime",
              "label": "Date Time Picker NowP +5min",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "picker",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm",
              "defaultTimestamp": "now_plus",
              "nowPlusAmount": "5",
              "minuteStep": "1",
              "defaultValue": "now_plus",
              "page": 0
            },
            "list": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "search": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "add": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "edit": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "view": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "delete": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            }
          },
          {
            "default": {
              "name": "dateTimePckerNowPM",
              "type": "datetime",
              "label": "Date Time Picker NowP -5min",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "picker",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm",
              "defaultTimestamp": "now_plus",
              "nowPlusAmount": "-5",
              "minuteStep": "1",
              "defaultValue": "now_plus",
              "page": 0
            },
            "list": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "search": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "add": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "edit": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "view": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            },
            "delete": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm"
            }
          },
          {
            "default": {
              "name": "dateTimeNativePickerNow",
              "type": "datetime",
              "label": "Date Time Native Picker Now",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "picker",
              "dateFormat": "mm_dd_yyyy",
              "timeFormat": "hh_mm",
              "defaultTimestamp": "now",
              "minuteStep": "1",
              "defaultValue": "now",
              "page": 0,
              "nativeDatetimePicker": "1"
            }
          },
          {
            "default": {
              "name": "dateTimeNativePickerNowP",
              "type": "datetime",
              "label": "Date Time Native Picker NowP +1day",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "picker",
              "dateFormat": "mm_dd_yyyy",
              "timeFormat": "hh_mm",
              "defaultTimestamp": "now_plus",
              "nowPlusAmount": "1440",
              "minuteStep": "1",
              "defaultValue": "now_plus",
              "page": 0,
              "nativeDatetimePicker": "1"
            }
          },
          {
            "default": {
              "name": "dateTimeNativePckerNowPM",
              "type": "datetime",
              "label": "Date Time Native Picker NowP -2day",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "picker": "picker",
              "dateFormat": "mm_dd_yyyy",
              "timeFormat": "hh_mm",
              "defaultTimestamp": "now_plus",
              "nowPlusAmount": "-2880",
              "minuteStep": "1",
              "defaultValue": "now_plus",
              "page": 0,
              "nativeDatetimePicker": "1"
            }
          },
          {
            'default': {
              name: 'date column',
              label: 'date column',
              type: 'date',
              section: 'col1'
            }
          },
          {
            'default': {
              name: 'time column',
              label: 'time column',
              type: 'time',
              section: 'col2'
            }
          }
        ],
        _sections: [
          {
            'default': {
              name: 'grid',
              'class': 'ui-responsive ui-grid-a'
            }
          },
          {
            'default': {
              name: 'col1',
              'class': 'ui-block-a',
              section: 'grid'
            }
          },
          {
            'default': {
              name: 'col2',
              'class': 'ui-block-b',
              section: 'grid'
            }
          }
        ]
      }
    }
  ];
});
