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
             required: true
           }
         }
        ]
      }
    }
  ];
});
