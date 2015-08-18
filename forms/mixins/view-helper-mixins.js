define(function (require) {
  'use strict';

  return {
    /**
     * returns a function that will check model.get(propertyName) and set or remove classname
     * @param  {string} className    - The class name to toggle
     * @param  {string} propertyName - The property name to check. Value of the property will be treated as a boolean.
     * @return {function}            - The function
     */
    toggleClass: function (className, propertyName) {
      return function () {
        return this.model.get(propertyName) ? this.$el.addClass(className) : this.$el.removeClass(className);
      };
    }
  };
});
