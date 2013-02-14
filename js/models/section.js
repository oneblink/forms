define(['collections/elements', 'models/element'],
      function(Elements, Element) {
  var Section;

  Section = Element.extend({
    initialize: function() {
      var Forms = BlinkForms,
          attrs = this.attributes,
          form = attrs.form;

      attrs.elements = new Elements();
      attrs._view = new Forms._views.Section({model: this});
    },
    destroy: function(options) {
      var attrs = this.attributes;
      if (attrs._view) {
        attrs._view.remove();
        delete attrs._view;
      }
      delete attrs.form;
      attrs.elements.forEach(function(element) {
        element.destroy(options);
      });
      return Backbone.Model.prototype.destroy.call(this, options);
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
          section;

      if (!def || !_.isObject(def)) {
        return new Section();
      }
      attrs = def.default || {};
      if (action && def[action]) {
        _.extend(attrs, def[action]);
      }
      if (form) {
        attrs.form = form;
      }
      section = new Section(attrs);
      return section;
    }
  });

  return Section;
});

