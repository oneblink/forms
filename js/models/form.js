define(function (require) {
  var Elements = require('collections/elements'),
    Pages = require('collections/pages'),
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
        pages = new Pages(_.map(pages, function (p) {
          return Page.create(p, self);
        }));
      } else {
        pages = new Pages();
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
      return pages.at(index);
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
    getRecord: function () {
      var me = this,
        data = {},
        promises = [];

      return new Promise(function (resolve) {
        me.attributes.elements.forEach(function (el) {
          var attrs, type, val, blob;
          attrs = el.attributes;
          type = attrs.type;

          if (!attrs.persist) {
            return;
          }
          if (type === 'subForm') {
            promises.push(new Promise(function (subResolve) {
              el.getRecord().then(function (val) {
                data[el.attributes.name] = val;
                subResolve();
              });
            }));
            return;
          }
          if (type === 'file' || type === 'draw') {
            blob = attrs.blob;
            if (blob && blob.type && (blob.base64 || blob.text)) {
              data[el.attributes.name] = blob.base64 || blob.text;
              data[el.attributes.name + '_mimetype'] = blob.type;
            }
            return;
          }
          if (type === 'location') {
            val = attrs.value;
            if (val) {
              data[el.attributes.name] = JSON.stringify(val);
            }
            return;
          }
          val = el.val();
          if (val || typeof val === 'number') {
            data[el.attributes.name] = val;
          }
        });
        data._action = me.attributes._action;
        Promise.all(promises).then(function () {
          resolve(data);
        });
      });
    },
    /**
     * official Blink API
     */
    setRecord: function (data) {
      var self = this,
        promises = [];

      return new Promise(function (resolve, reject) {
        if (!_.isObject(data)) {
          reject();
          return;
        }

        _.each(data, function (value, key) {
          var formElement = self.getElement(key), result;
          if (!formElement) {
            return;
          }

          if (formElement.attributes.type === 'subForm') {
              if(typeof value === 'string') {
                result = '<' + key + '>' + value + '</' + key + '>',
                value = Form.toJSON($.parseXML(result));
              }
              promises.push(formElement.setRecords(value));
          } else {
            formElement.val(value);
          }
        });
        Promise.all(promises).then(function () {
          resolve(data);
        });
      });
    },
    /**
     * official Blink API
     */
    data: function () {
      if (!arguments.length) {
        return this.getRecord();
      }
    }
  }, {
    // static properties
    /**
     * @param {Object} attrs attributes for this model.
     */
    create: function (attrs, action) {
      var form;

      if (!attrs || !_.isObject(attrs)) {
        return new Form();
      }

      attrs._action = action;
      form = new Form(attrs);

      return form;
    },
    toJSON: function (xml) {
      var result = [], element;
      if (xml.childElementCount >0 ) { //xml is main subform
          _.each(xml.firstElementChild.childNodes, function (node) { // subforms object
            if (node.childElementCount > 0) {
              element = {};
              _.each(node.children, function (ele) { //fields
                if (ele.childElementCount === 0) {
                  element[ele.nodeName] =  ele.firstChild.nodeValue;
                }
              });
              result.push(element);
            }
          });
      }
      return result;
    }
  });

  return Form;
});
