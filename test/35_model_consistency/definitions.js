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
              name: 'selectc',
              label: 'Select C',
              type: 'select',
              mode: 'collapsed',
              other: true,
              options: {
                a: 'alpha',
                b: 'beta',
                g: 'gamma'
              }
            }
          }
        ]
      }
    }
  ];
});
