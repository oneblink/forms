define(['models/elements/text'], function (TextElement) {
  'use strict';

  var EmailElement = TextElement.extend({
    initialize: function () {
      TextElement.prototype.initialize.call(this);
    },
    validate: function (attrs) {
      var errors = TextElement.prototype.validate.call(this) || {},
        //http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
        regexp = new RegExp('^(([^<>()[\\]\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$', 'i');
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



