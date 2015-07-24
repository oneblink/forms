define(function() {
    return [{
            "default": {
                "uniqueNameId": "4yf1xf7xt32",
                "name": "blink2_camera_test",
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
                        "name": "camera",
                        "type": "file",
                        "label": "Camera",
                        "capture": true,
                        "accept": "image\\\/*",
                        "page": 0
                    }
                }],
                "_checks": [],
                "_actions": [],
                "_behaviours": []
            },
            "list": {
                "interaction": "BLINK2_CAMERA_TEST_LIST",
                "displayName": "BLINK2_CAMERA_TEST LIST",
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
                "_elements": ["camera"]
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
                "interaction": "BLINK2_CAMERA_TEST_ADD",
                "displayName": "BLINK2_CAMERA_TEST ADD",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": null,
                "action": "add",
                "_elements": ["camera"]
            },
            "edit": {
                "interaction": "BLINK2_CAMERA_TEST_EDIT",
                "displayName": "BLINK2_CAMERA_TEST EDIT",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "edit",
                "_elements": ["camera"]
            },
            "view": {
                "interaction": "BLINK2_CAMERA_TEST_VIEW",
                "displayName": "BLINK2_CAMERA_TEST VIEW",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "view",
                "_elements": ["camera"]
            },
            "delete": {
                "interaction": "BLINK2_CAMERA_TEST_DELETE",
                "displayName": "BLINK2_CAMERA_TEST DELETE",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "delete",
                "_elements": ["camera"]
            }
        }, {
            "default": {
                "uniqueNameId": "349lq",
                "name": "filetest",
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
                        "name": "upload",
                        "type": "file",
                        "label": "Upload",
                        "page": 0
                    }
                }, {
                    "default": {
                        "name": "text",
                        "type": "text",
                        "label": "Text",
                        "page": 0
                    }
                }],
                "_checks": [],
                "_actions": [],
                "_behaviours": []
            },
            "list": {
                "interaction": "FILETEST_LIST",
                "displayName": "FILETEST LIST",
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
                "_elements": ["upload", "text"]
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
                "interaction": "FILETEST_ADD",
                "displayName": "FILETEST ADD",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": null,
                "action": "add",
                "_elements": ["upload", "text"]
            },
            "edit": {
                "interaction": "FILETEST_EDIT",
                "displayName": "FILETEST EDIT",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "edit",
                "_elements": ["upload", "text"]
            },
            "view": {
                "interaction": "FILETEST_VIEW",
                "displayName": "FILETEST VIEW",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "view",
                "_elements": ["upload", "text"]
            },
            "delete": {
                "interaction": "FILETEST_DELETE",
                "displayName": "FILETEST DELETE",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "delete",
                "_elements": ["upload", "text"]
            }
        }
        , {
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
                        "label": "First Level Req",
                        "labelPlacement": "default",
                        "labelStyle": "Plain",
                        "required": "1",
                        "maxWidthPrefix": "characters",
                        "page": 0
                    }
                }, {
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
                "_elements": ["first_level_req", "second_level_field"]
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
                "_elements": ["first_level_req", "second_level_field"]
            },
            "edit": {
                "interaction": "FIRSTLEVEL_EDIT",
                "displayName": "FIRSTLEVEL EDIT",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "edit",
                "_elements": ["first_level_req", "second_level_field"]
            },
            "view": {
                "interaction": "FIRSTLEVEL_VIEW",
                "displayName": "FIRSTLEVEL VIEW",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "view",
                "_elements": ["first_level_req", "second_level_field"]
            },
            "delete": {
                "interaction": "FIRSTLEVEL_DELETE",
                "displayName": "FIRSTLEVEL DELETE",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "delete",
                "_elements": ["first_level_req", "second_level_field"]
            }
        }
        , {
            "default": {
                "uniqueNameId": "4aim",
                "name": "outer_subform",
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
                        "name": "outer_name",
                        "type": "text",
                        "label": "Outer Name",
                        "labelPlacement": "default",
                        "labelStyle": "Plain",
                        "required": "1",
                        "maxWidth": "2",
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
                }, {
                    "default": {
                        "name": "subform",
                        "type": "text",
                        "label": "Subform",
                        "page": 0
                    }
                }, {
                    "default": {
                        "name": "file_test",
                        "type": "subForm",
                        "subForm": "filetest",
                        "_elements": {
                            "upload": {
                                "hide": "",
                                "override": "",
                                "type": "file_upload",
                                "id": "upload"
                            },
                            "text": {
                                "hide": "",
                                "override": "",
                                "type": "textbox",
                                "id": "text"
                            }
                        },
                        "labelPlacement": "default",
                        "labelStyle": "Plain",
                        "required": "1",
                        "subformControlPos": "below",
                        "maxSubforms": "10",
                        "minSubforms": "2",
                        "subformPerms": "allow_add",
                        "preload": "no",
                        "page": 0
                    },
                    "list": {
                        "labelPlacement": "default",
                        "labelStyle": "Plain"
                    },
                    "add": {
                        "labelPlacement": "default",
                        "labelStyle": "Plain",
                        "subformControlPos": "below"
                    },
                    "edit": {
                        "labelPlacement": "default",
                        "labelStyle": "Plain",
                        "subformControlPos": "below"
                    },
                    "view": {
                        "labelPlacement": "default",
                        "labelStyle": "Plain"
                    },
                    "delete": {
                        "labelPlacement": "default",
                        "labelStyle": "Plain"
                    }
                }],
                "_checks": [],
                "_actions": [],
                "_behaviours": []
            },
            "list": {
                "interaction": "OUTER_SUBFORM_LIST",
                "displayName": "OUTER_SUBFORM LIST",
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
                "_elements": ["outer_name", "subform", "file_test"]
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
                "interaction": "OUTER_SUBFORM_ADD",
                "displayName": "OUTER_SUBFORM ADD",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": null,
                "action": "add",
                "_elements": ["outer_name", "subform", "file_test"]
            },
            "edit": {
                "interaction": "OUTER_SUBFORM_EDIT",
                "displayName": "OUTER_SUBFORM EDIT",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "edit",
                "_elements": ["outer_name", "subform", "file_test"]
            },
            "view": {
                "interaction": "OUTER_SUBFORM_VIEW",
                "displayName": "OUTER_SUBFORM VIEW",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "view",
                "_elements": ["outer_name", "subform", "file_test"]
            },
            "delete": {
                "interaction": "OUTER_SUBFORM_DELETE",
                "displayName": "OUTER_SUBFORM DELETE",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "delete",
                "_elements": ["outer_name", "subform", "file_test"]
            }
        }
        , {
            "default": {
                "uniqueNameId": "dm7b6vyym",
                "name": "second_level_form",
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
                        "name": "second_required",
                        "type": "text",
                        "label": "Second Required",
                        "labelPlacement": "default",
                        "labelStyle": "Plain",
                        "required": "1",
                        "maxWidthPrefix": "characters",
                        "page": 0
                    }
                }, {
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
                }, {
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
                }],
                "_checks": [{
                    "default": {
                        "name": "secondRequiredContainsA",
                        "exp": {
                            "operator": "contains",
                            "operands": [{
                                "operator": "formElement.value",
                                "operands": ["second_required"]
                            }, "a"]
                        }
                    }
                }],
                "_actions": [{
                    "default": {
                        "name": "hideCondHidden",
                        "manipulations": [{
                            "target": "cond_hidden",
                            "properties": {
                                "hidden": true,
                                "persist": false
                            }
                        }]
                    }
                }],
                "_behaviours": [{
                    "default": {
                        "name": "hideCondHidden_secondRequiredContainsA",
                        "trigger": {
                            "formElements": ["second_required"],
                            "formEvents": ["load"]
                        },
                        "check": "secondRequiredContainsA",
                        "actions": [{
                            "action": "hideCondHidden",
                            "autoReverse": true
                        }]
                    }
                }]
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
                "_elements": ["second_required", "third_level_field", "cond_hidden"]
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
                "_elements": ["second_required", "third_level_field", "cond_hidden"]
            },
            "edit": {
                "interaction": "",
                "displayName": "",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "edit",
                "_elements": ["second_required", "third_level_field", "cond_hidden"]
            },
            "view": {
                "interaction": "",
                "displayName": "",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "view",
                "_elements": ["second_required", "third_level_field", "cond_hidden"]
            },
            "delete": {
                "interaction": "",
                "displayName": "",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "delete",
                "_elements": ["second_required", "third_level_field", "cond_hidden"]
            }
        }
        , {
            "default": {
                "uniqueNameId": "3gep",
                "name": "subform1",
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
                        "name": "name",
                        "type": "text",
                        "label": "Name",
                        "page": 0
                    }
                }],
                "_checks": [],
                "_actions": [],
                "_behaviours": []
            },
            "list": {
                "interaction": "SUBFORM1_LIST",
                "displayName": "SUBFORM1 LIST",
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
                "_elements": ["name"]
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
                "interaction": "SUBFORM1_ADD",
                "displayName": "SUBFORM1 ADD",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": null,
                "action": "add",
                "_elements": ["name"]
            },
            "edit": {
                "interaction": "SUBFORM1_EDIT",
                "displayName": "SUBFORM1 EDIT",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "edit",
                "_elements": ["name"]
            },
            "view": {
                "interaction": "SUBFORM1_VIEW",
                "displayName": "SUBFORM1 VIEW",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "view",
                "_elements": ["name"]
            },
            "delete": {
                "interaction": "SUBFORM1_DELETE",
                "displayName": "SUBFORM1 DELETE",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "delete",
                "_elements": ["name"]
            }
        }
        , {
            "default": {
                "uniqueNameId": "10v5qx2",
                "name": "sub_form_holder",
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
                        "name": "name",
                        "type": "text",
                        "label": "Name",
                        "page": 0
                    }
                }, {
                    "default": {
                        "name": "required",
                        "type": "text",
                        "label": "Required",
                        "page": 0
                    }
                }, {
                    "default": {
                        "name": "not_required",
                        "type": "text",
                        "label": "Not Required",
                        "page": 0
                    }
                }, {
                    "default": {
                        "name": "inception_form",
                        "type": "subForm",
                        "subForm": "outer_subform",
                        "page": 0
                    }
                }],
                "_checks": [],
                "_actions": [],
                "_behaviours": []
            },
            "list": {
                "interaction": "SUB_FORM_HOLDER_LIST",
                "displayName": "SUB_FORM_HOLDER LIST",
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
                "_elements": ["name", "required", "not_required"]
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
                "interaction": "SUB_FORM_HOLDER_ADD",
                "displayName": "SUB_FORM_HOLDER ADD",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": null,
                "action": "add",
                "_elements": ["name", "required", "not_required", "inception_form"]
            },
            "edit": {
                "interaction": "SUB_FORM_HOLDER_EDIT",
                "displayName": "SUB_FORM_HOLDER EDIT",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "edit",
                "_elements": ["name", "required", "not_required", "inception_form"]
            },
            "view": {
                "interaction": "SUB_FORM_HOLDER_VIEW",
                "displayName": "SUB_FORM_HOLDER VIEW",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "view",
                "_elements": ["name", "required", "not_required", "inception_form"]
            },
            "delete": {
                "interaction": "SUB_FORM_HOLDER_DELETE",
                "displayName": "SUB_FORM_HOLDER DELETE",
                "defaultCategory": "",
                "header": "",
                "footer": "",
                "hidden": "1",
                "action": "delete",
                "_elements": ["name", "required", "not_required", "inception_form"]
            }
        }
        , {
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
        }
    ];
});
