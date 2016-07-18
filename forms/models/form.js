define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');

  // local modules

  var Elements = require('forms/collections/elements');
  var Pages = require('forms/collections/pages');
  var modelStates = require('forms/mixins/model-states-mixin');
  var modelValidation = require('forms/mixins/model-validation');
  var isValidFormId = require('forms/helpers/is-valid-form-id');

  // this module

  var Form;
  var invalidWrapperFn, isSubForm;

  function isVisible (elementModel) {
    return !elementModel.attributes.hidden;
  }

  invalidWrapperFn = function (fn) {
    return function (options) {
      var elementCollection;
      var validate;
      var limit;
      var results;
      var elements;

      elements = this.attributes.elements;

      if (!elements) {
        return undefined;
      }

      elementCollection = new Elements(elements.filter(isVisible));
      validate = options && options.validate || false;
      limit = options && options.limit || 0;

      if (!elementCollection) {
        return undefined;
      }

      if (validate) {
        elementCollection.invoke('isValid');
      }

      results = elementCollection[fn](limit);
      if (!results || results.length === 0) {
        this.set({ 'isInvalid': false });
      }

      return results;
    };
  };

  isSubForm = function (elementModel) {
    return elementModel.attributes.type === 'subForm';
  };

  Form = Backbone.Model.extend({
    defaults: function () {
      return {
        _view: null,
        answerSpace: '',
        class: '',
        uuid: '',
        isPopulating: false,
        isPristine: true,
        isDirty: false,
        isInvalid: true
      };
    },

    initialize: function () {
      var Forms = BMP.Forms;
      var self = this;
      var Page = Forms._models.Page;
      var Element = Forms._models.Element;
      var Behaviour = Forms._models.Behaviour;
      var pages,
        elements,
        behaviours;
      var preloadPromises = [];

      Forms.setAttributesFromClass(this, [
        '_actions',
        '_checks',
        '_behaviours',
        '_elements',
        '_pages',
        '_sections'
      ]);
      pages = this.attributes._pages;
      this.attributes._pages = null;
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
      this.attributes._elements = null;
      if (elements && _.isArray(elements)) {
        // TODO: allow pages to be redeclared per-action
        elements = _.map(elements, function (e) {
          var element = Element.create(e, self);
          if (element.attributes.preloadPromise) {
            preloadPromises.push(element.attributes.preloadPromise);
          }
          return element;
        });
      } else {
        elements = [];
      }
      this.attributes.elements = new Elements(elements);
      // bubble element valid/invalid events up through the form model.
      this.listenTo(this.attributes.elements, 'all', function (event) {
        /* eslint-disable no-fallthrough*/
        /* eslint-disable default-case*/
        switch (event) {
          case 'invalid':
            this.set({
              'isInvalid': true
            });
          case 'valid':
            this.trigger.apply(this, arguments);
            break;
        }
        /* eslint-enable default-case */
        /* eslint-enable no-fallthrough*/
      });

      // if any child elements change, then we are dirty
      this.listenTo(this.attributes.elements, 'change:value change:blob', function () {
        this.setDirty();
      });

      this.attributes.preloadPromise = Promise.all(preloadPromises);

      behaviours = this.attributes._behaviours;
      this.attributes._behaviours = null;
      if (behaviours && _.isArray(behaviours)) {
        // TODO: allow behaviours to be redeclared per-action
        behaviours = _.map(behaviours, function (b) {
          return Behaviour.create(b, self);
        });
      } else {
        behaviours = [];
      }
      this.attributes.behaviours = behaviours;

      this.on('remove', this.close, this);

      setTimeout(function () {
        self.trigger('formLoad', self);
      }, 0);
    },

    removeView: function () {
      var attrs = this.attributes;
      if (attrs.pages) { // sometimes there are no pages
        attrs.pages.forEach(function (page) {
          page.removeView();
        });
      }
      if (attrs._view) {
        attrs._view.remove();
        attrs._view = null;
      }
    },

    isValid: modelValidation.isValid,

    /**
     * When a form is set to a pristine state, set all its child elements to pristine as well.
     */
    setPristine: function () {
      // set all form elements to pristine
      if (this.attributes.elements) {
        this.attributes.elements.setPristine();
      }
      return modelStates.setPristine.apply(this, arguments);
    },

    setDirty: modelStates.setDirty,

    close: function () {
      var attrs = this.attributes;
      this.removeView();
      this.$form = null;
      if (attrs.pages) {
        attrs.pages.forEach(function (page) {
          page.close();
        });
        attrs.pages.reset();
      }
      if (attrs.behaviours) {
        attrs.behaviours.forEach(function (behaviour) {
          behaviour.close();
        });
      }

      this.off('remove', this.close, this);
    },
    /**
    * get a Page, creating it if necessary
    * @param {Number} index desired Page index.
    */
    getPage: function (index) {
      var Forms = BMP.Forms;
      var Page = Forms._models.Page;
      var pages = this.attributes.pages;

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
      var element;

      // only works with a truthy string
      if (!name || typeof name !== 'string') {
        return undefined;
      }

      // removed subforms have thier elements array removed
      if (!this.attributes.elements) {
        return undefined;
      }
      element = this.attributes.elements.get(name);

      if (!element) {
        // using .every() because .forEach() doesn't have early bail-out
        this.attributes.elements.every(function (el) {
          if (el.attributes.name.toLowerCase() === name.toLowerCase()) {
            element = el;
            return false;
          }
          return true;
        });
      }

      if (!element && name !== 'id') {
        // this is supposed to recursively search sub forms for an element.
        element = _.head(_.reduce(this.getSubforms(), function (memo, subForm) {
          return memo.concat(_.compact(subForm.invoke('getElement', name)));
        }, []));
      }

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
     * Returns an object of subforms that are within the form
     * @return {Object} Keys are the names of the subforms, Values are a Sub Form collection
     */
    getSubforms: function () {
      // removed subforms have thier elements array removed
      // treat as if the isSubForm filter returns an empty array.
      if (!this.attributes.elements) {
        return undefined;
      }
      return _.reduce(this.attributes.elements.filter(isSubForm), function (memo, elementModel) {
        memo = memo || {}; // create in here so we return undefined if we have no subforms.
        memo[elementModel.id] = elementModel.attributes.forms;
        return memo;
      }, undefined);
    },

    /**
     * Gets a list of invalid elements for the form and its subforms.
     *
     * @param {Object} options - options object. *validate: true* will force validation
     * on each object. *limit:{number}* will return the first <limit> fields
     */
    getInvalidElements: invalidWrapperFn('getInvalid'),

    /**
    * official Blink API
    *
    * @param {Object} options - options object. *validate: true* will force validation
    * on each object. *limit:{number}* will return the first <limit> fields
    * @returns {Object} Keys are element names, Values are error arrays.
    *
    * @deprecated Please use getInvalidElements instead
    *
    * @example
          Forms.current.getErrors()
          // returns:
          //{
          //   modelName : [{code: 'MAXDECIMALS', <errorname>: value, text: "pretty error message" }, {code: 'MINDECIMALS', <errorname>: value, text: "pretty error message"}],
          //   modelName2: [{code: 'MAXDECIMALS', <errorname>: value2, text: "pretty error message"}, {code: 'MINDECIMALS', <errorname>: value2, text: "pretty error message"}],
          //   length: 2,
          //   total: 12
          //}
    */
    getErrors: invalidWrapperFn('getErrors'),

    /**
    * official Blink API
    */
    getRecord: function () {
      var me = this;
      var data = {};
      var promises = [];

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
              promises.push(new Promise(function (resolve) {
                el.getRecord().then(function (v) {
                  data[el.attributes.name] = v;
                  resolve();
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
                // NOTE: This is kinda unnecessary as we are assigning object all the time
                // but leaving it here as safety net
                if (typeof val !== 'string') {
                  val = JSON.stringify(val);
                }
                data[el.attributes.name] = val;
              }
              return;
            }
            val = el.val();
            if (val || typeof val === 'number') {
              data[el.attributes.name] = val;
            }
          });
        } else if (isValidFormId(me.attributes.id)) {
          // this should be executed when all of following is correct
          // 1. user is editing record
          // 2. user has deleted a subform record
          // 3. me.attributes don't have `elements` element
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
      var self = this;
      var promises = [];

      return new Promise(function (resolve, reject) {
        var loopCounter = 0;
        var MAX_LOOP = 5;
        if (!_.isObject(data)) {
          reject();
          return;
        }

        self.set('isPopulating', true);

        _.each(data, function (value, key) {
          var formElement = self.getElement(key);
          var result, xml, mime;
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
              if (typeof value === 'string') {
                value = value.split('\n');
              }
              value = value.map(function (v) {
                return v.trim();
              });
            }
            if (formElement.attributes.type === 'location') {
              while (typeof value === 'string' && loopCounter < MAX_LOOP) {
                try {
                  value = JSON.parse(value);
                } catch (e) {
                  value = undefined;
                }
                loopCounter++;
              }
              if (loopCounter >= MAX_LOOP && typeof value !== 'object') {
                value = undefined;
              }
            }
            formElement.val(value);
          }
        });
        Promise.all(promises).then(function () {
          self.set('isPopulating', false);
          setTimeout(function () {
            self.trigger('formPopulated', self);
          }, 0);
          resolve(data);
        }, function (err) {
          self.set('isPopulating', false);
          reject(err);
        });
      });
    },

    /**
     * Official Blink API - Sets the errors on a form.
     * @param {Object} errorList - An array of key/value where keys are Element Names and values are the error lists for that element.
     * @param {Object} options   - {merge: true}
     */
    /* eslint-disable no-unused-vars */ // stop eslint compaining about options and errorList not being used.
    setErrors: function (errorList, options) {
      var elementsCollection = this.attributes.elements;
      var subForms = this.getSubforms();

      _.each(subForms, function (subForm, name) {
        var subFormErrorList = _.omit(errorList[name], 'errors');

        _.each(subFormErrorList, function (errors, formName) {
          _.each(errors, function (fieldError, formIndex) {
            var form = subForms[name].at(formIndex);
            if (form) {
              form.setErrors(fieldError);
            }
          });
        });
      });

      if (!elementsCollection) {
        return false;
      }
      return elementsCollection.setErrors.apply(elementsCollection, arguments);
    },

    /* eslint-enable no-unused-vars */
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

      form = new Form(attrs);
      form.set('_action', action);

      return form;
    },
    /*
    * add mimetype to blob fields value
    */
    addMimetype: function (value, mime) {
      if (value.indexOf('data:') === -1) {
        return 'data:' + mime + ';base64,' + value;
      }
      return value;
    },
    xmlToJson: function (xml, output) {
      var result = output || {};
      var nodes = xml.childNodes;
      var root = xml.nodeName;
      var res = {};

      _.each(nodes, function (node) {
        res = Form.xmlToJsonform(node, {});
        if (!_.isArray(result[root])) {
          result[root] = [];
        }
        if (!_.isEmpty(res)) {
          result[root].push(res);
        }
      });
      return result;
    },
    xmlToJsonform: function (xml) {
      var result = {};
      var nodes = xml.childNodes;
      var res;

      _.each(nodes, function (node) {
        if (node.childElementCount === 0) {
          result[node.nodeName] = node.textContent;
        } else {
          res = Form.xmlToJson(node, {});
          result[node.nodeName] = res[node.nodeName];
        }
      });
      return result;
    }

  });

  return Form;
});
