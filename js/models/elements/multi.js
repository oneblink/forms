define(['models/elements/select'], function (SelectElement) {
  'use strict';

  var MultiElement = SelectElement.extend({
    initialize: function () {
      SelectElement.prototype.initialize.call(this);
    }
  });

  return MultiElement;
});
