define(['models/element'], function (Element) {
  'use strict';

  var defaults = _.clone(Element.prototype.defaults);
  defaults.mode = 'collapsed';
  defaults.layout = 'vertical';
  defaults.other = false;

  return Element.extend({
    defaults: defaults,
    initialize: function () {
      Element.prototype.initialize.call(this);
    }
  });
});
