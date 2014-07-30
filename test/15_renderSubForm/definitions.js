define(function () {
  return [
    {
      'default': {
        name: 'Test',
        label: 'Test',
        _elements: [
          {
            'default': {
              name: 'id',
              type: 'hidden'
            }
          },
          {
            'default': {
              name: 'Name',
              label: 'Name',
              type: 'text'
            }
          },
          {
            'default': {
              name: 'Address',
              label: 'Address',
              type: 'subForm',
              subForm: 'Address'
            }
          }
        ],
        _sections: [
          {
            'default': {
              name: 'grid',
              'class': 'ui-responsive ui-grid-a'
            }
          }
        ]
      }
    },
    {
      'default': {
        name: 'Address',
        label: 'Address',
        _elements: [
          {
            'default': {
              name: 'id',
              type: 'hidden'
            }
          },
          {
            'default': {
              name: 'Detail',
              label: 'Detail',
              type: 'text'
            }
          }
        ]
      }
    }
  ];
});
