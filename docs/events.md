# Events

In addition to the built in [Backbone Events](http://backbonejs.org/#Events), Blink FORMS uses a set of custom events.

## Global Events

Global events are events broadcast on the global `BMP.Forms` object.

#### 'formInjected'
#### 'pageInjected'
Both are triggered at the end of turning a page in a form, after the page has been appended to the DOM.

#### 'element:focus'
Triggered just before an element is to be focused. The listener receives one argument, the Backbone View that is being focused.


## Model Events

Model events are triggered on specific models.

### Form Model Events

Usually triggered on `BMP.Forms.current`

#### 'formLoad'

Triggered when a form has finished initialising.

#### 'formPopulated'

Triggered when `FormModel.setRecord()` has finished retrieving and setting the values for a form.

### Form Element Model Events

Form Element Model events are triggered on elements of a form, eg text, choice, select

#### 'valid'

Triggered on an element model if the value passes validation

