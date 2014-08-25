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
              name: 'image_capture',
              label: 'Take Photo',
              type: 'file',
              accept: 'image/*',
              capture: true
            }
          },
          {
            'default': {
              name: 'image',
              label: 'Find Photo',
              type: 'file',
              accept: 'image/*'
            }
          },
          {
            'default': {
              name: 'draw',
              label: 'Sign',
              type: 'draw',
              size: 'signature'
            }
          }
        ]
      }
    }
  ];
});
