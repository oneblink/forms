
define(['jquery',
  'models/form',
  'models/page',
  'models/element',
  'models/elements/date',
  'models/elements/hidden',
  'models/elements/text',
  'models/elements/textarea'
], function(
  $,
  Form,
  Page,
  Element,
  DateElement,
  HiddenElement,
  TextElement,
  TextAreaElement
) {
  'use strict';
  var Forms = window.BlinkForms || {};

  Forms._models = {
    Form: Form,
    Page: Page,
    Element: Element,
    DateElement: DateElement,
    HiddenElement: HiddenElement,
    TextElement: TextElement,
    TextAreaElement: TextAreaElement
  };

  // set jQuery Mobile options
  $(document).on('mobileinit', function() {
    $.extend($.mobile, {
      autoInitializePage: false
    });
  });

  /**
   * @param {Object} def definition of form to initialise.
   */
  Forms.initialize = function(def) {
    var form;
    if (!$.isPlainObject(def) || $.type(def.default) !== 'object') {
      throw new Error('unexpected Form definition structure');
    }
    form = Form.create(def, 'add');
    if (!Forms.currentFormObject) {
      // TODO: this is insufficient, needs a more thorough test
      Forms.currentFormObject = form;
    }
  };

  // global exports
  window.BlinkForms = Forms;
});


