define(['models/element'], function (Element) {
  'use strict';

  var TextElement = Element.extend({
    initialize: function () {
      Element.prototype.initialize.call(this);
    },
    validate: function (attrs) {
      var errors = Element.prototype.validate.call(this) || {};
      if (attrs === undefined) {
        attrs = this.attributes;
      }

      if (attrs.value && attrs.maxLength) {
        if (attrs.value.length > attrs.maxLength) {
          errors.value = errors.value || [];
          errors.value.push({code: 'MAXLENGTH', MAX: attrs.maxLength});
        }
      } else if (attrs.value && attrs.characterLimit) {
        if (attrs.value.length > attrs.characterLimit) {
          errors.value = errors.value || [];
          errors.value.push({code: 'MAXLENGTH', MAX: attrs.characterLimit});
        }
      }
      if (!_.isEmpty(errors)) {
        return errors;
      }
    }
  });

  return TextElement;
});
