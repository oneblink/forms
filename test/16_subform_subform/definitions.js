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
              type: 'text',
              label: 'Name'
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
              type: 'text',
              label: 'Detail'
            }
          },
          {
            'default': {
              name: 'Exp',
              label: 'Exp',
              type: 'subForm',
              subForm: 'Exp'
            }
          }
        ]
      }
    },
    {
      'default': {
        name: 'Exp',
        label: 'Exp',
        _elements: [
          {
            'default': {
              name: 'id',
              type: 'hidden'
            }
          },
          {
            'default': {
              name: 'Rank',
              type: 'text',
              label: 'Rank'
            }
          }
        ]
      }
    }
  ];
});
