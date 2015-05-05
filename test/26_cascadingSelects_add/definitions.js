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
              "type": 'hidden'
            }
          },
          {
            'default': {
              name: 'country',
              label: 'Country',
              "type": "select",
              "mode": "collapsed",
              "options": {
                "a": "a",
                "b": "b"
              }
            }
          },
          {
            'default': {
              name: 'state',
              label: 'State',
              "type": "select",
              "mode": "collapsed",
              "options": {
                "a": "a",
                "b": "b"
              }
            }
          },
          {
            'default': {
              name: 'city',
              label: 'City',
              "type": "select",
              "mode": "collapsed",
              "options": {
                "a": "a",
                "b": "b"
              }
            }
          },
          {
            'default': {
              name: 'form2',
              label: 'Form2 Subform',
              type: 'subForm',
              subForm: 'form2',
              plusButtonLabel: "Form2 Add",
              minusButtonLabel: "Form2 Remove"
            }
          },
          {
            'default': {
              name: 'form3',
              label: 'Form3 Subform',
              type: 'subForm',
              subForm: 'form3',
              plusButtonLabel: "Form3 Add",
              minusButtonLabel: "Form3 Remove"
            }
          }
        ],
        "_checks": [],
        "_actions": [
          {
            "default": {
              "name": "CasSel_mojo_options_country",
              "manipulations": [
                {
                  "target": "country",
                  "propValuesByExp": {
                    "options": {
                      "operator": "optionsByXPath",
                      "operands": [
                        {
                          "operator": "xpath",
                          "operands": [
                            {
                              "operator": "injectElemVal",
                              "operands": [
                                "//countries"
                              ]
                            },
                            {
                              "operator": "suitcase",
                              "operands": [
                                "MyStores",
                                "server_hosted"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              ]
            }
          },
          {
            "default": {
              "name": "CasSel_interaction_state",
              "manipulations": [
                {
                  "target": "state",
                  "propValuesByExp": {
                    "options": {
                      "operator": "optionsByXPath",
                      "operands": [
                        {
                          "operator": "xpath",
                          "operands": [
                            {
                              "operator": "injectElemVal",
                              "operands": [
                                "//states[@country=\"[country]\"]"
                              ]
                            },
                            {
                              "operator": "interaction",
                              "operands": [
                                "MyStores"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              ]
            }
          },
          {
            "default": {
              "name": "CasSel_interaction_city",
              "manipulations": [
                {
                  "target": "city",
                  "propValuesByExp": {
                    "options": {
                      "operator": "optionsByXPath",
                      "operands": [
                        {
                          "operator": "xpath",
                          "operands": [
                            {
                              "operator": "injectElemVal",
                              "operands": [
                                "//cities[@state=\"[state]\"]"
                              ]
                            },
                            {
                              "operator": "interaction",
                              "operands": [
                                "MyStores",
                                {
                                  "operator": "injectElemVal",
                                  "operands": [
                                    "state=[state]"
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        ],
        "_behaviours": [
          {
            "default": {
              "name": "behaviour_CasSel_mojo_options_country",
              "trigger": {
                "formEvents": [
                  "populated",
                  "load"
                ]
              },
              "actions": [
                {
                  "action": "CasSel_mojo_options_country"
                }
              ]
            }
          },
          {
            "default": {
              "name": "behaviour_CasSel_interaction_state",
              "trigger": {
                "formEvents": [
                  "populated"
                ],
                "formElements": [
                  "country"
                ]
              },
              "actions": [
                {
                  "action": "CasSel_interaction_state"
                }
              ]
            }
          },
          {
            "default": {
              "name": "behaviour_CasSel_interaction_city",
              "trigger": {
                "formEvents": [
                  "populated",
                  "load"
                ],
                "formElements": [
                  "state"
                ]
              },
              "actions": [
                {
                  "action": "CasSel_interaction_city"
                }
              ]
            }
          }
        ]
      }
    },
    {
      'default': {
        name: 'form2',
        label: 'Form 2',
        _elements: [
          {
            'default': {
              name: 'id',
              "type": 'hidden'
            }
          },
          {
            'default': {
              name: 'country1',
              label: 'Country1',
              "type": "select",
              "mode": "collapsed",
              "options": {
                "a": "a",
                "b": "b"
              }
            }
          },
          {
            'default': {
              name: 'state1',
              label: 'State1',
              "type": "select",
              "mode": "collapsed",
              "options": {
                "a": "a",
                "b": "b"
              }
            }
          },
          {
            'default': {
              name: 'city1',
              label: 'City1',
              "type": "select",
              "mode": "collapsed",
              "options": {
                "a": "a",
                "b": "b"
              }
            }
          }
        ],
        "_checks": [],
        "_actions": [
          {
            "default": {
              "name": "CasSel_mojo_options_country",
              "manipulations": [
                {
                  "target": "country1",
                  "propValuesByExp": {
                    "options": {
                      "operator": "optionsByXPath",
                      "operands": [
                        {
                          "operator": "xpath",
                          "operands": [
                            {
                              "operator": "injectElemVal",
                              "operands": [
                                "//countries"
                              ]
                            },
                            {
                              "operator": "suitcase",
                              "operands": [
                                "MyStores",
                                "server_hosted"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              ]
            }
          },
          {
            "default": {
              "name": "CasSel_interaction_state",
              "manipulations": [
                {
                  "target": "state1",
                  "propValuesByExp": {
                    "options": {
                      "operator": "optionsByXPath",
                      "operands": [
                        {
                          "operator": "xpath",
                          "operands": [
                            {
                              "operator": "injectElemVal",
                              "operands": [
                                "//states[@country=\"[country1]\"]"
                              ]
                            },
                            {
                              "operator": "interaction",
                              "operands": [
                                "MyStores"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              ]
            }
          },
          {
            "default": {
              "name": "CasSel_interaction_city",
              "manipulations": [
                {
                  "target": "city1",
                  "propValuesByExp": {
                    "options": {
                      "operator": "optionsByXPath",
                      "operands": [
                        {
                          "operator": "xpath",
                          "operands": [
                            {
                              "operator": "injectElemVal",
                              "operands": [
                                "//cities[@state=\"[state1]\"]"
                              ]
                            },
                            {
                              "operator": "suitcase",
                              "operands": [
                                "InvalidSuitcase"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        ],
        "_behaviours": [
          {
            "default": {
              "name": "behaviour_CasSel_mojo_options_country",
              "trigger": {
                "formEvents": [
                  "load"
                ]
              },
              "actions": [
                {
                  "action": "CasSel_mojo_options_country"
                }
              ]
            }
          },
          {
            "default": {
              "name": "behaviour_CasSel_interaction_state",
              "trigger": {
                "formEvents": [
                  "populated"
                ],
                "formElements": [
                  "country1"
                ]
              },
              "actions": [
                {
                  "action": "CasSel_interaction_state"
                }
              ]
            }
          },
          {
            "default": {
              "name": "behaviour_CasSel_interaction_city",
              "trigger": {
                "formElements": [
                  "state1"
                ],
                "formEvents": [
                  "load",
                  "populated"
                ]
              },
              "actions": [
                {
                  "action": "CasSel_interaction_city"
                }
              ]
            }
          }
        ]
      }
    },
    {
      'default': {
        name: 'form3',
        label: 'Form 3',
        _elements: [
          {
            'default': {
              name: 'id',
              "type": 'hidden'
            }
          },
          {
            'default': {
              name: 'field1',
              label: 'Country',
              "type": "select",
              "mode": "collapsed",
              "options": {
                "a": "a",
                "b": "b"
              }
            }
          },
          {
            'default': {
              name: 'field2',
              label: 'State',
              "type": "select",
              "mode": "collapsed",
              "options": {
                "a": "a",
                "b": "b"
              }
            }
          },
          {
            'default': {
              name: 'field3',
              label: 'City',
              "type": "select",
              "mode": "collapsed",
              "options": {
                "a": "a",
                "b": "b"
              }
            }
          }
        ],
        "_checks": [],
        "_actions": [
          {
            "default": {
              "name": "CasSel_mojo_options_country",
              "manipulations": [
                {
                  "target": "field1",
                  "propValuesByExp": {
                    "options": {
                      "operator": "optionsByXPath",
                      "operands": [
                        {
                          "operator": "xpath",
                          "operands": [
                            {
                              "operator": "injectElemVal",
                              "operands": [
                                "//countries"
                              ]
                            },
                            {
                              "operator": "suitcase",
                              "operands": [
                                "InvalidSuitcase",
                                "server_hosted"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              ]
            }
          },
          {
            "default": {
              "name": "CasSel_interaction_state",
              "manipulations": [
                {
                  "target": "field2",
                  "propValuesByExp": {
                    "options": {
                      "operator": "optionsByXPath",
                      "operands": [
                        {
                          "operator": "xpath",
                          "operands": [
                            {
                              "operator": "injectElemVal",
                              "operands": [
                                "//states[@country=\"[country]\"]"
                              ]
                            },
                            {
                              "operator": "interaction",
                              "operands": [
                                "InvalidInteraction"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              ]
            }
          },
          {
            "default": {
              "name": "CasSel_interaction_city",
              "manipulations": [
                {
                  "target": "field3",
                  "propValuesByExp": {
                    "options": {
                      "operator": "optionsByXPath",
                      "operands": [
                        {
                          "operator": "xpath",
                          "operands": [
                            {
                              "operator": "injectElemVal",
                              "operands": [
                                "//cities[@state=\"[state]\"]"
                              ]
                            },
                            {
                              "operator": "interaction",
                              "operands": [
                                "InvalidInteraction",
                                {
                                  "operator": "injectElemVal",
                                  "operands": [
                                    "state=[state]"
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        ],
        "_behaviours": [
          {
            "default": {
              "name": "behaviour_CasSel_mojo_options_country",
              "trigger": {
                "formEvents": [
                  "load",
                  "populated"
                ]
              },
              "actions": [
                {
                  "action": "CasSel_mojo_options_country"
                }
              ]
            }
          },
          {
            "default": {
              "name": "behaviour_CasSel_interaction_state",
              "trigger": {
                "formEvents": [
                  "populated"
                ],
                "formElements": [
                  "field1"
                ]
              },
              "actions": [
                {
                  "action": "CasSel_interaction_state"
                }
              ]
            }
          },
          {
            "default": {
              "name": "behaviour_CasSel_interaction_city",
              "trigger": {
                "formElements": [
                  "field2"
                ],
                "formEvents": [
                  "load",
                  "populated"
                ]
              },
              "actions": [
                {
                  "action": "CasSel_interaction_city"
                }
              ]
            }
          }
        ]
      }
    }

  ];
});
