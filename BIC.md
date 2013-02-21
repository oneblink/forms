# Blink Intelligent Client API


## Functionality provided by the core

The Blink Forms v3 library installs a global object: **BlinkForms**.

### Events

The **BlinkForms** global object is an event emitter, exposing the same API as other JavaScript objects employing the [Backbone.Events](http://backbonejs.org/#Events) mixin:

- BlinkForms.**on(event, callback, [context])** *alias: bind*
- BlinkForms.**off([event], [callback], [context])** *alias: unbind*
- BlinkForms.**trigger(event, [args*])**
- BlinkForms.**once(event, callback, [context])**
- BlinkForms.**listenTo(other, event, callback)**
- BlinkForms.**stopListening([other], [event], [callback])**

### BlinkForms.current

The `current` property is a reference to the currently active Form object. It is defined as a side-effect of `BlinkForms.initialize` (below).

### BlinkForms.initialize(definition)
- **definition**: {Object} a form definition as a plain JavaScript object

`BlinkForms.initialize` uses the provided Form definition object to instantiate a Form object and all ensuing Element objects, etc.

As documented elsewhere, the root DOM element for this new Form is referred to by Form#**$form** (the `$form` property on that instance of the Form Model).


## BIC integration

Code that the BIC executes is expected to define these methods.

### BlinkForms.getDefinition(name, [action])
- **name**: {String} the name of the desired form
- **action**: {String} the name of the desired action/view
- *returns*: {Object} the definition in a plain JavaScript object

`BlinkForms.initialize` requires a definition to be passed to it. This method must be implemented so that it returns such a definition. This method is also used within the core in order to load sub-form definitions.