define(['models/element'], function(Element) {
  'use strict';

  var NumberElement = Element.extend({
    initialize: function() {
      Element.prototype.initialize.call(this);
    },
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key === null) {
        return this;
      }
      if (_.isObject(key)) {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }
      options = options || {};

      // tamper with 'value' if present
      if (attrs.value !== 'undefined' && attrs.value !== null) {
        // TODO: round to 'step' if present with 'min' and/or 'max'
        attrs.value = Number(attrs.value);
      }

      return Element.prototype.set.call(this, attrs, options);
    }
  });

  return NumberElement;
});


