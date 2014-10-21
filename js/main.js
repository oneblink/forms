define(function (require) {
  'use strict';
  var Forms, BicyclePump;

  BicyclePump = require('bicyclepump');
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

  Forms.models = new BicyclePump();
  Forms.views = new BicyclePump();

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

  Forms.version = '3.1.3';

  return Forms;
});
