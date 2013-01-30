
define(['jquery',
  'models/form',
  'models/page',
  'models/element',
  'models/elements/date',
  'models/elements/hidden',
  'models/elements/text',
  'models/elements/textarea',
  'models/elements/select',
  'models/elements/multi'
], function(
  $,
  Form,
  Page,
  Element,
  DateElement,
  HiddenElement,
  TextElement,
  TextAreaElement,
  SelectElement,
  MultiElement
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
    TextAreaElement: TextAreaElement,
    SelectElement: SelectElement,
    MultiElement: MultiElement
  };

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


