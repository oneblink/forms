define(function (require) {
  'use strict';

  var Backbone = require('backbone');

  return Backbone.Collection.extend({
    model: Backbone.Model,

    OTHER_ID: 'bm-other',

    deselectAll: function (options) {
      this.invoke('set', 'isSelected', false, options);
    },

    /**
     * Returns an array of selected options
     * @return {Array|Option Models}
     */
    getSelected: function () {
      return this.where({isSelected: true});
    },

    getOtherValue: function () {
      var other = this.get(this.OTHER_ID);
      return other ? other.attributes.value : undefined;
    },

    /**
     * Selects an option awt the specified index
     * @param  {Number} index - The index to select
     * @return {OptionModel}       - The option Model that was selected or undefined if index is out of bounds.
     */
    select: function (index) {
      var option = this.models[index];
      if (option) {
        option.set('isSelected', true);
      }

      return option;
    }
  });
});
