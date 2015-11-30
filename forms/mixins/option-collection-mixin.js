/**
 * OptionCollection Mixins
 *
 * For use when your model relies on the OptionCollection collection.
 *
 * @module  mixins/option-collection-mixins
 */
define(function (require) {
  'use strict';

  var _ = require('underscore');

  return {
    /**
     * @access protected
     * @param  {Array|OptionModel}  collection - The options collection to be checked
     * @return {Boolean} - True or false
     */
    _isEmpty: function (collection) {
      return !_.any(collection, function (option) {
        return !option.isEmpty();
      });
    },

    /**
     * Are any options selected?
     * @return {Boolean}
     */
    isEmpty: function () {
      return this._isEmpty(this.attributes.optionCollection.models);
    },

    /**
     * Convert an object of key/value pairs (`attributes.options`) into an array of
     * select option attributes.
     * @return {[type]} [description]
     */
    mapOptions: function () {
      var options = _.map(this.attributes.options, function (label, value) {
        return {
          id: value,
          isSelected: value === this.attributes.value,
          label: label,
          value: value
        };
      }, this);

      // add other option to the end
      if (this.attributes.other) {
        options.push({
          id: this.attributes.optionCollection.OTHER_ID,
          isSelected: false,
          label: 'Other',
          value: this.attributes.optionCollection.getOtherValue()
        });
      }

      return options;
    },

    /**
     * Calls `reset` on `attributes.optionCollection` passing in an array
     * created by mapping over `attributes.options`.
     */
    resetOptionCollection: function () {
      this.attributes.optionCollection.reset(this.mapOptions());
      this.set('value', null);
    }
  };
});
