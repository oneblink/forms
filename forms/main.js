/**
 * Event used to scroll an element into view
 *
 * @event Forms~scrollTo
 * @property {string} name - The name of the element.
 */

/**
 * @module  Forms
 * @exports Forms
 */
define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');

  // this module

  var Forms;

  window.BMP = window.BMP || {};
  window.BMP.Forms = window.BMP.Forms || {};

  window.BMP.Expression = require('forms/expression');

  Forms = window.BMP.Forms;

  _.extend(Forms, Backbone.Events);

  _.extend(Forms, require('forms/events'));

  BMP.Forms.errorHelpers = require('forms/error-helpers');

  Forms._models = {
    Form: require('forms/models/form'),
    SubForm: require('forms/models/subform'),
    SubFormElement: require('forms/models/elements/subform'),
    Behaviour: require('forms/models/behaviour'),
    Page: require('forms/models/page'),
    Section: require('forms/models/section'),
    Element: require('forms/models/element'),
    HeadingElement: require('forms/models/elements/heading'),
    MessageElement: require('forms/models/elements/message'),
    DateElement: require('forms/models/elements/date'),
    HiddenElement: require('forms/models/elements/hidden'),
    NumberElement: require('forms/models/elements/number'),
    TelephoneElement: require('forms/models/elements/telephone'),
    PasswordElement: require('forms/models/elements/password'),
    EmailElement: require('forms/models/elements/email'),
    URLElement: require('forms/models/elements/url'),
    TextElement: require('forms/models/elements/text'),
    TextAreaElement: require('forms/models/elements/textarea'),
    BooleanElement: require('forms/models/elements/boolean'),
    SelectElement: require('forms/models/elements/select'),
    MultiElement: require('forms/models/elements/multi'),
    LocationElement: require('forms/models/elements/location'),
    FileElement: require('forms/models/elements/file'),
    DrawElement: require('forms/models/elements/draw'),
    ButtonElement: require('forms/models/elements/button')
  };

  Forms.uuid = require('uuid');

  Forms.castPropertyValues = require('@blinkmobile/cast-property-types');
  Forms.flattenDefinition = function (def, variant) {
    var flatten = require('@blinkmobile/varied-definition').flatten;
    return flatten(def, variant, {
      nesting: [
        '_elements',
        '_sections',
        '_pages',
        '_behaviours',
        '_checks',
        '_actions'
      ],
      selection: ['_elements']
    });
  };
  Forms.parseClass = require('@blinkmobile/html-class-data').decode;

  /**
  * if the model has a "class" attribute, then set its attributes by parsing it
  * @param {Backbone.Model} model target object that may have .attributes.class
  * @param {String{}} blacklist property names that should not be set by class
  */
  Forms.setAttributesFromClass = function (model, blacklist) {
    var klass, defaults, parsed;
    if (model && typeof model !== 'object') {
      throw new TypeError('expect 1st parameter to be Backbone.Model');
    }
    if (blacklist && !Array.isArray(blacklist)) {
      throw new TypeError('expect 2nd parameter to be an Array, or omitted');
    }
    blacklist = blacklist || [];
    blacklist.push('id', 'name', 'label');
    if (!model instanceof Backbone.Model || !model.attributes) {
      return; // nothing to do
    }
    klass = model.attributes.class;
    if (typeof klass !== 'string' || klass.indexOf(';') === -1) {
      return; // nothing to do
    }

    parsed = Forms.parseClass(klass);
    blacklist.forEach(function (prop) {
      delete parsed[prop];
    });

    defaults = model.constructor.prototype.defaults || {};
    model.set(Forms.castPropertyValues(parsed, defaults));
  };

  /**
   * @param {Object} def definition of form to initialise.
   */
  Forms.initialize = function (def, action) {
    var form,
      view;

    if (!$.isPlainObject(def)) {
      throw new Error('unexpected Form definition structure');
    }
    if (!action || _.isEmpty(action) || ['add', 'edit', 'delete'].indexOf(action) < 0) {
      action = 'add';
    }

    form = Forms._models.Form.create(def, action);
    Forms.current = form;
    view = form.attributes._view = new Forms._views.Form({model: form});
    form.$form = view.$el; // backwards-compatibility, convenience
    view.render();
  };

  Forms.version = '3.5.0';
  Forms.supports = {};

  Forms.supports.blob = (function () {
    var blob;
    try {
      blob = new BMP.Blob();
      return typeof blob.size === 'number';
    } catch (ignore) {
      return false;
    }
    return false;
  }());

  Forms.loaded = {};
  Forms.loading = {};
  Forms.loaded.googleMap = false;
  Forms.loading.googleMap = false;

  Forms.loadScript = function (src, done) {
    var script = document.createElement('script');
    script.src = src;
    if (done && typeof done === 'function') {
      script.onload = done;
      script.onerror = done;
    }
    document.body.appendChild(script);
  };

  Forms.initializeFlag = function () {
    Forms.loaded.googleMap = true;
  };

  Forms.loadMapScript = function () {
    var src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&callback=BMP.Forms.initializeFlag';
    if (!Forms.loaded.googleMap && Forms.loading.googleMap === false) {
      Forms.loadScript(src, function () {
        Forms.loading.googleMap = false;
      });
      Forms.loading.googleMap = true;
    }
  };

  return Forms;
});
