define(function () {
  return [
    {
      "default": {
        name: "TestForm",
        label: "TestForm",
        _elements: [
          {
            "default": {
              name: "Name",
              type: "text",
              label: "Name",
              "page": 0
            }
          },
          {
            "default": {
              name: "Photo",
              type: "file",
              label: "Photo",
              accept: "image/*",
              capture: true,
              "page": 0
            }
          },
          {
            "default": {
              name: "Photo1",
              type: "file",
              label: "Photo1",
              accept: "image/*",
              capture: true,
              "page": 0
            }
          },
          {
            "default": {
              name: "Photo2",
              type: "file",
              label: "Photo2",
              accept: "image/*",
              capture: true,
              "page": 1
            }
          },
          {
            'default': {
              name: 'location',
              label: 'Location',
              type: 'location',
              "page": 1
            }
          },
          {
            'default': {
              name: 'draw',
              label: 'Sign',
              type: 'draw',
              size: 'signature',
              "page": 1
            }
          },
          {
            "default": {
              name: "Rank",
              type: "number",
              label: "Rank",
              "page": 1
            }
          },
          {
            "default": {
              name: "Details",
              type: "text",
              label: "Details",
              "page": 1
            }
          }
        ]
      }
    }
  ];
});
