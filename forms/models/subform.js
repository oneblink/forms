define(['models/form'], function (Form) {
  'use strict';

  var SubForm = Form.extend({
    initialize: function () {
      this.parentElement = null;
      Form.prototype.initialize.call(this);
    }
  });

  return SubForm;
});
