
define(['jquery', 'backbone',
  'models/form',
  'models/page',
  'models/element',
  'models/elements/text',
  'models/elements/textarea'
], function($, Backbone, Form, Page, Element, TextElement, TextAreaElement) {
  'use strict';
  var Forms = window.BlinkForms || {};

  Forms._models = {
    Form: Form,
    Page: Page,
    Element: Element,
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


