/**
 * Page is a very specific type of Section:
 * - cannot be nested
 * - only used immediately within a form (not deeper in)
 */
define(['underscore', 'backbone', 'collections/elements'],
       function(_, Backbone, Elements) {
  'use strict';

  var Page;

  Page = Backbone.Model.extend({
    defaults: {
      break: true
    },
    initialize: function() {
      this.attributes.elements = new Elements();
    },
    add: function(element) {
      this.attributes.elements.add(element);
    }
  }, {
    // static properties
    /**
     * @param {Object} def complete form definition.
     * @param {String} action "add" | "edit" | "view" | etc...
     */
    create: function(def, action, form) {
      var attrs,
          page;

      if (!def || !_.isObject(def)) {
        return new Page();
      }
      attrs = def.default;
      if (action && def[action]) {
        _.extend(attrs, def[action]);
      }
      if (form) {
        attrs.form = form;
      }
      page = new Page(attrs);
      return page;
    }

  });

  return Page;
});


