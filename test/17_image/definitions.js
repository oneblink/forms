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
            accept: "image/*"
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
        }
      ]
      }
    }
  ];
});
