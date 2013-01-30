define(['underscore', 'backbone'], function(_, Backbone) {
  'use strict';

  var Element = Backbone.Model.extend({
    defaults: {
      page: 0,
      defaultValue: '',
      value: ''
    },
    idAttribute: 'name',
    initialize: function() {
      var attrs = this.attributes,
          form = attrs.form,
          page = attrs.page;

      if (form && _.isNumber(attrs.page)) {
        attrs.page = form.getPage(attrs.page);
        attrs.page.add(this);
      }
      this.set('value', this.attributes.defaultValue);
      if (!this.attributes.label) {
        this.set('label', this.attributes.name);
      }
    },
    /**
     * official Blink API
     */
    val: function(value) {
      if (value === undefined) {
        return this.get('value');
      }
      this.set('value', value);
      return value;
    }
  }, {
    // static properties
    /**
     * @param {Object} def complete form definition.
     * @param {String} action "add" | "edit" | "view" | etc...
     */
    create: function(def, action, form) {
      var Forms = window.BlinkForms,
          attrs,
          view,
          el,
          TypedElement,
          View;

      if (!def || !_.isObject(def)) {
        return new Element();
      }
      attrs = def.default || {};
      if (action && def[action]) {
        _.extend(attrs, def[action]);
      }
      if (form) {
        attrs.form = form;
      }
      // TODO: determine Element type and select sub-Prototype
      switch (attrs.type) {
        case 'time':
        case 'date':
        case 'datetime':
          TypedElement = Forms._models.DateElement;
          View = Forms._views.DateElement;
          el = new TypedElement(attrs);
          break;
        case 'hidden':
          TypedElement = Forms._models.HiddenElement;
          View = Forms._views.HiddenElement;
          el = new TypedElement(attrs);
          break;
        case 'text':
          TypedElement = Forms._models.TextElement;
          View = Forms._views.TextElement;
          el = new TypedElement(attrs);
          break;
        case 'textarea':
          TypedElement = Forms._models.TextAreaElement;
          View = Forms._views.TextAreaElement;
          el = new TypedElement(attrs);
          break;
        default:
          View = Forms._views.Element;
          el = new Element(attrs);
      }
      view = new View({model: el});
      el.attributes._view = view;
      return el;
    }
  });

  return Element;
});

