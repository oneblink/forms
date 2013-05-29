define(function (require) {
  var Elements = require('collections/elements'),
    Form;

  Form = Backbone.Model.extend({
    initialize: function () {
      var Forms = BMP.Forms,
        self = this,
        Page = Forms._models.Page,
        Element = Forms._models.Element,
        Behaviour = Forms._models.Behaviour,
        pages,
        elements,
        behaviours;

      pages = this.attributes._pages;
      delete this.attributes._pages;
      if (pages && _.isArray(pages)) {
        // TODO: allow pages to be redeclared per-action
        pages = _.map(pages, function (p) {
          return Page.create(p, self);
        });
      } else {
        pages = [];
      }
      this.attributes.pages = pages;

      elements = this.attributes._elements;
      delete this.attributes._elements;
      if (elements && _.isArray(elements)) {
        // TODO: allow pages to be redeclared per-action
        elements = _.map(elements, function (e) {
          return Element.create(e, self);
        });
      } else {
        elements = [];
      }
      this.attributes.elements = new Elements(elements);


      behaviours = this.attributes._behaviours;
      delete this.attributes._behaviours;
      if (behaviours && _.isArray(behaviours)) {
        // TODO: allow behaviours to be redeclared per-action
        behaviours = _.map(behaviours, function (b) {
          return Behaviour.create(b, self);
        });
      } else {
        behaviours = [];
      }
      this.attributes.behaviours = behaviours;
    },
    destroy: function (options) {
      var attrs = this.attributes;
      if (attrs._view) {
        attrs._view.remove();
        delete attrs._view;
      }
      delete this.$form;
      attrs.pages.forEach(function (page) {
        page.destroy(options);
      });
      attrs.behaviours.forEach(function (behaviour) {
        behaviour.destroy(options);
      });
      return Backbone.Model.prototype.destroy.call(this, options);
    },
    /**
     * get a Page, creating it if necessary
     * @param {Number} index desired Page index.
     */
    getPage: function (index) {
      var Forms = BMP.Forms,
        Page = Forms._models.Page,
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
    getElement: function (name) {
      return this.attributes.elements.get(name);
    },
    /**
     * official Blink API
     */
    data: function () {
      var dfrd = Q.defer(),
        data = {},
        promises = [];

      this.attributes.elements.forEach(function (el) {
        var attrs = el.attributes,
          type = attrs.type,
          val,
          dfrd;

        if (!attrs.persist) {
          return;
        }
        if (type === 'subForm') {
          dfrd = Q.defer();
          el.data().then(function (val) {
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
      Q.all(promises).done(function () {
        dfrd.resolve(data);
      });
      return dfrd.promise;
    }
  }, {
    // static properties
    /**
     * @param {Object} attrs attributes for this model.
     */
    create: function (attrs) {
      var form;

      if (!attrs || !_.isObject(attrs)) {
        return new Form();
      }

      form = new Form(attrs);

      return form;
    }
  });

  return Form;
});
