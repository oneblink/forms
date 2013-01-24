define(['underscore', 'backbone', 'require'], function(_, Backbone, require) {
  'use strict';

  var Element = Backbone.Model.extend({
    idAttribute: 'name',
    initialize: function() {
      var attrs = this.attributes,
          form = attrs.form,
          page = attrs.page;

      if (form && _.isNumber(attrs.page)) {
        attrs.page = form.getPage(attrs.page);
        attrs.page.add(this);
      }
    }
  }, {
    // static properties
    /**
     * @param {Object} def complete form definition.
     * @param {String} action "add" | "edit" | "view" | etc...
     */
    create: function(def, action, form) {
      var attrs,
          view,
          el,
          TypedElement,
          View;

      if (!def || !_.isObject(def)) {
        return new Element();
      }
      attrs = def.default;
      if (action && def[action]) {
        _.extend(attrs, def[action]);
      }
      if (form) {
        attrs.form = form;
      }
      // TODO: determine Element type and select sub-Prototype
      switch (attrs.type) {
        case 'text':
          TypedElement = require('models/elements/text');
          View = require('views/jqm/elements/text');
          el = new TypedElement(attrs);
          break;
        default:
          View = require('views/jqm/element');
          el = new Element(attrs);
      }
      view = new View({model: el});
      el.attributes._view = view;
      return el;
    }
  });

  return Element;
});

