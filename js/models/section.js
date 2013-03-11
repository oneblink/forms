define(['collections/elements', 'models/element'],
      function(Elements, Element) {
  var Section;

  Section = Element.extend({
    initialize: function() {
      var Forms = BlinkForms,
          attrs = this.attributes;

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
     * @param {Object} attrs attributes for this model.
     * @param {Form} form parent to associate with new Section.
     * @returns {Section} new Section.
     */
    create: function(attrs, form) {
      var section;

      if (!attrs || !_.isObject(attrs)) {
        return new Section();
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

