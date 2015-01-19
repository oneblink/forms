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
          },
          {
            'default': {
              name: 'selecte',
              label: 'Select E',
              type: 'select',
              'class': 'mode: expanded; layout: horizontal; other;',
              options: {
                a: 'alpha',
                b: 'beta',
                g: 'gamma'
              }
            }
          },
          {
            'default': {
              name: 'multic',
              label: 'Multi C',
              type: 'multi',
              mode: 'collapsed',
              other: true,
              options: {
                a: 'alpha',
                b: 'beta',
                g: 'gamma'
              }
            }
          },
          {
            'default': {
              name: 'multie',
              label: 'Multi E',
              type: 'multi',
              mode: 'expanded',
              other: true,
              options: {
                a: 'alpha',
                b: 'beta',
                g: 'gamma'
              }
            }
          },
          {
            'default': {
              name: 'multif',
              label: 'Multi F',
              type: 'multi',
              other: true,
              'class': 'mode: collapsed; native-menu: true;',
              options: {
                a: 'alpha',
                b: 'beta',
                g: 'gamma'
              }
            }
          },
          {
            'default': {
              name: 'selectf',
              label: 'Select F',
              type: 'select',
              mode: 'collapsed',
              other: true,
              'class': 'mode: collapsed; native-menu: true;',
              options: {
                a: 'alpha',
                b: 'beta',
                g: 'gamma'
              }
            }
          },
          {
            'default': {
              name: 'boolean',
              label: 'Boolean',
              type: 'boolean',
              options: {
                0: 'false',
                1: 'true'
              }
            }
          },
          {
            'default': {
              name: 'question',
              label: 'Question',
              type: 'boolean',
              options: {
                n: 'no',
                y: 'yes'
              }
            }
          }
        ]
      }
    }
  ];
});
