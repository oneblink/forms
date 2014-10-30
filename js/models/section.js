define(function (require) {
  var Element = require('models/element'),
    Section;

  Section = Element.extend({
    initialize: function () {
      var Elements = require('collections/elements'),
        attrs = this.attributes;

      attrs.elements = new Elements();
      this.initializeView();
    },
    initializeView: function () {
      var Forms = BMP.Forms,
        view;

      view = new Forms._views.Section({model: this});
      this.set('_view', view);
    },
    destroy: function (options) {
      var attrs = this.attributes;
      if (attrs._view) {
        attrs._view.remove();
        delete attrs._view;
      }
      delete attrs.form;
      attrs.elements.forEach(function (element) {
        element.destroy(options);
      });
      return Backbone.Model.prototype.destroy.call(this, options);
    },
    add: function (element) {
      this.attributes.elements.add(element);
    }
  }, {
    // static properties
    /**
     * @param {Object} attrs attributes for this model.
     * @param {Form} form parent to associate with new Section.
     * @return {Section} new Section.
     */
    create: function (attrs, form) {
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

