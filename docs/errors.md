# Blink Forms Errors


## Element Errors

Form Elements check values as you type and when the field loses focus.
A list of errors (if any) appears in the DOM inside the element's container:

```html
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
```

**Note:** Element Models now include the unique cid of the model as an HTML attribute.
You may use this value with `BMP.Forms.current.getElement(cid)` to retrieve the element, even if it exists in a sub form.


## Styling

The following classes will allow you to style the errors:

- `.bm-form-invalid`  - Applied to the containing form when an element value fails validation
- `.bm-formelement-invalid` - Applied to the container element when an element value fails validation
- `.bm-errors__bm-list` - The unordered list of error messages
- `.bm-errors__bm-listitem` - An error in the list of messages


## Getting Element errors

For compatibility reasons with past releases, we allow the retrieval of error objects.
The preferred way of doing this is now outlined in "Getting an array of invalid models" below

An error is an array of objects that take the form of:

```js
[
  {
    code: 'MAXDECIMALS',
    MAXDECIMALS: value,
    text: "pretty error message"
  }
]
```

- **code** - The Blink defined error code
- **text** - The pretty error text, transformed by an i18n function when specified.

There may be more error information available, depending on the error type.

An error object list takes the following form:

```js
{
  modelName : [
    {code: 'MAXDECIMALS', MAXDECIMALS: value, text: "pretty error message" },
    {code: 'MINDECIMALS', MINDECIMALS: value, text: "pretty error message"}
  ],
  modelName2: [
    {code: 'MAXDECIMALS', MAXDECIMALS: value2, text: "pretty error message"},
    {code: 'MINDECIMALS', MINDECIMALS: value2, text: "pretty error message"}
  ],
  length: 2,
  total: 12
}
```

- **keys** are the Element names, e.g. "modelName", "modelName2"
- **values** are an array of error codes that conform to the Blink Element error spec.
- **length** is the number of elements in the object
- **total** is the total number of errors in the elements collection.

You can retrieve errors in 3 places
- Directly on the element model via the `model.validationError` property
- On an element collection via the `elementCollection.getErrors() function`
- On an entire form via the `Forms.getErrors() function`

the global counterparts for the above are
- for a single element `BMP.Forms.current.getElement('element_name').validationError
- for the entire current form `BMP.Forms.current.getErrors()`


## Getting an array of invalid models

Importantly, if there is a form element with the same name (for example, a subform appears twice with a missing required element) then the better option is to use `elementCollection.getInvalid(123)` or if you don't have access to a collection of elements, `BMP.Forms.current.getInvalidElements({limit: 123})` will get all invalid elements for the current form.
Both of these functions will also descend through subforms.


## Events

Element models emit the standard Backbone [Events](http://backbonejs.org/#Events-catalog).
They also bubble up to the collection that contains the element, which in turn bubbles through BMP.Forms.current, allowing you to listen to events like `change:value` or `invalid` on either the element model, the subform model the element model is part of, or the entire form.


## Manually Setting Element Errors

While Forms generates its own validation errors, you may add errors from other sources.
Typically, these errors will be the result of custom or server-side validation.

There are 3 places you may add extra errors:

- directly on the element model `elementModel.setExternalErrors(elementErrorList, options)`, see "Getting Element errors" (above) about `elementErrorList`
- on an element collection `elementCollection.setErrors(errorList, options)`
- on an entire form `formModel.setErrors(errorList, options)`

Using the above methods will cause the Element Model to trigger an `'invalid'` event.

For all functions, pass `{merge: false}` as `options` to overwrite the current errors.

## Error Codes

Forms includes the following errors and their human-friendly translations:
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

If your error is not one of the standard blink error codes, you may use
- "CUSTOM"

eg to set the error on an individual element:

```js
var externalErrors = [{code: 'CUSTOM', CUSTOM: 'City must be in New South Wales'}];

var form = Forms.current,
    element = form.getElement('city');

element.setExternalErrors(externalErrors);
```

eg To set a custom error and override a default error to more than one element:

```js
var externalErrors = {
  // override a built in MAX function that checked for MAX(100)
  number1: [{code: 'MAX', MAX: 5, text: 'Element Max adjusted from 100 to 5'}],
  city: [{code: 'CUSTOM', CUSTOM: 'City must be in New South Wales'}]
};
var el = Forms.current.getElement('number1');
el.val('afdasdasdaf');
Forms.current.setErrors(externalErrors);
```

**Note:** changing a value via APIs or end-user interaction will trigger Forms' built-in validation.
When this occurs, all previous errors disappear, including custom errors.


## Useful functions


### ElementView

#### `#scrollTo(options)`

This method causes the page to scroll so that the element is at the top of the page.
Internally, [jQuery.animate](http://api.jquery.com/animate/) uses `options` if specified.

**Note:** this method has no effect if Behaviours have conditionally hidden the element.

```js
var myElementView = window.BMP.Forms.current.getElement('myElement').get('_view');
myElementView.scrollTo();
```

### FormView

#### `#goToElement(id)`

- @param {`String`} id - unique name of the element from the builder, or Backbone CID
- @returns {`Promise`} resolved with the `ElementView`, rejected on animation failure

This method scrolls to an element in a form, even within subforms, even when the
element is on a different page.

```js
var parentFormView = window.BMP.Forms.current.get('_view');
parentFormView.goToElement('myElement');
```


### `BMP.Forms.blinkFormsErrorHelper`

#### `.toErrorString()`

Takes a single object that conforms to the Blink Error Object definition and returns the i18n encoded, human readable string

#### `.toWarningString()`

The same as `toErrorString`, but for warning messages

#### `.toBlinkError(code, value, errorstring)`

- @param {`String`} code
- @param {(`String`|`Number`|`Boolean`)} value
- @param {`String`} [errorstring]
- @returns {`FormsError`}

If `errorstring` is missing, then its default value will be the result of `.toErrorString(value)`.
If that returns nothing then it will default to `value`.

e.g:

```js
var cityError = BMP.Forms.blinkFormsErrorHelper.toBlinkError('CUSTOM', 'A custom message');
var maxNumberError = BMP.Forms.blinkFormsErrorHelper.toBlinkError('MAX', 40, 'Please dont enter more than 40 characters');
```
