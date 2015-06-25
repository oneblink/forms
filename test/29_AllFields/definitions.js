define(function () {
  return [
    {
      "default": {
        "uniqueNameId": "6im",
        "name": "test_form",
        "formDescription": "Form for integration testing",
        "defaultCategory": "25960",
        "maxStep": 6,
        "labelPlacement": "auto",
        "header": "<h1>Form Header</h1>",
        "footer": "<h1>Form Footer</h1>",
        "_elements": [
          {
            "default": {
              "name": "id",
              "type": "text",
              "page": 0
            }
          },
          {
            "default": {
              "name": "_heading_1",
              "type": "heading",
              "text": "heading",
              "headingSmallText": "Heading",
              "position": "left",
              "fontFace": "arial",
              "page": 0
            }
          },
          {
            "default": {
              "name": "text_box",
              "type": "text",
              "label": "Text Box",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "This is a textbox, character limit 5",
              "maxWidthPrefix": "characters",
              "characterLimit": "5",
              "page": 0
            }
          },
          {
            "default": {
              "name": "text_area",
              "type": "textarea",
              "label": "Text Area",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "text area",
              "wrap": "hard",
              "page": 0
            }
          },
          {
            "default": {
              "name": "password",
              "type": "password",
              "label": "Password",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "password",
              "maxWidthPrefix": "characters",
              "page": 0
            }
          },
          {
            "default": {
              "name": "email",
              "type": "email",
              "label": "Email",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "email",
              "page": 0
            }
          },
          {
            "default": {
              "name": "url",
              "type": "url",
              "label": "URL",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "url",
              "page": 0
            }
          },
          {
            "default": {
              "name": "phone_number",
              "type": "telephone",
              "label": "Phone Number",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "phonenumber",
              "page": 0
            }
          },
          {
            "default": {
              "name": "number",
              "type": "number",
              "label": "Number",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "number",
              "page": 0,
              "prefix": '$',
              "suffix": '$'
            }
          },
          {
            "default": {
              "name": "currency",
              "type": "number",
              "label": "Currency",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "currency",
              "page": 0,
              "prefix": '$'
            }
          },
          {
            "default": {
              "name": "calculation",
              "type": "message",
              "label": "Calculation",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "calculation (1+1)",
              "showTextbox": "show",
              "calculationType": "auto",
              "buttonText": "Calculate",
              "persist": true,
              "page": 0
            }
          },
          {
            "default": {
              "name": "radio_buttons",
              "type": "select",
              "label": "Radio Buttons",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "Radio Buttons, (one, two, three)",
              "options": {
                "One": "One",
                "Two": "Two",
                "Three": "Three"
              },
              "mode": "expanded",
              "page": 0
            }
          },
          {
            "default": {
              "name": "select_box",
              "type": "select",
              "label": "Select Box",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "select box (One, Two, Three)",
              "options": {
                "One": "One",
                "Two": "Two",
                "Three": "Three"
              },
              "dataSource": "static",
              "mode": "collapsed",
              "page": 0
            }
          },
          {
            "default": {
              "name": "star_rating",
              "type": "number",
              "label": "Star Rating",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "Star Rating",
              "mode": "graphical",
              "graphic": {
                "active": {
                  "ascii": "*"
                },
                "inactive": {
                  "ascii": "*"
                }
              },
              "min": "0",
              "max": "5",
              "page": 0
            }
          },
          {
            "default": {
              "name": "multi_select",
              "type": "multi",
              "label": "Multi Select",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "MultiSelect (One, Two, Three)",
              "options": {
                "One": "One",
                "Two": "Two",
                "Three": "Three"
              },
              "mode": "collapsed",
              "page": 0
            }
          },
          {
            "default": {
              "name": "checkboxes",
              "type": "multi",
              "label": "Checkboxes",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "Checkboxes (One, Two, Three)",
              "options": {
                "One": "One",
                "Two": "Two",
                "Three": "Three"
              },
              "mode": "expanded",
              "page": 0
            }
          },
          {
            "default": {
              "name": "checkbox",
              "type": "boolean",
              "label": "Checkbox",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "CheckBox",
              "options": [
                "n",
                "y"
              ],
              "defaultValue": 0,
              "page": 0
            }
          },
          {
            "default": {
              "name": "date",
              "type": "date",
              "label": "Date",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "date (none)",
              "dateFormat": "dd_mm_yyyy",
              "page": 0
            },
            "add": {
              "picker": "picker"
            },
            "edit": {
              "picker": "picker"
            },
            "view": {
              "picker": "picker"
            },
            "delete": {
              "picker": "picker"
            }
          },
          {
            "default": {
              "name": "time",
              "type": "time",
              "label": "Time",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "time (none)",
              "timeFormat": "hh_mm",
              "minuteStep": "1",
              "page": 0
            },
            "add": {
              "picker": "picker"
            },
            "edit": {
              "picker": "picker"
            },
            "view": {
              "picker": "picker"
            },
            "delete": {
              "picker": "picker"
            }
          },
          {
            "default": {
              "name": "date_time",
              "type": "datetime",
              "label": "Date + Time",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "date + time (none)",
              "dateFormat": "dd_mm_yyyy",
              "timeFormat": "hh_mm",
              "minuteStep": "1",
              "page": 0
            }
          },
          {
            "default": {
              "name": "camera",
              "type": "file",
              "label": "Camera",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "camera",
              "capture": true,
              "accept": "image/*",
              "page": 0
            }
          },
          {
            "default": {
              "name": "image_library",
              "type": "file",
              "label": "Image Library",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "image library",
              "accept": "image/*",
              "page": 0
            }
          },
          {
            "default": {
              "name": "file_upload",
              "type": "file",
              "label": "File Upload",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "fileupload",
              "page": 0
            }
          },
          {
            "default": {
              "name": "location",
              "type": "location",
              "label": "Location",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "location",
              "page": 0
            }
          },
          {
            "default": {
              "name": "sketch_signature",
              "type": "draw",
              "label": "Sketch / Signature",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "sketch/signature",
              "size": "signature",
              "page": 0
            }
          },
          {
            "default": {
              "name": "_heading_3",
              "type": "heading",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "heading",
              "text": "Weird Fields",
              "headingType": "2",
              "position": "left",
              "fontFace": "arial",
              "page": 0
            }
          },
          {
            "default": {
              "name": "value",
              "type": "text",
              "label": "Value",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "value",
              "page": 0
            }
          },
          {
            "default": {
              "name": "logged_in_user_id",
              "type": "text",
              "label": "Logged in User ID",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "logged_in_user_id",
              "page": 0
            }
          },
          {
            "default": {
              "name": "user_attribute",
              "type": "text",
              "label": "User Attribute",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "user attribute",
              "page": 0
            }
          },
          {
            "default": {
              "name": "get_value",
              "type": "text",
              "label": "GET Value",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "get value",
              "page": 0
            }
          },
          {
            "default": {
              "name": "_heading_2",
              "type": "heading",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "heading 2",
              "text": "page",
              "headingSmallText": "Page Break",
              "headingPageBreak": "1",
              "position": "left",
              "fontFace": "arial",
              "page": 1
            }
          },
          {
            "default": {
              "name": "conditional_radio",
              "type": "select",
              "label": "Conditional Radio",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "conditional radio, on, off",
              "options": {
                "On": "On",
                "Off": "Off"
              },
              "mode": "expanded",
              "page": 1
            }
          },
          {
            "default": {
              "name": "conditional_calc",
              "type": "message",
              "label": "Conditional Calc",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "conditional calculation",
              "showTextbox": "show",
              "calculationType": "auto",
              "buttonText": "Calculate",
              "persist": true,
              "page": 1
            }
          },
          {
            "default": {
              "name": "subform",
              "type": "subForm",
              "subForm": "subform",
              "_elements": {
                "subform|text": {
                  "hide": "",
                  "override": "",
                  "type": "textbox",
                  "id": "subform_text"
                }
              },
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "subform",
              "subformControlPos": "below",
              "subformPerms": "allow_add",
              "preload": "no",
              "page": 1
            }
          },
          {
            "default": {
              "name": "validation_req",
              "type": "text",
              "label": "Validation",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "defaultValue": "something",
              "required": "1",
              "hint": "validation textbox",
              "maxWidthPrefix": "characters",
              "page": 1
            }
          },
          {
            "default": {
              "name": "select_box2",
              "type": "select",
              "label": "Select Box",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "hint": "select box (One, Two, Three)",
              "options": {
                "One": "One",
                "Two": "Two",
                "Three": "Three"
              },
              "dataSource": "static",
              "mode": "collapsed",
              "page": 1
            }
          }
        ],
        "_checks": [
          {
            "default": {
              "name": "conditionalRadioIsOn",
              "exp": {
                "operator": "==",
                "operands": [
                  {
                    "operator": "formElement.value",
                    "operands": [
                      "conditional_radio"
                    ]
                  },
                  "On"
                ]
              }
            }
          },
          {
            "default": {
              "name": "conditionalRadioIsOff",
              "exp": {
                "operator": "==",
                "operands": [
                  {
                    "operator": "formElement.value",
                    "operands": [
                      "conditional_radio"
                    ]
                  },
                  "Off"
                ]
              }
            }
          }
        ],
        "_actions": [
          {
            "default": {
              "name": "showConditionalCalc",
              "manipulations": [
                {
                  "target": "conditional_calc",
                  "properties": {
                    "hidden": false,
                    "persist": true
                  }
                }
              ]
            }
          },
          {
            "default": {
              "name": "hideConditionalCalc",
              "manipulations": [
                {
                  "target": "conditional_calc",
                  "properties": {
                    "hidden": true,
                    "persist": false
                  }
                }
              ]
            }
          },
          {
            "default": {
              "javascript": "1 + 1",
              "outputTarget": "calculation",
              "name": "CALC_calculation"
            }
          },
          {
            "default": {
              "javascript": "\"[conditional_radio]\"",
              "outputTarget": "conditional_calc",
              "name": "CALC_conditional_calc"
            }
          }
        ],
        "_behaviours": [
          {
            "default": {
              "name": "showConditionalCalc_conditionalRadioIsOn",
              "trigger": {
                "formElements": [
                  "conditional_radio"
                ],
                "formEvents": [
                  "load"
                ]
              },
              "check": "conditionalRadioIsOn",
              "actions": [
                {
                  "action": "showConditionalCalc",
                  "autoReverse": true
                }
              ]
            }
          },
          {
            "default": {
              "name": "hideConditionalCalc_conditionalRadioIsOff",
              "trigger": {
                "formElements": [
                  "conditional_radio"
                ],
                "formEvents": [
                  "load"
                ]
              },
              "check": "conditionalRadioIsOff",
              "actions": [
                {
                  "action": "hideConditionalCalc",
                  "autoReverse": true
                }
              ]
            }
          },
          {
            "default": {
              "name": "auto_calculations",
              "trigger": {
                "formElements": [
                  "*"
                ],
                "formEvents": [
                  "load"
                ]
              },
              "actions": [
                "CALC_calculation",
                "CALC_conditional_calc"
              ]
            }
          }
        ]
      },
      "list": {
        "interaction": "TEST_FORM_LIST",
        "displayName": "TEST_FORM LIST",
        "defaultCategory": "",
        "header": "",
        "footer": "",
        "hidden": null,
        "action": "list",
        "orderBy": null,
        "showLink": {
          "edit": "1",
          "view": "1",
          "delete": "1"
        },
        "dataStorageList": "temporary",
        "downloadModeList": "partial",
        "recordsToDisplay": "",
        "_elements": [
          "text_box",
          "text_area",
          "password"
        ]
      },
      "search": {
        "interaction": "TEST_FORM_SEARCH",
        "displayName": "TEST_FORM_SEARCH",
        "defaultCategory": "",
        "header": "",
        "footer": "",
        "hidden": null,
        "action": "search"
      },
      "add": {
        "interaction": "TEST_FORM_ADD",
        "displayName": "TEST_FORM ADD",
        "defaultCategory": "",
        "header": "",
        "footer": "",
        "hidden": null,
        "action": "add",
        "_elements": [
          "_heading_1",
          "text_box",
          "text_area",
          "password",
          "email",
          "url",
          "phone_number",
          "number",
          "currency",
          "calculation",
          "radio_buttons",
          "select_box",
          "star_rating",
          "multi_select",
          "checkboxes",
          "checkbox",
          "date",
          "time",
          "date_time",
          "camera",
          "image_library",
          "file_upload",
          "location",
          "sketch_signature",
          "_heading_3",
          "value",
          "logged_in_user_id",
          "user_attribute",
          "get_value",
          "_heading_2",
          "conditional_radio",
          "conditional_calc",
          "subform",
          "validation_req",
          "select_box2"
        ]
      },
      "edit": {
        "interaction": "TEST_FORM_EDIT",
        "displayName": "TEST_FORM EDIT",
        "defaultCategory": "",
        "header": "",
        "footer": "",
        "hidden": "1",
        "action": "edit",
        "_elements": [
          "_heading_1",
          "text_box",
          "text_area",
          "password",
          "email",
          "url",
          "phone_number",
          "number",
          "currency",
          "calculation",
          "radio_buttons",
          "select_box",
          "star_rating",
          "multi_select",
          "checkboxes",
          "checkbox",
          "date",
          "time",
          "date_time",
          "camera",
          "image_library",
          "file_upload",
          "location",
          "sketch_signature",
          "_heading_3",
          "value",
          "logged_in_user_id",
          "user_attribute",
          "get_value",
          "_heading_2",
          "conditional_radio",
          "conditional_calc",
          "subform",
          "validation_req",
          "select_box2"
        ]
      },
      "view": {
        "interaction": "TEST_FORM_VIEW",
        "displayName": "TEST_FORM VIEW",
        "defaultCategory": "",
        "header": "",
        "footer": "",
        "hidden": "1",
        "action": "view",
        "_elements": [
          "_heading_1",
          "text_box",
          "text_area",
          "password",
          "email",
          "url",
          "phone_number",
          "number",
          "currency",
          "calculation",
          "radio_buttons",
          "select_box",
          "star_rating",
          "multi_select",
          "checkboxes",
          "checkbox",
          "date",
          "time",
          "date_time",
          "camera",
          "image_library",
          "file_upload",
          "location",
          "sketch_signature",
          "_heading_3",
          "value",
          "logged_in_user_id",
          "user_attribute",
          "get_value",
          "_heading_2",
          "conditional_radio",
          "conditional_calc",
          "subform",
          "validation_req",
          "select_box2"
        ]
      },
      "delete": {
        "interaction": "TEST_FORM_DELETE",
        "displayName": "TEST_FORM DELETE",
        "defaultCategory": "",
        "header": "",
        "footer": "",
        "hidden": "1",
        "action": "delete",
        "_elements": [
          "_heading_1",
          "text_box",
          "text_area",
          "password",
          "email",
          "url",
          "phone_number",
          "number",
          "currency",
          "calculation",
          "radio_buttons",
          "select_box",
          "star_rating",
          "multi_select",
          "checkboxes",
          "checkbox",
          "date",
          "time",
          "date_time",
          "camera",
          "image_library",
          "file_upload",
          "location",
          "sketch_signature",
          "_heading_3",
          "value",
          "logged_in_user_id",
          "user_attribute",
          "get_value",
          "_heading_2",
          "conditional_radio",
          "conditional_calc",
          "subform",
          "validation_req",
          "select_box2"
        ]
      }
    },
    {
      "default": {
        "uniqueNameId": "56m",
        "name": "subform",
        "formDescription": "",
        "defaultCategory": "",
        "maxStep": 4,
        "labelPlacement": null,
        "header": null,
        "footer": null,
        "_elements": [
          {
            "default": {
              "name": "id",
              "type": "text",
              "page": 0
            }
          },
          {
            "default": {
              "name": "subform_text",
              "type": "text",
              "label": "Subform Text",
              "page": 0
            }
          },
          {
            "default": {
              "name": "subform_select",
              "type": "select",
              "label": "Subform Select",
              "labelPlacement": "default",
              "labelStyle": "Plain",
              "options": {
                "alpha": "alpha",
                "beta": "beta",
                "gamma": "gamma"
              },
              "dataSource": "static",
              "mode": "collapsed",
              "page": 0
            }
          }
        ],
        "_checks": [],
        "_actions": [],
        "_behaviours": []
      },
      "list": {
        "interaction": "",
        "displayName": "",
        "defaultCategory": "",
        "header": null,
        "footer": null,
        "hidden": null,
        "action": "list",
        "orderBy": null,
        "showLink": {
          "edit": 1,
          "view": 1,
          "delete": 1
        },
        "dataStorageList": null,
        "downloadModeList": null,
        "recordsToDisplay": null,
        "_elements": [
          "subform_text",
          "subform_select"
        ]
      },
      "search": {
        "interaction": null,
        "displayName": null,
        "defaultCategory": null,
        "header": null,
        "footer": null,
        "hidden": null,
        "action": "search"
      },
      "add": {
        "interaction": "",
        "displayName": "",
        "defaultCategory": "",
        "header": null,
        "footer": null,
        "hidden": null,
        "action": "add",
        "_elements": [
          "subform_text",
          "subform_select"
        ]
      },
      "edit": {
        "interaction": "",
        "displayName": "",
        "defaultCategory": "",
        "header": null,
        "footer": null,
        "hidden": "1",
        "action": "edit",
        "_elements": [
          "subform_text",
          "subform_select"
        ]
      },
      "view": {
        "interaction": "",
        "displayName": "",
        "defaultCategory": "",
        "header": null,
        "footer": null,
        "hidden": "1",
        "action": "view",
        "_elements": [
          "subform_text",
          "subform_select"
        ]
      },
      "delete": {
        "interaction": "",
        "displayName": "",
        "defaultCategory": "",
        "header": null,
        "footer": null,
        "hidden": "1",
        "action": "delete",
        "_elements": [
          "subform_text",
          "subform_select"
        ]
      }
    }
  ];
});
