define(function () {

  /**
  @typedef {Object} EventsHash
  - keys: {String} event names, e.g. "change:value"
  - values: {String} method names, e.g. "onValueChange"
  */

  /**
  inspired by Marionette.js
  @param {Object} context to be bound to `this`
  @param {Backbone.Model} entity to which event handlers will be bound
  @param {EventsHash} events to bind to which methods on `this`
  */
  function proxyBindEntityEvents (context, entity, events) {
    Object.keys(events).forEach(function (event) {
      entity.on(event, context[events[event]], context);
    });
  }

  /**
  inspired by Marionette.js
  @param {Object} context to be bound to `this`
  @param {Backbone.Model} entity from which event handlers will be unbound
  @param {EventsHash} events to unbind to which methods on `this`
  */
  function proxyUnbindEntityEvents (context, entity, events) {
    Object.keys(events).forEach(function (event) {
      entity.off(event, context[events[event]], context);
    });
  }

  /**
  @typedef {Object} FormElementsEventsHash
  - keys: {String} FormElement names, e.g. "comment"
  - values: {EventsHash} events, e.g. { "change:value": "onCommentChange" }
  */

  /**
  @param {Object} context to be bound to `this`
  @param {FormElement} entity to which event handlers will be bound
  @param {FormElementsEventsHash} events to bind to which methods on `this`
  */
  function proxyBindFormElementEvents (context, entity, events) {
    Object.keys(events).forEach(function (name) {
      var el = entity.getElement(name);
      if (el) {
        proxyBindEntityEvents(context, el, events[name]);
      }
    });
  }

  /**
  @param {Object} context to be bound to `this`
  @param {FormElement} entity from which event handlers will be unbound
  @param {FormElementsEventsHash} events to unbind to which methods on `this`
  */
  function proxyUnbindFormElementEvents (context, entity, events) {
    Object.keys(events).forEach(function (name) {
      var el = entity.getElement(name);
      if (el) {
        proxyUnbindEntityEvents(context, el, events[name]);
      }
    });
  }

  return {

    proxyBindEntityEvents: proxyBindEntityEvents,
    proxyUnbindEntityEvents: proxyUnbindEntityEvents,

    proxyBindFormElementEvents: proxyBindFormElementEvents,
    proxyUnbindFormElementEvents: proxyUnbindFormElementEvents

  };

});
