define(function() {
    return [{
        'default': {
            name: 'form1',
            label: 'Form 1',
            _elements: [{
                'default': {
                    name: 'id',
                    type: 'hidden'
                }
            }, {
                'default': {
                    name: 'url',
                    label: 'URL',
                    type: 'url',
                    defaultValue: 'https://blinkm.co/ron',
                    page: 0
                }
            }, {
                'default': {
                    name: 'email',
                    label: 'Email',
                    type: 'email',
                    defaultValue: 'ron@blinkmobile.com.au',
                    section: 'account'
                        // deliberately skip page:0 here
                }
            }, {
                'default': {
                    name: 'password',
                    label: 'Password',
                    type: 'password',
                    defaultValue: 'secret',
                    section: 'account',
                    page: 0
                }
            }, {
                'default': {
                    name: 'streetAddress',
                    label: 'Street Address',
                    type: 'textarea',
                    defaultValue: 'Suite 2\r\n125 Donnison Street',
                    section: 'address',
                    page: 1
                }
            }, {
                'default': {
                    name: 'city',
                    label: 'City',
                    type: 'text',
                    defaultValue: 'Gosford',
                    section: 'address',
                    page: 1
                }
            }, {
                'default': {
                    name: 'comments',
                    label: 'Comments',
                    type: 'subForm',
                    subForm: 'form2',
                    plusButtonLabel: "PLUS",
                    minusButtonLabel: "MINUS",
                    page: 1
                }
            }, {
                'default': {
                    name: 'telephone',
                    label: 'Telephone',
                    type: 'telephone',
                    defaultValue: '+61 439 901 787',
                    page: 2
                }
            }, {
                'default': {
                    name: 'number',
                    label: 'Number',
                    type: 'number',
                    min: 15,
                    max: 400,
                    step: 5,
                    defaultValue: 35,
                    page: 2
                }
            }, {
                'default': {
                    name: 'numberSlider',
                    label: 'Number withSlider',
                    type: 'number',
                    min: 15,
                    max: 400,
                    step: 5,
                    useSlider: true,
                    defaultValue: 35,
                    page: 2
                }
            }, {
                'default': {
                    name: 'currency',
                    label: 'Currency',
                    type: 'number',
                    minDecimals: 2,
                    maxDecimals: 2,
                    defaultValue: '876.54',
                    page: 2
                }
            }],
            _sections: [{
                'default': {
                    name: 'account',
                    'class': 'myClass'
                }
            }, {
                'default': {
                    name: 'address',
                    'class': 'myClass'
                }
            }]
        }
    }, {
        'default': {
            name: 'form2',
            label: 'Form 2',
            _elements: [{
                'default': {
                    name: 'id',
                    type: 'hidden'
                }
            }, {
                'default': {
                    name: 'comment',
                    label: 'Comment',
                    type: 'textarea'
                }
            }, {
                'default': {
                    name: 'datetime',
                    label: 'Date + Time',
                    type: 'datetime',
                    defaultValue: 'now'
                }
            }, {
                "default": {
                    "name": "text_area-comment",
                    "type": "textarea",
                    "label": "Text Area",
                    "labelPlacement": "default",
                    "labelStyle": "Plain",
                    "required": "1",
                    "placeholderText": "this field is required",
                    "wrap": "hard"
                }
            }, {
                "default": {
                    "name": "password-comment",
                    "type": "password",
                    "label": "Password"
                }
            }, {
                "default": {
                    "name": "email-comment",
                    "type": "email",
                    "label": "Email"
                }
            }, {
                "default": {
                    "name": "url-comment",
                    "type": "url",
                    "label": "Url"
                }
            }, {
                "default": {
                    "name": "phone_number-comment",
                    "type": "telephone",
                    "label": "Phone Number"
                }
            }, {
                "default": {
                    "name": "number-comment",
                    "type": "number",
                    "label": "Number"
                }
            }, {
                "default": {
                    "name": "currency-comment",
                    "type": "number",
                    "label": "Currency"
                }
            }, {
                "default": {
                    "name": "calculation-comment",
                    "type": "message",
                    "label": "Calculation",
                    "persist": true
                }
            }, {
                "default": {
                    "name": "radio-comment",
                    "type": "select",
                    "label": "Radio",
                    "mode": "expanded"
                }
            }, {
                "default": {
                    "name": "select-comment",
                    "type": "select",
                    "label": "Select",
                    "mode": "collapsed"
                }
            }, {
                "default": {
                    "name": "star_rating-comment",
                    "type": "number",
                    "label": "Star Rating",
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
                    "max": "5"
                }
            }, {
                "default": {
                    "name": "multi-comment",
                    "type": "multi",
                    "label": "Multi",
                    "mode": "collapsed"
                }
            }, {
                "default": {
                    "name": "checkboxes-comment",
                    "type": "multi",
                    "label": "Checkboxes",
                    "mode": "expanded"
                }
            }, {
                "default": {
                    "name": "checkbox-comment",
                    "type": "boolean",
                    "label": "Checkbox",
                    "options": ["n", "y"],
                    "defaultValue": 0
                }
            }, {
                "default": {
                    "name": "date-comment",
                    "type": "date",
                    "label": "Date"
                }
            }, {
                "default": {
                    "name": "time-comment",
                    "type": "time",
                    "label": "Time"
                }
            }, {
                "default": {
                    "name": "timestamp-comment",
                    "type": "datetime",
                    "label": "Timestamp"
                }
            }, {
                "default": {
                    "name": "camera-comment",
                    "type": "file",
                    "label": "Camera",
                    "capture": true,
                    "accept": "image\\\/*"
                }
            }, {
                "default": {
                    "name": "image_library-comment",
                    "type": "file",
                    "label": "Image Library",
                    "accept": "image\\\/*"
                }
            }, {
                "default": {
                    "name": "file_upload-comment",
                    "type": "file",
                    "label": "File Upload"
                }
            }, {
                "default": {
                    "name": "textbox-comment",
                    "type": "text",
                    "label": "Textbox",
                    "labelPlacement": "default",
                    "labelStyle": "Plain",
                    "required": "1",
                    "tooltip": "I am the tool tip for the text area",
                    "hint": "I am the hint text for the text area",
                    "maxWidthPrefix": "characters"
                }
            },  {
                "default": {
                    "name": "location-comment",
                    "type": "location",
                    "label": "Location"
                }
            }, {
                "default": {
                    "name": "sketch_signature-comment",
                    "type": "draw",
                    "label": "Sketch Signature",
                    "size": "signature"
                }
            }, {
                "default": {
                    "name": "avalue-comment",
                    "type": "text",
                    "label": "Avalue"
                }
            }, {
                "default": {
                    "name": "logged_in_user_id-comment",
                    "type": "text",
                    "label": "Logged In User Id"
                }
            }, {
                "default": {
                    "name": "user_attribute-comment",
                    "type": "text",
                    "label": "User Attribute"
                }
            }, {
                "default": {
                    "name": "get_value-comment",
                    "type": "text",
                    "label": "Get Value"
                }
            }]
        }
    }];
});
