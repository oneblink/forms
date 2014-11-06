# Forms: Pages

Note: this document assumes you are familiar with [JSDoc 3 namepaths](https://github.com/blinkmobile/docs/wiki/Code-Style:-JSDoc-3).

We use [Backbone.JS](http://backbonejs.org/) to manage state with conventional
Object-Oriented patterns. Thus, you may interrogate and manipulate the Forms
state by using the Backbone APIs.

## Page

- extends [Section](sections.md)

- constructor is private, but documented here for completion

### Page#attributes._view

- @type {PageView}

- e.g. `page.get('_view')`


## PageView

- extends [`Backbone.View`](http://backbonejs.org/#View)

- constructor is private, but documented here for completion


## Pages

- extends [`Backbone.Collection`](http://backbonejs.org/#Collection), contains Page models

- constructor is private, but documented here for completion

- most useful instance will be `BMP.Forms.current.get('pages')`

### Pages#goto(index)

- @param {Number} index starting from zero

- triggers the pageInjected event once insertion / transition is complete




## Events

### pageInjected

- event handler has active Page model as `arguments[0]`

```javascript
// define a handler for the next pageInjected event
BMP.Forms.once('pageInjected', function (page) {
  page.get('form'); // parent Form model
  page.get('form') === BMP.Forms.current; // true
  page.get('_view'); // PageView for this Page
});
// turn the page, expecting the above handler to execute soon
BMP.Forms.current.get('pages').goto(2);
```
