/* eslint-disable accessor-pairs */ // we're using the "set" keyword for method
/**
 * Element Model Module
 *
 * @module ElementModel
 * @exports Element
 */
define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');
  var queue = require('queue-async');

  // local modules

  var utils = require('forms/lib/utils');

  // this module

  var q = queue(10);

  /** @type {Boolean} is the Behaviours queue empty? */
  var qEmpty = true;

  var Element;

  Element = Backbone.Model.extend({
    defaults: {
      page: 0,
      class: '',
      defaultValue: '',
      value: '',
      pattern: '',
      hidden: false,
      persist: true
    },

    idAttribute: 'name',

    initialize: function () {
      var attrs = this.attributes;
      var form = attrs.form;
      var page = attrs.page;
      var Forms = BMP.Forms;
      var section = $.trim(attrs.section || '');

      // migrate builder rowClass to class
      attrs.class = attrs.class || attrs.rowClass || '';

      Forms.setAttributesFromClass(this);

      if (form) {
        page = attrs.page = form.getPage(attrs.page);
        if (page && section) {
          section = attrs.section = page.getSection(section);
          section.add(this);
        } else {
          page.add(this);
          delete attrs.section;
        }
      }

      // have to do this _before_ we start setting 'value'
      this.validate = _.debounce(this.validate, 500);

      this.set('value', attrs.defaultValue, { silent: true });
      if (!attrs.label && attrs.type !== 'message') {
        if (attrs.prefix) {
          attrs.label = attrs.name + ' ' + attrs.prefix;
        } else {
          attrs.label = attrs.name;
        }
      }

      // FORMS-137 # Fields that are set to required are not marked as such in anyway (no *)
      if (attrs.required && attrs.label && attrs.type !== 'subForm') {
        attrs.label += ' *';
      }

      if (attrs.label) {
        this.set('label', attrs.label);
      }

      // backward compatability
      this.on('invalid valid', this.updateErrors, this);

      this.on('remove', this.close, this);
    },

    isEmpty: function () {
      var value = this.attributes.value;
      if (Array.isArray(value)) {
        return !value.length;
      }
      return !value && value !== 0;
    },

    runValidation: function (attrs) {
      var errors = {};

      if (attrs === undefined) {
        attrs = this.attributes;
      }

      if (attrs.hidden) {
        // if the element is hidden, validation should be ignored.
        return undefined;
      }

      if (attrs.required && this.isEmpty()) {
        errors.value = errors.value || [];
        errors.value.push({code: 'REQUIRED'});

      }
      if (attrs.pattern && attrs.value &&
          !new RegExp(attrs.pattern).test(attrs.value)) {
        errors.value = errors.value || [];
        errors.value.push({code: 'PATTERN', PATTERN: attrs.pattern});

      }

      return _.isEmpty(errors) ? undefined : errors;
    },

    validate: function (attrs) {
      var args = arguments;
      if (Object.keys(attrs || this.attributes || {}).indexOf('value') !== -1) {
        q.defer(function (done) {
          this.validationError = this.runValidation.apply(this, args);
          this.trigger(
            this.hasErrors() ? 'invalid' : 'valid',
            this,
            this.validationError
          );
          setTimeout(done, Element.VALIDATE_SLEEP);
        }.bind(this));
        if (qEmpty) {
          qEmpty = false;
          setTimeout(function () {
            q.awaitAll(function () {
              qEmpty = true;
              BMP.Forms.trigger('validated');
            });
          }, 0);
        }
      }
      return this.validationError;
    },

    /* @deprecated */
    updateErrors: function () {
      this.set('errors', this.validationError, {validate: false, silent: true});
    },

    hasErrors: function () {
      return this.validationError && !_.isEmpty(this.validationError);
    },

    /**
     * sets the current model.validationError property to elementErrorList.
     * Fires an 'invalid' event with (model, serverErrors) as params.
     * Any errors set here will be at the front of the array, and take
     * precedence.
     *
     * @param {array|object} elementErrorList - An array of Error objects
     * @param {object} options - set merge:false to NOT merge errors
     *
     * @fires model.invalid
     */
    setExternalErrors: function (elementErrorList, options) {
      var errors = [];
      options = options || {merge: true};

      if (options.merge && this.validationError) {
        errors = this.validationError.value || errors;
      }

      if (!_.isArray(errors)) {
        errors = [errors];
      }

      this.validationError = { value: _.uniq(errors.concat(elementErrorList).reverse()) };
      this.trigger('invalid', this, elementErrorList);
    },

    warn: function () {
      var warning = {};
      warning.value = warning.value || [];
      if (!BMP.Forms.supports.blob) {
        warning.value.push({code: 'NO_BLOB_PREVIEW'});
      }
      return _.isEmpty(warning) ? undefined : warning;
    },

    updateWarning: function () {
      this.set('warning', this.warn());
    },

    removeView: function () {
      var attrs = this.attributes;
      if (attrs._view) {
        attrs._view.remove();
        delete attrs._view;
      }
    },

    close: function () {
      var attrs = this.attributes;
      delete attrs.form;
      delete attrs.page;
      delete attrs.section;
      this.off(null, null, this);
    },

    /**
     * this will close any existing view first, then establish a new view
     */
    initializeView: function () {
      var Forms = BMP.Forms;
      var View, view;
      var attrs = this.attributes;

      this.removeView();

      switch (attrs.type) {
        case 'heading':
          View = Forms._views.HeadingElement;
          break;
        case 'message':
          View = Forms._views.MessageElement;
          break;
        case 'boolean':
          View = Forms._views.BooleanElement;
          break;
        case 'number':
          View = Forms._views.NumberElement;
          break;
        case 'telephone':
          View = Forms._views.TelephoneElement;
          break;
        case 'button':
          View = Forms._views.ButtonElement;
          break;
        default:
          View = Forms._views.Element;
      }
      view = new View({model: this});
      this.set('_view', view);
      return view;
    },

    set: function (prop) {
      var result = Backbone.Model.prototype.set.apply(this, arguments);
      if (utils.isBBSetForProp('value', arguments)) {
        // explicitly trigger validation, even if there is no change in value
        this.validate();
      }
      return result;
    },

    /**
     * official Blink API
     */
    val: function (value) {
      if (!arguments.length) {
        return this.get('value');
      }
      return this.set('value', value);
    }
  }, {
    // static properties

    VALIDATE_SLEEP: 10,

    /**
     * @param {Object} attrs attributes for this model.
     * @param {Form} form parent to associate with new Element.
     * @return {Element} new Element.
     */
    create: function (attrs, form) {
      var Forms = BMP.Forms;
      var dateTypes = ['date', 'time', 'datetime'];
      var el;
      var TypedElement;

      if (!attrs || !_.isObject(attrs)) {
        return new Element();
      }
      if (form) {
        attrs.form = form;
      }
      // TODO: determine Element type and select sub-Prototype
      switch (attrs.type) {
        case 'draw':
          TypedElement = Forms._models.DrawElement;
          break;
        case 'file':
          TypedElement = Forms._models.FileElement;
          break;
        case 'location':
          TypedElement = Forms._models.LocationElement;
          break;
        case 'subForm':
          TypedElement = Forms._models.SubFormElement;
          break;
        case 'heading':
          TypedElement = Forms._models.HeadingElement;
          break;
        case 'message':
          TypedElement = Forms._models.MessageElement;
          break;
        case 'boolean':
          TypedElement = Forms._models.BooleanElement;
          break;
        case 'select':
          TypedElement = Forms._models.SelectElement;
          break;
        case 'multi':
          TypedElement = Forms._models.MultiElement;
          break;
        case 'hidden':
          TypedElement = Forms._models.HiddenElement;
          break;
        case 'number':
          TypedElement = Forms._models.NumberElement;
          break;
        case 'telephone':
          TypedElement = Forms._models.TelephoneElement;
          break;
        case 'password':
          TypedElement = Forms._models.PasswordElement;
          break;
        case 'email':
          TypedElement = Forms._models.EmailElement;
          break;
        case 'url':
          TypedElement = Forms._models.URLElement;
          break;
        case 'text':
          TypedElement = Forms._models.TextElement;
          break;
        case 'button':
          TypedElement = Forms._models.ButtonElement;
          break;
        case 'textarea':
          TypedElement = Forms._models.TextAreaElement;
          break;
        default:
          if (_.indexOf(dateTypes, attrs.type) !== -1) {
            TypedElement = Forms._models.DateElement;
          } else {
            TypedElement = Forms._models.Element;
          }
      }
      // TODO: set View = read-only view for m.readOnly
      el = new TypedElement(attrs);
      return el;
    }
  });

  return Element;
});
