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
              label: 'Location 1',
              type: 'location'
            }
          },
          {
            'default': {
              name: 'location2',
              label: 'Location 2',
              type: 'location'
            }
          }
        ]
      }
    }
  ];
});
