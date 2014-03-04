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
              name: 'star_rating',
              label: 'Star Rating',
              type: 'number',
              min: 0,
              max: 5,
              step: 1,
              defaultValue: 0,
              mode: "graphical",
              picker: {
                active: {
                  ascii: "*"
                },
                inactive: {
                  ascii: "*"
                }
              }
            }
          },
          {
            default: {
              name: 'star_rating2',
              label: 'Star Rating2',
              type: 'number',
              min: 0,
              max: 10,
              step: 1,
              defaultValue: 0,
              mode: "graphical",
              picker: {
                active: {
                  image: "star.png"
                },
                inactive: {
                  image: "star_diabled.png"
                }
              }
            }
          },
          {
            default: {
              name: 'star_rating3',
              label: 'Star Rating3',
              type: 'number',
              min: 0,
              max: 5,
              step: 1,
              defaultValue: 0,
              mode: "graphical",
              picker: {
                active: {
                  utf8: "\u00a3"
                },
                inactive: {
                  utf8: "\u00b1"
                }
              }
            }
          }
        ]
      }
    }
  ];
});
