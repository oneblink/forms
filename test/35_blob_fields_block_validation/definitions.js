define(function () {
  return [
    {
      'default': {
        name: 'form1',
        label: 'Form1',
        _elements: [
          {
            'default': {
              name: 'id',
              type: 'hidden'
            }
          },
          {
            'default': {
              name: "Name",
              type: "text",
              label: "Name"
            }
          },
          {
            'default' : {
              name: "Status",
              type: "text",
              label: "Status",
              required: "1"
            }
          },
          {
            'default': {
              name: "Signature",
              type: "draw",
              label: "Signature",
              required: "1",
              size: "signature"
           }
         },
         {
           'default': {
             name: 'Location',
             type: 'location',
             label: 'Location',
             required: true
           }
         },
         {
           'default': {
             name: 'Image',
             type: 'file',
             label: 'Image',
             accept: "image/*",
             capture: true,
             required: '1'
           }
         },
         {
           default: {
             name: 'date',
             label: 'date',
             type: 'date',
             native: false,
             required: '1'
           }
         },
         {
           default: {
             name: 'datetime',
             label: 'datetime',
             type: 'datetime',
             native: false,
             required: '1'
           }
         },
         {
           default: {
             name: 'time',
             label: 'time',
             type: 'time',
             native: false,
             required: '1'
           }
         },
         {
           default: {
             name: 'date_n',
             label: 'date_n',
             type: 'date',
             nativeDatePicker: '1',
             required: '1'
           }
         },
         {
           default: {
             name: 'datetime_n',
             label: 'datetime_n',
             type: 'datetime',
             nativeTimePicker: '1',
             required: '1'
           }
         },
         {
           default: {
             name: 'time_n',
             label: 'time_n',
             type: 'time',
             nativeDatetimePicker: '1',
             required: '1'
           }
         }
        ]
      }
    }
  ];
});
