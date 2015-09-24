define(function () {
  return [
    {
      'default': {
        'uniqueNameId': '2hzv0n',
        'name': 'inspection',
        'formDescription': 'Inspection Form',
        'defaultCategory': '',
        'maxStep': 6,
        'labelPlacement': 'auto',
        'header': '',
        'footer': '',
        '_elements': [
          {
            'default': {
              'name': 'id',
              'type': 'text',
              'page': 0
            }
          },
          {
            'default': {
              'name': '_message_1',
              'type': 'message',
              'html': '<style>\r\n#changeuser\r\n{\r\n    display:none;\r\n}\r\n#cancelformpage\r\n{\r\n    display:none;\r\n}\r\n#discard\r\n{\r\n   display:block;\r\n}\r\n</style>\r\n<table border="1" class="special">\r\n<tr>\r\n  <td border="1" onClick="changeFormPage(1);">Incident Report\r\n  </td>\r\n     <td border="1" onclick="changeFormPage(2);">Previous Inspection\r\n  </td>\r\n     <td border="1" onClick="changeFormPage(3);">General Housekeeping\r\n  </td>\r\n</tr>\r\n<tr>\r\n  <td border="1" onclick="changeFormPage(4);">Paths of travel\r\n  </td>\r\n     <td border="1" onclick="changeFormPage(5);">Procedural\r\n  </td>\r\n     <td border="1" onclick="changeFormPage(6);">Hazardous Materials\r\n\r\n  </td>\r\n</tr><tr>\r\n  <td border="1" onclick="changeFormPage(7);">Compliance\r\n  </td>\r\n     <td border="1" onclick="changeFormPage(8);">Health and Safety\r\n  </td>\r\n     <td border="1" onclick="changeFormPage(9);">Stairs, steps, ladders, walkways, anchors\r\n  </td>\r\n</tr><tr>\r\n  <td border="1" onclick="changeFormPage(10);">Amenities and End of Trip Facilities\r\n  </td>\r\n     <td border="1" onclick="changeFormPage(11);">Roofs and facades\r\n  </td>\r\n     <td border="1" onclick="changeFormPage(12);">Fire Services\r\n  </td>\r\n</tr><tr>\r\n  <td border="1" onclick="changeFormPage(13);">Electrical\r\n  </td>\r\n     <td border="1" onclick="changeFormPage(14);">Mechanical\r\n  </td>\r\n     <td border="1" onclick="changeFormPage(15);">Other building services\r\n  </td>\r\n</tr>\r\n</table>\r\n<div class="grouped"><a data-role="button" onClick="customSave();">Save Draft</a><a data-role="button" onClick="customSubmit()">Submit</a></div>',
              'page': 0
            },
            'list': [],
            'add': [],
            'edit': [],
            'view': [],
            'delete': []
          },
          {
            'default': {
              'name': 'inspectionDate',
              'type': 'text',
              'label': 'Inspection Date',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'hidden',
              'maxWidthPrefix': 'characters',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': 'inspectorEmail',
              'type': 'text',
              'label': 'Inspector Email',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'hidden',
              'maxWidthPrefix': 'characters',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': 'inspectionAddress',
              'type': 'text',
              'label': 'Inspection Address',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': 'abcd',
              'rowClass': 'hidden',
              'maxWidthPrefix': 'characters',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': 'inspectorName',
              'type': 'text',
              'label': 'Inspector Name',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'hidden',
              'maxWidthPrefix': 'characters',
              'page': 0
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': '_heading_1',
              'type': 'heading',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'text': 'Inspection Report',
              'headingPageBreak': '1',
              'position': 'left',
              'fontFace': 'arial',
              'page': 1
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': '_message_21',
              'type': 'message',
              'html': '<style>.ui-radio{width:100%}</style>',
              'page': 1
            }
          },
          {
            'default': {
              'name': 'incidentType',
              'type': 'select',
              'label': 'Incident Type',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded',
              'page': 1,
              'options': {
                'Public Liability': 'Public Liability',
                'Building & Equipment': 'Building & Equipment'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'publicLiability',
              'type': 'select',
              'label': 'Public Liability',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;hidden',
              'mode': 'expanded',
              'page': 1,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'liabilityPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 1
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'liabilityComment',
              'type': 'textarea',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 1
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'buildingEquipment',
              'type': 'select',
              'label': 'Building And Equipment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;hidden',
              'mode': 'expanded',
              'page': 1,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'buildingPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 1
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'buildingComment',
              'type': 'textarea',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 1
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': '_message_12',
              'type': 'message',
              'html': '<a id="done" data-role="button" onclick="changeFormPage(0);">Done</a>',
              'page': 1
            }
          },
          {
            'default': {
              'name': '_heading_2',
              'type': 'heading',
              'text': 'Previous Inspection',
              'headingPageBreak': '1',
              'position': 'left',
              'fontFace': 'arial',
              'page': 2
            }
          },
          {
            'default': {
              'name': 'reviewed',
              'type': 'select',
              'label': 'Previous inspection report report has been reviewed and all actions completed?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 2,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'previousPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 2
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'previousComment',
              'type': 'textarea',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 2
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': '_message_13',
              'type': 'message',
              'html': '<a id="done" data-role="button" onclick="changeFormPage(0);">Done</a>',
              'page': 2
            }
          },
          {
            'default': {
              'name': '_heading_3',
              'type': 'heading',
              'text': 'General Housekeeping',
              'headingPageBreak': '1',
              'position': 'left',
              'fontFace': 'arial',
              'page': 3
            }
          },
          {
            'default': {
              'name': 'houseLocation',
              'type': 'text',
              'label': 'Location / floor identifier ',
              'page': 3
            }
          },
          {
            'default': {
              'name': 'workAreas',
              'type': 'number',
              'label': 'Work areas are tidy and free from rubbish.',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'hint': '1 = Poor, 3 = Needs Attention, 5 = Excellent',
              'step': '1',
              'useSlider': '1',
              'max': '5',
              'page': 3
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'wasteRemoval',
              'type': 'select',
              'label': 'Is there a regular, planned waste removal schedule in place?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': 'N/A',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 3,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'wasteRemovalPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 3
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'wasteRemovalComm',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 3
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'slipTripHazards',
              'type': 'select',
              'label': 'Common area floors are free from slip/trip hazards?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 3,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'slipTripPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 3
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'slipTripComm',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 3
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'serviceRooms',
              'type': 'number',
              'label': 'Service rooms are clean & tidy, clear of combustibles and free from storage.',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'step': '1',
              'useSlider': '1',
              'max': '5',
              'page': 3
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'dustBuildUp',
              'type': 'number',
              'label': 'All areas are free from dust build up.',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': '1',
              'step': '1',
              'useSlider': '1',
              'max': '5',
              'page': 3
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'externalAreas',
              'type': 'select',
              'label': 'Are all external areas (roads/ docks/ yards) are clear and clean?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 3,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'externalAreasPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 3
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'externalAreasComm',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 3
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'gardensGrounds',
              'type': 'number',
              'label': 'Gardens and grounds are safe and maintained.',
              'labelPlacement': 'left',
              'labelStyle': 'Plain',
              'step': '1',
              'useSlider': '1',
              'max': '5',
              'page': 3
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'pestControl',
              'type': 'select',
              'label': 'Pest control stations are in place and maintained?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 3,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'pestControlPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 3
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'pestControlComm',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 3
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'rubbishAreas',
              'type': 'select',
              'label': 'Are rubbish areas / rooms clean and ventilated?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 3,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'rubbishAreasPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 3
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'rubbishAreasComm',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 3
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': '_message_14',
              'type': 'message',
              'html': '<a id="done" data-role="button" onclick="changeFormPage(0);">Done</a>',
              'page': 3
            }
          },
          {
            'default': {
              'name': '_heading_15',
              'type': 'heading',
              'text': 'Paths Of Travel',
              'headingPageBreak': '1',
              'position': 'left',
              'fontFace': 'arial',
              'page': 4
            }
          },
          {
            'default': {
              'name': 'potLocation',
              'type': 'text',
              'label': 'Location',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'validate',
              'maxWidthPrefix': 'characters',
              'page': 4
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': 'unobAndDefined',
              'type': 'select',
              'label': 'Are paths of travel unobstructed and clearly defined?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 4,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'unobDefinedPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 4
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'unobDefinedComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 4
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'AdLighting',
              'type': 'select',
              'label': 'Is there adequate lighting?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 4,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'AdLightingPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 4
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'AdLightingComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 4
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'emergencySign',
              'type': 'select',
              'label': 'Is all emergency / exit signage working?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 4,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'emergencySignPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 4
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'emergencySignComm',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 4
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'fireDoorSign',
              'type': 'select',
              'label': 'All fire door signage is in place?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 4,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'fireDoorSignPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 4
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'fireDoorSignComm',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 4
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'exitDoorOp',
              'type': 'select',
              'label': 'All exit doors are operable / not locked?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 4,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'exitDoorOpPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 4
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'exitDoorOpComm',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 4
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'stairwells',
              'type': 'select',
              'label': 'Stairwells, corridors & under stairs are free from storage?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 4,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'stairwellsPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 4
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'stairwellsComm',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 4
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': '_message_15',
              'type': 'message',
              'html': "<a id=\"done\" data-role=\"button\" onclick=\"changeFormPage(0);\">Done</a>\r\n<script>\r\n $('.validate input,textarea,select').on(\"keyup click\",function () \r\n        {\r\n            $(this).parent().removeClass('invalidInput');\r\n        });\r\n</script>",
              'page': 4
            },
            'list': [],
            'add': [],
            'edit': [],
            'view': [],
            'delete': []
          },
          {
            'default': {
              'name': '_heading_4',
              'type': 'heading',
              'text': 'Procedural',
              'headingPageBreak': '1',
              'position': 'left',
              'fontFace': 'arial',
              'page': 5
            }
          },
          {
            'default': {
              'name': 'signIn',
              'type': 'select',
              'label': 'Sign in register is in place and process followed?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 5,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'signInPhoto',
              'type': 'file',
              'label': 'Sign In Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 5
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'signInComments',
              'type': 'textarea',
              'label': 'Sign In Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 5
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'siteKeys',
              'type': 'select',
              'label': 'Site keys and register are up to date?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 5,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'siteKeysPhoto',
              'type': 'file',
              'label': 'Site Keys Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 5
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'siteKeysComment',
              'type': 'textarea',
              'label': 'Site Keys Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 5
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'siteKeyLockBox',
              'type': 'select',
              'label': 'Site key lockbox operational and all keys in place?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 5,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'siteKeyLockPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 5
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'siteKeyLockComm',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 5
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'permits',
              'type': 'select',
              'label': 'Permits systems are in place?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 5,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'permitsPhoto',
              'type': 'file',
              'label': 'Permits Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 5
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'permitsComment',
              'type': 'textarea',
              'label': 'Permits Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 5
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'houseRule',
              'type': 'select',
              'label': 'House Rules are in place and available for review?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 5,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'houseRulePhoto',
              'type': 'file',
              'label': 'House Rule Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 5
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'houseRuleComment',
              'type': 'textarea',
              'label': 'House Rule Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 5
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'tenancyFit',
              'type': 'select',
              'label': 'Tenancy Fit Out Guide are in place and available for review?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 5,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'tenancyFitPhoto',
              'type': 'file',
              'label': 'Tenancy Fit Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 5
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'tenancyFitComment',
              'type': 'textarea',
              'label': 'Tenancy Fit Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 5
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'hotWorks',
              'type': 'select',
              'label': 'Hot works procedures and forms in place and available for review?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 5,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'hotWorksPhoto',
              'type': 'file',
              'label': 'Hot Works Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 5
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'hotWorksComment',
              'type': 'textarea',
              'label': 'Hot Works Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 5
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'serviceFailure',
              'type': 'select',
              'label': 'Service failure procedure are in place and available for review?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 5,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'serviceFailPhoto',
              'type': 'file',
              'label': 'Service Failure Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 5
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'serviceFailComment',
              'type': 'textarea',
              'label': 'Service Failure Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 5
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'bmuPermits',
              'type': 'select',
              'label': 'BMU permits and training register are available for review?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 5,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'bmuPermitPhoto',
              'type': 'file',
              'label': 'Bmu Permit Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 5
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'bmuPermitComment',
              'type': 'textarea',
              'label': 'Bmu Permit Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 5
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': '_message_11',
              'type': 'message',
              'html': '<a id="done" data-role="button" onclick="changeFormPage(0);">Done</a>',
              'page': 5
            }
          },
          {
            'default': {
              'name': '_heading_5',
              'type': 'heading',
              'text': 'Hazardous Material',
              'headingPageBreak': '1',
              'position': 'left',
              'fontFace': 'arial',
              'page': 6
            }
          },
          {
            'default': {
              'name': 'materialLocation',
              'type': 'text',
              'label': 'Location / floor identifier ',
              'page': 6
            }
          },
          {
            'default': {
              'name': 'materialsRegister',
              'type': 'select',
              'label': 'Is the Hazardous Materials Register available and up to date?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 6,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'materialsRegPhoto',
              'type': 'file',
              'label': 'Materials Register Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 6
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'materialRegComment',
              'type': 'textarea',
              'label': 'Materials Register Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 6
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'msds',
              'type': 'select',
              'label': "MSDS's are available and up to date?",
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 6,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'msdsPhoto',
              'type': 'file',
              'label': 'Msds Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 6
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'msdsComment',
              'type': 'textarea',
              'label': 'Msds Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 6
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'containersLabelled',
              'type': 'select',
              'label': 'All containers are labelled correctly?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 6,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'containLabelPhoto',
              'type': 'file',
              'label': 'Containers Labelled Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 6
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'containLabelCommen',
              'type': 'textarea',
              'label': 'Containers Labelled Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 6
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'adequateVentilation',
              'type': 'select',
              'label': 'Ventilation is adequate in chemical storage areas?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 6,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'adequateVentPhoto',
              'type': 'file',
              'label': 'Adequate Ventilation Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 6
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'adequateVentCom',
              'type': 'textarea',
              'label': 'Adequate Ventilation Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 6
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'bundedAreas',
              'type': 'select',
              'label': 'Bunded areas are clear of debris and intact?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 6,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'bundedAreasPhoto',
              'type': 'file',
              'label': 'Bunded Areas Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 6
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'bundedAreasComment',
              'type': 'textarea',
              'label': 'Bunded Areas Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 6
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'asbestosRegister',
              'type': 'select',
              'label': 'Is there an Asbestos Register on site and available for review?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 6,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'asbestosRegPhoto',
              'type': 'file',
              'label': 'Asbestos Registrar Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 6
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'asbestosRegComment',
              'type': 'textarea',
              'label': 'Asbestos Register Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 6
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'asbestosManagement',
              'type': 'select',
              'label': 'Is there an Asbestos Management Plan on site and available for review?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 6,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'asbestosManagPhoto',
              'type': 'file',
              'label': 'Asbestos Management Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 6
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'asbestosMagComment',
              'type': 'textarea',
              'label': 'Asbestos Management Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 6
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'areasClean',
              'type': 'select',
              'label': 'Are areas clean of spills and residue?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 6,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'areasCleanPhoto',
              'type': 'file',
              'label': 'Areas Clean Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 6
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'areasCleanComment',
              'type': 'textarea',
              'label': 'Areas Clean Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 6
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': '_message_3',
              'type': 'message',
              'html': '<a id="done" data-role="button" onclick="changeFormPage(0);">Done</a>',
              'page': 6
            }
          },
          {
            'default': {
              'name': '_heading_6',
              'type': 'heading',
              'text': 'Compliance',
              'headingPageBreak': '1',
              'position': 'left',
              'fontFace': 'arial',
              'page': 7
            }
          },
          {
            'default': {
              'name': 'certificateClassification',
              'type': 'select',
              'label': 'Certificate of Classification displayed',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 7,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'certificatePhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 7
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'certificateComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 7
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'engineeredSolutions',
              'type': 'select',
              'label': 'Is Engineered Solution displayed on site?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 7,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'engineeredPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 7
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'engineeredComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 7
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'occupiers',
              'type': 'select',
              'label': 'Is the Occupiers / Annual Maintenance Declaration /AFSS or similar displayed?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 7,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'occupiersPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 7
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'occupiersComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 7
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'afterHoursEmergency',
              'type': 'select',
              'label': 'Are the after hours emergency contact details up to date with fire brigade?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 7,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'afterHoursPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 7
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'afterHoursComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 7
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'plantRegistrations',
              'type': 'select',
              'label': 'Are Plant Registrations up to date and displayed?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 7,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'plantRegPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 7
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'plantRegComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 7
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'fireMaintenance',
              'type': 'select',
              'label': 'Are fire maintenance records kept in fire resistent container?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 7,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'fireMainPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 7
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'fireMainComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 7
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'rpz',
              'type': 'select',
              'label': 'Are RPZ / Backflow devices tested and tagged?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 7,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'rpzPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 7
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'rpzComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 7
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'thermostaticMixing',
              'type': 'select',
              'label': 'Are Thermostatic Mixing Valves tested and records available on site?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 7,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'thermostaticPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 7
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'thermostaticComm',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 7
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': '_message_2',
              'type': 'message',
              'html': '<a id="done" data-role="button" onclick="changeFormPage(0);">Done</a>',
              'page': 7
            },
            'list': [],
            'add': [],
            'edit': [],
            'view': [],
            'delete': []
          },
          {
            'default': {
              'name': '_heading_7',
              'type': 'heading',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'text': 'Work Health And Safety',
              'headingPageBreak': '1',
              'position': 'left',
              'fontFace': 'arial',
              'page': 8
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'firstAidKit',
              'type': 'select',
              'label': 'First Aid Kit available and serviced?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': 'N/A',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 8,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'firstAidPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 8
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'firstAidComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 8
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'defibAvail',
              'type': 'select',
              'label': 'Defibrillator available and serviced?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': 'N/A',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 8,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'defibPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 8
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'defibComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 8
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'PPEAvail',
              'type': 'select',
              'label': 'PPE is available (ear plugs, sunscreen etc)?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': 'N/A',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 8,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'PPEPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 8
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'PPEComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 8
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'spillProcedure',
              'type': 'select',
              'label': 'Spill procedures are in place?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': 'N/A',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 8,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'spillProcedPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 8
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'spillProcedComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 8
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'spillKit',
              'type': 'select',
              'label': 'A spill kit is available and tamper seal is in tact?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': 'N/A',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 8,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'spillKitPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 8
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'spillKitComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 8
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'slipTesting',
              'type': 'select',
              'label': 'Slip testing has been carried out in the last 12 months?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': 'N/A',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 8,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'slipTestPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 8
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'slipTestComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 8
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'independentSite',
              'type': 'select',
              'label': 'An Independent Site Risk Review has been completed?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': 'N/A',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 8,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'independentPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 8
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'independentComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 8
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': '_message_10',
              'type': 'message',
              'html': '<a id="done" data-role="button" onclick="changeFormPage(0);">Done</a>',
              'page': 8
            }
          },
          {
            'default': {
              'name': '_heading_8',
              'type': 'heading',
              'text': 'Stairs, Steps, Ladders, Walkways, Anchors',
              'headingPageBreak': '1',
              'position': 'left',
              'fontFace': 'arial',
              'page': 9
            }
          },
          {
            'default': {
              'name': 'stepLocation',
              'type': 'text',
              'label': 'Location / floor identifier ',
              'page': 9
            }
          },
          {
            'default': {
              'name': 'wornBrokenSteps',
              'type': 'select',
              'label': 'Are there any worn or broken steps?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': 'N/A',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 9,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'wornStepPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 9
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'wornStepComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 9
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'handRails',
              'type': 'select',
              'label': 'Are the handrails in good condition?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': 'N/A',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 9,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'handRailsPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 9
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'handRailsComments',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 9
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'anchorsTagged',
              'type': 'select',
              'label': 'Anchors, Ladders, Walkways & Safety Lines are tagged and up to date?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': 'N/A',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 9,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'anchorsTagPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 9
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'anchorsTagComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 9
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'nonSlipTreatments',
              'type': 'select',
              'label': 'Are non-slip treatments/treads in good condition?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': 'N/A',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 9,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'noSlipPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 9
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'noSlipComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 9
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'nosingTreatments',
              'type': 'select',
              'label': 'Are nosing treatments in good repair?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'defaultValue': 'N/A',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 9,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'nosingTreatPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 9
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'nosingTreatComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 9
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': '_message_9',
              'type': 'message',
              'html': '<a id="done" data-role="button" onclick="changeFormPage(0);">Done</a>',
              'page': 9
            }
          },
          {
            'default': {
              'name': '_heading_9',
              'type': 'heading',
              'text': 'Amenities And End Of Trip Facilities',
              'headingPageBreak': '1',
              'position': 'left',
              'fontFace': 'arial',
              'page': 10
            }
          },
          {
            'default': {
              'name': 'amenitiesLocation',
              'type': 'text',
              'label': 'Location / floor identifier ',
              'page': 10
            }
          },
          {
            'default': {
              'name': 'washroomAreasClean',
              'type': 'number',
              'label': 'Washrooms areas clean.',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'step': '1',
              'useSlider': '1',
              'max': '5',
              'page': 10
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'washroomPhoto',
              'type': 'file',
              'label': 'Photo',
              'capture': true,
              'accept': 'image/*',
              'page': 10
            }
          },
          {
            'default': {
              'name': 'washroomComment',
              'type': 'textarea',
              'label': 'Comments',
              'page': 10
            }
          },
          {
            'default': {
              'name': 'toiletsClean',
              'type': 'number',
              'label': 'Toilets Clean',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'step': '1',
              'useSlider': '1',
              'max': '5',
              'page': 10
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'toiletsPhoto',
              'type': 'file',
              'label': 'Photo',
              'capture': true,
              'accept': 'image/*',
              'page': 10
            }
          },
          {
            'default': {
              'name': 'toiletsComment',
              'type': 'textarea',
              'label': 'Comments',
              'page': 10
            }
          },
          {
            'default': {
              'name': 'basinsClean',
              'type': 'number',
              'label': 'Basins Clean',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'step': '1',
              'useSlider': '1',
              'max': '5',
              'page': 10
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'basinsPhoto',
              'type': 'file',
              'label': 'Photo',
              'capture': true,
              'accept': 'image/*',
              'page': 10
            }
          },
          {
            'default': {
              'name': 'basinsComment',
              'type': 'textarea',
              'label': 'Comments',
              'page': 10
            }
          },
          {
            'default': {
              'name': 'showersClean',
              'type': 'number',
              'label': 'Showers Clean',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'step': '1',
              'useSlider': '1',
              'max': '5',
              'page': 10
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'showersPhoto',
              'type': 'file',
              'label': 'Photo',
              'capture': true,
              'accept': 'image/*',
              'page': 10
            }
          },
          {
            'default': {
              'name': 'showersComment',
              'type': 'textarea',
              'label': 'Comments',
              'page': 10
            }
          },
          {
            'default': {
              'name': 'rubbishBins',
              'type': 'select',
              'label': 'Rubbish bins are available and covered?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 10,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'rubbishPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 10
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'rubbishComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 10
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'consumablesAvail',
              'type': 'select',
              'label': 'Consumable stock is sufficient?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 10,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'consumablesPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 10
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'consumablesComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 10
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'sanitaryBins',
              'type': 'select',
              'label': 'Sanitary bins are tidy?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 10,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'sanitaryPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 10
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'sanitaryComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 10
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'deodorizersOperate',
              'type': 'select',
              'label': 'Deodorizers are in place and operating?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 10,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'deodorizersPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 10
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'deodorizersComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 10
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'handDryers',
              'type': 'select',
              'label': 'Hand dryers are hardwired in or flex and plug is tagged?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 10,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'handDryersPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 10
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'handDryersComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 10
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': '_message_8',
              'type': 'message',
              'html': '<a id="done" data-role="button" onclick="changeFormPage(0);">Done</a>',
              'page': 10
            }
          },
          {
            'default': {
              'name': '_heading_10',
              'type': 'heading',
              'text': 'Roofs And Facades',
              'headingPageBreak': '1',
              'position': 'left',
              'fontFace': 'arial',
              'page': 11
            }
          },
          {
            'default': {
              'name': 'roofAreas',
              'type': 'select',
              'label': 'Roof areas are secured and locked?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 11,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'roofAreasPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'roofAreasComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'roofGutterClear',
              'type': 'select',
              'label': 'Roofs and gutters are clean and clear of debris?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 11,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'roofGutterPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'roofGutterComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'looseRoofSheeting',
              'type': 'select',
              'label': 'Is there any loose roof sheeting, flashing, guttering, external screening etc?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 11,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'looseRoofPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'looseRoofComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'glazingCraked',
              'type': 'select',
              'label': 'Is any external glazing cracked or broken?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 11,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'glazingCrackPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'glazingCrackedCom',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'externalGlazingCl',
              'type': 'number',
              'label': 'The external glazing is clean.',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'step': '1',
              'useSlider': '1',
              'max': '5',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'externalGlazPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'externalGlazCom',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'waterLeaks',
              'type': 'select',
              'label': 'Any sign of water leaks?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 11,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'waterLeaksPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'waterLeaksComm',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'hfRfEquip',
              'type': 'select',
              'label': 'High frequency (HF) and Radio Frequeancy (RF) equipment is locked off, signage installed and procedures for access are in place?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 11,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'hfRfEPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'hfRfEComments',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'roofAccessPlan',
              'type': 'select',
              'label': 'Restricted Area signage and roof access plan in place?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 11,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'roofAccessPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'roofAccessComments',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'roofPermit',
              'type': 'select',
              'label': 'Roof access permits and working from heights permits are available?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 11,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'roofPermitPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'roofPermitComments',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'bmuReg',
              'type': 'select',
              'label': 'BMU Registration is displayed and service record available?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 11,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'bmuPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'bmuComments',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 11
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': '_message_7',
              'type': 'message',
              'html': '<a id="done" data-role="button" onclick="changeFormPage(0);">Done</a>',
              'page': 11
            }
          },
          {
            'default': {
              'name': '_heading_11',
              'type': 'heading',
              'text': 'Fire Services',
              'headingPageBreak': '1',
              'position': 'left',
              'fontFace': 'arial',
              'page': 12
            }
          },
          {
            'default': {
              'name': 'fireLocation',
              'type': 'text',
              'label': 'Location / floor identifier ',
              'page': 12
            }
          },
          {
            'default': {
              'name': 'testLogBooks',
              'type': 'select',
              'label': 'Test log books are available and all systems are being maintained?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'testLogBooksCalY',
              'type': 'date',
              'label': 'Calendar',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'dateFormat': 'dd_mm_yyyy',
              'defaultDate': 'now',
              'defaultValue': 'now',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            }
          },
          {
            'default': {
              'name': 'testLogBooksCalN',
              'type': 'date',
              'label': 'Calendar',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'dateFormat': 'dd_mm_yyyy',
              'defaultDate': 'now',
              'defaultValue': 'now',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            }
          },
          {
            'default': {
              'name': 'testLogPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'testLogComment',
              'type': 'textarea',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'noOutstandingdefec',
              'type': 'select',
              'label': 'There are no outstanding defects on fire maintenance?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'noOutstandCalYes',
              'type': 'date',
              'label': 'Calendar',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'dateFormat': 'dd_mm_yyyy',
              'defaultDate': 'now',
              'defaultValue': 'now',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            }
          },
          {
            'default': {
              'name': 'noOustandCalNo',
              'type': 'date',
              'label': 'Calendar',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'dateFormat': 'dd_mm_yyyy',
              'defaultDate': 'now',
              'defaultValue': 'now',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            }
          },
          {
            'default': {
              'name': 'noOutstandPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'noOutstandComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'extinguishHydrants',
              'type': 'select',
              'label': 'Extinguisher, Hydrant & Hose Reel Tags are within date?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'extinguishCalYes',
              'type': 'date',
              'label': 'Calendar',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'dateFormat': 'dd_mm_yyyy',
              'defaultDate': 'now',
              'defaultValue': 'now',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            }
          },
          {
            'default': {
              'name': 'extingusihCalNo',
              'type': 'date',
              'label': 'Calendar',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'dateFormat': 'dd_mm_yyyy',
              'defaultDate': 'now',
              'defaultValue': 'now',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'picker': 'picker',
              'dateFormat': 'dd_mm_yyyy'
            }
          },
          {
            'default': {
              'name': 'extinguishPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'extinguishComments',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'fireFighting',
              'type': 'select',
              'label': 'Is Fire fighting equipment easily accessible?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'firePhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'fireComments',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'appropSignage',
              'type': 'select',
              'label': 'Appropriate signage for extinguishers, hose reels and hydrants is in place?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'appropSignagePhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'appropSignageComm',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'hydrantSprinkler',
              'type': 'select',
              'label': 'Hydrant and Sprinkler booster cupboards are secured and tidy?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'hydrantSprinklerPh',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'hydrantSprinklerCm',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'capsOnHydrants',
              'type': 'select',
              'label': 'Protective caps are fitted on fire hydrants and booster connections?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'hydrantsPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'hydrantsComments',
              'type': 'text',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': 'fireDoorsFreeDamag',
              'type': 'select',
              'label': 'Fire doors are free from damage and are closed correctly?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'fireDoorPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'fireDoorComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'noOpenFire',
              'type': 'select',
              'label': 'Are there open fire penetrations in fire compartments (e.g., floors, walls, ceilings, service risers, etc)?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'noOpenPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'noOpenComment',
              'type': 'text',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': 'alarmCommunication',
              'type': 'select',
              'label': 'The alarm / communication system is adequete?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'alarmPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'alarmComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'smokingFlame',
              'type': 'select',
              'label': 'Signage is in place for smoking / naked flame restrictions and procedures for hot works followed?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'smokingFlamePhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'somkingFlameCom',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'emergPerson',
              'type': 'select',
              'label': 'Emergency personnel are identified and trained?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'emergPersonPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'emergPersonComm',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'emergProced',
              'type': 'select',
              'label': 'Emergency procedures manual is available on site?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'emergProcedPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'emergProcedComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'evacSigns',
              'type': 'select',
              'label': 'Evacuation signs are displayed and correctly orientated?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'evacSignsPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'evacSignsComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'fireEvacRecord',
              'type': 'select',
              'label': 'Fire and Evacuation Training are records available to jurisdiction requirements?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'fireEvacRPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'fireEvacRComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'fireProtecSys',
              'type': 'select',
              'label': 'All fire protection systems are maintained to jurisdiction standard?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'fireProtecSysPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'fireProtecSysComm',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'fireProtectSysOp',
              'type': 'select',
              'label': 'All fire protection systems are operational with no isolations?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'fireProtectOpPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'fireProtectOpComm',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'sprinklerHeads',
              'type': 'select',
              'label': 'Sprinkler heads are unobstructed and free from vermin and rubbish',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'sprinklerHeadPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'sprinklerHeadComm',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'baseLineData',
              'type': 'select',
              'label': 'Base line data is displayed?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'baseLinePhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'baseLineComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'firePumpsOp',
              'type': 'select',
              'label': 'Fire Pumps are operational?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'firePumpsOpPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'firePumpsOpComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'firPumpsAuto',
              'type': 'select',
              'label': 'Fire Pumps are set to start automatically?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'firePumpsAutoPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'firePumpsAutoComm',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'firePumpsFuel75',
              'type': 'select',
              'label': 'Fire Pumps have at least 75% fuel supply?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'firePumpsFuelPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'firePumpsComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'firePumpsAcces',
              'type': 'select',
              'label': 'Fire pumps are accessible and clear of combustibles?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'firePumpsAcPhoto',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'firePumpsAcComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'gaugeRead',
              'type': 'select',
              'label': 'All pressure guage readings are satisfactory?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 12,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'guageReadPhotoY',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'guageReadPhotoN',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'guageReadComment',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 12
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': '_message_6',
              'type': 'message',
              'html': '<a id="done" data-role="button" onclick="changeFormPage(0);">Done</a>',
              'page': 12
            }
          },
          {
            'default': {
              'name': '_heading_12',
              'type': 'heading',
              'text': 'Electrical',
              'headingPageBreak': '1',
              'position': 'left',
              'fontFace': 'arial',
              'page': 13
            }
          },
          {
            'default': {
              'name': 'electricalLocation',
              'type': 'text',
              'label': 'Location',
              'page': 13
            }
          },
          {
            'default': {
              'name': 'L96_switchRoom',
              'type': 'select',
              'label': 'Switch rooms (including MSB and transformer rooms) are clearly identified & locked?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 13,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'L96_switchRoomP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'L96_switchRoomC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'L97_dbLocked',
              'type': 'select',
              'label': "DB's are locked and labelled with no missing covers, all schedules are up to date?",
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 13,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'L97_dbLockedP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'L97_dbLockedC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'L98_noBrokenPlug',
              'type': 'select',
              'label': 'Are there broken plugs, sockets or switches?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 13,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'L98_noBrokenP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'L98_noBrokenC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'L99_noFrayedLeads',
              'type': 'select',
              'label': 'Are there frayed or defective leads?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 13,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'L99_noFrayedP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'L99_noFrayedC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'L100_officeEquip',
              'type': 'select',
              'label': 'Office and other electrical appliances equipment are in good condition?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 13,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'L100_officeEP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'L100_officeEC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'L101_equipInspec',
              'type': 'select',
              'label': 'Equipment and leads are inspected and tagged?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 13,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'L101_equipInP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'L101_equipInC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'L102_lockOut',
              'type': 'select',
              'label': 'Lock-out procedures/danger tags are in place?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 13,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'L102_lockOutP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'L102_lockOutC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'L103_rcdSys',
              'type': 'select',
              'label': "RCD's /earth leakage systems are used?",
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 13,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'L103_rcdSysP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'L103_rcdSysC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'L104_noCombustible',
              'type': 'select',
              'label': 'There is no combustible storage in electrical areas or rooms?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 13,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'L104_noCombustP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'L104_noCombustC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'L105_noTempWire',
              'type': 'select',
              'label': 'There is no temporary wiring?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 13,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'L105_noTempWireP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'L105_noTempWireC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'L106_batteryUPS',
              'type': 'select',
              'label': 'Battery and UPS rooms are clean and adequately ventilated?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 13,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'L106_batteryUPSP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'L106_batteryUPSC',
              'type': 'textarea',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 13
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': '_message_5',
              'type': 'message',
              'html': '<a id="done" data-role="button" onclick="changeFormPage(0);">Done</a>',
              'page': 13
            }
          },
          {
            'default': {
              'name': '_heading_13',
              'type': 'heading',
              'text': 'Mechanical',
              'headingPageBreak': '1',
              'position': 'left',
              'fontFace': 'arial',
              'page': 14
            }
          },
          {
            'default': {
              'name': 'M109_plantRoomClea',
              'type': 'number',
              'label': 'Plant rooms are clean and tidy.',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'step': '1',
              'useSlider': '1',
              'max': '5',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'M109_plantRoomP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'M109_plantRoomC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'M110_plantRoomSe',
              'type': 'select',
              'label': 'Plant rooms are secured?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 14,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'M110_plantRoomSeP',
              'type': 'text',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': 'M110_plantRoomSeC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'M111_equipFault',
              'type': 'select',
              'label': 'Are there any faults indicated on MSSB?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 14,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'M111_equipFaultP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'M111_equipFaultC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'M111N_equipfaultB',
              'type': 'select',
              'label': 'Are there any faults indicated on the BMCS?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 14,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'M111N_equpfaultBP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'M111N_equipfaultBC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'M112_chillerOp',
              'type': 'select',
              'label': 'Are chillers operational?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 14,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'M112_chillerOpP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'M112_chillerOpC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'M113_suppUnitOp',
              'type': 'select',
              'label': 'Are supplementary units operational?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 14,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'M113_suppUnitOpP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'M113_suppUnitOpC',
              'type': 'file',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'M114_tenantSuppOp',
              'type': 'select',
              'label': 'Are tenant supplementary units (including refrigeration units) operational?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 14,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'M114_tenantSuppOpP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'M114_tenantSuppOpC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'M115_coolingTower',
              'type': 'select',
              'label': 'Are Cooling towers operational?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 14,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'M115_coolingTowerP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'M115_coolingTowerC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'M116_waterTreat',
              'type': 'select',
              'label': 'Is water treatment equipment operational with adequate chemical levels?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 14,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'M116_waterTreatP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'M116_waterTreatC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'M117_baseTowerDry',
              'type': 'select',
              'label': 'Are the base of cooling towers dry and free from pooling water?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 14,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'M117_baseTowerDryP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'M117_baseTowerDryC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'M117N_noAlarms',
              'type': 'select',
              'label': 'No alarms on refrigeration monitors?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 14,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'M117N_noAlarmsP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'M117N_noAlarmsC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'M118_AHUSecured',
              'type': 'select',
              'label': "All AHU's secured and operational?",
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 14,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'M118_AHUSecuredP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'M118_AHUSecuredC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'M119_filtersCoils',
              'type': 'select',
              'label': 'Are filters and coils clean?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 14,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'M119_filtersCoilsP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'M119_filtersCoilsC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'M120_refrigPipe',
              'type': 'select',
              'label': 'The refrigeration piping is adequately insulated?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 14,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'M120_refrigPipeP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'M120_refrigPipeC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'M121_carParkEx',
              'type': 'select',
              'label': 'The car park exhaust system is operational?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 14,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'M121_carParkExP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'M121_carParkExC',
              'type': 'textarea',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'wrap': 'hard'
            }
          },
          {
            'default': {
              'name': 'kitchenBathFanOp',
              'type': 'select',
              'label': 'Kitchen, bathroom, toilet exhaust fans operational',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 14,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'kitchenBathFanOpP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'kitchenBathFanOpC',
              'type': 'text',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'page': 14
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': '_message_4',
              'type': 'message',
              'html': '<a id="done" data-role="button" onclick="changeFormPage(0);">Done</a>',
              'page': 14
            }
          },
          {
            'default': {
              'name': '_heading_14',
              'type': 'heading',
              'text': 'Other Building Services',
              'headingPageBreak': '1',
              'position': 'left',
              'fontFace': 'arial',
              'page': 15
            }
          },
          {
            'default': {
              'name': '_message_17',
              'type': 'message',
              'html': '<h2>Lifts</h2>\r\n<hr/>',
              'page': 15
            },
            'list': [],
            'add': [],
            'edit': [],
            'view': [],
            'delete': []
          },
          {
            'default': {
              'name': 'liftRoomClean',
              'type': 'number',
              'label': 'Lift Motor Room clean and ventilated',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'step': '1',
              'useSlider': '1',
              'max': '5',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain'
            }
          },
          {
            'default': {
              'name': 'liftTravOp',
              'type': 'select',
              'label': 'Lift cars, travelators, escalators operating correctly',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 15,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'lifttravCamera',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'lifttravComment',
              'type': 'text',
              'label': 'Comments',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': '_message_18',
              'type': 'message',
              'html': '<h2>Plumbing & Hydraulics</h2>\r\n<hr/>',
              'page': 15
            },
            'list': [],
            'add': [],
            'edit': [],
            'view': [],
            'delete': []
          },
          {
            'default': {
              'name': 'greaseTrapMaintain',
              'type': 'select',
              'label': 'Grease traps being maintained',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 15,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'greasetrapsCamera',
              'type': 'file',
              'label': 'Camera',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'greasetrapsComment',
              'type': 'text',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': 'sumpPumpOp',
              'type': 'select',
              'label': 'Sump pumps operational',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 15,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'sumpPumpOpP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'sumpPumpOpC',
              'type': 'text',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': 'recticulationOp',
              'type': 'select',
              'label': 'Reticulation pumps working',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 15,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'recticulationOpP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'recticulationOpC',
              'type': 'text',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': 'sewerageOp',
              'type': 'select',
              'label': 'Sewerage pumps working',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 15,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'sewerageOpP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'sewerageOpC',
              'type': 'text',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': 'hotSysOp',
              'type': 'select',
              'label': 'Hot water system operational',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 15,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'hotSysOpP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'hotSysOpC',
              'type': 'text',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': '_message_19',
              'type': 'message',
              'html': '<h2>Security & CCTV</h2>\r\n<hr/>',
              'page': 15
            },
            'list': [],
            'add': [],
            'edit': [],
            'view': [],
            'delete': []
          },
          {
            'default': {
              'name': 'fuelTankInteg',
              'type': 'select',
              'label': 'Fuel tanks integrity testing completed',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 15,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'fuelTankIntegP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'fuelTankIntegC',
              'type': 'text',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': 'accessControlOp',
              'type': 'select',
              'label': 'Access control system operational and backed up',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 15,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'accessControlOpP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'accessControlOpC',
              'type': 'text',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': 'keysAccessCardSec',
              'type': 'select',
              'label': 'Keys and access cards secured and audited',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 15,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'keysAccessCardSecP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'keyAccessCardSecC',
              'type': 'text',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': 'cctvSysOp',
              'type': 'select',
              'label': 'CCTV system operational and history backed up',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 15,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'cctvSysOpP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'cctvSysOpC',
              'type': 'text',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': 'secPatrol',
              'type': 'select',
              'label': 'Security patrols in place',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 15,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'secPatrolP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'secPatrolC',
              'type': 'text',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': '_message_20',
              'type': 'message',
              'html': '<h2>Generators</h2>\r\n<hr/>',
              'page': 15
            },
            'list': [],
            'add': [],
            'edit': [],
            'view': [],
            'delete': []
          },
          {
            'default': {
              'name': 'generatorOp',
              'type': 'select',
              'label': 'The generator is operational and in standby mode?',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 15,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'generatorOpP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'generatorOpC',
              'type': 'text',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': 'fillpointSysOp',
              'type': 'select',
              'label': 'Fillpoint Sys Op',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 15,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'fillpointSysOpP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'fillpointSysOpC',
              'type': 'text',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': 'dieselpumpOp',
              'type': 'select',
              'label': 'Dieselpump Op',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 15,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'dieselpumpOpP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'dieselpumpOpC',
              'type': 'text',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': 'dieselfuelFreeDmg',
              'type': 'select',
              'label': 'Dieselfuel Free Dmg',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'rowClass': 'layout:horizontal;',
              'mode': 'expanded',
              'page': 15,
              'options': {
                'Yes': 'Yes',
                'No': 'No',
                'N/A': 'N/A'
              }
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'mode': 'expanded'
            }
          },
          {
            'default': {
              'name': 'dieselfuelfreeDmgP',
              'type': 'file',
              'label': 'Photo',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'capture': true,
              'accept': 'image/*'
            }
          },
          {
            'default': {
              'name': 'dieselfuelfreeDmgC',
              'type': 'text',
              'label': 'Comment',
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters',
              'page': 15
            },
            'list': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'add': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'edit': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'view': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            },
            'delete': {
              'labelPlacement': 'default',
              'labelStyle': 'Plain',
              'maxWidthPrefix': 'characters'
            }
          },
          {
            'default': {
              'name': '_message_16',
              'type': 'message',
              'html': '<a id="done" data-role="button" onclick="changeFormPage(0);">Done</a>',
              'page': 15
            }
          }
        ],
        '_checks': [
          {
            'default': {
              'name': 'incidentTypeIsPublicLiability',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'incidentType'
                    ]
                  },
                  'Public Liability'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'incidentTypeIsPublicLiability',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'incidentType'
                    ]
                  },
                  'Public Liability'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'incidentTypeIsBuilding&Equipment',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'incidentType'
                    ]
                  },
                  'Building & Equipment'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'incidentTypeIsBuilding&Equipment',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'incidentType'
                    ]
                  },
                  'Building & Equipment'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'reviewedIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'reviewed'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'reviewedIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'reviewed'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'wasteRemovalIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'wasteRemoval'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'wasteRemovalIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'wasteRemoval'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'slipTripHazardsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'slipTripHazards'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'slipTripHazardsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'slipTripHazards'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'externalAreasIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'externalAreas'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'externalAreasIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'externalAreas'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'pestControlIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'pestControl'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'pestControlIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'pestControl'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'rubbishAreasIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'rubbishAreas'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'rubbishAreasIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'rubbishAreas'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'unobAndDefinedIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'unobAndDefined'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'unobAndDefinedIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'unobAndDefined'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'adLightingIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'AdLighting'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'adLightingIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'AdLighting'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'emergencySignIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'emergencySign'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'emergencySignIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'emergencySign'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'fireDoorSignIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'fireDoorSign'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'fireDoorSignIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'fireDoorSign'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'exitDoorOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'exitDoorOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'exitDoorOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'exitDoorOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'stairwellsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'stairwells'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'stairwellsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'stairwells'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'signInIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'signIn'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'signInIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'signIn'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'siteKeysIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'siteKeys'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'siteKeysIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'siteKeys'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'siteKeyLockBoxIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'siteKeyLockBox'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'siteKeyLockBoxIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'siteKeyLockBox'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'permitsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'permits'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'permitsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'permits'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'houseRuleIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'houseRule'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'houseRuleIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'houseRule'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'tenancyFitIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'tenancyFit'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'tenancyFitIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'tenancyFit'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'hotWorksIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'hotWorks'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'hotWorksIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'hotWorks'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'serviceFailureIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'serviceFailure'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'serviceFailureIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'serviceFailure'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'bmuPermitsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'bmuPermits'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'bmuPermitsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'bmuPermits'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'materialsRegisterIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'materialsRegister'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'materialsRegisterIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'materialsRegister'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'msdsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'msds'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'msdsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'msds'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'containersLabelledIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'containersLabelled'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'containersLabelledIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'containersLabelled'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'adequateVentilationIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'adequateVentilation'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'adequateVentilationIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'adequateVentilation'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'bundedAreasIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'bundedAreas'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'bundedAreasIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'bundedAreas'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'asbestosRegisterIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'asbestosRegister'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'asbestosRegisterIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'asbestosRegister'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'asbestosManagementIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'asbestosManagement'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'asbestosManagementIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'asbestosManagement'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'areasCleanIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'areasClean'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'areasCleanIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'areasClean'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'certificateClassificationIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'certificateClassification'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'certificateClassificationIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'certificateClassification'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'engineeredSolutionsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'engineeredSolutions'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'engineeredSolutionsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'engineeredSolutions'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'occupiersIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'occupiers'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'occupiersIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'occupiers'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'afterHoursEmergencyIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'afterHoursEmergency'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'afterHoursEmergencyIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'afterHoursEmergency'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'plantRegistrationsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'plantRegistrations'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'plantRegistrationsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'plantRegistrations'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'fireMaintenanceIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'fireMaintenance'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'fireMaintenanceIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'fireMaintenance'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'rpzIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'rpz'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'rpzIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'rpz'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'thermostaticMixingIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'thermostaticMixing'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'thermostaticMixingIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'thermostaticMixing'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'firstAidKitIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'firstAidKit'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'firstAidKitIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'firstAidKit'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'defibAvailIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'defibAvail'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'defibAvailIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'defibAvail'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'pPEAvailIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'PPEAvail'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'pPEAvailIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'PPEAvail'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'spillProcedureIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'spillProcedure'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'spillProcedureIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'spillProcedure'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'spillKitIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'spillKit'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'spillKitIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'spillKit'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'slipTestingIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'slipTesting'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'slipTestingIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'slipTesting'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'independentSiteIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'independentSite'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'independentSiteIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'independentSite'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'wornBrokenStepsIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'wornBrokenSteps'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'wornBrokenStepsIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'wornBrokenSteps'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'handRailsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'handRails'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'handRailsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'handRails'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'anchorsTaggedIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'anchorsTagged'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'anchorsTaggedIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'anchorsTagged'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'nonSlipTreatmentsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'nonSlipTreatments'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'nonSlipTreatmentsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'nonSlipTreatments'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'nosingTreatmentsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'nosingTreatments'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'nosingTreatmentsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'nosingTreatments'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'rubbishBinsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'rubbishBins'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'rubbishBinsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'rubbishBins'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'consumablesAvailIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'consumablesAvail'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'consumablesAvailIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'consumablesAvail'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'sanitaryBinsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'sanitaryBins'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'sanitaryBinsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'sanitaryBins'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'deodorizersOperateIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'deodorizersOperate'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'deodorizersOperateIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'deodorizersOperate'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'handDryersIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'handDryers'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'handDryersIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'handDryers'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'roofAreasIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'roofAreas'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'roofAreasIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'roofAreas'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'roofGutterClearIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'roofGutterClear'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'roofGutterClearIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'roofGutterClear'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'looseRoofSheetingIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'looseRoofSheeting'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'looseRoofSheetingIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'looseRoofSheeting'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'glazingCrakedIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'glazingCraked'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'glazingCrakedIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'glazingCraked'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'waterLeaksIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'waterLeaks'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'waterLeaksIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'waterLeaks'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'hfRfEquipIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'hfRfEquip'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'hfRfEquipIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'hfRfEquip'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'roofAccessPlanIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'roofAccessPlan'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'roofAccessPlanIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'roofAccessPlan'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'roofPermitIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'roofPermit'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'roofPermitIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'roofPermit'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'bmuRegIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'bmuReg'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'bmuRegIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'bmuReg'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'testLogBooksIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'testLogBooks'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'testLogBooksIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'testLogBooks'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'testLogBooksIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'testLogBooks'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'testLogBooksIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'testLogBooks'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'noOutstandingdefecIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'noOutstandingdefec'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'noOutstandingdefecIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'noOutstandingdefec'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'noOutstandingdefecIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'noOutstandingdefec'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'noOutstandingdefecIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'noOutstandingdefec'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'extinguishHydrantsIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'extinguishHydrants'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'extinguishHydrantsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'extinguishHydrants'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'extinguishHydrantsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'extinguishHydrants'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'extinguishHydrantsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'extinguishHydrants'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'fireFightingIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'fireFighting'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'fireFightingIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'fireFighting'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'appropSignageIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'appropSignage'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'appropSignageIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'appropSignage'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'hydrantSprinklerIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'hydrantSprinkler'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'hydrantSprinklerIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'hydrantSprinkler'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'capsOnHydrantsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'capsOnHydrants'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'capsOnHydrantsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'capsOnHydrants'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'fireDoorsFreeDamagIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'fireDoorsFreeDamag'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'fireDoorsFreeDamagIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'fireDoorsFreeDamag'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'noOpenFireIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'noOpenFire'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'noOpenFireIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'noOpenFire'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'alarmCommunicationIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'alarmCommunication'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'alarmCommunicationIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'alarmCommunication'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'smokingFlameIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'smokingFlame'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'smokingFlameIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'smokingFlame'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'emergPersonIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'emergPerson'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'emergPersonIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'emergPerson'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'emergProcedIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'emergProced'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'emergProcedIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'emergProced'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'evacSignsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'evacSigns'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'evacSignsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'evacSigns'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'fireEvacRecordIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'fireEvacRecord'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'fireEvacRecordIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'fireEvacRecord'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'fireProtecSysIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'fireProtecSys'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'fireProtecSysIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'fireProtecSys'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'fireProtectSysOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'fireProtectSysOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'fireProtectSysOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'fireProtectSysOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'sprinklerHeadsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'sprinklerHeads'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'sprinklerHeadsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'sprinklerHeads'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'baseLineDataIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'baseLineData'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'baseLineDataIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'baseLineData'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'firePumpsOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'firePumpsOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'firePumpsOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'firePumpsOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'firPumpsAutoIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'firPumpsAuto'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'firPumpsAutoIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'firPumpsAuto'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'firePumpsFuel75IsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'firePumpsFuel75'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'firePumpsFuel75IsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'firePumpsFuel75'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'firePumpsAccesIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'firePumpsAcces'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'firePumpsAccesIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'firePumpsAcces'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'gaugeReadIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'gaugeRead'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'gaugeReadIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'gaugeRead'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'gaugeReadIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'gaugeRead'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l96SwitchRoomIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L96_switchRoom'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l96SwitchRoomIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L96_switchRoom'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l97DbLockedIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L97_dbLocked'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l97DbLockedIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L97_dbLocked'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l98NoBrokenPlugIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L98_noBrokenPlug'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l98NoBrokenPlugIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L98_noBrokenPlug'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l99NoFrayedLeadsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L99_noFrayedLeads'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l99NoFrayedLeadsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L99_noFrayedLeads'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l100OfficeEquipIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L100_officeEquip'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l100OfficeEquipIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L100_officeEquip'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l101EquipInspecIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L101_equipInspec'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l101EquipInspecIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L101_equipInspec'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l102LockOutIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L102_lockOut'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l102LockOutIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L102_lockOut'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l103RcdSysIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L103_rcdSys'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l103RcdSysIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L103_rcdSys'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l104NoCombustibleIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L104_noCombustible'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l104NoCombustibleIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L104_noCombustible'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l105NoTempWireIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L105_noTempWire'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l105NoTempWireIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L105_noTempWire'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l105NoTempWireIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L105_noTempWire'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l106BatteryUPSIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L106_batteryUPS'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'l106BatteryUPSIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'L106_batteryUPS'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm110PlantRoomSeIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M110_plantRoomSe'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm110PlantRoomSeIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M110_plantRoomSe'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm111EquipFaultIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M111_equipFault'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm111EquipFaultIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M111_equipFault'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm111NEquipfaultBIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M111N_equipfaultB'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm111NEquipfaultBIsYes',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M111N_equipfaultB'
                    ]
                  },
                  'Yes'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm112ChillerOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M112_chillerOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm112ChillerOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M112_chillerOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm113SuppUnitOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M113_suppUnitOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm113SuppUnitOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M113_suppUnitOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm114TenantSuppOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M114_tenantSuppOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm114TenantSuppOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M114_tenantSuppOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm115CoolingTowerIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M115_coolingTower'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm115CoolingTowerIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M115_coolingTower'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm116WaterTreatIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M116_waterTreat'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm116WaterTreatIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M116_waterTreat'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm117BaseTowerDryIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M117_baseTowerDry'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm117BaseTowerDryIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M117_baseTowerDry'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm117NNoAlarmsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M117N_noAlarms'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm117NNoAlarmsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M117N_noAlarms'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm118AHUSecuredIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M118_AHUSecured'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm118AHUSecuredIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M118_AHUSecured'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm119FiltersCoilsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M119_filtersCoils'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm119FiltersCoilsIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M119_filtersCoils'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm120RefrigPipeIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M120_refrigPipe'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm120RefrigPipeIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M120_refrigPipe'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm121CarParkExIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M121_carParkEx'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'm121CarParkExIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'M121_carParkEx'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'kitchenBathFanOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'kitchenBathFanOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'kitchenBathFanOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'kitchenBathFanOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'liftTravOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'liftTravOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'liftTravOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'liftTravOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'greaseTrapMaintainIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'greaseTrapMaintain'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'greaseTrapMaintainIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'greaseTrapMaintain'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'sumpPumpOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'sumpPumpOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'sumpPumpOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'sumpPumpOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'recticulationOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'recticulationOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'recticulationOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'recticulationOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'sewerageOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'sewerageOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'sewerageOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'sewerageOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'hotSysOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'hotSysOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'hotSysOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'hotSysOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'fuelTankIntegIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'fuelTankInteg'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'fuelTankIntegIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'fuelTankInteg'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'accessControlOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'accessControlOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'accessControlOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'accessControlOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'keysAccessCardSecIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'keysAccessCardSec'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'keysAccessCardSecIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'keysAccessCardSec'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'cctvSysOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'cctvSysOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'cctvSysOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'cctvSysOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'secPatrolIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'secPatrol'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'secPatrolIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'secPatrol'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'generatorOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'generatorOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'generatorOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'generatorOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'fillpointSysOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'fillpointSysOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'fillpointSysOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'fillpointSysOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'dieselpumpOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'dieselpumpOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'dieselpumpOpIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'dieselpumpOp'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'dieselfuelFreeDmgIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'dieselfuelFreeDmg'
                    ]
                  },
                  'No'
                ]
              }
            }
          },
          {
            'default': {
              'name': 'dieselfuelFreeDmgIsNo',
              'exp': {
                'operator': '==',
                'operands': [
                  {
                    'operator': 'formElement.value',
                    'operands': [
                      'dieselfuelFreeDmg'
                    ]
                  },
                  'No'
                ]
              }
            }
          }
        ],
        '_actions': [
          {
            'default': {
              'name': 'showLiabilityPhoto',
              'manipulations': [
                {
                  'target': 'liabilityPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showLiabilityComment',
              'manipulations': [
                {
                  'target': 'liabilityComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBuildingPhoto',
              'manipulations': [
                {
                  'target': 'buildingPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBuildingComment',
              'manipulations': [
                {
                  'target': 'buildingComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPreviousPhoto',
              'manipulations': [
                {
                  'target': 'previousPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPreviousComment',
              'manipulations': [
                {
                  'target': 'previousComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showWasteRemovalPhoto',
              'manipulations': [
                {
                  'target': 'wasteRemovalPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showWasteRemovalComm',
              'manipulations': [
                {
                  'target': 'wasteRemovalComm',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSlipTripPhoto',
              'manipulations': [
                {
                  'target': 'slipTripPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSlipTripComm',
              'manipulations': [
                {
                  'target': 'slipTripComm',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showExternalAreasPhoto',
              'manipulations': [
                {
                  'target': 'externalAreasPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showExternalAreasComm',
              'manipulations': [
                {
                  'target': 'externalAreasComm',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPestControlPhoto',
              'manipulations': [
                {
                  'target': 'pestControlPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPestControlComm',
              'manipulations': [
                {
                  'target': 'pestControlComm',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRubbishAreasPhoto',
              'manipulations': [
                {
                  'target': 'rubbishAreasPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRubbishAreasComm',
              'manipulations': [
                {
                  'target': 'rubbishAreasComm',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showUnobDefinedPhoto',
              'manipulations': [
                {
                  'target': 'unobDefinedPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showUnobDefinedComment',
              'manipulations': [
                {
                  'target': 'unobDefinedComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAdLightingPhoto',
              'manipulations': [
                {
                  'target': 'AdLightingPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAdLightingComment',
              'manipulations': [
                {
                  'target': 'AdLightingComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEmergencySignPhoto',
              'manipulations': [
                {
                  'target': 'emergencySignPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEmergencySignComm',
              'manipulations': [
                {
                  'target': 'emergencySignComm',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireDoorSignPhoto',
              'manipulations': [
                {
                  'target': 'fireDoorSignPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireDoorSignComm',
              'manipulations': [
                {
                  'target': 'fireDoorSignComm',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showExitDoorOpPhoto',
              'manipulations': [
                {
                  'target': 'exitDoorOpPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showExitDoorOpComm',
              'manipulations': [
                {
                  'target': 'exitDoorOpComm',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showStairwellsPhoto',
              'manipulations': [
                {
                  'target': 'stairwellsPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showStairwellsComm',
              'manipulations': [
                {
                  'target': 'stairwellsComm',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSignInPhoto',
              'manipulations': [
                {
                  'target': 'signInPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSignInComments',
              'manipulations': [
                {
                  'target': 'signInComments',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSiteKeysPhoto',
              'manipulations': [
                {
                  'target': 'siteKeysPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSiteKeysComment',
              'manipulations': [
                {
                  'target': 'siteKeysComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSiteKeyLockPhoto',
              'manipulations': [
                {
                  'target': 'siteKeyLockPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSiteKeyLockComm',
              'manipulations': [
                {
                  'target': 'siteKeyLockComm',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPermitsPhoto',
              'manipulations': [
                {
                  'target': 'permitsPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPermitsComment',
              'manipulations': [
                {
                  'target': 'permitsComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHouseRulePhoto',
              'manipulations': [
                {
                  'target': 'houseRulePhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHouseRuleComment',
              'manipulations': [
                {
                  'target': 'houseRuleComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showTenancyFitPhoto',
              'manipulations': [
                {
                  'target': 'tenancyFitPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showTenancyFitComment',
              'manipulations': [
                {
                  'target': 'tenancyFitComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHotWorksPhoto',
              'manipulations': [
                {
                  'target': 'hotWorksPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHotWorksComment',
              'manipulations': [
                {
                  'target': 'hotWorksComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showServiceFailPhoto',
              'manipulations': [
                {
                  'target': 'serviceFailPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showServiceFailComment',
              'manipulations': [
                {
                  'target': 'serviceFailComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBmuPermitPhoto',
              'manipulations': [
                {
                  'target': 'bmuPermitPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBmuPermitComment',
              'manipulations': [
                {
                  'target': 'bmuPermitComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showMaterialsRegPhoto',
              'manipulations': [
                {
                  'target': 'materialsRegPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showMaterialRegComment',
              'manipulations': [
                {
                  'target': 'materialRegComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showMsdsPhoto',
              'manipulations': [
                {
                  'target': 'msdsPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showMsdsComment',
              'manipulations': [
                {
                  'target': 'msdsComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showContainLabelPhoto',
              'manipulations': [
                {
                  'target': 'containLabelPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showContainLabelCommen',
              'manipulations': [
                {
                  'target': 'containLabelCommen',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAdequateVentPhoto',
              'manipulations': [
                {
                  'target': 'adequateVentPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAdequateVentCom',
              'manipulations': [
                {
                  'target': 'adequateVentCom',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBundedAreasPhoto',
              'manipulations': [
                {
                  'target': 'bundedAreasPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBundedAreasComment',
              'manipulations': [
                {
                  'target': 'bundedAreasComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAsbestosRegPhoto',
              'manipulations': [
                {
                  'target': 'asbestosRegPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAsbestosRegComment',
              'manipulations': [
                {
                  'target': 'asbestosRegComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAsbestosManagPhoto',
              'manipulations': [
                {
                  'target': 'asbestosManagPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAsbestosMagComment',
              'manipulations': [
                {
                  'target': 'asbestosMagComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAreasCleanPhoto',
              'manipulations': [
                {
                  'target': 'areasCleanPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAreasCleanComment',
              'manipulations': [
                {
                  'target': 'areasCleanComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showCertificatePhoto',
              'manipulations': [
                {
                  'target': 'certificatePhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showCertificateComment',
              'manipulations': [
                {
                  'target': 'certificateComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEngineeredPhoto',
              'manipulations': [
                {
                  'target': 'engineeredPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEngineeredComment',
              'manipulations': [
                {
                  'target': 'engineeredComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showOccupiersPhoto',
              'manipulations': [
                {
                  'target': 'occupiersPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showOccupiersComment',
              'manipulations': [
                {
                  'target': 'occupiersComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAfterHoursPhoto',
              'manipulations': [
                {
                  'target': 'afterHoursPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAfterHoursComment',
              'manipulations': [
                {
                  'target': 'afterHoursComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPlantRegPhoto',
              'manipulations': [
                {
                  'target': 'plantRegPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPlantRegComment',
              'manipulations': [
                {
                  'target': 'plantRegComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireMainPhoto',
              'manipulations': [
                {
                  'target': 'fireMainPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireMainComment',
              'manipulations': [
                {
                  'target': 'fireMainComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRpzPhoto',
              'manipulations': [
                {
                  'target': 'rpzPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRpzComment',
              'manipulations': [
                {
                  'target': 'rpzComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showThermostaticPhoto',
              'manipulations': [
                {
                  'target': 'thermostaticPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showThermostaticComm',
              'manipulations': [
                {
                  'target': 'thermostaticComm',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirstAidPhoto',
              'manipulations': [
                {
                  'target': 'firstAidPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirstAidComment',
              'manipulations': [
                {
                  'target': 'firstAidComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showDefibPhoto',
              'manipulations': [
                {
                  'target': 'defibPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showDefibComment',
              'manipulations': [
                {
                  'target': 'defibComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPPEPhoto',
              'manipulations': [
                {
                  'target': 'PPEPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPPEComment',
              'manipulations': [
                {
                  'target': 'PPEComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSpillProcedPhoto',
              'manipulations': [
                {
                  'target': 'spillProcedPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSpillProcedComment',
              'manipulations': [
                {
                  'target': 'spillProcedComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSpillKitPhoto',
              'manipulations': [
                {
                  'target': 'spillKitPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSpillKitComment',
              'manipulations': [
                {
                  'target': 'spillKitComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSlipTestPhoto',
              'manipulations': [
                {
                  'target': 'slipTestPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSlipTestComment',
              'manipulations': [
                {
                  'target': 'slipTestComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showIndependentPhoto',
              'manipulations': [
                {
                  'target': 'independentPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showIndependentComment',
              'manipulations': [
                {
                  'target': 'independentComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showWornStepPhoto',
              'manipulations': [
                {
                  'target': 'wornStepPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showWornStepComment',
              'manipulations': [
                {
                  'target': 'wornStepComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHandRailsPhoto',
              'manipulations': [
                {
                  'target': 'handRailsPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHandRailsComments',
              'manipulations': [
                {
                  'target': 'handRailsComments',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAnchorsTagPhoto',
              'manipulations': [
                {
                  'target': 'anchorsTagPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAnchorsTagComment',
              'manipulations': [
                {
                  'target': 'anchorsTagComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNoSlipPhoto',
              'manipulations': [
                {
                  'target': 'noSlipPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNoSlipComment',
              'manipulations': [
                {
                  'target': 'noSlipComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNosingTreatPhoto',
              'manipulations': [
                {
                  'target': 'nosingTreatPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNosingTreatComment',
              'manipulations': [
                {
                  'target': 'nosingTreatComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRubbishPhoto',
              'manipulations': [
                {
                  'target': 'rubbishPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRubbishComment',
              'manipulations': [
                {
                  'target': 'rubbishComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showConsumablesPhoto',
              'manipulations': [
                {
                  'target': 'consumablesPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showConsumablesComment',
              'manipulations': [
                {
                  'target': 'consumablesComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSanitaryPhoto',
              'manipulations': [
                {
                  'target': 'sanitaryPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSanitaryComment',
              'manipulations': [
                {
                  'target': 'sanitaryComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showDeodorizersPhoto',
              'manipulations': [
                {
                  'target': 'deodorizersPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showDeodorizersComment',
              'manipulations': [
                {
                  'target': 'deodorizersComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHandDryersPhoto',
              'manipulations': [
                {
                  'target': 'handDryersPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHandDryersComment',
              'manipulations': [
                {
                  'target': 'handDryersComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRoofAreasPhoto',
              'manipulations': [
                {
                  'target': 'roofAreasPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRoofAreasComment',
              'manipulations': [
                {
                  'target': 'roofAreasComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRoofGutterPhoto',
              'manipulations': [
                {
                  'target': 'roofGutterPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRoofGutterComment',
              'manipulations': [
                {
                  'target': 'roofGutterComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showLooseRoofPhoto',
              'manipulations': [
                {
                  'target': 'looseRoofPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showLooseRoofComment',
              'manipulations': [
                {
                  'target': 'looseRoofComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showGlazingCrackPhoto',
              'manipulations': [
                {
                  'target': 'glazingCrackPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showGlazingCrackedCom',
              'manipulations': [
                {
                  'target': 'glazingCrackedCom',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showWaterLeaksPhoto',
              'manipulations': [
                {
                  'target': 'waterLeaksPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showWaterLeaksComm',
              'manipulations': [
                {
                  'target': 'waterLeaksComm',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHfRfEPhoto',
              'manipulations': [
                {
                  'target': 'hfRfEPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHfRfEComments',
              'manipulations': [
                {
                  'target': 'hfRfEComments',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRoofAccessPhoto',
              'manipulations': [
                {
                  'target': 'roofAccessPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRoofAccessComments',
              'manipulations': [
                {
                  'target': 'roofAccessComments',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRoofPermitPhoto',
              'manipulations': [
                {
                  'target': 'roofPermitPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRoofPermitComments',
              'manipulations': [
                {
                  'target': 'roofPermitComments',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBmuPhoto',
              'manipulations': [
                {
                  'target': 'bmuPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBmuComments',
              'manipulations': [
                {
                  'target': 'bmuComments',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showTestLogBooksCalY',
              'manipulations': [
                {
                  'target': 'testLogBooksCalY',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showTestLogBooksCalN',
              'manipulations': [
                {
                  'target': 'testLogBooksCalN',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showTestLogPhoto',
              'manipulations': [
                {
                  'target': 'testLogPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showTestLogComment',
              'manipulations': [
                {
                  'target': 'testLogComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNoOutstandCalYes',
              'manipulations': [
                {
                  'target': 'noOutstandCalYes',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNoOustandCalNo',
              'manipulations': [
                {
                  'target': 'noOustandCalNo',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNoOutstandPhoto',
              'manipulations': [
                {
                  'target': 'noOutstandPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNoOutstandComment',
              'manipulations': [
                {
                  'target': 'noOutstandComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showExtinguishCalYes',
              'manipulations': [
                {
                  'target': 'extinguishCalYes',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showExtingusihCalNo',
              'manipulations': [
                {
                  'target': 'extingusihCalNo',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showExtinguishPhoto',
              'manipulations': [
                {
                  'target': 'extinguishPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showExtinguishComments',
              'manipulations': [
                {
                  'target': 'extinguishComments',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirePhoto',
              'manipulations': [
                {
                  'target': 'firePhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireComments',
              'manipulations': [
                {
                  'target': 'fireComments',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAppropSignagePhoto',
              'manipulations': [
                {
                  'target': 'appropSignagePhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAppropSignageComm',
              'manipulations': [
                {
                  'target': 'appropSignageComm',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHydrantSprinklerPh',
              'manipulations': [
                {
                  'target': 'hydrantSprinklerPh',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHydrantSprinklerCm',
              'manipulations': [
                {
                  'target': 'hydrantSprinklerCm',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHydrantsPhoto',
              'manipulations': [
                {
                  'target': 'hydrantsPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHydrantsComments',
              'manipulations': [
                {
                  'target': 'hydrantsComments',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireDoorPhoto',
              'manipulations': [
                {
                  'target': 'fireDoorPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireDoorComment',
              'manipulations': [
                {
                  'target': 'fireDoorComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNoOpenPhoto',
              'manipulations': [
                {
                  'target': 'noOpenPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNoOpenComment',
              'manipulations': [
                {
                  'target': 'noOpenComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAlarmPhoto',
              'manipulations': [
                {
                  'target': 'alarmPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAlarmComment',
              'manipulations': [
                {
                  'target': 'alarmComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSmokingFlamePhoto',
              'manipulations': [
                {
                  'target': 'smokingFlamePhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSomkingFlameCom',
              'manipulations': [
                {
                  'target': 'somkingFlameCom',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEmergPersonPhoto',
              'manipulations': [
                {
                  'target': 'emergPersonPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEmergPersonComm',
              'manipulations': [
                {
                  'target': 'emergPersonComm',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEmergProcedPhoto',
              'manipulations': [
                {
                  'target': 'emergProcedPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEmergProcedComment',
              'manipulations': [
                {
                  'target': 'emergProcedComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEvacSignsPhoto',
              'manipulations': [
                {
                  'target': 'evacSignsPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEvacSignsComment',
              'manipulations': [
                {
                  'target': 'evacSignsComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireEvacRPhoto',
              'manipulations': [
                {
                  'target': 'fireEvacRPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireEvacRComment',
              'manipulations': [
                {
                  'target': 'fireEvacRComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireProtecSysPhoto',
              'manipulations': [
                {
                  'target': 'fireProtecSysPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireProtecSysComm',
              'manipulations': [
                {
                  'target': 'fireProtecSysComm',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireProtectOpPhoto',
              'manipulations': [
                {
                  'target': 'fireProtectOpPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireProtectOpComm',
              'manipulations': [
                {
                  'target': 'fireProtectOpComm',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSprinklerHeadPhoto',
              'manipulations': [
                {
                  'target': 'sprinklerHeadPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSprinklerHeadComm',
              'manipulations': [
                {
                  'target': 'sprinklerHeadComm',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBaseLinePhoto',
              'manipulations': [
                {
                  'target': 'baseLinePhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBaseLineComment',
              'manipulations': [
                {
                  'target': 'baseLineComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirePumpsOpPhoto',
              'manipulations': [
                {
                  'target': 'firePumpsOpPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirePumpsOpComment',
              'manipulations': [
                {
                  'target': 'firePumpsOpComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirePumpsAutoPhoto',
              'manipulations': [
                {
                  'target': 'firePumpsAutoPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirePumpsAutoComm',
              'manipulations': [
                {
                  'target': 'firePumpsAutoComm',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirePumpsFuelPhoto',
              'manipulations': [
                {
                  'target': 'firePumpsFuelPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirePumpsComment',
              'manipulations': [
                {
                  'target': 'firePumpsComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirePumpsAcPhoto',
              'manipulations': [
                {
                  'target': 'firePumpsAcPhoto',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirePumpsAcComment',
              'manipulations': [
                {
                  'target': 'firePumpsAcComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showGuageReadPhotoY',
              'manipulations': [
                {
                  'target': 'guageReadPhotoY',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showGuageReadPhotoN',
              'manipulations': [
                {
                  'target': 'guageReadPhotoN',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showGuageReadComment',
              'manipulations': [
                {
                  'target': 'guageReadComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL96SwitchRoomP',
              'manipulations': [
                {
                  'target': 'L96_switchRoomP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL96SwitchRoomC',
              'manipulations': [
                {
                  'target': 'L96_switchRoomC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL97DbLockedP',
              'manipulations': [
                {
                  'target': 'L97_dbLockedP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL97DbLockedC',
              'manipulations': [
                {
                  'target': 'L97_dbLockedC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL98NoBrokenP',
              'manipulations': [
                {
                  'target': 'L98_noBrokenP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL98NoBrokenC',
              'manipulations': [
                {
                  'target': 'L98_noBrokenC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL99NoFrayedP',
              'manipulations': [
                {
                  'target': 'L99_noFrayedP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL99NoFrayedC',
              'manipulations': [
                {
                  'target': 'L99_noFrayedC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL100OfficeEP',
              'manipulations': [
                {
                  'target': 'L100_officeEP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL100OfficeEC',
              'manipulations': [
                {
                  'target': 'L100_officeEC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL101EquipInP',
              'manipulations': [
                {
                  'target': 'L101_equipInP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL101EquipInC',
              'manipulations': [
                {
                  'target': 'L101_equipInC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL102LockOutP',
              'manipulations': [
                {
                  'target': 'L102_lockOutP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL102LockOutC',
              'manipulations': [
                {
                  'target': 'L102_lockOutC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL103RcdSysP',
              'manipulations': [
                {
                  'target': 'L103_rcdSysP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL103RcdSysC',
              'manipulations': [
                {
                  'target': 'L103_rcdSysC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL104NoCombustP',
              'manipulations': [
                {
                  'target': 'L104_noCombustP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL104NoCombustC',
              'manipulations': [
                {
                  'target': 'L104_noCombustC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL105NoTempWire',
              'manipulations': [
                {
                  'target': 'L105_noTempWire',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL105NoTempWireP',
              'manipulations': [
                {
                  'target': 'L105_noTempWireP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL105NoTempWireC',
              'manipulations': [
                {
                  'target': 'L105_noTempWireC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL106BatteryUPSP',
              'manipulations': [
                {
                  'target': 'L106_batteryUPSP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL106BatteryUPSC',
              'manipulations': [
                {
                  'target': 'L106_batteryUPSC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM110PlantRoomSeP',
              'manipulations': [
                {
                  'target': 'M110_plantRoomSeP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM110PlantRoomSeC',
              'manipulations': [
                {
                  'target': 'M110_plantRoomSeC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM111EquipFaultP',
              'manipulations': [
                {
                  'target': 'M111_equipFaultP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM111EquipFaultC',
              'manipulations': [
                {
                  'target': 'M111_equipFaultC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM111NEqupfaultBP',
              'manipulations': [
                {
                  'target': 'M111N_equpfaultBP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM111NEquipfaultBC',
              'manipulations': [
                {
                  'target': 'M111N_equipfaultBC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM112ChillerOpP',
              'manipulations': [
                {
                  'target': 'M112_chillerOpP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM112ChillerOpC',
              'manipulations': [
                {
                  'target': 'M112_chillerOpC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM113SuppUnitOpP',
              'manipulations': [
                {
                  'target': 'M113_suppUnitOpP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM113SuppUnitOpC',
              'manipulations': [
                {
                  'target': 'M113_suppUnitOpC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM114TenantSuppOpP',
              'manipulations': [
                {
                  'target': 'M114_tenantSuppOpP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM114TenantSuppOpC',
              'manipulations': [
                {
                  'target': 'M114_tenantSuppOpC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM115CoolingTowerP',
              'manipulations': [
                {
                  'target': 'M115_coolingTowerP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM115CoolingTowerC',
              'manipulations': [
                {
                  'target': 'M115_coolingTowerC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM116WaterTreatP',
              'manipulations': [
                {
                  'target': 'M116_waterTreatP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM116WaterTreatC',
              'manipulations': [
                {
                  'target': 'M116_waterTreatC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM117BaseTowerDryP',
              'manipulations': [
                {
                  'target': 'M117_baseTowerDryP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM117BaseTowerDryC',
              'manipulations': [
                {
                  'target': 'M117_baseTowerDryC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM117NNoAlarmsP',
              'manipulations': [
                {
                  'target': 'M117N_noAlarmsP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM117NNoAlarmsC',
              'manipulations': [
                {
                  'target': 'M117N_noAlarmsC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM118AHUSecuredP',
              'manipulations': [
                {
                  'target': 'M118_AHUSecuredP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM118AHUSecuredC',
              'manipulations': [
                {
                  'target': 'M118_AHUSecuredC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM119FiltersCoilsP',
              'manipulations': [
                {
                  'target': 'M119_filtersCoilsP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM119FiltersCoilsC',
              'manipulations': [
                {
                  'target': 'M119_filtersCoilsC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM120RefrigPipeP',
              'manipulations': [
                {
                  'target': 'M120_refrigPipeP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM120RefrigPipeC',
              'manipulations': [
                {
                  'target': 'M120_refrigPipeC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM121CarParkExP',
              'manipulations': [
                {
                  'target': 'M121_carParkExP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM121CarParkExC',
              'manipulations': [
                {
                  'target': 'M121_carParkExC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showKitchenBathFanOpP',
              'manipulations': [
                {
                  'target': 'kitchenBathFanOpP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showKitchenBathFanOpC',
              'manipulations': [
                {
                  'target': 'kitchenBathFanOpC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showLifttravCamera',
              'manipulations': [
                {
                  'target': 'lifttravCamera',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showLifttravComment',
              'manipulations': [
                {
                  'target': 'lifttravComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showGreasetrapsCamera',
              'manipulations': [
                {
                  'target': 'greasetrapsCamera',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showGreasetrapsComment',
              'manipulations': [
                {
                  'target': 'greasetrapsComment',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSumpPumpOpP',
              'manipulations': [
                {
                  'target': 'sumpPumpOpP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSumpPumpOpC',
              'manipulations': [
                {
                  'target': 'sumpPumpOpC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRecticulationOpP',
              'manipulations': [
                {
                  'target': 'recticulationOpP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRecticulationOpC',
              'manipulations': [
                {
                  'target': 'recticulationOpC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSewerageOpP',
              'manipulations': [
                {
                  'target': 'sewerageOpP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSewerageOpC',
              'manipulations': [
                {
                  'target': 'sewerageOpC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHotSysOpP',
              'manipulations': [
                {
                  'target': 'hotSysOpP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHotSysOpC',
              'manipulations': [
                {
                  'target': 'hotSysOpC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFuelTankIntegP',
              'manipulations': [
                {
                  'target': 'fuelTankIntegP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFuelTankIntegC',
              'manipulations': [
                {
                  'target': 'fuelTankIntegC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAccessControlOpP',
              'manipulations': [
                {
                  'target': 'accessControlOpP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAccessControlOpC',
              'manipulations': [
                {
                  'target': 'accessControlOpC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showKeysAccessCardSecP',
              'manipulations': [
                {
                  'target': 'keysAccessCardSecP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showKeyAccessCardSecC',
              'manipulations': [
                {
                  'target': 'keyAccessCardSecC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showCctvSysOpP',
              'manipulations': [
                {
                  'target': 'cctvSysOpP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showCctvSysOpC',
              'manipulations': [
                {
                  'target': 'cctvSysOpC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSecPatrolP',
              'manipulations': [
                {
                  'target': 'secPatrolP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSecPatrolC',
              'manipulations': [
                {
                  'target': 'secPatrolC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showGeneratorOpP',
              'manipulations': [
                {
                  'target': 'generatorOpP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showGeneratorOpC',
              'manipulations': [
                {
                  'target': 'generatorOpC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFillpointSysOpP',
              'manipulations': [
                {
                  'target': 'fillpointSysOpP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFillpointSysOpC',
              'manipulations': [
                {
                  'target': 'fillpointSysOpC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showDieselpumpOpP',
              'manipulations': [
                {
                  'target': 'dieselpumpOpP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showDieselpumpOpC',
              'manipulations': [
                {
                  'target': 'dieselpumpOpC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showDieselfuelfreeDmgP',
              'manipulations': [
                {
                  'target': 'dieselfuelfreeDmgP',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showDieselfuelfreeDmgC',
              'manipulations': [
                {
                  'target': 'dieselfuelfreeDmgC',
                  'properties': {
                    'hidden': false,
                    'persist': true
                  }
                }
              ]
            }
          }
        ],
        '_behaviours': [
          {
            'default': {
              'name': 'showLiabilityPhoto_incidentTypeIsPublicLiability',
              'check': 'incidentTypeIsPublicLiability',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showLiabilityPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showLiabilityComment_incidentTypeIsPublicLiability',
              'check': 'incidentTypeIsPublicLiability',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showLiabilityComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBuildingPhoto_incidentTypeIsBuilding&Equipment',
              'check': 'incidentTypeIsBuilding&Equipment',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showBuildingPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBuildingComment_incidentTypeIsBuilding&Equipment',
              'check': 'incidentTypeIsBuilding&Equipment',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showBuildingComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPreviousPhoto_reviewedIsNo',
              'check': 'reviewedIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showPreviousPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPreviousComment_reviewedIsNo',
              'check': 'reviewedIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showPreviousComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showWasteRemovalPhoto_wasteRemovalIsNo',
              'check': 'wasteRemovalIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showWasteRemovalPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showWasteRemovalComm_wasteRemovalIsNo',
              'check': 'wasteRemovalIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showWasteRemovalComm',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSlipTripPhoto_slipTripHazardsIsNo',
              'check': 'slipTripHazardsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSlipTripPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSlipTripComm_slipTripHazardsIsNo',
              'check': 'slipTripHazardsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSlipTripComm',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showExternalAreasPhoto_externalAreasIsNo',
              'check': 'externalAreasIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showExternalAreasPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showExternalAreasComm_externalAreasIsNo',
              'check': 'externalAreasIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showExternalAreasComm',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPestControlPhoto_pestControlIsNo',
              'check': 'pestControlIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showPestControlPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPestControlComm_pestControlIsNo',
              'check': 'pestControlIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showPestControlComm',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRubbishAreasPhoto_rubbishAreasIsNo',
              'check': 'rubbishAreasIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showRubbishAreasPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRubbishAreasComm_rubbishAreasIsNo',
              'check': 'rubbishAreasIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showRubbishAreasComm',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showUnobDefinedPhoto_unobAndDefinedIsNo',
              'check': 'unobAndDefinedIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showUnobDefinedPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showUnobDefinedComment_unobAndDefinedIsNo',
              'check': 'unobAndDefinedIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showUnobDefinedComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAdLightingPhoto_adLightingIsNo',
              'check': 'adLightingIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAdLightingPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAdLightingComment_adLightingIsNo',
              'check': 'adLightingIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAdLightingComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEmergencySignPhoto_emergencySignIsNo',
              'check': 'emergencySignIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showEmergencySignPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEmergencySignComm_emergencySignIsNo',
              'check': 'emergencySignIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showEmergencySignComm',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireDoorSignPhoto_fireDoorSignIsNo',
              'check': 'fireDoorSignIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFireDoorSignPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireDoorSignComm_fireDoorSignIsNo',
              'check': 'fireDoorSignIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFireDoorSignComm',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showExitDoorOpPhoto_exitDoorOpIsNo',
              'check': 'exitDoorOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showExitDoorOpPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showExitDoorOpComm_exitDoorOpIsNo',
              'check': 'exitDoorOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showExitDoorOpComm',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showStairwellsPhoto_stairwellsIsNo',
              'check': 'stairwellsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showStairwellsPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showStairwellsComm_stairwellsIsNo',
              'check': 'stairwellsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showStairwellsComm',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSignInPhoto_signInIsNo',
              'check': 'signInIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSignInPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSignInComments_signInIsNo',
              'check': 'signInIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSignInComments',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSiteKeysPhoto_siteKeysIsNo',
              'check': 'siteKeysIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSiteKeysPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSiteKeysComment_siteKeysIsNo',
              'check': 'siteKeysIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSiteKeysComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSiteKeyLockPhoto_siteKeyLockBoxIsNo',
              'check': 'siteKeyLockBoxIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSiteKeyLockPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSiteKeyLockComm_siteKeyLockBoxIsNo',
              'check': 'siteKeyLockBoxIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSiteKeyLockComm',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPermitsPhoto_permitsIsNo',
              'check': 'permitsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showPermitsPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPermitsComment_permitsIsNo',
              'check': 'permitsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showPermitsComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHouseRulePhoto_houseRuleIsNo',
              'check': 'houseRuleIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showHouseRulePhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHouseRuleComment_houseRuleIsNo',
              'check': 'houseRuleIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showHouseRuleComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showTenancyFitPhoto_tenancyFitIsNo',
              'check': 'tenancyFitIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showTenancyFitPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showTenancyFitComment_tenancyFitIsNo',
              'check': 'tenancyFitIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showTenancyFitComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHotWorksPhoto_hotWorksIsNo',
              'check': 'hotWorksIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showHotWorksPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHotWorksComment_hotWorksIsNo',
              'check': 'hotWorksIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showHotWorksComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showServiceFailPhoto_serviceFailureIsNo',
              'check': 'serviceFailureIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showServiceFailPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showServiceFailComment_serviceFailureIsNo',
              'check': 'serviceFailureIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showServiceFailComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBmuPermitPhoto_bmuPermitsIsNo',
              'check': 'bmuPermitsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showBmuPermitPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBmuPermitComment_bmuPermitsIsNo',
              'check': 'bmuPermitsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showBmuPermitComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showMaterialsRegPhoto_materialsRegisterIsNo',
              'check': 'materialsRegisterIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showMaterialsRegPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showMaterialRegComment_materialsRegisterIsNo',
              'check': 'materialsRegisterIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showMaterialRegComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showMsdsPhoto_msdsIsNo',
              'check': 'msdsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showMsdsPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showMsdsComment_msdsIsNo',
              'check': 'msdsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showMsdsComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showContainLabelPhoto_containersLabelledIsNo',
              'check': 'containersLabelledIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showContainLabelPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showContainLabelCommen_containersLabelledIsNo',
              'check': 'containersLabelledIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showContainLabelCommen',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAdequateVentPhoto_adequateVentilationIsNo',
              'check': 'adequateVentilationIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAdequateVentPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAdequateVentCom_adequateVentilationIsNo',
              'check': 'adequateVentilationIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAdequateVentCom',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBundedAreasPhoto_bundedAreasIsNo',
              'check': 'bundedAreasIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showBundedAreasPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBundedAreasComment_bundedAreasIsNo',
              'check': 'bundedAreasIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showBundedAreasComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAsbestosRegPhoto_asbestosRegisterIsNo',
              'check': 'asbestosRegisterIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAsbestosRegPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAsbestosRegComment_asbestosRegisterIsNo',
              'check': 'asbestosRegisterIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAsbestosRegComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAsbestosManagPhoto_asbestosManagementIsNo',
              'check': 'asbestosManagementIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAsbestosManagPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAsbestosMagComment_asbestosManagementIsNo',
              'check': 'asbestosManagementIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAsbestosMagComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAreasCleanPhoto_areasCleanIsNo',
              'check': 'areasCleanIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAreasCleanPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAreasCleanComment_areasCleanIsNo',
              'check': 'areasCleanIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAreasCleanComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showCertificatePhoto_certificateClassificationIsNo',
              'check': 'certificateClassificationIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showCertificatePhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showCertificateComment_certificateClassificationIsNo',
              'check': 'certificateClassificationIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showCertificateComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEngineeredPhoto_engineeredSolutionsIsNo',
              'check': 'engineeredSolutionsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showEngineeredPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEngineeredComment_engineeredSolutionsIsNo',
              'check': 'engineeredSolutionsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showEngineeredComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showOccupiersPhoto_occupiersIsNo',
              'check': 'occupiersIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showOccupiersPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showOccupiersComment_occupiersIsNo',
              'check': 'occupiersIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showOccupiersComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAfterHoursPhoto_afterHoursEmergencyIsNo',
              'check': 'afterHoursEmergencyIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAfterHoursPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAfterHoursComment_afterHoursEmergencyIsNo',
              'check': 'afterHoursEmergencyIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAfterHoursComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPlantRegPhoto_plantRegistrationsIsNo',
              'check': 'plantRegistrationsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showPlantRegPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPlantRegComment_plantRegistrationsIsNo',
              'check': 'plantRegistrationsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showPlantRegComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireMainPhoto_fireMaintenanceIsNo',
              'check': 'fireMaintenanceIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFireMainPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireMainComment_fireMaintenanceIsNo',
              'check': 'fireMaintenanceIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFireMainComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRpzPhoto_rpzIsNo',
              'check': 'rpzIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showRpzPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRpzComment_rpzIsNo',
              'check': 'rpzIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showRpzComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showThermostaticPhoto_thermostaticMixingIsNo',
              'check': 'thermostaticMixingIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showThermostaticPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showThermostaticComm_thermostaticMixingIsNo',
              'check': 'thermostaticMixingIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showThermostaticComm',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirstAidPhoto_firstAidKitIsNo',
              'check': 'firstAidKitIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFirstAidPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirstAidComment_firstAidKitIsNo',
              'check': 'firstAidKitIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFirstAidComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showDefibPhoto_defibAvailIsNo',
              'check': 'defibAvailIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showDefibPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showDefibComment_defibAvailIsNo',
              'check': 'defibAvailIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showDefibComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPPEPhoto_pPEAvailIsNo',
              'check': 'pPEAvailIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showPPEPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showPPEComment_pPEAvailIsNo',
              'check': 'pPEAvailIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showPPEComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSpillProcedPhoto_spillProcedureIsNo',
              'check': 'spillProcedureIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSpillProcedPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSpillProcedComment_spillProcedureIsNo',
              'check': 'spillProcedureIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSpillProcedComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSpillKitPhoto_spillKitIsNo',
              'check': 'spillKitIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSpillKitPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSpillKitComment_spillKitIsNo',
              'check': 'spillKitIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSpillKitComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSlipTestPhoto_slipTestingIsNo',
              'check': 'slipTestingIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSlipTestPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSlipTestComment_slipTestingIsNo',
              'check': 'slipTestingIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSlipTestComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showIndependentPhoto_independentSiteIsNo',
              'check': 'independentSiteIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showIndependentPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showIndependentComment_independentSiteIsNo',
              'check': 'independentSiteIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showIndependentComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showWornStepPhoto_wornBrokenStepsIsYes',
              'check': 'wornBrokenStepsIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showWornStepPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showWornStepComment_wornBrokenStepsIsYes',
              'check': 'wornBrokenStepsIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showWornStepComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHandRailsPhoto_handRailsIsNo',
              'check': 'handRailsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showHandRailsPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHandRailsComments_handRailsIsNo',
              'check': 'handRailsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showHandRailsComments',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAnchorsTagPhoto_anchorsTaggedIsNo',
              'check': 'anchorsTaggedIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAnchorsTagPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAnchorsTagComment_anchorsTaggedIsNo',
              'check': 'anchorsTaggedIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAnchorsTagComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNoSlipPhoto_nonSlipTreatmentsIsNo',
              'check': 'nonSlipTreatmentsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showNoSlipPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNoSlipComment_nonSlipTreatmentsIsNo',
              'check': 'nonSlipTreatmentsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showNoSlipComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNosingTreatPhoto_nosingTreatmentsIsNo',
              'check': 'nosingTreatmentsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showNosingTreatPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNosingTreatComment_nosingTreatmentsIsNo',
              'check': 'nosingTreatmentsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showNosingTreatComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRubbishPhoto_rubbishBinsIsNo',
              'check': 'rubbishBinsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showRubbishPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRubbishComment_rubbishBinsIsNo',
              'check': 'rubbishBinsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showRubbishComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showConsumablesPhoto_consumablesAvailIsNo',
              'check': 'consumablesAvailIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showConsumablesPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showConsumablesComment_consumablesAvailIsNo',
              'check': 'consumablesAvailIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showConsumablesComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSanitaryPhoto_sanitaryBinsIsNo',
              'check': 'sanitaryBinsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSanitaryPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSanitaryComment_sanitaryBinsIsNo',
              'check': 'sanitaryBinsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSanitaryComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showDeodorizersPhoto_deodorizersOperateIsNo',
              'check': 'deodorizersOperateIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showDeodorizersPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showDeodorizersComment_deodorizersOperateIsNo',
              'check': 'deodorizersOperateIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showDeodorizersComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHandDryersPhoto_handDryersIsNo',
              'check': 'handDryersIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showHandDryersPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHandDryersComment_handDryersIsNo',
              'check': 'handDryersIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showHandDryersComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRoofAreasPhoto_roofAreasIsNo',
              'check': 'roofAreasIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showRoofAreasPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRoofAreasComment_roofAreasIsNo',
              'check': 'roofAreasIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showRoofAreasComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRoofGutterPhoto_roofGutterClearIsNo',
              'check': 'roofGutterClearIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showRoofGutterPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRoofGutterComment_roofGutterClearIsNo',
              'check': 'roofGutterClearIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showRoofGutterComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showLooseRoofPhoto_looseRoofSheetingIsYes',
              'check': 'looseRoofSheetingIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showLooseRoofPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showLooseRoofComment_looseRoofSheetingIsYes',
              'check': 'looseRoofSheetingIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showLooseRoofComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showGlazingCrackPhoto_glazingCrakedIsYes',
              'check': 'glazingCrakedIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showGlazingCrackPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showGlazingCrackedCom_glazingCrakedIsYes',
              'check': 'glazingCrakedIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showGlazingCrackedCom',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showWaterLeaksPhoto_waterLeaksIsYes',
              'check': 'waterLeaksIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showWaterLeaksPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showWaterLeaksComm_waterLeaksIsYes',
              'check': 'waterLeaksIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showWaterLeaksComm',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHfRfEPhoto_hfRfEquipIsNo',
              'check': 'hfRfEquipIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showHfRfEPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHfRfEComments_hfRfEquipIsNo',
              'check': 'hfRfEquipIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showHfRfEComments',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRoofAccessPhoto_roofAccessPlanIsNo',
              'check': 'roofAccessPlanIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showRoofAccessPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRoofAccessComments_roofAccessPlanIsNo',
              'check': 'roofAccessPlanIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showRoofAccessComments',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRoofPermitPhoto_roofPermitIsNo',
              'check': 'roofPermitIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showRoofPermitPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRoofPermitComments_roofPermitIsNo',
              'check': 'roofPermitIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showRoofPermitComments',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBmuPhoto_bmuRegIsNo',
              'check': 'bmuRegIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showBmuPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBmuComments_bmuRegIsNo',
              'check': 'bmuRegIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showBmuComments',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showTestLogBooksCalY_testLogBooksIsYes',
              'check': 'testLogBooksIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showTestLogBooksCalY',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showTestLogBooksCalN_testLogBooksIsNo',
              'check': 'testLogBooksIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showTestLogBooksCalN',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showTestLogPhoto_testLogBooksIsNo',
              'check': 'testLogBooksIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showTestLogPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showTestLogComment_testLogBooksIsNo',
              'check': 'testLogBooksIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showTestLogComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNoOutstandCalYes_noOutstandingdefecIsYes',
              'check': 'noOutstandingdefecIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showNoOutstandCalYes',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNoOustandCalNo_noOutstandingdefecIsNo',
              'check': 'noOutstandingdefecIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showNoOustandCalNo',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNoOutstandPhoto_noOutstandingdefecIsNo',
              'check': 'noOutstandingdefecIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showNoOutstandPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNoOutstandComment_noOutstandingdefecIsNo',
              'check': 'noOutstandingdefecIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showNoOutstandComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showExtinguishCalYes_extinguishHydrantsIsYes',
              'check': 'extinguishHydrantsIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showExtinguishCalYes',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showExtingusihCalNo_extinguishHydrantsIsNo',
              'check': 'extinguishHydrantsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showExtingusihCalNo',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showExtinguishPhoto_extinguishHydrantsIsNo',
              'check': 'extinguishHydrantsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showExtinguishPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showExtinguishComments_extinguishHydrantsIsNo',
              'check': 'extinguishHydrantsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showExtinguishComments',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirePhoto_fireFightingIsNo',
              'check': 'fireFightingIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFirePhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireComments_fireFightingIsNo',
              'check': 'fireFightingIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFireComments',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAppropSignagePhoto_appropSignageIsNo',
              'check': 'appropSignageIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAppropSignagePhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAppropSignageComm_appropSignageIsNo',
              'check': 'appropSignageIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAppropSignageComm',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHydrantSprinklerPh_hydrantSprinklerIsNo',
              'check': 'hydrantSprinklerIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showHydrantSprinklerPh',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHydrantSprinklerCm_hydrantSprinklerIsNo',
              'check': 'hydrantSprinklerIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showHydrantSprinklerCm',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHydrantsPhoto_capsOnHydrantsIsNo',
              'check': 'capsOnHydrantsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showHydrantsPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHydrantsComments_capsOnHydrantsIsNo',
              'check': 'capsOnHydrantsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showHydrantsComments',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireDoorPhoto_fireDoorsFreeDamagIsNo',
              'check': 'fireDoorsFreeDamagIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFireDoorPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireDoorComment_fireDoorsFreeDamagIsNo',
              'check': 'fireDoorsFreeDamagIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFireDoorComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNoOpenPhoto_noOpenFireIsNo',
              'check': 'noOpenFireIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showNoOpenPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showNoOpenComment_noOpenFireIsNo',
              'check': 'noOpenFireIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showNoOpenComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAlarmPhoto_alarmCommunicationIsNo',
              'check': 'alarmCommunicationIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAlarmPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAlarmComment_alarmCommunicationIsNo',
              'check': 'alarmCommunicationIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAlarmComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSmokingFlamePhoto_smokingFlameIsNo',
              'check': 'smokingFlameIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSmokingFlamePhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSomkingFlameCom_smokingFlameIsNo',
              'check': 'smokingFlameIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSomkingFlameCom',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEmergPersonPhoto_emergPersonIsNo',
              'check': 'emergPersonIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showEmergPersonPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEmergPersonComm_emergPersonIsNo',
              'check': 'emergPersonIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showEmergPersonComm',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEmergProcedPhoto_emergProcedIsNo',
              'check': 'emergProcedIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showEmergProcedPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEmergProcedComment_emergProcedIsNo',
              'check': 'emergProcedIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showEmergProcedComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEvacSignsPhoto_evacSignsIsNo',
              'check': 'evacSignsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showEvacSignsPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showEvacSignsComment_evacSignsIsNo',
              'check': 'evacSignsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showEvacSignsComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireEvacRPhoto_fireEvacRecordIsNo',
              'check': 'fireEvacRecordIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFireEvacRPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireEvacRComment_fireEvacRecordIsNo',
              'check': 'fireEvacRecordIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFireEvacRComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireProtecSysPhoto_fireProtecSysIsNo',
              'check': 'fireProtecSysIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFireProtecSysPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireProtecSysComm_fireProtecSysIsNo',
              'check': 'fireProtecSysIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFireProtecSysComm',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireProtectOpPhoto_fireProtectSysOpIsNo',
              'check': 'fireProtectSysOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFireProtectOpPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFireProtectOpComm_fireProtectSysOpIsNo',
              'check': 'fireProtectSysOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFireProtectOpComm',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSprinklerHeadPhoto_sprinklerHeadsIsNo',
              'check': 'sprinklerHeadsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSprinklerHeadPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSprinklerHeadComm_sprinklerHeadsIsNo',
              'check': 'sprinklerHeadsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSprinklerHeadComm',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBaseLinePhoto_baseLineDataIsNo',
              'check': 'baseLineDataIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showBaseLinePhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showBaseLineComment_baseLineDataIsNo',
              'check': 'baseLineDataIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showBaseLineComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirePumpsOpPhoto_firePumpsOpIsNo',
              'check': 'firePumpsOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFirePumpsOpPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirePumpsOpComment_firePumpsOpIsNo',
              'check': 'firePumpsOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFirePumpsOpComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirePumpsAutoPhoto_firPumpsAutoIsNo',
              'check': 'firPumpsAutoIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFirePumpsAutoPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirePumpsAutoComm_firPumpsAutoIsNo',
              'check': 'firPumpsAutoIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFirePumpsAutoComm',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirePumpsFuelPhoto_firePumpsFuel75IsNo',
              'check': 'firePumpsFuel75IsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFirePumpsFuelPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirePumpsComment_firePumpsFuel75IsNo',
              'check': 'firePumpsFuel75IsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFirePumpsComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirePumpsAcPhoto_firePumpsAccesIsNo',
              'check': 'firePumpsAccesIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFirePumpsAcPhoto',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFirePumpsAcComment_firePumpsAccesIsNo',
              'check': 'firePumpsAccesIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFirePumpsAcComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showGuageReadPhotoY_gaugeReadIsYes',
              'check': 'gaugeReadIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showGuageReadPhotoY',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showGuageReadPhotoN_gaugeReadIsNo',
              'check': 'gaugeReadIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showGuageReadPhotoN',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showGuageReadComment_gaugeReadIsNo',
              'check': 'gaugeReadIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showGuageReadComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL96SwitchRoomP_l96SwitchRoomIsNo',
              'check': 'l96SwitchRoomIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL96SwitchRoomP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL96SwitchRoomC_l96SwitchRoomIsNo',
              'check': 'l96SwitchRoomIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL96SwitchRoomC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL97DbLockedP_l97DbLockedIsNo',
              'check': 'l97DbLockedIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL97DbLockedP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL97DbLockedC_l97DbLockedIsNo',
              'check': 'l97DbLockedIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL97DbLockedC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL98NoBrokenP_l98NoBrokenPlugIsNo',
              'check': 'l98NoBrokenPlugIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL98NoBrokenP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL98NoBrokenC_l98NoBrokenPlugIsNo',
              'check': 'l98NoBrokenPlugIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL98NoBrokenC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL99NoFrayedP_l99NoFrayedLeadsIsNo',
              'check': 'l99NoFrayedLeadsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL99NoFrayedP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL99NoFrayedC_l99NoFrayedLeadsIsNo',
              'check': 'l99NoFrayedLeadsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL99NoFrayedC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL100OfficeEP_l100OfficeEquipIsNo',
              'check': 'l100OfficeEquipIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL100OfficeEP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL100OfficeEC_l100OfficeEquipIsNo',
              'check': 'l100OfficeEquipIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL100OfficeEC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL101EquipInP_l101EquipInspecIsNo',
              'check': 'l101EquipInspecIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL101EquipInP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL101EquipInC_l101EquipInspecIsNo',
              'check': 'l101EquipInspecIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL101EquipInC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL102LockOutP_l102LockOutIsNo',
              'check': 'l102LockOutIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL102LockOutP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL102LockOutC_l102LockOutIsNo',
              'check': 'l102LockOutIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL102LockOutC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL103RcdSysP_l103RcdSysIsNo',
              'check': 'l103RcdSysIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL103RcdSysP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL103RcdSysC_l103RcdSysIsNo',
              'check': 'l103RcdSysIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL103RcdSysC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL104NoCombustP_l104NoCombustibleIsYes',
              'check': 'l104NoCombustibleIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL104NoCombustP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL104NoCombustC_l104NoCombustibleIsYes',
              'check': 'l104NoCombustibleIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL104NoCombustC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL105NoTempWire_l105NoTempWireIsYes',
              'check': 'l105NoTempWireIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL105NoTempWire',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL105NoTempWireP_l105NoTempWireIsYes',
              'check': 'l105NoTempWireIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL105NoTempWireP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL105NoTempWireC_l105NoTempWireIsYes',
              'check': 'l105NoTempWireIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL105NoTempWireC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL106BatteryUPSP_l106BatteryUPSIsNo',
              'check': 'l106BatteryUPSIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL106BatteryUPSP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showL106BatteryUPSC_l106BatteryUPSIsNo',
              'check': 'l106BatteryUPSIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showL106BatteryUPSC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM110PlantRoomSeP_m110PlantRoomSeIsNo',
              'check': 'm110PlantRoomSeIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM110PlantRoomSeP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM110PlantRoomSeC_m110PlantRoomSeIsNo',
              'check': 'm110PlantRoomSeIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM110PlantRoomSeC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM111EquipFaultP_m111EquipFaultIsYes',
              'check': 'm111EquipFaultIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM111EquipFaultP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM111EquipFaultC_m111EquipFaultIsYes',
              'check': 'm111EquipFaultIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM111EquipFaultC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM111NEqupfaultBP_m111NEquipfaultBIsYes',
              'check': 'm111NEquipfaultBIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM111NEqupfaultBP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM111NEquipfaultBC_m111NEquipfaultBIsYes',
              'check': 'm111NEquipfaultBIsYes',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM111NEquipfaultBC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM112ChillerOpP_m112ChillerOpIsNo',
              'check': 'm112ChillerOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM112ChillerOpP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM112ChillerOpC_m112ChillerOpIsNo',
              'check': 'm112ChillerOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM112ChillerOpC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM113SuppUnitOpP_m113SuppUnitOpIsNo',
              'check': 'm113SuppUnitOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM113SuppUnitOpP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM113SuppUnitOpC_m113SuppUnitOpIsNo',
              'check': 'm113SuppUnitOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM113SuppUnitOpC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM114TenantSuppOpP_m114TenantSuppOpIsNo',
              'check': 'm114TenantSuppOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM114TenantSuppOpP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM114TenantSuppOpC_m114TenantSuppOpIsNo',
              'check': 'm114TenantSuppOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM114TenantSuppOpC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM115CoolingTowerP_m115CoolingTowerIsNo',
              'check': 'm115CoolingTowerIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM115CoolingTowerP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM115CoolingTowerC_m115CoolingTowerIsNo',
              'check': 'm115CoolingTowerIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM115CoolingTowerC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM116WaterTreatP_m116WaterTreatIsNo',
              'check': 'm116WaterTreatIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM116WaterTreatP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM116WaterTreatC_m116WaterTreatIsNo',
              'check': 'm116WaterTreatIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM116WaterTreatC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM117BaseTowerDryP_m117BaseTowerDryIsNo',
              'check': 'm117BaseTowerDryIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM117BaseTowerDryP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM117BaseTowerDryC_m117BaseTowerDryIsNo',
              'check': 'm117BaseTowerDryIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM117BaseTowerDryC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM117NNoAlarmsP_m117NNoAlarmsIsNo',
              'check': 'm117NNoAlarmsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM117NNoAlarmsP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM117NNoAlarmsC_m117NNoAlarmsIsNo',
              'check': 'm117NNoAlarmsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM117NNoAlarmsC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM118AHUSecuredP_m118AHUSecuredIsNo',
              'check': 'm118AHUSecuredIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM118AHUSecuredP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM118AHUSecuredC_m118AHUSecuredIsNo',
              'check': 'm118AHUSecuredIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM118AHUSecuredC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM119FiltersCoilsP_m119FiltersCoilsIsNo',
              'check': 'm119FiltersCoilsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM119FiltersCoilsP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM119FiltersCoilsC_m119FiltersCoilsIsNo',
              'check': 'm119FiltersCoilsIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM119FiltersCoilsC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM120RefrigPipeP_m120RefrigPipeIsNo',
              'check': 'm120RefrigPipeIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM120RefrigPipeP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM120RefrigPipeC_m120RefrigPipeIsNo',
              'check': 'm120RefrigPipeIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM120RefrigPipeC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM121CarParkExP_m121CarParkExIsNo',
              'check': 'm121CarParkExIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM121CarParkExP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showM121CarParkExC_m121CarParkExIsNo',
              'check': 'm121CarParkExIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showM121CarParkExC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showKitchenBathFanOpP_kitchenBathFanOpIsNo',
              'check': 'kitchenBathFanOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showKitchenBathFanOpP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showKitchenBathFanOpC_kitchenBathFanOpIsNo',
              'check': 'kitchenBathFanOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showKitchenBathFanOpC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showLifttravCamera_liftTravOpIsNo',
              'check': 'liftTravOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showLifttravCamera',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showLifttravComment_liftTravOpIsNo',
              'check': 'liftTravOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showLifttravComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showGreasetrapsCamera_greaseTrapMaintainIsNo',
              'check': 'greaseTrapMaintainIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showGreasetrapsCamera',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showGreasetrapsComment_greaseTrapMaintainIsNo',
              'check': 'greaseTrapMaintainIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showGreasetrapsComment',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSumpPumpOpP_sumpPumpOpIsNo',
              'check': 'sumpPumpOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSumpPumpOpP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSumpPumpOpC_sumpPumpOpIsNo',
              'check': 'sumpPumpOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSumpPumpOpC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRecticulationOpP_recticulationOpIsNo',
              'check': 'recticulationOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showRecticulationOpP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showRecticulationOpC_recticulationOpIsNo',
              'check': 'recticulationOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showRecticulationOpC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSewerageOpP_sewerageOpIsNo',
              'check': 'sewerageOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSewerageOpP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSewerageOpC_sewerageOpIsNo',
              'check': 'sewerageOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSewerageOpC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHotSysOpP_hotSysOpIsNo',
              'check': 'hotSysOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showHotSysOpP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showHotSysOpC_hotSysOpIsNo',
              'check': 'hotSysOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showHotSysOpC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFuelTankIntegP_fuelTankIntegIsNo',
              'check': 'fuelTankIntegIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFuelTankIntegP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFuelTankIntegC_fuelTankIntegIsNo',
              'check': 'fuelTankIntegIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFuelTankIntegC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAccessControlOpP_accessControlOpIsNo',
              'check': 'accessControlOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAccessControlOpP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showAccessControlOpC_accessControlOpIsNo',
              'check': 'accessControlOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showAccessControlOpC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showKeysAccessCardSecP_keysAccessCardSecIsNo',
              'check': 'keysAccessCardSecIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showKeysAccessCardSecP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showKeyAccessCardSecC_keysAccessCardSecIsNo',
              'check': 'keysAccessCardSecIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showKeyAccessCardSecC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showCctvSysOpP_cctvSysOpIsNo',
              'check': 'cctvSysOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showCctvSysOpP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showCctvSysOpC_cctvSysOpIsNo',
              'check': 'cctvSysOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showCctvSysOpC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSecPatrolP_secPatrolIsNo',
              'check': 'secPatrolIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSecPatrolP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showSecPatrolC_secPatrolIsNo',
              'check': 'secPatrolIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showSecPatrolC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showGeneratorOpP_generatorOpIsNo',
              'check': 'generatorOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showGeneratorOpP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showGeneratorOpC_generatorOpIsNo',
              'check': 'generatorOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showGeneratorOpC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFillpointSysOpP_fillpointSysOpIsNo',
              'check': 'fillpointSysOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFillpointSysOpP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showFillpointSysOpC_fillpointSysOpIsNo',
              'check': 'fillpointSysOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showFillpointSysOpC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showDieselpumpOpP_dieselpumpOpIsNo',
              'check': 'dieselpumpOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showDieselpumpOpP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showDieselpumpOpC_dieselpumpOpIsNo',
              'check': 'dieselpumpOpIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showDieselpumpOpC',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showDieselfuelfreeDmgP_dieselfuelFreeDmgIsNo',
              'check': 'dieselfuelFreeDmgIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showDieselfuelfreeDmgP',
                  'autoReverse': true
                }
              ]
            }
          },
          {
            'default': {
              'name': 'showDieselfuelfreeDmgC_dieselfuelFreeDmgIsNo',
              'check': 'dieselfuelFreeDmgIsNo',
              'trigger': {
                'formElements': [
                  '*'
                ],
                'formEvents': [
                  'load'
                ]
              },
              'actions': [
                {
                  'action': 'showDieselfuelfreeDmgC',
                  'autoReverse': true
                }
              ]
            }
          }
        ]
      },
      'list': {
        'interaction': 'INSPECTION_LIST',
        'displayName': 'INSPECTION LIST',
        'defaultCategory': '',
        'header': '',
        'footer': '',
        'hidden': '1',
        'action': 'list',
        'orderBy': null,
        'dataStorageList': 'temporary',
        'downloadModeList': 'partial',
        'recordsToDisplay': '',
        'showLink': {
          'edit': '1',
          'view': '1',
          'delete': '1'
        }
      },
      'search': {
        'interaction': '',
        'displayName': null,
        'defaultCategory': null,
        'header': null,
        'footer': null,
        'hidden': null,
        'action': 'search'
      },
      'add': {
        'interaction': 'INSPECTION_ADD',
        'displayName': 'INSPECTION ADD',
        'defaultCategory': '',
        'header': '',
        'footer': '',
        'hidden': null,
        'action': 'add',
        '_elements': [
          '_message_1',
          'inspectionDate',
          'inspectorEmail',
          'inspectionAddress',
          'inspectorName',
          '_heading_1',
          '_message_21',
          'incidentType',
          'publicLiability',
          'liabilityPhoto',
          'liabilityComment',
          'buildingEquipment',
          'buildingPhoto',
          'buildingComment',
          '_message_12',
          '_heading_2',
          'reviewed',
          'previousPhoto',
          'previousComment',
          '_message_13',
          '_heading_3',
          'houseLocation',
          'workAreas',
          'wasteRemoval',
          'wasteRemovalPhoto',
          'wasteRemovalComm',
          'slipTripHazards',
          'slipTripPhoto',
          'slipTripComm',
          'serviceRooms',
          'dustBuildUp',
          'externalAreas',
          'externalAreasPhoto',
          'externalAreasComm',
          'gardensGrounds',
          'pestControl',
          'pestControlPhoto',
          'pestControlComm',
          'rubbishAreas',
          'rubbishAreasPhoto',
          'rubbishAreasComm',
          '_message_14',
          '_heading_15',
          'potLocation',
          'unobAndDefined',
          'unobDefinedPhoto',
          'unobDefinedComment',
          'AdLighting',
          'AdLightingPhoto',
          'AdLightingComment',
          'emergencySign',
          'emergencySignPhoto',
          'emergencySignComm',
          'fireDoorSign',
          'fireDoorSignPhoto',
          'fireDoorSignComm',
          'exitDoorOp',
          'exitDoorOpPhoto',
          'exitDoorOpComm',
          'stairwells',
          'stairwellsPhoto',
          'stairwellsComm',
          '_message_15',
          '_heading_4',
          'signIn',
          'signInPhoto',
          'signInComments',
          'siteKeys',
          'siteKeysPhoto',
          'siteKeysComment',
          'siteKeyLockBox',
          'siteKeyLockPhoto',
          'siteKeyLockComm',
          'permits',
          'permitsPhoto',
          'permitsComment',
          'houseRule',
          'houseRulePhoto',
          'houseRuleComment',
          'tenancyFit',
          'tenancyFitPhoto',
          'tenancyFitComment',
          'hotWorks',
          'hotWorksPhoto',
          'hotWorksComment',
          'serviceFailure',
          'serviceFailPhoto',
          'serviceFailComment',
          'bmuPermits',
          'bmuPermitPhoto',
          'bmuPermitComment',
          '_message_11',
          '_heading_5',
          'materialLocation',
          'materialsRegister',
          'materialsRegPhoto',
          'materialRegComment',
          'msds',
          'msdsPhoto',
          'msdsComment',
          'containersLabelled',
          'containLabelPhoto',
          'containLabelCommen',
          'adequateVentilation',
          'adequateVentPhoto',
          'adequateVentCom',
          'bundedAreas',
          'bundedAreasPhoto',
          'bundedAreasComment',
          'asbestosRegister',
          'asbestosRegPhoto',
          'asbestosRegComment',
          'asbestosManagement',
          'asbestosManagPhoto',
          'asbestosMagComment',
          'areasClean',
          'areasCleanPhoto',
          'areasCleanComment',
          '_message_3',
          '_heading_6',
          'certificateClassification',
          'certificatePhoto',
          'certificateComment',
          'engineeredSolutions',
          'engineeredPhoto',
          'engineeredComment',
          'occupiers',
          'occupiersPhoto',
          'occupiersComment',
          'afterHoursEmergency',
          'afterHoursPhoto',
          'afterHoursComment',
          'plantRegistrations',
          'plantRegPhoto',
          'plantRegComment',
          'fireMaintenance',
          'fireMainPhoto',
          'fireMainComment',
          'rpz',
          'rpzPhoto',
          'rpzComment',
          'thermostaticMixing',
          'thermostaticPhoto',
          'thermostaticComm',
          '_message_2',
          '_heading_7',
          'firstAidKit',
          'firstAidPhoto',
          'firstAidComment',
          'defibAvail',
          'defibPhoto',
          'defibComment',
          'PPEAvail',
          'PPEPhoto',
          'PPEComment',
          'spillProcedure',
          'spillProcedPhoto',
          'spillProcedComment',
          'spillKit',
          'spillKitPhoto',
          'spillKitComment',
          'slipTesting',
          'slipTestPhoto',
          'slipTestComment',
          'independentSite',
          'independentPhoto',
          'independentComment',
          '_message_10',
          '_heading_8',
          'stepLocation',
          'wornBrokenSteps',
          'wornStepPhoto',
          'wornStepComment',
          'handRails',
          'handRailsPhoto',
          'handRailsComments',
          'anchorsTagged',
          'anchorsTagPhoto',
          'anchorsTagComment',
          'nonSlipTreatments',
          'noSlipPhoto',
          'noSlipComment',
          'nosingTreatments',
          'nosingTreatPhoto',
          'nosingTreatComment',
          '_message_9',
          '_heading_9',
          'amenitiesLocation',
          'washroomAreasClean',
          'washroomPhoto',
          'washroomComment',
          'toiletsClean',
          'toiletsPhoto',
          'toiletsComment',
          'basinsClean',
          'basinsPhoto',
          'basinsComment',
          'showersClean',
          'showersPhoto',
          'showersComment',
          'rubbishBins',
          'rubbishPhoto',
          'rubbishComment',
          'consumablesAvail',
          'consumablesPhoto',
          'consumablesComment',
          'sanitaryBins',
          'sanitaryPhoto',
          'sanitaryComment',
          'deodorizersOperate',
          'deodorizersPhoto',
          'deodorizersComment',
          'handDryers',
          'handDryersPhoto',
          'handDryersComment',
          '_message_8',
          '_heading_10',
          'roofAreas',
          'roofAreasPhoto',
          'roofAreasComment',
          'roofGutterClear',
          'roofGutterPhoto',
          'roofGutterComment',
          'looseRoofSheeting',
          'looseRoofPhoto',
          'looseRoofComment',
          'glazingCraked',
          'glazingCrackPhoto',
          'glazingCrackedCom',
          'externalGlazingCl',
          'externalGlazPhoto',
          'externalGlazCom',
          'waterLeaks',
          'waterLeaksPhoto',
          'waterLeaksComm',
          'hfRfEquip',
          'hfRfEPhoto',
          'hfRfEComments',
          'roofAccessPlan',
          'roofAccessPhoto',
          'roofAccessComments',
          'roofPermit',
          'roofPermitPhoto',
          'roofPermitComments',
          'bmuReg',
          'bmuPhoto',
          'bmuComments',
          '_message_7',
          '_heading_11',
          'fireLocation',
          'testLogBooks',
          'testLogBooksCalY',
          'testLogBooksCalN',
          'testLogPhoto',
          'testLogComment',
          'noOutstandingdefec',
          'noOutstandCalYes',
          'noOustandCalNo',
          'noOutstandPhoto',
          'noOutstandComment',
          'extinguishHydrants',
          'extinguishCalYes',
          'extingusihCalNo',
          'extinguishPhoto',
          'extinguishComments',
          'fireFighting',
          'firePhoto',
          'fireComments',
          'appropSignage',
          'appropSignagePhoto',
          'appropSignageComm',
          'hydrantSprinkler',
          'hydrantSprinklerPh',
          'hydrantSprinklerCm',
          'capsOnHydrants',
          'hydrantsPhoto',
          'hydrantsComments',
          'fireDoorsFreeDamag',
          'fireDoorPhoto',
          'fireDoorComment',
          'noOpenFire',
          'noOpenPhoto',
          'noOpenComment',
          'alarmCommunication',
          'alarmPhoto',
          'alarmComment',
          'smokingFlame',
          'smokingFlamePhoto',
          'somkingFlameCom',
          'emergPerson',
          'emergPersonPhoto',
          'emergPersonComm',
          'emergProced',
          'emergProcedPhoto',
          'emergProcedComment',
          'evacSigns',
          'evacSignsPhoto',
          'evacSignsComment',
          'fireEvacRecord',
          'fireEvacRPhoto',
          'fireEvacRComment',
          'fireProtecSys',
          'fireProtecSysPhoto',
          'fireProtecSysComm',
          'fireProtectSysOp',
          'fireProtectOpPhoto',
          'fireProtectOpComm',
          'sprinklerHeads',
          'sprinklerHeadPhoto',
          'sprinklerHeadComm',
          'baseLineData',
          'baseLinePhoto',
          'baseLineComment',
          'firePumpsOp',
          'firePumpsOpPhoto',
          'firePumpsOpComment',
          'firPumpsAuto',
          'firePumpsAutoPhoto',
          'firePumpsAutoComm',
          'firePumpsFuel75',
          'firePumpsFuelPhoto',
          'firePumpsComment',
          'firePumpsAcces',
          'firePumpsAcPhoto',
          'firePumpsAcComment',
          'gaugeRead',
          'guageReadPhotoY',
          'guageReadPhotoN',
          'guageReadComment',
          '_message_6',
          '_heading_12',
          'electricalLocation',
          'L96_switchRoom',
          'L96_switchRoomP',
          'L96_switchRoomC',
          'L97_dbLocked',
          'L97_dbLockedP',
          'L97_dbLockedC',
          'L98_noBrokenPlug',
          'L98_noBrokenP',
          'L98_noBrokenC',
          'L99_noFrayedLeads',
          'L99_noFrayedP',
          'L99_noFrayedC',
          'L100_officeEquip',
          'L100_officeEP',
          'L100_officeEC',
          'L101_equipInspec',
          'L101_equipInP',
          'L101_equipInC',
          'L102_lockOut',
          'L102_lockOutP',
          'L102_lockOutC',
          'L103_rcdSys',
          'L103_rcdSysP',
          'L103_rcdSysC',
          'L104_noCombustible',
          'L104_noCombustP',
          'L104_noCombustC',
          'L105_noTempWire',
          'L105_noTempWireP',
          'L105_noTempWireC',
          'L106_batteryUPS',
          'L106_batteryUPSP',
          'L106_batteryUPSC',
          '_message_5',
          '_heading_13',
          'M109_plantRoomClea',
          'M109_plantRoomP',
          'M109_plantRoomC',
          'M110_plantRoomSe',
          'M110_plantRoomSeP',
          'M110_plantRoomSeC',
          'M111_equipFault',
          'M111_equipFaultP',
          'M111_equipFaultC',
          'M111N_equipfaultB',
          'M111N_equpfaultBP',
          'M111N_equipfaultBC',
          'M112_chillerOp',
          'M112_chillerOpP',
          'M112_chillerOpC',
          'M113_suppUnitOp',
          'M113_suppUnitOpP',
          'M113_suppUnitOpC',
          'M114_tenantSuppOp',
          'M114_tenantSuppOpP',
          'M114_tenantSuppOpC',
          'M115_coolingTower',
          'M115_coolingTowerP',
          'M115_coolingTowerC',
          'M116_waterTreat',
          'M116_waterTreatP',
          'M116_waterTreatC',
          'M117_baseTowerDry',
          'M117_baseTowerDryP',
          'M117_baseTowerDryC',
          'M117N_noAlarms',
          'M117N_noAlarmsP',
          'M117N_noAlarmsC',
          'M118_AHUSecured',
          'M118_AHUSecuredP',
          'M118_AHUSecuredC',
          'M119_filtersCoils',
          'M119_filtersCoilsP',
          'M119_filtersCoilsC',
          'M120_refrigPipe',
          'M120_refrigPipeP',
          'M120_refrigPipeC',
          'M121_carParkEx',
          'M121_carParkExP',
          'M121_carParkExC',
          'kitchenBathFanOp',
          'kitchenBathFanOpP',
          'kitchenBathFanOpC',
          '_message_4',
          '_heading_14',
          '_message_17',
          'liftRoomClean',
          'liftTravOp',
          'lifttravCamera',
          'lifttravComment',
          '_message_18',
          'greaseTrapMaintain',
          'greasetrapsCamera',
          'greasetrapsComment',
          'sumpPumpOp',
          'sumpPumpOpP',
          'sumpPumpOpC',
          'recticulationOp',
          'recticulationOpP',
          'recticulationOpC',
          'sewerageOp',
          'sewerageOpP',
          'sewerageOpC',
          'hotSysOp',
          'hotSysOpP',
          'hotSysOpC',
          '_message_19',
          'fuelTankInteg',
          'fuelTankIntegP',
          'fuelTankIntegC',
          'accessControlOp',
          'accessControlOpP',
          'accessControlOpC',
          'keysAccessCardSec',
          'keysAccessCardSecP',
          'keyAccessCardSecC',
          'cctvSysOp',
          'cctvSysOpP',
          'cctvSysOpC',
          'secPatrol',
          'secPatrolP',
          'secPatrolC',
          '_message_20',
          'generatorOp',
          'generatorOpP',
          'generatorOpC',
          'fillpointSysOp',
          'fillpointSysOpP',
          'fillpointSysOpC',
          'dieselpumpOp',
          'dieselpumpOpP',
          'dieselpumpOpC',
          'dieselfuelFreeDmg',
          'dieselfuelfreeDmgP',
          'dieselfuelfreeDmgC',
          '_message_16'
        ]
      },
      'edit': {
        'interaction': 'INSPECTION_EDIT',
        'displayName': 'INSPECTION EDIT',
        'defaultCategory': '',
        'header': '',
        'footer': '',
        'hidden': '1',
        'action': 'edit',
        '_elements': [
          '_message_1',
          'inspectionDate',
          'inspectorEmail',
          'inspectionAddress',
          'inspectorName',
          '_heading_1',
          '_message_21',
          'incidentType',
          'publicLiability',
          'liabilityPhoto',
          'liabilityComment',
          'buildingEquipment',
          'buildingPhoto',
          'buildingComment',
          '_message_12',
          '_heading_2',
          'reviewed',
          'previousPhoto',
          'previousComment',
          '_message_13',
          '_heading_3',
          'houseLocation',
          'workAreas',
          'wasteRemoval',
          'wasteRemovalPhoto',
          'wasteRemovalComm',
          'slipTripHazards',
          'slipTripPhoto',
          'slipTripComm',
          'serviceRooms',
          'dustBuildUp',
          'externalAreas',
          'externalAreasPhoto',
          'externalAreasComm',
          'gardensGrounds',
          'pestControl',
          'pestControlPhoto',
          'pestControlComm',
          'rubbishAreas',
          'rubbishAreasPhoto',
          'rubbishAreasComm',
          '_message_14',
          '_heading_15',
          'potLocation',
          'unobAndDefined',
          'unobDefinedPhoto',
          'unobDefinedComment',
          'AdLighting',
          'AdLightingPhoto',
          'AdLightingComment',
          'emergencySign',
          'emergencySignPhoto',
          'emergencySignComm',
          'fireDoorSign',
          'fireDoorSignPhoto',
          'fireDoorSignComm',
          'exitDoorOp',
          'exitDoorOpPhoto',
          'exitDoorOpComm',
          'stairwells',
          'stairwellsPhoto',
          'stairwellsComm',
          '_message_15',
          '_heading_4',
          'signIn',
          'signInPhoto',
          'signInComments',
          'siteKeys',
          'siteKeysPhoto',
          'siteKeysComment',
          'siteKeyLockBox',
          'siteKeyLockPhoto',
          'siteKeyLockComm',
          'permits',
          'permitsPhoto',
          'permitsComment',
          'houseRule',
          'houseRulePhoto',
          'houseRuleComment',
          'tenancyFit',
          'tenancyFitPhoto',
          'tenancyFitComment',
          'hotWorks',
          'hotWorksPhoto',
          'hotWorksComment',
          'serviceFailure',
          'serviceFailPhoto',
          'serviceFailComment',
          'bmuPermits',
          'bmuPermitPhoto',
          'bmuPermitComment',
          '_message_11',
          '_heading_5',
          'materialLocation',
          'materialsRegister',
          'materialsRegPhoto',
          'materialRegComment',
          'msds',
          'msdsPhoto',
          'msdsComment',
          'containersLabelled',
          'containLabelPhoto',
          'containLabelCommen',
          'adequateVentilation',
          'adequateVentPhoto',
          'adequateVentCom',
          'bundedAreas',
          'bundedAreasPhoto',
          'bundedAreasComment',
          'asbestosRegister',
          'asbestosRegPhoto',
          'asbestosRegComment',
          'asbestosManagement',
          'asbestosManagPhoto',
          'asbestosMagComment',
          'areasClean',
          'areasCleanPhoto',
          'areasCleanComment',
          '_message_3',
          '_heading_6',
          'certificateClassification',
          'certificatePhoto',
          'certificateComment',
          'engineeredSolutions',
          'engineeredPhoto',
          'engineeredComment',
          'occupiers',
          'occupiersPhoto',
          'occupiersComment',
          'afterHoursEmergency',
          'afterHoursPhoto',
          'afterHoursComment',
          'plantRegistrations',
          'plantRegPhoto',
          'plantRegComment',
          'fireMaintenance',
          'fireMainPhoto',
          'fireMainComment',
          'rpz',
          'rpzPhoto',
          'rpzComment',
          'thermostaticMixing',
          'thermostaticPhoto',
          'thermostaticComm',
          '_message_2',
          '_heading_7',
          'firstAidKit',
          'firstAidPhoto',
          'firstAidComment',
          'defibAvail',
          'defibPhoto',
          'defibComment',
          'PPEAvail',
          'PPEPhoto',
          'PPEComment',
          'spillProcedure',
          'spillProcedPhoto',
          'spillProcedComment',
          'spillKit',
          'spillKitPhoto',
          'spillKitComment',
          'slipTesting',
          'slipTestPhoto',
          'slipTestComment',
          'independentSite',
          'independentPhoto',
          'independentComment',
          '_message_10',
          '_heading_8',
          'stepLocation',
          'wornBrokenSteps',
          'wornStepPhoto',
          'wornStepComment',
          'handRails',
          'handRailsPhoto',
          'handRailsComments',
          'anchorsTagged',
          'anchorsTagPhoto',
          'anchorsTagComment',
          'nonSlipTreatments',
          'noSlipPhoto',
          'noSlipComment',
          'nosingTreatments',
          'nosingTreatPhoto',
          'nosingTreatComment',
          '_message_9',
          '_heading_9',
          'amenitiesLocation',
          'washroomAreasClean',
          'washroomPhoto',
          'washroomComment',
          'toiletsClean',
          'toiletsPhoto',
          'toiletsComment',
          'basinsClean',
          'basinsPhoto',
          'basinsComment',
          'showersClean',
          'showersPhoto',
          'showersComment',
          'rubbishBins',
          'rubbishPhoto',
          'rubbishComment',
          'consumablesAvail',
          'consumablesPhoto',
          'consumablesComment',
          'sanitaryBins',
          'sanitaryPhoto',
          'sanitaryComment',
          'deodorizersOperate',
          'deodorizersPhoto',
          'deodorizersComment',
          'handDryers',
          'handDryersPhoto',
          'handDryersComment',
          '_message_8',
          '_heading_10',
          'roofAreas',
          'roofAreasPhoto',
          'roofAreasComment',
          'roofGutterClear',
          'roofGutterPhoto',
          'roofGutterComment',
          'looseRoofSheeting',
          'looseRoofPhoto',
          'looseRoofComment',
          'glazingCraked',
          'glazingCrackPhoto',
          'glazingCrackedCom',
          'externalGlazingCl',
          'externalGlazPhoto',
          'externalGlazCom',
          'waterLeaks',
          'waterLeaksPhoto',
          'waterLeaksComm',
          'hfRfEquip',
          'hfRfEPhoto',
          'hfRfEComments',
          'roofAccessPlan',
          'roofAccessPhoto',
          'roofAccessComments',
          'roofPermit',
          'roofPermitPhoto',
          'roofPermitComments',
          'bmuReg',
          'bmuPhoto',
          'bmuComments',
          '_message_7',
          '_heading_11',
          'fireLocation',
          'testLogBooks',
          'testLogBooksCalY',
          'testLogBooksCalN',
          'testLogPhoto',
          'testLogComment',
          'noOutstandingdefec',
          'noOutstandCalYes',
          'noOustandCalNo',
          'noOutstandPhoto',
          'noOutstandComment',
          'extinguishHydrants',
          'extinguishCalYes',
          'extingusihCalNo',
          'extinguishPhoto',
          'extinguishComments',
          'fireFighting',
          'firePhoto',
          'fireComments',
          'appropSignage',
          'appropSignagePhoto',
          'appropSignageComm',
          'hydrantSprinkler',
          'hydrantSprinklerPh',
          'hydrantSprinklerCm',
          'capsOnHydrants',
          'hydrantsPhoto',
          'hydrantsComments',
          'fireDoorsFreeDamag',
          'fireDoorPhoto',
          'fireDoorComment',
          'noOpenFire',
          'noOpenPhoto',
          'noOpenComment',
          'alarmCommunication',
          'alarmPhoto',
          'alarmComment',
          'smokingFlame',
          'smokingFlamePhoto',
          'somkingFlameCom',
          'emergPerson',
          'emergPersonPhoto',
          'emergPersonComm',
          'emergProced',
          'emergProcedPhoto',
          'emergProcedComment',
          'evacSigns',
          'evacSignsPhoto',
          'evacSignsComment',
          'fireEvacRecord',
          'fireEvacRPhoto',
          'fireEvacRComment',
          'fireProtecSys',
          'fireProtecSysPhoto',
          'fireProtecSysComm',
          'fireProtectSysOp',
          'fireProtectOpPhoto',
          'fireProtectOpComm',
          'sprinklerHeads',
          'sprinklerHeadPhoto',
          'sprinklerHeadComm',
          'baseLineData',
          'baseLinePhoto',
          'baseLineComment',
          'firePumpsOp',
          'firePumpsOpPhoto',
          'firePumpsOpComment',
          'firPumpsAuto',
          'firePumpsAutoPhoto',
          'firePumpsAutoComm',
          'firePumpsFuel75',
          'firePumpsFuelPhoto',
          'firePumpsComment',
          'firePumpsAcces',
          'firePumpsAcPhoto',
          'firePumpsAcComment',
          'gaugeRead',
          'guageReadPhotoY',
          'guageReadPhotoN',
          'guageReadComment',
          '_message_6',
          '_heading_12',
          'electricalLocation',
          'L96_switchRoom',
          'L96_switchRoomP',
          'L96_switchRoomC',
          'L97_dbLocked',
          'L97_dbLockedP',
          'L97_dbLockedC',
          'L98_noBrokenPlug',
          'L98_noBrokenP',
          'L98_noBrokenC',
          'L99_noFrayedLeads',
          'L99_noFrayedP',
          'L99_noFrayedC',
          'L100_officeEquip',
          'L100_officeEP',
          'L100_officeEC',
          'L101_equipInspec',
          'L101_equipInP',
          'L101_equipInC',
          'L102_lockOut',
          'L102_lockOutP',
          'L102_lockOutC',
          'L103_rcdSys',
          'L103_rcdSysP',
          'L103_rcdSysC',
          'L104_noCombustible',
          'L104_noCombustP',
          'L104_noCombustC',
          'L105_noTempWire',
          'L105_noTempWireP',
          'L105_noTempWireC',
          'L106_batteryUPS',
          'L106_batteryUPSP',
          'L106_batteryUPSC',
          '_message_5',
          '_heading_13',
          'M109_plantRoomClea',
          'M109_plantRoomP',
          'M109_plantRoomC',
          'M110_plantRoomSe',
          'M110_plantRoomSeP',
          'M110_plantRoomSeC',
          'M111_equipFault',
          'M111_equipFaultP',
          'M111_equipFaultC',
          'M111N_equipfaultB',
          'M111N_equpfaultBP',
          'M111N_equipfaultBC',
          'M112_chillerOp',
          'M112_chillerOpP',
          'M112_chillerOpC',
          'M113_suppUnitOp',
          'M113_suppUnitOpP',
          'M113_suppUnitOpC',
          'M114_tenantSuppOp',
          'M114_tenantSuppOpP',
          'M114_tenantSuppOpC',
          'M115_coolingTower',
          'M115_coolingTowerP',
          'M115_coolingTowerC',
          'M116_waterTreat',
          'M116_waterTreatP',
          'M116_waterTreatC',
          'M117_baseTowerDry',
          'M117_baseTowerDryP',
          'M117_baseTowerDryC',
          'M117N_noAlarms',
          'M117N_noAlarmsP',
          'M117N_noAlarmsC',
          'M118_AHUSecured',
          'M118_AHUSecuredP',
          'M118_AHUSecuredC',
          'M119_filtersCoils',
          'M119_filtersCoilsP',
          'M119_filtersCoilsC',
          'M120_refrigPipe',
          'M120_refrigPipeP',
          'M120_refrigPipeC',
          'M121_carParkEx',
          'M121_carParkExP',
          'M121_carParkExC',
          'kitchenBathFanOp',
          'kitchenBathFanOpP',
          'kitchenBathFanOpC',
          '_message_4',
          '_heading_14',
          '_message_17',
          'liftRoomClean',
          'liftTravOp',
          'lifttravCamera',
          'lifttravComment',
          '_message_18',
          'greaseTrapMaintain',
          'greasetrapsCamera',
          'greasetrapsComment',
          'sumpPumpOp',
          'sumpPumpOpP',
          'sumpPumpOpC',
          'recticulationOp',
          'recticulationOpP',
          'recticulationOpC',
          'sewerageOp',
          'sewerageOpP',
          'sewerageOpC',
          'hotSysOp',
          'hotSysOpP',
          'hotSysOpC',
          '_message_19',
          'fuelTankInteg',
          'fuelTankIntegP',
          'fuelTankIntegC',
          'accessControlOp',
          'accessControlOpP',
          'accessControlOpC',
          'keysAccessCardSec',
          'keysAccessCardSecP',
          'keyAccessCardSecC',
          'cctvSysOp',
          'cctvSysOpP',
          'cctvSysOpC',
          'secPatrol',
          'secPatrolP',
          'secPatrolC',
          '_message_20',
          'generatorOp',
          'generatorOpP',
          'generatorOpC',
          'fillpointSysOp',
          'fillpointSysOpP',
          'fillpointSysOpC',
          'dieselpumpOp',
          'dieselpumpOpP',
          'dieselpumpOpC',
          'dieselfuelFreeDmg',
          'dieselfuelfreeDmgP',
          'dieselfuelfreeDmgC',
          '_message_16'
        ]
      },
      'view': {
        'interaction': 'INSPECTION_VIEW',
        'displayName': 'INSPECTION VIEW',
        'defaultCategory': '',
        'header': '',
        'footer': '',
        'hidden': '1',
        'action': 'view',
        '_elements': [
          '_message_1',
          'inspectionDate',
          'inspectorEmail',
          'inspectionAddress',
          'inspectorName',
          '_heading_1',
          '_message_21',
          'incidentType',
          'publicLiability',
          'liabilityPhoto',
          'liabilityComment',
          'buildingEquipment',
          'buildingPhoto',
          'buildingComment',
          '_message_12',
          '_heading_2',
          'reviewed',
          'previousPhoto',
          'previousComment',
          '_message_13',
          '_heading_3',
          'houseLocation',
          'workAreas',
          'wasteRemoval',
          'wasteRemovalPhoto',
          'wasteRemovalComm',
          'slipTripHazards',
          'slipTripPhoto',
          'slipTripComm',
          'serviceRooms',
          'dustBuildUp',
          'externalAreas',
          'externalAreasPhoto',
          'externalAreasComm',
          'gardensGrounds',
          'pestControl',
          'pestControlPhoto',
          'pestControlComm',
          'rubbishAreas',
          'rubbishAreasPhoto',
          'rubbishAreasComm',
          '_message_14',
          '_heading_15',
          'potLocation',
          'unobAndDefined',
          'unobDefinedPhoto',
          'unobDefinedComment',
          'AdLighting',
          'AdLightingPhoto',
          'AdLightingComment',
          'emergencySign',
          'emergencySignPhoto',
          'emergencySignComm',
          'fireDoorSign',
          'fireDoorSignPhoto',
          'fireDoorSignComm',
          'exitDoorOp',
          'exitDoorOpPhoto',
          'exitDoorOpComm',
          'stairwells',
          'stairwellsPhoto',
          'stairwellsComm',
          '_message_15',
          '_heading_4',
          'signIn',
          'signInPhoto',
          'signInComments',
          'siteKeys',
          'siteKeysPhoto',
          'siteKeysComment',
          'siteKeyLockBox',
          'siteKeyLockPhoto',
          'siteKeyLockComm',
          'permits',
          'permitsPhoto',
          'permitsComment',
          'houseRule',
          'houseRulePhoto',
          'houseRuleComment',
          'tenancyFit',
          'tenancyFitPhoto',
          'tenancyFitComment',
          'hotWorks',
          'hotWorksPhoto',
          'hotWorksComment',
          'serviceFailure',
          'serviceFailPhoto',
          'serviceFailComment',
          'bmuPermits',
          'bmuPermitPhoto',
          'bmuPermitComment',
          '_message_11',
          '_heading_5',
          'materialLocation',
          'materialsRegister',
          'materialsRegPhoto',
          'materialRegComment',
          'msds',
          'msdsPhoto',
          'msdsComment',
          'containersLabelled',
          'containLabelPhoto',
          'containLabelCommen',
          'adequateVentilation',
          'adequateVentPhoto',
          'adequateVentCom',
          'bundedAreas',
          'bundedAreasPhoto',
          'bundedAreasComment',
          'asbestosRegister',
          'asbestosRegPhoto',
          'asbestosRegComment',
          'asbestosManagement',
          'asbestosManagPhoto',
          'asbestosMagComment',
          'areasClean',
          'areasCleanPhoto',
          'areasCleanComment',
          '_message_3',
          '_heading_6',
          'certificateClassification',
          'certificatePhoto',
          'certificateComment',
          'engineeredSolutions',
          'engineeredPhoto',
          'engineeredComment',
          'occupiers',
          'occupiersPhoto',
          'occupiersComment',
          'afterHoursEmergency',
          'afterHoursPhoto',
          'afterHoursComment',
          'plantRegistrations',
          'plantRegPhoto',
          'plantRegComment',
          'fireMaintenance',
          'fireMainPhoto',
          'fireMainComment',
          'rpz',
          'rpzPhoto',
          'rpzComment',
          'thermostaticMixing',
          'thermostaticPhoto',
          'thermostaticComm',
          '_message_2',
          '_heading_7',
          'firstAidKit',
          'firstAidPhoto',
          'firstAidComment',
          'defibAvail',
          'defibPhoto',
          'defibComment',
          'PPEAvail',
          'PPEPhoto',
          'PPEComment',
          'spillProcedure',
          'spillProcedPhoto',
          'spillProcedComment',
          'spillKit',
          'spillKitPhoto',
          'spillKitComment',
          'slipTesting',
          'slipTestPhoto',
          'slipTestComment',
          'independentSite',
          'independentPhoto',
          'independentComment',
          '_message_10',
          '_heading_8',
          'stepLocation',
          'wornBrokenSteps',
          'wornStepPhoto',
          'wornStepComment',
          'handRails',
          'handRailsPhoto',
          'handRailsComments',
          'anchorsTagged',
          'anchorsTagPhoto',
          'anchorsTagComment',
          'nonSlipTreatments',
          'noSlipPhoto',
          'noSlipComment',
          'nosingTreatments',
          'nosingTreatPhoto',
          'nosingTreatComment',
          '_message_9',
          '_heading_9',
          'amenitiesLocation',
          'washroomAreasClean',
          'washroomPhoto',
          'washroomComment',
          'toiletsClean',
          'toiletsPhoto',
          'toiletsComment',
          'basinsClean',
          'basinsPhoto',
          'basinsComment',
          'showersClean',
          'showersPhoto',
          'showersComment',
          'rubbishBins',
          'rubbishPhoto',
          'rubbishComment',
          'consumablesAvail',
          'consumablesPhoto',
          'consumablesComment',
          'sanitaryBins',
          'sanitaryPhoto',
          'sanitaryComment',
          'deodorizersOperate',
          'deodorizersPhoto',
          'deodorizersComment',
          'handDryers',
          'handDryersPhoto',
          'handDryersComment',
          '_message_8',
          '_heading_10',
          'roofAreas',
          'roofAreasPhoto',
          'roofAreasComment',
          'roofGutterClear',
          'roofGutterPhoto',
          'roofGutterComment',
          'looseRoofSheeting',
          'looseRoofPhoto',
          'looseRoofComment',
          'glazingCraked',
          'glazingCrackPhoto',
          'glazingCrackedCom',
          'externalGlazingCl',
          'externalGlazPhoto',
          'externalGlazCom',
          'waterLeaks',
          'waterLeaksPhoto',
          'waterLeaksComm',
          'hfRfEquip',
          'hfRfEPhoto',
          'hfRfEComments',
          'roofAccessPlan',
          'roofAccessPhoto',
          'roofAccessComments',
          'roofPermit',
          'roofPermitPhoto',
          'roofPermitComments',
          'bmuReg',
          'bmuPhoto',
          'bmuComments',
          '_message_7',
          '_heading_11',
          'fireLocation',
          'testLogBooks',
          'testLogBooksCalY',
          'testLogBooksCalN',
          'testLogPhoto',
          'testLogComment',
          'noOutstandingdefec',
          'noOutstandCalYes',
          'noOustandCalNo',
          'noOutstandPhoto',
          'noOutstandComment',
          'extinguishHydrants',
          'extinguishCalYes',
          'extingusihCalNo',
          'extinguishPhoto',
          'extinguishComments',
          'fireFighting',
          'firePhoto',
          'fireComments',
          'appropSignage',
          'appropSignagePhoto',
          'appropSignageComm',
          'hydrantSprinkler',
          'hydrantSprinklerPh',
          'hydrantSprinklerCm',
          'capsOnHydrants',
          'hydrantsPhoto',
          'hydrantsComments',
          'fireDoorsFreeDamag',
          'fireDoorPhoto',
          'fireDoorComment',
          'noOpenFire',
          'noOpenPhoto',
          'noOpenComment',
          'alarmCommunication',
          'alarmPhoto',
          'alarmComment',
          'smokingFlame',
          'smokingFlamePhoto',
          'somkingFlameCom',
          'emergPerson',
          'emergPersonPhoto',
          'emergPersonComm',
          'emergProced',
          'emergProcedPhoto',
          'emergProcedComment',
          'evacSigns',
          'evacSignsPhoto',
          'evacSignsComment',
          'fireEvacRecord',
          'fireEvacRPhoto',
          'fireEvacRComment',
          'fireProtecSys',
          'fireProtecSysPhoto',
          'fireProtecSysComm',
          'fireProtectSysOp',
          'fireProtectOpPhoto',
          'fireProtectOpComm',
          'sprinklerHeads',
          'sprinklerHeadPhoto',
          'sprinklerHeadComm',
          'baseLineData',
          'baseLinePhoto',
          'baseLineComment',
          'firePumpsOp',
          'firePumpsOpPhoto',
          'firePumpsOpComment',
          'firPumpsAuto',
          'firePumpsAutoPhoto',
          'firePumpsAutoComm',
          'firePumpsFuel75',
          'firePumpsFuelPhoto',
          'firePumpsComment',
          'firePumpsAcces',
          'firePumpsAcPhoto',
          'firePumpsAcComment',
          'gaugeRead',
          'guageReadPhotoY',
          'guageReadPhotoN',
          'guageReadComment',
          '_message_6',
          '_heading_12',
          'electricalLocation',
          'L96_switchRoom',
          'L96_switchRoomP',
          'L96_switchRoomC',
          'L97_dbLocked',
          'L97_dbLockedP',
          'L97_dbLockedC',
          'L98_noBrokenPlug',
          'L98_noBrokenP',
          'L98_noBrokenC',
          'L99_noFrayedLeads',
          'L99_noFrayedP',
          'L99_noFrayedC',
          'L100_officeEquip',
          'L100_officeEP',
          'L100_officeEC',
          'L101_equipInspec',
          'L101_equipInP',
          'L101_equipInC',
          'L102_lockOut',
          'L102_lockOutP',
          'L102_lockOutC',
          'L103_rcdSys',
          'L103_rcdSysP',
          'L103_rcdSysC',
          'L104_noCombustible',
          'L104_noCombustP',
          'L104_noCombustC',
          'L105_noTempWire',
          'L105_noTempWireP',
          'L105_noTempWireC',
          'L106_batteryUPS',
          'L106_batteryUPSP',
          'L106_batteryUPSC',
          '_message_5',
          '_heading_13',
          'M109_plantRoomClea',
          'M109_plantRoomP',
          'M109_plantRoomC',
          'M110_plantRoomSe',
          'M110_plantRoomSeP',
          'M110_plantRoomSeC',
          'M111_equipFault',
          'M111_equipFaultP',
          'M111_equipFaultC',
          'M111N_equipfaultB',
          'M111N_equpfaultBP',
          'M111N_equipfaultBC',
          'M112_chillerOp',
          'M112_chillerOpP',
          'M112_chillerOpC',
          'M113_suppUnitOp',
          'M113_suppUnitOpP',
          'M113_suppUnitOpC',
          'M114_tenantSuppOp',
          'M114_tenantSuppOpP',
          'M114_tenantSuppOpC',
          'M115_coolingTower',
          'M115_coolingTowerP',
          'M115_coolingTowerC',
          'M116_waterTreat',
          'M116_waterTreatP',
          'M116_waterTreatC',
          'M117_baseTowerDry',
          'M117_baseTowerDryP',
          'M117_baseTowerDryC',
          'M117N_noAlarms',
          'M117N_noAlarmsP',
          'M117N_noAlarmsC',
          'M118_AHUSecured',
          'M118_AHUSecuredP',
          'M118_AHUSecuredC',
          'M119_filtersCoils',
          'M119_filtersCoilsP',
          'M119_filtersCoilsC',
          'M120_refrigPipe',
          'M120_refrigPipeP',
          'M120_refrigPipeC',
          'M121_carParkEx',
          'M121_carParkExP',
          'M121_carParkExC',
          'kitchenBathFanOp',
          'kitchenBathFanOpP',
          'kitchenBathFanOpC',
          '_message_4',
          '_heading_14',
          '_message_17',
          'liftRoomClean',
          'liftTravOp',
          'lifttravCamera',
          'lifttravComment',
          '_message_18',
          'greaseTrapMaintain',
          'greasetrapsCamera',
          'greasetrapsComment',
          'sumpPumpOp',
          'sumpPumpOpP',
          'sumpPumpOpC',
          'recticulationOp',
          'recticulationOpP',
          'recticulationOpC',
          'sewerageOp',
          'sewerageOpP',
          'sewerageOpC',
          'hotSysOp',
          'hotSysOpP',
          'hotSysOpC',
          '_message_19',
          'fuelTankInteg',
          'fuelTankIntegP',
          'fuelTankIntegC',
          'accessControlOp',
          'accessControlOpP',
          'accessControlOpC',
          'keysAccessCardSec',
          'keysAccessCardSecP',
          'keyAccessCardSecC',
          'cctvSysOp',
          'cctvSysOpP',
          'cctvSysOpC',
          'secPatrol',
          'secPatrolP',
          'secPatrolC',
          '_message_20',
          'generatorOp',
          'generatorOpP',
          'generatorOpC',
          'fillpointSysOp',
          'fillpointSysOpP',
          'fillpointSysOpC',
          'dieselpumpOp',
          'dieselpumpOpP',
          'dieselpumpOpC',
          'dieselfuelFreeDmg',
          'dieselfuelfreeDmgP',
          'dieselfuelfreeDmgC',
          '_message_16'
        ]
      },
      'delete': {
        'interaction': 'INSPECTION_DELETE',
        'displayName': 'INSPECTION DELETE',
        'defaultCategory': '',
        'header': '',
        'footer': '',
        'hidden': '1',
        'action': 'delete',
        '_elements': [
          '_message_1',
          'inspectionDate',
          'inspectorEmail',
          'inspectionAddress',
          'inspectorName',
          '_heading_1',
          '_message_21',
          'incidentType',
          'publicLiability',
          'liabilityPhoto',
          'liabilityComment',
          'buildingEquipment',
          'buildingPhoto',
          'buildingComment',
          '_message_12',
          '_heading_2',
          'reviewed',
          'previousPhoto',
          'previousComment',
          '_message_13',
          '_heading_3',
          'houseLocation',
          'workAreas',
          'wasteRemoval',
          'wasteRemovalPhoto',
          'wasteRemovalComm',
          'slipTripHazards',
          'slipTripPhoto',
          'slipTripComm',
          'serviceRooms',
          'dustBuildUp',
          'externalAreas',
          'externalAreasPhoto',
          'externalAreasComm',
          'gardensGrounds',
          'pestControl',
          'pestControlPhoto',
          'pestControlComm',
          'rubbishAreas',
          'rubbishAreasPhoto',
          'rubbishAreasComm',
          '_message_14',
          '_heading_15',
          'potLocation',
          'unobAndDefined',
          'unobDefinedPhoto',
          'unobDefinedComment',
          'AdLighting',
          'AdLightingPhoto',
          'AdLightingComment',
          'emergencySign',
          'emergencySignPhoto',
          'emergencySignComm',
          'fireDoorSign',
          'fireDoorSignPhoto',
          'fireDoorSignComm',
          'exitDoorOp',
          'exitDoorOpPhoto',
          'exitDoorOpComm',
          'stairwells',
          'stairwellsPhoto',
          'stairwellsComm',
          '_message_15',
          '_heading_4',
          'signIn',
          'signInPhoto',
          'signInComments',
          'siteKeys',
          'siteKeysPhoto',
          'siteKeysComment',
          'siteKeyLockBox',
          'siteKeyLockPhoto',
          'siteKeyLockComm',
          'permits',
          'permitsPhoto',
          'permitsComment',
          'houseRule',
          'houseRulePhoto',
          'houseRuleComment',
          'tenancyFit',
          'tenancyFitPhoto',
          'tenancyFitComment',
          'hotWorks',
          'hotWorksPhoto',
          'hotWorksComment',
          'serviceFailure',
          'serviceFailPhoto',
          'serviceFailComment',
          'bmuPermits',
          'bmuPermitPhoto',
          'bmuPermitComment',
          '_message_11',
          '_heading_5',
          'materialLocation',
          'materialsRegister',
          'materialsRegPhoto',
          'materialRegComment',
          'msds',
          'msdsPhoto',
          'msdsComment',
          'containersLabelled',
          'containLabelPhoto',
          'containLabelCommen',
          'adequateVentilation',
          'adequateVentPhoto',
          'adequateVentCom',
          'bundedAreas',
          'bundedAreasPhoto',
          'bundedAreasComment',
          'asbestosRegister',
          'asbestosRegPhoto',
          'asbestosRegComment',
          'asbestosManagement',
          'asbestosManagPhoto',
          'asbestosMagComment',
          'areasClean',
          'areasCleanPhoto',
          'areasCleanComment',
          '_message_3',
          '_heading_6',
          'certificateClassification',
          'certificatePhoto',
          'certificateComment',
          'engineeredSolutions',
          'engineeredPhoto',
          'engineeredComment',
          'occupiers',
          'occupiersPhoto',
          'occupiersComment',
          'afterHoursEmergency',
          'afterHoursPhoto',
          'afterHoursComment',
          'plantRegistrations',
          'plantRegPhoto',
          'plantRegComment',
          'fireMaintenance',
          'fireMainPhoto',
          'fireMainComment',
          'rpz',
          'rpzPhoto',
          'rpzComment',
          'thermostaticMixing',
          'thermostaticPhoto',
          'thermostaticComm',
          '_message_2',
          '_heading_7',
          'firstAidKit',
          'firstAidPhoto',
          'firstAidComment',
          'defibAvail',
          'defibPhoto',
          'defibComment',
          'PPEAvail',
          'PPEPhoto',
          'PPEComment',
          'spillProcedure',
          'spillProcedPhoto',
          'spillProcedComment',
          'spillKit',
          'spillKitPhoto',
          'spillKitComment',
          'slipTesting',
          'slipTestPhoto',
          'slipTestComment',
          'independentSite',
          'independentPhoto',
          'independentComment',
          '_message_10',
          '_heading_8',
          'stepLocation',
          'wornBrokenSteps',
          'wornStepPhoto',
          'wornStepComment',
          'handRails',
          'handRailsPhoto',
          'handRailsComments',
          'anchorsTagged',
          'anchorsTagPhoto',
          'anchorsTagComment',
          'nonSlipTreatments',
          'noSlipPhoto',
          'noSlipComment',
          'nosingTreatments',
          'nosingTreatPhoto',
          'nosingTreatComment',
          '_message_9',
          '_heading_9',
          'amenitiesLocation',
          'washroomAreasClean',
          'washroomPhoto',
          'washroomComment',
          'toiletsClean',
          'toiletsPhoto',
          'toiletsComment',
          'basinsClean',
          'basinsPhoto',
          'basinsComment',
          'showersClean',
          'showersPhoto',
          'showersComment',
          'rubbishBins',
          'rubbishPhoto',
          'rubbishComment',
          'consumablesAvail',
          'consumablesPhoto',
          'consumablesComment',
          'sanitaryBins',
          'sanitaryPhoto',
          'sanitaryComment',
          'deodorizersOperate',
          'deodorizersPhoto',
          'deodorizersComment',
          'handDryers',
          'handDryersPhoto',
          'handDryersComment',
          '_message_8',
          '_heading_10',
          'roofAreas',
          'roofAreasPhoto',
          'roofAreasComment',
          'roofGutterClear',
          'roofGutterPhoto',
          'roofGutterComment',
          'looseRoofSheeting',
          'looseRoofPhoto',
          'looseRoofComment',
          'glazingCraked',
          'glazingCrackPhoto',
          'glazingCrackedCom',
          'externalGlazingCl',
          'externalGlazPhoto',
          'externalGlazCom',
          'waterLeaks',
          'waterLeaksPhoto',
          'waterLeaksComm',
          'hfRfEquip',
          'hfRfEPhoto',
          'hfRfEComments',
          'roofAccessPlan',
          'roofAccessPhoto',
          'roofAccessComments',
          'roofPermit',
          'roofPermitPhoto',
          'roofPermitComments',
          'bmuReg',
          'bmuPhoto',
          'bmuComments',
          '_message_7',
          '_heading_11',
          'fireLocation',
          'testLogBooks',
          'testLogBooksCalY',
          'testLogBooksCalN',
          'testLogPhoto',
          'testLogComment',
          'noOutstandingdefec',
          'noOutstandCalYes',
          'noOustandCalNo',
          'noOutstandPhoto',
          'noOutstandComment',
          'extinguishHydrants',
          'extinguishCalYes',
          'extingusihCalNo',
          'extinguishPhoto',
          'extinguishComments',
          'fireFighting',
          'firePhoto',
          'fireComments',
          'appropSignage',
          'appropSignagePhoto',
          'appropSignageComm',
          'hydrantSprinkler',
          'hydrantSprinklerPh',
          'hydrantSprinklerCm',
          'capsOnHydrants',
          'hydrantsPhoto',
          'hydrantsComments',
          'fireDoorsFreeDamag',
          'fireDoorPhoto',
          'fireDoorComment',
          'noOpenFire',
          'noOpenPhoto',
          'noOpenComment',
          'alarmCommunication',
          'alarmPhoto',
          'alarmComment',
          'smokingFlame',
          'smokingFlamePhoto',
          'somkingFlameCom',
          'emergPerson',
          'emergPersonPhoto',
          'emergPersonComm',
          'emergProced',
          'emergProcedPhoto',
          'emergProcedComment',
          'evacSigns',
          'evacSignsPhoto',
          'evacSignsComment',
          'fireEvacRecord',
          'fireEvacRPhoto',
          'fireEvacRComment',
          'fireProtecSys',
          'fireProtecSysPhoto',
          'fireProtecSysComm',
          'fireProtectSysOp',
          'fireProtectOpPhoto',
          'fireProtectOpComm',
          'sprinklerHeads',
          'sprinklerHeadPhoto',
          'sprinklerHeadComm',
          'baseLineData',
          'baseLinePhoto',
          'baseLineComment',
          'firePumpsOp',
          'firePumpsOpPhoto',
          'firePumpsOpComment',
          'firPumpsAuto',
          'firePumpsAutoPhoto',
          'firePumpsAutoComm',
          'firePumpsFuel75',
          'firePumpsFuelPhoto',
          'firePumpsComment',
          'firePumpsAcces',
          'firePumpsAcPhoto',
          'firePumpsAcComment',
          'gaugeRead',
          'guageReadPhotoY',
          'guageReadPhotoN',
          'guageReadComment',
          '_message_6',
          '_heading_12',
          'electricalLocation',
          'L96_switchRoom',
          'L96_switchRoomP',
          'L96_switchRoomC',
          'L97_dbLocked',
          'L97_dbLockedP',
          'L97_dbLockedC',
          'L98_noBrokenPlug',
          'L98_noBrokenP',
          'L98_noBrokenC',
          'L99_noFrayedLeads',
          'L99_noFrayedP',
          'L99_noFrayedC',
          'L100_officeEquip',
          'L100_officeEP',
          'L100_officeEC',
          'L101_equipInspec',
          'L101_equipInP',
          'L101_equipInC',
          'L102_lockOut',
          'L102_lockOutP',
          'L102_lockOutC',
          'L103_rcdSys',
          'L103_rcdSysP',
          'L103_rcdSysC',
          'L104_noCombustible',
          'L104_noCombustP',
          'L104_noCombustC',
          'L105_noTempWire',
          'L105_noTempWireP',
          'L105_noTempWireC',
          'L106_batteryUPS',
          'L106_batteryUPSP',
          'L106_batteryUPSC',
          '_message_5',
          '_heading_13',
          'M109_plantRoomClea',
          'M109_plantRoomP',
          'M109_plantRoomC',
          'M110_plantRoomSe',
          'M110_plantRoomSeP',
          'M110_plantRoomSeC',
          'M111_equipFault',
          'M111_equipFaultP',
          'M111_equipFaultC',
          'M111N_equipfaultB',
          'M111N_equpfaultBP',
          'M111N_equipfaultBC',
          'M112_chillerOp',
          'M112_chillerOpP',
          'M112_chillerOpC',
          'M113_suppUnitOp',
          'M113_suppUnitOpP',
          'M113_suppUnitOpC',
          'M114_tenantSuppOp',
          'M114_tenantSuppOpP',
          'M114_tenantSuppOpC',
          'M115_coolingTower',
          'M115_coolingTowerP',
          'M115_coolingTowerC',
          'M116_waterTreat',
          'M116_waterTreatP',
          'M116_waterTreatC',
          'M117_baseTowerDry',
          'M117_baseTowerDryP',
          'M117_baseTowerDryC',
          'M117N_noAlarms',
          'M117N_noAlarmsP',
          'M117N_noAlarmsC',
          'M118_AHUSecured',
          'M118_AHUSecuredP',
          'M118_AHUSecuredC',
          'M119_filtersCoils',
          'M119_filtersCoilsP',
          'M119_filtersCoilsC',
          'M120_refrigPipe',
          'M120_refrigPipeP',
          'M120_refrigPipeC',
          'M121_carParkEx',
          'M121_carParkExP',
          'M121_carParkExC',
          'kitchenBathFanOp',
          'kitchenBathFanOpP',
          'kitchenBathFanOpC',
          '_message_4',
          '_heading_14',
          '_message_17',
          'liftRoomClean',
          'liftTravOp',
          'lifttravCamera',
          'lifttravComment',
          '_message_18',
          'greaseTrapMaintain',
          'greasetrapsCamera',
          'greasetrapsComment',
          'sumpPumpOp',
          'sumpPumpOpP',
          'sumpPumpOpC',
          'recticulationOp',
          'recticulationOpP',
          'recticulationOpC',
          'sewerageOp',
          'sewerageOpP',
          'sewerageOpC',
          'hotSysOp',
          'hotSysOpP',
          'hotSysOpC',
          '_message_19',
          'fuelTankInteg',
          'fuelTankIntegP',
          'fuelTankIntegC',
          'accessControlOp',
          'accessControlOpP',
          'accessControlOpC',
          'keysAccessCardSec',
          'keysAccessCardSecP',
          'keyAccessCardSecC',
          'cctvSysOp',
          'cctvSysOpP',
          'cctvSysOpC',
          'secPatrol',
          'secPatrolP',
          'secPatrolC',
          '_message_20',
          'generatorOp',
          'generatorOpP',
          'generatorOpC',
          'fillpointSysOp',
          'fillpointSysOpP',
          'fillpointSysOpC',
          'dieselpumpOp',
          'dieselpumpOpP',
          'dieselpumpOpC',
          'dieselfuelFreeDmg',
          'dieselfuelfreeDmgP',
          'dieselfuelfreeDmgC',
          '_message_16'
        ]
      },
      '_id': 'inspection',
      '_rev': '1-503c61eb51a163074f4b7d658bb4ea7c'
    }
  ];
});
