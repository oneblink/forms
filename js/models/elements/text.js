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

      if (attrs.value) {
        if (attrs.value.length > attrs.maxlength) {
          errors.value = errors.value || [];
          errors.value.push({code: 'max length error'});
        }
      }
      if (!_.isEmpty(errors)) {
        return errors;
      }
    }
  });

  return TextElement;
});


