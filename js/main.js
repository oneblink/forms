define(function (require) {
  'use strict';
  var Forms, BicyclePump, FormsLib;

  BicyclePump = require('bicyclepump');
  FormsLib = require('formslib');
  Forms = window.BMP.Forms;

  _.extend(Forms, Backbone.Events);

  Forms._models = {
    Form: require('models/form'),
    SubForm: require('models/subform'),
    SubFormElement: require('models/elements/subform'),
    Behaviour: require('models/behaviour'),
    Page: require('models/page'),
    Section: require('models/section'),
    Element: require('models/element'),
    HeadingElement: require('models/elements/heading'),
    MessageElement: require('models/elements/message'),
    DateElement: require('models/elements/date'),
    HiddenElement: require('models/elements/hidden'),
    NumberElement: require('models/elements/number'),
    TelephoneElement: require('models/elements/telephone'),
    PasswordElement: require('models/elements/password'),
    EmailElement: require('models/elements/email'),
    URLElement: require('models/elements/url'),
    TextElement: require('models/elements/text'),
    TextAreaElement: require('models/elements/textarea'),
    BooleanElement: require('models/elements/boolean'),
    SelectElement: require('models/elements/select'),
    MultiElement: require('models/elements/multi'),
    LocationElement: require('models/elements/location'),
    FileElement: require('models/elements/file'),
    DrawElement: require('models/elements/draw'),
    ButtonElement: require('models/elements/button')
  };

  Forms.uuid = require('uuid');

  Forms.models = new BicyclePump();
  Forms.views = new BicyclePump();

  Forms.castPropertyValues = FormsLib.castPropertyValues;
  Forms.flattenDefinition = FormsLib.flattenDefinition;
  Forms.parseClass = FormsLib.parseClass;

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
    klass = model.attributes['class'];
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
      action = "add";
    }

    form = Forms._models.Form.create(def, action);
    Forms.current = form;
    view = form.attributes._view = new Forms._views.Form({model: form});
    form.$form = view.$el; // backwards-compatibility, convenience
    view.render();
  };

  Forms.version = '3.2.1';
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
    if (done && typeof done === "function") {
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
