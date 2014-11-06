# Forms: Sections

Note: this document assumes you are familiar with [JSDoc 3 namepaths](https://github.com/blinkmobile/docs/wiki/Code-Style:-JSDoc-3).

We use [Backbone.JS](http://backbonejs.org/) to manage state with conventional
Object-Oriented patterns. Thus, you may interrogate and manipulate the Forms
state by using the Backbone APIs.

## Section

- extends Element, which [`Backbone.Model`](http://backbonejs.org/#Model)

- constructor is private, but documented here for completion

### Section#attributes._view

- @type {SectionView}

- e.g. `page.get('_view')`

### Section#attributes.elements

- @type {Elements} collection of Element


## SectionView

- extends [`Backbone.View`](http://backbonejs.org/#View)

- constructor is private, but documented here for completion
