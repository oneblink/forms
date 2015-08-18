define(function () {
    return [{
        "default": {
            "uniqueNameId": "22uehx",
            "name": "firstLevel",
            "formDescription": "",
            "defaultCategory": "",
            "maxStep": 6,
            "labelPlacement": "auto",
            "header": "",
            "footer": "",
            "_elements": [{
                "default": {
                    "name": "id",
                    "type": "text",
                    "page": 0
                }
            }, {
                "default": {
                    "name": "first_level_req",
                    "type": "text",
                    "label": "First & Level eq",
                    "labelPlacement": "default",
                    "labelStyle": "Plain",
                    "required": "1",
                    "maxWidthPrefix": "characters",
                    "page": 0
                }
            }, {
                "default": {
                    "name": "second_level_test",
                    "type": "subForm",
                    "subForm": "second_level_field",
                    "_elements": {
                        "second|level|text": {
                            "hide": "",
                            "override": "",
                            "type": "textbox",
                            "id": "second_level_text"
                        },
                        "hidden|when|first": {
                            "override": "",
                            "type": "textbox",
                            "id": "hidden_when_first",
                            "hide": "1"
                        },
                        "hidden|when|text|is|a": {
                            "hide": "",
                            "override": "",
                            "type": "textbox",
                            "id": "hidden_when_text_is_a"
                        },
                        "third|level": {
                            "hide": "",
                            "override": "",
                            "type": "sub_form",
                            "id": "third_level"
                        }
                    },
                    "plusButtonLabel": "Default plus button label",
                    "minusButtonLabel": "Default minus button label",
                    "labelPlacement": "default",
                    "labelStyle": "Plain",
                    "tooltip": "Default Tooltip",
                    "rowClass": "default-class",
                    "subformControlPos": "below",
                    "subformPerms": "allow_add",
                    "preload": "no",
                    "page": 0
                },
                "add": {
                    "customise": "1",
                    "plusButtonLabel": "Override_Plus",
                    "minusButtonLabel": "Override_Minus",
                    "labelPlacement": "above",
                    "labelStyle": "Italic",
                    "tooltip": "this is overridden tooltip text on add tab",
                    "hint": "this is overridden hint text on add tab",
                    "rowClass": "override",
                    "rowStyle": "background-color:#0F0",
                    "subformControlPos": "above"
                },
                "edit": {
                    "minusButtonLabel": "Edit_Override minus",
                    "labelPlacement": "left",
                    "labelStyle": "Bold",
                    "required": "1",
                    "tooltip": "Edit override tooltip",
                    "hint": "Edit override hinttext",
                    "rowClass": "edit-override",
                    "rowStyle": "background-color: #00f"
                }
            }],
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
            "_elements": ["first_level_req", "second_level_test"]
        },
        "search": {
            "interaction": "",
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
            "_elements": ["first_level_req", "second_level_test"]
        },
        "edit": {
            "interaction": "FIRSTLEVEL_EDIT",
            "displayName": "FIRSTLEVEL EDIT",
            "defaultCategory": "",
            "header": "",
            "footer": "",
            "hidden": "1",
            "action": "edit",
            "_elements": ["first_level_req", "second_level_test"]
        },
        "view": {
            "interaction": "FIRSTLEVEL_VIEW",
            "displayName": "FIRSTLEVEL VIEW",
            "defaultCategory": "",
            "header": "",
            "footer": "",
            "hidden": "1",
            "action": "view",
            "_elements": ["first_level_req", "second_level_test"]
        },
        "delete": {
            "interaction": "FIRSTLEVEL_DELETE",
            "displayName": "FIRSTLEVEL DELETE",
            "defaultCategory": "",
            "header": "",
            "footer": "",
            "hidden": "1",
            "action": "delete",
            "_elements": ["first_level_req", "second_level_test"]
        }
    }, {
        "default": {
            "uniqueNameId": "418tzdh0w6md",
            "name": "second_level_field",
            "formDescription": "",
            "defaultCategory": "",
            "maxStep": 6,
            "labelPlacement": "auto",
            "header": "",
            "footer": "",
            "_elements": [{
                "default": {
                    "name": "id",
                    "type": "text",
                    "page": 0
                }
            }, {
                "default": {
                    "name": "second_level_text",
                    "type": "text",
                    "label": "Second Level Text",
                    "labelPlacement": "default",
                    "labelStyle": "Plain",
                    "required": "1",
                    "hint": "hidden when trigger_field contains b",
                    "maxWidthPrefix": "characters",
                    "page": 0
                }
            }, {
                "default": {
                    "name": "hidden_when_first",
                    "type": "text",
                    "label": "Hidden When First",
                    "labelPlacement": "default",
                    "labelStyle": "Plain",
                    "hint": "hidden when trigger_field contains b",
                    "maxWidthPrefix": "characters",
                    "page": 0
                }
            }, {
                "default": {
                    "name": "hidden_when_text_is_a",
                    "type": "text",
                    "label": "Hidden When Text Is A",
                    "labelPlacement": "default",
                    "labelStyle": "Plain",
                    "maxWidthPrefix": "characters",
                    "page": 0
                }
            }, {
                "default": {
                    "name": "third_level",
                    "type": "subForm",
                    "subForm": "third_level_sub",
                    "page": 0
                }
            }, {
                "default": {
                    "name": "trigger_field",
                    "type": "text",
                    "label": "Trigger Field",
                    "page": 0
                }
            }],
            "_checks": [],
            "_actions": [],
            "_behaviours": []
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
            "_elements": ["second_level_text", "hidden_when_first", "hidden_when_text_is_a"]
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
            "_elements": ["second_level_text", "hidden_when_first", "hidden_when_text_is_a", "third_level", "trigger_field"]
        },
        "edit": {
            "interaction": "",
            "displayName": "",
            "defaultCategory": "",
            "header": "",
            "footer": "",
            "hidden": "1",
            "action": "edit",
            "_elements": ["second_level_text", "hidden_when_first", "hidden_when_text_is_a", "third_level", "trigger_field"]
        },
        "view": {
            "interaction": "",
            "displayName": "",
            "defaultCategory": "",
            "header": "",
            "footer": "",
            "hidden": "1",
            "action": "view",
            "_elements": ["second_level_text", "hidden_when_first", "hidden_when_text_is_a", "third_level", "trigger_field"]
        },
        "delete": {
            "interaction": "",
            "displayName": "",
            "defaultCategory": "",
            "header": "",
            "footer": "",
            "hidden": "1",
            "action": "delete",
            "_elements": ["second_level_text", "hidden_when_first", "hidden_when_text_is_a", "third_level", "trigger_field"]
        }
    }, {
        "default": {
            "uniqueNameId": "11g78byb",
            "name": "third_level_sub",
            "formDescription": "",
            "defaultCategory": "",
            "maxStep": 4,
            "labelPlacement": null,
            "header": null,
            "footer": null,
            "_elements": [{
                "default": {
                    "name": "id",
                    "type": "text",
                    "page": 0
                }
            }, {
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
            }],
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
            "_elements": ["third_level_req"]
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
            "_elements": ["third_level_req"]
        },
        "edit": {
            "interaction": "",
            "displayName": "",
            "defaultCategory": "",
            "header": null,
            "footer": null,
            "hidden": "1",
            "action": "edit",
            "_elements": ["third_level_req"]
        },
        "view": {
            "interaction": "",
            "displayName": "",
            "defaultCategory": "",
            "header": null,
            "footer": null,
            "hidden": "1",
            "action": "view",
            "_elements": ["third_level_req"]
        },
        "delete": {
            "interaction": "",
            "displayName": "",
            "defaultCategory": "",
            "header": null,
            "footer": null,
            "hidden": "1",
            "action": "delete",
            "_elements": ["third_level_req"]
        }
    }];
});
