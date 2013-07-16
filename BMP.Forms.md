# Blink Forms v3 API

## Functionality provided by the core

The Blink Forms v3 library installs a global object: **BMP.Forms**.

### Events

The **BMP.Forms** global object is an event emitter, exposing the same API as other JavaScript objects employing the [Backbone.Events](http://backbonejs.org/#Events) mixin:

- BMP.Forms.**on(event, callback, [context])** *alias: bind*
- BMP.Forms.**off([event], [callback], [context])** *alias: unbind*
- BMP.Forms.**trigger(event, [args*])**
- BMP.Forms.**once(event, callback, [context])**
- BMP.Forms.**listenTo(other, event, callback)**
- BMP.Forms.**stopListening([other], [event], [callback])**

### BMP.Forms.current

The `current` property is a reference to the currently active Form object. It is defined as a side-effect of `BMP.Forms.initialize` (below).

### BMP.Forms.initialize(definition)
- **definition**: {Object} a (collapsed) form definition as a plain object

`BMP.Forms.initialize` uses the provided Form definition object to instantiate a Form object and all ensuing Element objects, etc.

As documented elsewhere, the root DOM element for this new Form is referred to by form.**$form** (the `$form` property on that instance of the Form Model).

## Form objects

### pages attribute

Stores a reference to the primary Pages collection.

For example:

    BMP.Forms.current.get('pages'); // returns Pages collection
    BMP.Forms.current.attributes.pages; // returns Pages collection

## TODO: FormElement objects

## Pages collection

### goto(index) method

Triggers changing the currently visible Page to the one found at the index provided.

All other Page objects are hidden.

Note: the index starts at 0.

For example:

    BMP.Forms.current.get('pages').goto(9); // show 10th page

### current attribute

Stores a reference to the currently active and visible Page object.

For example:

    BMP.Forms.current.get('pages').current; // returns current Page

## Page object

### index() method

Returns the index of this Page (within its Pages collection).

For example:

    BMP.Forms.current.get('pages').goto(9); // show 10th page
    BMP.Forms.current.get('pages').current.index(); // returns number 9
