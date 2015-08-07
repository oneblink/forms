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
              label: "Name"
            }
          },
          {
            "default": {
              name: "Photo",
              type: "file",
              label: "Photo",
              accept: "image/*",
              capture: true
            }
          },
          {
            "default": {
              name: "Photo1",
              type: "file",
              label: "Photo1",
              accept: "image/*",
              capture: true
            }
          },
          {
            "default": {
              name: "Photo2",
              type: "file",
              label: "Photo2",
              accept: "image/*",
              capture: true
            }
          },
          {
            'default': {
              name: 'location',
              label: 'Location',
              type: 'location'
            }
          },
          {
            'default': {
              name: 'draw',
              label: 'Sign',
              type: 'draw',
              size: 'signature'
            }
          },
          {
            "default": {
              name: "Rank",
              type: "number",
              label: "Rank"
            }
          },
          {
            "default": {
              name: "Details",
              type: "text",
              label: "Details"
            }
          },
          {
            "default": {
              "name": "camera",
              "type": "file",
              "label": "Camera",
              "capture": true,
              "accept": "image/*",
              "page": 0
            }
          },
          {
            "default": {
              "name": "gallary",
              "type": "file",
              "label": "Gallary",
              "accept": "image/*",
              "page": 0
            }
          },
          {
            "default": {
              "name": "fileupload",
              "type": "file",
              "label": "fileupload",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "page": 0
            }
          }
        ]
      }
    }
  ];
});
