define(['collections/elements'], function(Elements) {
  var Form;

  Form = Backbone.Model.extend({
    initialize: function() {
      var self = this,
          Page = window.BlinkForms._models.Page,
          action = this.attributes.action,
          pages;

      pages = this.attributes._pages;
      delete this.attributes._pages;

      if (pages && _.isArray(pages)) {
        // TODO: allow pages to be redeclared per-action
        pages = _.map(pages, function(p) {
          return Page.create(p, action, self);
        });
      } else {
        pages = [];
      }
      this.attributes.pages = pages;
    },
    /**
     * get a Page, creating it if necessary
     * @param {Number} index desired Page index.
     */
    getPage: function(index) {
      var Page = window.BlinkForms._models.Page,
          pages = this.get('pages');

      // assume that by now it's okay to create vanilla Pages
      while (pages.length <= index) {
        pages.push(Page.create({}, null, this));
      }
      return pages[index];
    },
    /**
     * official Blink API
     */
    getElement: function(name) {
      return this.attributes.elements.get(name);
    },
    /**
     * official Blink API
     */
    data: function() {
      var dfrd = Q.defer(),
          data = {};

      this.attributes.elements.forEach(function(el) {
        var val = el.val();

        if (val || typeof val === 'number') {
          data[el.attributes.name] = val;
        }
      });
      dfrd.resolve(data);
      return dfrd.promise;
    }
  }, {
    // static properties
    /**
     * @param {Object} def complete form definition.
     * @param {String} action "add" | "edit" | "view" | etc...
     */
    create: function(def, action) {
      var Page = BlinkForms._models.Page,
          Element = BlinkForms._models.Element,
          attrs,
          elements,
          pages,
          elNames,
          form;

      if (!def || !_.isObject(def)) {
        return new Form();
      }
      attrs = def.default || {};

      elements = attrs._elements;
      delete attrs._elements;

      if (action && def[action]) {
        elNames = def[action]._elements;
        delete def[action]._elements;
        _.extend(attrs, def[action]);

        form = new Form(attrs);

        // remove all elements not needed for this action
        elements = _.filter(elements, function(el) {
          return elNames.indexOf(el.default.name) !== -1;
        });
        // sort elements as per the action-specific order
        elements = _.sortBy(elements, function(el) {
          return elNames.indexOf(el.default.name);
        });
      } else {
        form = new Form(attrs);
      }
      // create models from element definitions
      elements = _.map(elements, function(el) {
        // TODO: merge in !element overrides
        return Element.create(el, action, form);
      });
      // create collection
      elements = new Elements(elements);
      form.set('elements', elements);

      return form;
    }
  });

  return Form;
});
