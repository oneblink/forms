# Forms: Life Cycle

## instantiation of the Form model and view

### 1. `Forms.initialize(definition, action)`

This is the entry point. This synchronously creates the Form model, and makes it
globally available as `Forms.current`.

Further, it initiates the asynchronous process of constructing the Form view.
When `Forms.initialize()` synchronously returns, you may access the top-most DOM
element of the Form view at `Forms.current.$form` (jQuery-wrapped).

Note: view construction beyond the initial top-most DOM element is asynchronous,
so you cannot rely on the rest of the DOM structure until a bit later.

### 2. `Forms._models.Form.create(definition, action)`

This is a static factory method that interprets the definition, adjusts it where
necessary, and passes it to the Form model constructor. The Form action is also
stored against the constructed model.

The Form model constructor works its way through the definition, calling the
Page model constructors first, then Elements, and lastly Behaviours.

The Page constructor calls the Section model constructors according to the
definition.

Definitions are not required to specify Pages or Sections, so that Forms lacking
these features can have simpler definitions. This complicates the Element model
constructor, in that the default Page / Section may not yet exist.

During the Element model constructor, the Form model provides the required Page
and/or Section, creating it if necessary.

Elements have a `value` attribute. Changes to this attribute cause internal
event handlers to execute, potentially updating the `errors` and `warning`
attributes based on validation.

### 3. `new Forms._views.Form({ model: form })`

This initialises the Form view, which does no more than pass through to the
default `Backbone.View` constructor. Once finished, we have a top-level DOM
element to which we may refer.

Note: the DOM element is at no point inserted into the web app's DOM by this
library. That must be explicitly performed by your own code.

### 4. `Forms._views.Form#render()`

The `render()` method is where the most complicated work begins. The top-most
Form view retrieves the Pages collection from the Form model, and instructs the
first Page model to initialise and render its view.

This, in turn, causes the Section models within that Page model to initialise
and render their views.

Which, in turn, causes the Element models within those Sections to initialise
and render their views.

These view constructors (a.k.a initialisers) finish synchronously and create the
outer-most DOM element for each Page, Section and Element.

The view `render()` methods synchronously append extra DOM elements based on
their type and definition attributes.

At this point, we have a DOM structure that is almost complete, so we append it
to the DOM element for the Form view. Your code may now append the Form view's
DOM element to the web app's DOM. Doing so gives the views access to the web
app's DOM.

### 5. events: `formInjected` and `pageInjected`

Certain Element views have special work to complete sometime _after_ they have
access to a real web app's DOM (e.g. after your code injects the Form view).

The Page view waits until it detects the web app's DOM (i.e. after you have
appended the Form view's DOM element). Then it triggers these events together
(with different parameters for their handlers).

Those Element views wait until the Page view triggers these events. They then
(asynchronously) complete their rendering, e.g. calling for jQuery Mobile
enhancements, etc.

Note: without polling, there is no way to know for certain that an Element view
or all Element views have completed their asynchronous `render()` work.
