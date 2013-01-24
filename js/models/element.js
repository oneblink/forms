define(['underscore', 'backbone'], function(_, Backbone) {
  'use strict';

  var Element = Backbone.Model.extend({
    idAttribute: 'name',
    initialize: function() {
      var attrs = this.attributes,
          form = attrs.form,
          page = attrs.page;

      console.log('initialize:', attrs);
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
          el;

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
      el = new Element(attrs);
      attrs = el.attributes;
      return el;
    }
  });

  return Element;
});

