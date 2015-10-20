/**
 * Page is a very specific type of Section:
 * - cannot be nested
 * - only used immediately within a form (not deeper in)
 */
define(function (require) {
  'use strict';

  // foreign modules

  var _ = require('underscore');
  var Backbone = require('backbone');

  // local modules

  var Elements = require('forms/collections/elements');
  var Section = require('forms/models/section');

  // this module

  var Sections;
  var Page;

  Sections = Backbone.Collection.extend({
    model: Section
  });

  Page = Backbone.Model.extend({
    defaults: function () {
      return {
        class: ''
      };
    },

    initialize: function () {
      var attrs = this.attributes;
      var Forms = BMP.Forms;
      var form = attrs.form;
      var sections;

      Forms.setAttributesFromClass(this, ['_sections']);

      // TODO: document that this now assumes all Sections are pre-declared

      attrs.elements = new Elements();
      // attrs._view = new Forms._views.Page({model: this});

      sections = form.attributes._sections;

      if (sections && _.isArray(sections)) {
        sections = _.map(sections, function (s) {
          return Section.create(s, form);
        });
        sections = new Sections(sections);
      } else {
        sections = new Sections();
      }
      sections.forEach(function (section) {
        var sectionAttrs = section.attributes;
        var parent;

        if (sectionAttrs.section) {
          parent = sections.get(sectionAttrs.section);
          if (parent) {
            sectionAttrs.section = parent;
            parent.add(section);
          }
        }
        if (!sectionAttrs.section instanceof Section) {
          sectionAttrs.section = null;
        }
      });
      attrs.sections = sections;
      this.on('remove', this.close, this);
    },
    initializeView: function () {
      var Forms = BMP.Forms;
      var view;

      view = new Forms._views.Page({model: this});
      this.set('_view', view);
    },
    close: function () {
      var attrs = this.attributes;
      if (attrs._view) {
        attrs._view.remove();
        attrs._view = null;
      }
      attrs.form = null;
      attrs.section = null;
      attrs.elements.forEach(function (element) {
        // some combinations of lo-dash and backbone have broken .length
        // so we need to double-check that .forEach actually yielded something
        if (element) {
          element.close();
        }
      });
      attrs.elements.reset();

      this.off('remove', this.close, this);
    },
    add: function (element) {
      if (element instanceof Section) {
        this.attributes.sections.add(element);
      }
      if (element.attributes.section) {
        this.add(element.attributes.section);
      } else {
        this.attributes.elements.add(element);
      }
    },
    getSection: function (name) {
      var sections = this.attributes.sections;
      var section;

      section = sections.get(name);
      this.add(section);
      return section;
    },
    show: function () {
      var view = this.attributes._view;
      view.show();
    },
    hide: function () {
      var view = this.attributes._view;
      view.hide();
    },
    index: function () {
      var form = this.attributes.form;
      var pages = form.attributes.pages;

      return pages.indexOf(this);
    }
  }, {
    // static properties
    /**
     * @param {Object} attrs attributes for this model.
     * @param {Form} form parent to associate with new Page.
     * @return {Page} new Page.
     */
    create: function (attrs, form) {
      var page;

      if (!attrs || !_.isObject(attrs)) {
        return new Page();
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
