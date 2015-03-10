define(function (require) {
  var Elements = require('collections/elements'),
    Pages = require('collections/pages'),
    Form;

  Form = Backbone.Model.extend({
    defaults: {
      'class': '',
      isPopulating: false
    },
    initialize: function () {
      var Forms = BMP.Forms,
        self = this,
        Page = Forms._models.Page,
        Element = Forms._models.Element,
        Behaviour = Forms._models.Behaviour,
        pages,
        elements,
        behaviours;

      Forms.setAttributesFromClass(this, [
        '_actions',
        '_checks',
        '_behaviours',
        '_elements',
        '_pages',
        '_sections'
      ]);

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
      if (attrs.pages) {
        attrs.pages.forEach(function (page) {
          page.destroy(options);
        });
        attrs.pages.reset();
      }
      if (attrs.behaviours) {
        attrs.behaviours.forEach(function (behaviour) {
          behaviour.destroy(options);
        });
      }
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
      var element = this.attributes.elements.get(name);
      if (!element && name === 'id') {
        element = this.attributes.elements.add({
          name: name,
          type: 'hidden'
        });
        element = this.attributes.elements.get(name);
      }
      return element;
    },
    /**
    * official Blink API
    */
    getRecord: function () {
      var me = this,
        data = {},
        promises = [];

      return new Promise(function (resolve) {
        if (me.attributes.elements) {
          me.attributes.elements.forEach(function (el) {
            var attrs, type, val, blob;
            attrs = el.attributes;
            type = attrs.type;

            if (!attrs.persist) {
              return;
            }
            if (type === 'subForm') {
              promises.push(new Promise(function (subResolve) {
                el.getRecord().then(function (v) {
                  data[el.attributes.name] = v;
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
              data[el.attributes.name + '_uuid'] = attrs.uuid;
              data[el.attributes.name + '_height'] = attrs.height;
              data[el.attributes.name + '_width'] = attrs.width;
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
        } else if (me.attributes.id) {
          //this should be executed when all of following is correct
          //1. user is editing record
          //2. user has deleted a subform record
          //3. me.attributes don't have `elements` element
          data.id = me.attributes.id;
        }
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

        self.set('isPopulating', true);

        _.each(data, function (value, key) {
          var formElement = self.getElement(key), result, xml, mime;
          if (!formElement) {
            return;
          }

          if (formElement.attributes.type === 'subForm') {
            if (typeof value === 'string') {
              result = '<' + key + '>' + value + '</' + key + '>';
              xml = $.parseXML(result);
              // PhantomJS doesn't seem to have firstElementChild
              value = Form.xmlToJson(xml.firstElementChild || xml.documentElement);
              value = value[key];
            }
            promises.push(formElement.setRecords(value));
          } else {
            if (_.contains(['file', 'draw'], formElement.attributes.type)) {
              mime = data[key + '_mimetype'] || 'image/jpeg';
              value = Form.addMimetype(value, mime);
              formElement.set('uuid', data[key + '_uuid'] || '');
              formElement.set('height', data[key + '_height'] || 0);
              formElement.set('width', data[key + '_width'] || 0);
            }
            if (formElement.attributes.type === 'multi') {
              value = value.split('\n');
              value = value.map(function (v) {
                return v.trim();
              });
            }
            formElement.val(value);
          }
        });
        Promise.all(promises).then(function () {
          self.set('isPopulating', false);
          resolve(data);
        }, function (err) {
          self.set('isPopulating', false);
          reject(err);
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
    },
    /**
    * official Blink API
    */
    getErrors: function () {
      var me = this,
        err,
        errors = {};

      me.attributes.elements.forEach(function (el) {
        err = el.validate();
        if (err) {
          errors[el.attributes.name] = err.value;
        }
      });
      return _.isEmpty(errors) ? undefined : errors;
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
    /*
    * add mimetype to blob fields value
    */
    addMimetype: function (value, mime) {
      if (value.indexOf('data:') === -1) {
        return "data:" + mime + ";base64," + value;
      }
      return value;
    },
    xmlToJson: function (xml) {
      var result = {},
        nodes,
        object = [],
        subform,
        childItems,
        nodeName,
        json = {};

      if (xml.hasChildNodes()) {
        nodes = xml.childNodes;
        _.each(nodes, function (item) {
          if (item.hasChildNodes()) {
            childItems = item.childNodes;
            nodeName = item.nodeName;
            _.each(childItems, function (childItem) {
              if (childItem.childElementCount > 0) {
                subform = Form.xmlToJson(childItem);
                json[childItem.nodeName] = subform[childItem.nodeName];
              } else if (childItem.firstChild !== null) {
                json[childItem.nodeName] = childItem.firstChild.nodeValue;
              }
            });// 2nd for loop

            object.push(json);
          }
        });//1st for loop
      }
      result[nodeName] = object;
      return result;
    }

  });

  return Form;
});
