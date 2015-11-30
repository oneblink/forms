define(function (require) {
  'use strict';

  var Backbone = require('backbone');
  var _ = require('underscore');

  var OptionModel = require('forms/models/choice-option');

  return Backbone.Collection.extend({
    model: OptionModel,

    OTHER_ID: 'bm-other',

    deselectAll: function (options) {
      this.invoke('deselect', options);
    },

    /**
     * Returns an array of selected options
     * @return {Array|Option Models}
     */
    getSelected: function () {
      return this.where({isSelected: true});
    },

    /**
     * Gets the values of each selected items
     * @return {Array|Any} 
     */
    getSelectedValues: function () {
      return this.reduce(function (memo, option) {
        if (option.attributes.isSelected) {
          memo.push(option.attributes.value);
        }
        return memo;
      }, []);
    },

    /**
     * Gets the model with a value that matches
     * @param  {any} value - The value to look for
     * @return {Option Model}
     */
    getOptionByValue: function (value) {
      return this.find(function (option) {
        return option.attributes.value === value && !option.isOther();
      });
    },

    getOtherOption: function () {
      return this.get(this.OTHER_ID);
    },

    getOtherValue: function () {
      var other = this.get(this.OTHER_ID);
      return other ? other.attributes.value : undefined;
    }
  });
});
