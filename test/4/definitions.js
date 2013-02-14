define(function() {
  return [
    {
      default: {
        name: 'form1',
        label: 'Form 1',
        _elements: [
          {
            default: {
              name: 'id',
              type: 'hidden'
            }
          },
          {
            default: {
              name: 'datetime',
              label: 'Date + Time',
              type: 'datetime',
              defaultValue: 'now'
            }
          },
          {
            default: {
              name: 'name',
              label: 'Name',
              type: 'text'
            }
          },
          {
            default: {
              name: 'comments',
              label: 'Comments',
              type: 'subForm',
              subForm: 'form2'
            }
          }
        ]
      }
    },
    {
      default: {
        name: 'form2',
        label: 'Form 2',
        _elements: [
          {
            default: {
              name: 'id',
              type: 'hidden'
            }
          },
          {
            default: {
              name: 'comment',
              label: 'Comment',
              type: 'textarea'
            }
          }
        ]
      }
    }
  ];
});
