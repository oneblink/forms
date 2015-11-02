define(function (require) {
  'use strict';

  // foreign modules

  var _ = require('underscore');

  // local modules

  var Element = require('forms/models/element');

  // this module

  var Section;

  Section = Element.extend({
    initialize: function () {
      var Elements = require('forms/collections/elements');
      var attrs = this.attributes;

      attrs.elements = new Elements();
      this.initializeView();

      this.on('remove', this.close, this);
    },

    initializeView: function () {
      var Forms = BMP.Forms;
      var view;

      view = new Forms._views.Section({model: this});
      this.set('_view', view);
    },

    removeView: function () {
      this.attributes.elements.forEach(function (element) {
        element.removeView();
      });
      return Element.prototype.removeView.call(this);
    },

    close: function () {
      var attrs = this.attributes;
      this.removeView();
      attrs.form = null;
      attrs.elements.forEach(function (element) {
        element.close();
      });

      this.off('remove', this.close, this);
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
