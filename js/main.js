
define(function(require) {
  'use strict';
  var Forms = BlinkForms;

  Forms._models = {
    Form: require('models/form'),
    SubFormElement: require('models/elements/subform'),
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
    MultiElement: require('models/elements/multi')
  };

  /**
   * @param {Object} def definition of form to initialise.
   */
  Forms.initialize = function(def) {
    var form,
        view;

    if (!$.isPlainObject(def) || $.type(def.default) !== 'object') {
      throw new Error('unexpected Form definition structure');
    }
    form = Forms._models.Form.create(def, 'add');
    Forms.currentFormObject = form;
    view = form.attributes._view = new Forms._views.Form({model: form});
    form.$form = view.$el; // backwards-compatibility, convenience
    view.render();
  };

  /**
   * @param {DOMNode|jQuery} element where to start looking.
   */
  Forms.getForm = function(element) {
    var cfo = Forms.currentFormObject,
        $element = element instanceof $ ? element : $(element),
        $next = $element.closest('[data-form]'),
        form;

    while ($next.length > 0) {
      if ($.hasData($next[0])) {
        form = $next.data('model');
        if (form instanceof Forms._models.Form) {
          return form;
        }
      }
      $next = $element.parent().closest('[data-form]');
    }
    if (cfo && cfo.$form && cfo.$form.parent().length > 0) {
      return Forms.currentFormObject;
    }
    return null;
  };

  return Forms;
});


