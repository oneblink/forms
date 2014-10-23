define(function () {
  return [
    {
      "default": {
        "name": "pageErrors",
        "label": "pageErrors",
        "_elements": [
          {
            "default": {
              "name": "id",
              "type": "hidden",
              "page": 0
            }
          },
          {
            "default": {
              "name": "Num",
              "type": "number",
              "label": "Num",
              "page": 0
            }
          },
          {
            "default": {
              "name": "Name",
              "type": "text",
              "label": "Name",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "required": "1",
              "maxWidthPrefix": "characters",
              "page": 0
            },
            "list": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "maxWidthPrefix": "characters"
            },
            "add": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "maxWidthPrefix": "characters"
            },
            "edit": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "maxWidthPrefix": "characters"
            },
            "view": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "maxWidthPrefix": "characters"
            },
            "delete": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "maxWidthPrefix": "characters"
            }
          },
          {
            "default": {
              "name": "_heading_1",
              "type": "heading",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "headingText": "page2",
              "headingPageBreak": "1",
              "headingPosition": "left",
              "headingFontFace": "arial",
              "page": 1
            },
            "list": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "add": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "edit": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "view": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            },
            "delete": {
              "labelPlacement": "default",
              "labelStyle": "Plain"
            }
          },
          {
            "default": {
              "name": "num2",
              "type": "number",
              "label": "Num2",
              "page": 1
            }
          },
          {
            "default": {
              "name": "subform01",
              "type": "subForm",
              "subForm": "subform01",
              "page": 1
            }
          },
          {
            "default": {
              "name": "num3",
              "type": "number",
              "label": "Num3",
              "page": 1
            }
          },
          {
            "default": {
              "name": "_heading_2",
              "type": "heading",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "headingText": "page3",
              "headingPageBreak": "1",
              "headingPosition": "left",
              "headingFontFace": "arial",
              "page": 2

            }
          },
          {
            "default": {
              "name": "num4",
              "type": "number",
              "label": "Num4",
              "page": 2
            }
          },
          {
            "default": {
              "name": "num5",
              "type": "number",
              "label": "Num5",
              "page": 2
            }
          }
        ],
        _sections: [
          {
            'default': {
              name: 'grid',
              'class': 'ui-responsive ui-grid-a'
            }
          }
        ]
      }
    },
    {
      "default": {
        "label": "subform01",
        "name": "subform01",
        "_elements": [
          {
            "default": {
              "name": "Rank",
              "type": "number",
              "label": "Rank",
              "page": 0
            }
          },
          {
            "default": {
              "name": "status",
              "type": "text",
              "label": "Status",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "required": "1",
              "maxWidthPrefix": "characters",
              "page": 0
            },
            "list": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "maxWidthPrefix": "characters"
            },
            "add": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "maxWidthPrefix": "characters"
            },
            "edit": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "maxWidthPrefix": "characters"
            },
            "view": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "maxWidthPrefix": "characters"
            },
            "delete": {
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "maxWidthPrefix": "characters"
            }
          }
        ]
      }
    }
  ];
});
