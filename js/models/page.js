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
          action = form.attributes.action,
          sections;

      attrs.elements = new Elements();
      attrs._view = new Forms._views.Page({model: this});

      sections = form.attributes._sections;

      if (sections && _.isArray(sections)) {
        sections = _.map(sections, function(s) {
          return Section.create(s, action, form);
        });
        sections = new Sections(sections);
      } else {
        sections = new Sections();
      }
      attrs.sections = sections;
    },
    add: function(element) {
      this.attributes.elements.add(element);
    },
    getSection: function(name) {
      var sections = this.attributes.sections,
          elements = this.attributes.elements,
          section;

      section = sections.get(name);
      if (!section) {
        // assume that by now it's okay to create vanilla Sections
        section = Section.create({
          default: {
            name: name
          }
        }, null, this);
        sections.add(section);
      }
      if (!elements.get(name)) {
        elements.add(section);
      }
      return section;
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


