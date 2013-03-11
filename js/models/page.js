/**
 * Page is a very specific type of Section:
 * - cannot be nested
 * - only used immediately within a form (not deeper in)
 */
define(['collections/elements', 'models/section'],
      function(Elements, Section) {
  var Page,
      Sections;

  Sections = Backbone.Collection.extend({
    model: Section
  });

  Page = Backbone.Model.extend({
    defaults: {
    },
    initialize: function() {
      var Forms = BlinkForms,
          attrs = this.attributes,
          form = attrs.form,
          sections;

      // TODO: document that this now assumes all Sections are pre-declared

      attrs.elements = new Elements();
      attrs._view = new Forms._views.Page({model: this});

      sections = form.attributes._sections;

      if (sections && _.isArray(sections)) {
        sections = _.map(sections, function(s) {
          return Section.create(s, form);
        });
        sections = new Sections(sections);
      } else {
        sections = new Sections();
      }
      sections.forEach(function(section) {
        var attrs = section.attributes,
            parent;

        if (attrs.section) {
          parent = sections.get(attrs.section);
          if (parent) {
            attrs.section = parent;
            parent.add(section);
          }
        }
        if (! attrs.section instanceof Section) {
          delete attrs.section;
        }
      });
      attrs.sections = sections;
    },
    destroy: function(options) {
      var attrs = this.attributes;
      if (attrs._view) {
        attrs._view.remove();
        delete attrs._view;
      }
      delete attrs.form;
      delete attrs.section;
      attrs.elements.forEach(function(element) {
        element.destroy(options);
      });
      return Backbone.Model.prototype.destroy.call(this, options);
    },
    add: function(element) {
      if (element instanceof Section) {
        this.attributes.sections.add(element);
      }
      if (element.attributes.section) {
        this.add(element.attributes.section);
      } else {
        this.attributes.elements.add(element);
      }
    },
    getSection: function(name) {
      var sections = this.attributes.sections,
          section;

      section = sections.get(name);
      this.add(section);
      return section;
    }
  }, {
    // static properties
    /**
     * @param {Object} attrs attributes for this model.
     * @param {Form} form parent to associate with new Page.
     * @return {Page} new Page.
     */
    create: function(attrs, form) {
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


