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
              subForm: 'Address',
              plusButtonLabel: "Add",
              minusButtonLabel: "Remove",
              preloadNum: "2",
              preload: "admin_defined"
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
          },
          {
            'default': {
              name: 'Phone',
              label: 'Phone',
              type: 'subForm',
              subForm: 'PhoneForm',
              plusButtonLabel: "Add Phone",
              minusButtonLabel: "Remove Phone",
              preload: "1"
            }
          }
        ]
      }
    },
    {
      'default': {
        name: 'PhoneForm',
        label: 'PhoneForm',
        _elements: [
          {
            'default': {
              name: 'id',
              type: 'hidden'
            }
          },
          {
            'default': {
              name: 'Phone',
              label: 'Phone',
              type: 'text'
            }
          }
        ]
      }
    }
  ];
});
