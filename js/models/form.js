define(['collections/elements'], function(Elements) {
  var Form;

  Form = Backbone.Model.extend({
    initialize: function() {
      var self = this,
          Page = BlinkForms._models.Page,
          pages;

      pages = this.attributes._pages;
      delete this.attributes._pages;

      if (pages && _.isArray(pages)) {
        // TODO: allow pages to be redeclared per-action
        pages = _.map(pages, function(p) {
          return Page.create(p, self);
        });
      } else {
        pages = [];
      }
      this.attributes.pages = pages;
    },
    destroy: function(options) {
      var attrs = this.attributes;
      if (attrs._view) {
        attrs._view.remove();
        delete attrs._view;
      }
      delete this.$form;
      attrs.pages.forEach(function(page) {
        page.destroy(options);
      });
      return Backbone.Model.prototype.destroy.call(this, options);
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
        pages.push(Page.create({}, this));
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
          data = {},
          promises = [];

      this.attributes.elements.forEach(function(el) {
        var type = el.attributes.type,
            val,
            dfrd;

        if (type === 'subForm') {
          dfrd = Q.defer();
          el.data().then(function(val) {
            data[el.attributes.name] = val;
            dfrd.resolve();
          });
          promises.push(dfrd.promise);
          return;
        }
        val = el.val();
        if (val || typeof val === 'number') {
          data[el.attributes.name] = val;
        }
      });
      Q.all(promises).done(function() {
        dfrd.resolve(data);
      });
      return dfrd.promise;
    }
  }, {
    // static properties
    /**
     * @param {Object} attrs attributes for this model.
     */
    create: function(attrs) {
      var Element = BlinkForms._models.Element,
          elements,
          form;

      if (!attrs || !_.isObject(attrs)) {
        return new Form();
      }

      elements = attrs._elements;
      delete attrs._elements;

      form = new Form(attrs);

      // create models from element definitions
      elements = _.map(elements, function(el) {
        // TODO: merge in !element overrides
        return Element.create(el, form);
      });
      // create collection
      elements = new Elements(elements);
      form.set('elements', elements);

      return form;
    }
  });

  return Form;
});
