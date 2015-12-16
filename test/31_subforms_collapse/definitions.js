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
              name: 'datetime',
              label: 'Date + Time',
              type: 'datetime',
              defaultValue: 'now'
            }
          },
          {
            'default': {
              name: 'name',
              label: 'Name',
              type: 'text'
            }
          },
          {
            'default': {
              name: 'age',
              label: 'Age',
              type: 'number',
              section: 'col1'
            }
          },
          {
            'default': {
              name: 'weight',
              label: 'Weight',
              type: 'number',
              section: 'col2'
            }
          },
          {
            'default': {
              name: 'comments',
              label: 'Comments',
              type: 'subForm',
              subForm: 'form2',
              rowClass: 'collapse:forms;label:Custom;',
              plusButtonLabel: "PLUS",
              minusButtonLabel: "MINUS",
              "_elements": {
                "datetimenow": {
                  "hide": "",
                  "override": "",
                  "type": "datetime",
                  "id": "datetimenow"
                },
                'comment': {
                  "hide": "",
                  "override": "",
                  "type": "text",
                  "id": "comment"
                },
                'hidden-field': {
                  "hide": "1",
                  "override": "",
                  "type": "text",
                  "id": "hidden-field"
                }

              },
            }
          },
          {
            'default': {
              name: 'notes',
              label: 'Notes',
              type: 'subForm',
              subForm: 'form2',
              collapse: 'forms'
            }
          },
          {
            'default': {
              name: 'reviews',
              type: 'subForm',
              subForm: 'form2'
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
            'default': {
              name: 'comment',
              label: 'Comment',
              type: 'text'
            }
          },
          {
            'default': {
              name: 'hidden-field',
              label: 'Hidden Comment',
              type: 'text'
            }
          },
          {
            'default': {
              name: 'subsub',
              label: 'Sub Sub',
              type: 'subForm',
              subForm: 'form3',
              collapse: 'forms'
            }
          }
        ]
      },
      list: {
        _elements: ['datetimenow', 'comment', 'hidden-field']
      }
    },
    {
      'default': {
        name: 'form3',
        label: 'Sub Sub',
        _elements: [
          {
            'default': {
              name: 'id',
              type: 'hidden'
            }
          },
          {
            "default": {
              "name": "subsubdatetime",
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
            'default': {
              name: 'subsubcomment',
              label: 'Sub Sub Comment',
              type: 'text'
            }
          }
        ]
      },
      list: {
        _elements: ['subsubdatetime', 'comment']
      }
    }
  ];
});
