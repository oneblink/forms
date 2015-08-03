define(function (require) {
  'use strict';

  // foreign modules

  var _ = require('underscore');

  // local modules

  var TextElement = require('forms/models/elements/text');

  // this module

  var EmailElement = TextElement.extend({
    initialize: function () {
      TextElement.prototype.initialize.apply(this, arguments);
    },
    initializeView: function () {
      var Forms = BMP.Forms;
      var View, view;

      if (this.attributes.readonly) {
        this.removeView();
        View = Forms._views.ReadOnlyElement;
      } else {
        View = Forms._views.EmailElement;
      }

      view = new View({model: this});
      this.set('_view', view);
      return view;
    },
    validate: function (attrs) {
      var errors = TextElement.prototype.validate.apply(this, arguments) || {};
      // http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
      var regexp = new RegExp('^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$', 'i');
      if (attrs === undefined) {
        attrs = this.attributes;
      }

      if (attrs.value && !regexp.test(attrs.value)) {
        errors.value = errors.value || [];
        errors.value.push({code: 'EMAIL'});
      }
      if (!_.isEmpty(errors)) {
        return errors;
      }
    }
  });

  return EmailElement;
});
