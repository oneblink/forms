define(function (require) {
  'use strict';

  // foreign modules

  var Backbone = require('backbone');

  // this module

  return {

    /**
    intended to replace `Backbone.Model#isValid`
    @param {Object} [options]
    @fires invalid
    @fires valid
    @returns {boolean}
    */
    isValid: function (options) {
      var result = Backbone.Model.prototype.isValid.call(this, options);
      if (result) {
        this.trigger('valid', this);
      }
      return result;
    }

  };
});
