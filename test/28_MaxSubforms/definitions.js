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
              name: 'Name',
              label: 'Name',
              type: 'text'
            }
          },
          {
            'default': {
              name: 'Location',
              label: 'Address',
              type: 'subForm',
              subForm: 'Address',
              plusButtonLabel: "Add",
              minusButtonLabel: "Remove",
              preloadNum: "2",
              preload: "admin_defined",
              maxSubforms: 3,
              minSubforms: 2
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
              maxSubforms: 1
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
