define(function () {
  return [
    {
      "default": {
        name: "TestForm",
        label: "TestForm",
        _elements: [
          {
            'default': {
              name: 'id',
              type: 'hidden'
            }
          },
          {
            'default': {
              name: 'location1',
              label: 'Location simple',
              type: 'location'
            }
          },
          {
            'default': {
              name: 'location2',
              label: 'Location multiple json encoded (3 times)',
              type: 'location'
            }
          },
          {
            'default': {
              name: 'location3',
              label: 'Location multiple json encoded (6 times)',
              type: 'location'
            }
          },
          {
            'default': {
              name: 'location4',
              label: 'Location empty',
              type: 'location'
            }
          }
        ]
      }
    }
  ];
});
