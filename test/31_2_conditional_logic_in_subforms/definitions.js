define(function () {
    return [
      {
        "default": {
          "uniqueNameId": "22uehx",
          "name": "firstLevel",
          "formDescription": "",
          "defaultCategory": "",
          "maxStep": 6,
          "labelPlacement": "auto",
          "header": "",
          "footer": "",
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
                "name": "first_level_req",
                "type": "text",
                "label": "First Level Req",
                "labelPlacement": "default",
                "labelStyle": "Plain",
                "required": "1",
                "maxWidthPrefix": "characters",
                "page": 0
              }
            },
            {
              "default": {
                "name": "second_level_field",
                "type": "subForm",
                "subForm": "second_level_form",
                "_elements": {
                  "second|required": {
                    "hide": "",
                    "override": "",
                    "type": "textbox",
                    "id": "second_required"
                  },
                  "third|level|sub": {
                    "hide": "",
                    "override": "",
                    "type": "sub_form",
                    "id": "third_level_sub"
                  }
                },
                "labelPlacement": "default",
                "labelStyle": "Plain",
                "subformControlPos": "below",
                "subformPerms": "allow_add",
                "preload": "no",
                "page": 0
              }
            }
          ],
          "_checks": [],
          "_actions": [],
          "_behaviours": []
        },
        "list": {
          "interaction": "FIRSTLEVEL_LIST",
          "displayName": "FIRSTLEVEL LIST",
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
            "first_level_req",
            "second_level_field"
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
          "interaction": "FIRSTLEVEL_ADD",
          "displayName": "FIRSTLEVEL ADD",
          "defaultCategory": "",
          "header": "",
          "footer": "",
          "hidden": null,
          "action": "add",
          "_elements": [
            "first_level_req",
            "second_level_field"
          ]
        },
        "edit": {
          "interaction": "FIRSTLEVEL_EDIT",
          "displayName": "FIRSTLEVEL EDIT",
          "defaultCategory": "",
          "header": "",
          "footer": "",
          "hidden": "1",
          "action": "edit",
          "_elements": [
            "first_level_req",
            "second_level_field"
          ]
        },
        "view": {
          "interaction": "FIRSTLEVEL_VIEW",
          "displayName": "FIRSTLEVEL VIEW",
          "defaultCategory": "",
          "header": "",
          "footer": "",
          "hidden": "1",
          "action": "view",
          "_elements": [
            "first_level_req",
            "second_level_field"
          ]
        },
        "delete": {
          "interaction": "FIRSTLEVEL_DELETE",
          "displayName": "FIRSTLEVEL DELETE",
          "defaultCategory": "",
          "header": "",
          "footer": "",
          "hidden": "1",
          "action": "delete",
          "_elements": [
            "first_level_req",
            "second_level_field"
          ]
        }
      },
      {
        "default": {
          "uniqueNameId": "dm7b6vyym",
          "name": "second_level_form",
          "formDescription": "",
          "defaultCategory": "",
          "maxStep": 6,
          "labelPlacement": "auto",
          "header": "",
          "footer": "",
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
                "name": "second_required",
                "type": "text",
                "label": "Second Required",
                "labelPlacement": "default",
                "labelStyle": "Plain",
                "required": "1",
                "maxWidthPrefix": "characters",
                "page": 0
              }
            },
            {
              "default": {
                "name": "third_level_field",
                "type": "subForm",
                "subForm": "third_level_sub",
                "_elements": {
                  "third|level|req": {
                    "hide": "",
                    "override": "",
                    "type": "textbox",
                    "id": "third_level_req"
                  }
                },
                "labelPlacement": "default",
                "labelStyle": "Plain",
                "subformControlPos": "below",
                "subformPerms": "allow_add",
                "preload": "no",
                "page": 0
              }
            },
            {
              "default": {
                "name": "cond_hidden",
                "type": "text",
                "label": "Cond Hidden",
                "labelPlacement": "default",
                "labelStyle": "Plain",
                "required": "1",
                "maxWidthPrefix": "characters",
                "page": 0
              }
            }
          ],
          "_checks": [
            {
              "default": {
                "name": "secondRequiredContainsA",
                "exp": {
                  "operator": "contains",
                  "operands": [
                    {
                      "operator": "formElement.value",
                      "operands": [
                        "second_required"
                      ]
                    },
                    "a"
                  ]
                }
              }
            }
          ],
          "_actions": [
            {
              "default": {
                "name": "hideCondHidden",
                "manipulations": [
                  {
                    "target": "cond_hidden",
                    "properties": {
                      "hidden": true,
                      "persist": false
                    }
                  }
                ]
              }
            }
          ],
          "_behaviours": [
            {
              "default": {
                "name": "hideCondHidden_secondRequiredContainsA",
                "trigger": {
                  "formElements": [
                    "second_required"
                  ],
                  "formEvents": [
                    "load"
                  ]
                },
                "check": "secondRequiredContainsA",
                "actions": [
                  {
                    "action": "hideCondHidden",
                    "autoReverse": true
                  }
                ]
              }
            }
          ]
        },
        "list": {
          "interaction": "",
          "displayName": "",
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
            "second_required",
            "third_level_field",
            "cond_hidden"
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
          "header": "",
          "footer": "",
          "hidden": null,
          "action": "add",
          "_elements": [
            "second_required",
            "third_level_field",
            "cond_hidden"
          ]
        },
        "edit": {
          "interaction": "",
          "displayName": "",
          "defaultCategory": "",
          "header": "",
          "footer": "",
          "hidden": "1",
          "action": "edit",
          "_elements": [
            "second_required",
            "third_level_field",
            "cond_hidden"
          ]
        },
        "view": {
          "interaction": "",
          "displayName": "",
          "defaultCategory": "",
          "header": "",
          "footer": "",
          "hidden": "1",
          "action": "view",
          "_elements": [
            "second_required",
            "third_level_field",
            "cond_hidden"
          ]
        },
        "delete": {
          "interaction": "",
          "displayName": "",
          "defaultCategory": "",
          "header": "",
          "footer": "",
          "hidden": "1",
          "action": "delete",
          "_elements": [
            "second_required",
            "third_level_field",
            "cond_hidden"
          ]
        }
      },
      {
        "default": {
          "uniqueNameId": "11g78byb",
          "name": "third_level_sub",
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
                "name": "third_level_req",
                "type": "text",
                "label": "Third Level Req",
                "labelPlacement": "default",
                "labelStyle": "Plain",
                "required": "1",
                "maxWidthPrefix": "characters",
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
            "third_level_req"
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
            "third_level_req"
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
            "third_level_req"
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
            "third_level_req"
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
            "third_level_req"
          ]
        }
      }
    ];
});
