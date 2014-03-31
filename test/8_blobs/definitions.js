define(function () {
  return [
    {
      default: {
        name: 'form1',
        label: 'Form 1',
        _elements: [
          {
            default: {
              name: 'id',
              type: 'hidden'
            }
          },
          {
            default: {
              name: 'file',
              label: 'File',
              type: 'file'
            }
          },
          {
            default: {
              name: 'image_capture',
              label: 'Take Photo',
              type: 'file',
              accept: 'image/*',
              capture: true
            }
          },
          {
            default: {
              name: 'image',
              label: 'Find Photo',
              type: 'file',
              accept: 'image/*'
            }
          },
          {
            default: {
              name: 'audio_capture',
              label: 'Record Sound',
              type: 'file',
              accept: 'audio/*',
              capture: true
            }
          },
          {
            default: {
              name: 'audio',
              label: 'Find Sound',
              type: 'file',
              accept: 'audio/*'
            }
          },
          {
            default: {
              name: 'video_capture',
              label: 'Record Video',
              type: 'file',
              accept: 'video/*',
              capture: true
            }
          },
          {
            default: {
              name: 'video',
              label: 'Find Video',
              type: 'file',
              accept: 'video/*'
            }
          },
          {
            default: {
              name: 'location',
              label: 'Location',
              type: 'location'
            }
          },
          {
            default: {
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
