Blink Forms Errors
==================

Field Errors
============

Form Field Elements are validated as you type and when the field loses focus. When a error is found, a list of errors is appended to the DOM inside the elements container
    
    <form class='bm-form-invalid'>
        <div data-role="fieldcontain" rv-class="m:class" data-name="third_level_req" data-element-type="text" class="bm-formelement-invalid ui-field-contain ui-body ui-br">
            <label rv-text="m:label" class="ui-input-text">Third Level Req *</label>
            <div class="ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow ui-body-c">
                <input type="text" name="third_level_req" rv-value="m:value" rv-input="m:value" rv-placeholder="m:placeholderText" class="ui-input-text ui-body-c" cid="c155">
            </div>
            <ul class="bm-errors__bm-list">
                <li class="bm-errors__bm-listitem">must not be empty</li>
            </ul>
        </div>
    </form>

**Note** Element Models now include the unique cid of the model as an attribute on the HTML. This value can be passed to ````BMP.Forms.current.getElement(cid)```` to find the element, even if it exists in a sub form.

Styling
-------

The following classes will allow you to style the errors:

- `.bm-form-invalid`  - Applied to the containing form when a field value fails validation
- `.bm-formelement-invalid` - Applied to the container element when a field value fails validation
- `.bm-errors__bm-list` - The unordered list of error messages
- `.bm-errors__bm-listitem` - An error in the list of messages


Getting Field errors
--------------------
For compatibility reasons with past releases, we allow the retreval for error objects. The preferred way of doing this is now outlined in "Getting an array of invalid models" below

An error is an array of objects that take the form of:

    [
      {
        code: 'MAXDECIMALS', 
        errorname: value, 
        text: "pretty error message" 
      }
    ]

- **code** - The Blink defined error code 
- **errorname** - the actual name of the error
- **text** - The pretty error text, transformed by an i18n function if one has been specified.

An error object list takes the following form:

    {
       modelName : [{code: 'MAXDECIMALS', <errorname>: value, text: "pretty error message" }, {code: 'MINDECIMALS', <errorname>: value, text: "pretty error message"}],
       modelName2: [{code: 'MAXDECIMALS', <errorname>: value2, text: "pretty error message"}, {code: 'MINDECIMALS', <errorname>: value2, text: "pretty error message"}],
       length: 2,
       total: 12
    }

- **keys** are the field names
- **values** are an array of error codes that conform to the Blink Field error spec.
- **length** is how many fields are in the object
- **total** is the total number of errors in the elements collection.

You can retrieve errors in 3 places
- Directly on the element model via the ````model.validationError```` property
- On an element collection via the ````elementCollection.getFieldErrors() function````
- On an entire form via the ````Forms.getFieldErrors() function````

the global counterparts for the above are
- for a single element ````BMP.Forms.current.getElement('element_name').validationError
- for the entire current form ````BMP.Forms.current.getFieldErrors()````

##Getting an array of invalid models##

It is important to note that if there is a form element with the same name (for example, a subform appears twice with a missing required field) then the better option is to use ````elementCollection.getInvalid(123)```` or if you dont have access to a collection of elements, ````BMP.Forms.current.getInvalidElements({limit: 123})```` will get all invalid elements for the current form. Both of these functions will also decend through subforms.

Events
------
The standard Backbone [Events](http://backbonejs.org/#Events-catalog) are triggered on the element model. They also bubble up to the collection that contains the element, which in turn bubbles through BMP.Forms.current, allowing you to listen to events like ````change:value```` or ````invalid```` on either the element model, the subform model the element model is part of, or the entire form.


Manually Setting Field Errors
-----------------------------

While Forms has its built in error handling, External errors can be set. These errors are the results of either server or custom validation, 

Errors can be set in 3 places:
- Directly on the element model ````elementModel.setExternalErrors(elementErrorList, options)```` where ````elementErrorList```` is described above in the "Getting Field errors" section
- On an element collection ````elementCollection.setErrors(errorList, options)````
- On an entire form ````FormModel.setErrors(errorList, options)

When an error is set an ````'invalid'```` event is trigerred on the Element Model.

For all functions, pass {merge: false} as the options to overwrite the current errors.

Error Codes
-----------
The following error codes are built in to forms and are turned in to human friendly text via i18n functions:
- "MAX"
- "MIN"
- "MAXDECIMALS"
- "MINDECIMALS"
- "MAXLENGTH"
- "PATTERN"
- "REQUIRED"
- "EMAIL"
- "MAXSUBFORM"
- "MINSUBFORM"
- "SUBFORM"

If your error is not one of the standard blink error codes, you can use 
- "CUSTOM"

eg to set the error on an individual element:

    var externalErrors = [{code: 'CUSTOM', CUSTOM: 'City must be in New South Wales'}];

    var form = Forms.current,
        element = form.getElement('city');
    
    element.setExternalErrors(externalErrors);


eg To set a custom error and override a default error to multiple elements:

    var externalErrors = {
      number1: [{code: 'MAX', MAX: 5, text: 'Field Max adjusted from 100 to 5'}],     //override a built in MAX function that checked for MAX(100)
      city: [{code: 'CUSTOM', CUSTOM: 'City must be in New South Wales'}]
    };
    var el = Forms.current.getElement('number1');
    el.val('afdasdasdaf');
    Forms.current.setErrors(externalErrors);
    
Please note once validation is run on the model (eg when the user types or selects an option), all previous errors will be removed. This includes custom errors.


Useful functions
----------------

````elementView.scrollTo(options)````
If an element is visible, it will scroll the form to so that the element is at the top of the page. ````options```` is passed on to [jQuery.animate](http://api.jquery.com/animate/)

````BMP.Forms.current.get('_view').goToField(elementName|elementCID)````
Will find an element in a form, even if it is in a subform on a different page and trigger the scrollTo function. it Returns a promise that will be resolved with the Element View when the animation completes or rejected if the animation fails.

````BMP.Forms.blinkFormsErrorHelper````
#### toErrorString ####
Takes a single object that conforms to the Blink Error Object definition and returns the i18n encoded, human readable string

#### toWarningString ####
The same as ````toErrorString````, but for warning messages

#### toBlinkError(code, val, errorstring) ####
takes a code, value and optional error message string and returns a blink error object. If errorstring is not supplied then ````toErrorString(val)```` will be called, and if that returns nothing then it will default to val.

eg:

    var cityError = BMP.Forms.blinkFormsErrorHelper.toBlinkError('CUSTOM', 'A custom message');
    var maxNumberError = BMP.Forms.blinkFormsErrorHelper.toBlinkError('MAX', 40, 'Please dont enter more than 40 characters');


