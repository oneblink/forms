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
              name: 'date',
              label: 'Date',
              type: 'date'
            }
          },
          {
            default: {
              name: 'time',
              label: 'Time',
              type: 'time'
            }
          },
          {
            default: {
              name: 'datetime',
              label: 'Date + Time',
              type: 'datetime'
            }
          }
        ]
      }
    }
  ];
});
