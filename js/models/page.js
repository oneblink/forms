/**
 * Page is a very specific type of Section:
 * - cannot be nested
 * - only used immediately within a form (not deeper in)
 */
define(['collections/elements', 'models/section'],
      function(Elements, Section) {

  var Page;

  Page = Backbone.Model.extend({
    defaults: {
    },
    initialize: function() {
      var Forms = window.BlinkForms;
      this.attributes.elements = new Elements();
      this.attributes._view = new Forms._views.Page({model: this});
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
      attrs = def.default || {};
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


