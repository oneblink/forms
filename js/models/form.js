define(['underscore', 'backbone'], function(_, Backbone) {
  'use strict';

  var Form = Backbone.Model.extend({
    /**
     * @param {Object} def complete form definition.
     * @param {String} action "add" | "edit" | "view" | etc...
     */
    constructor: function(def, action) {
      var pertinent = def.default,
          elements = pertinent._elements,
          names;
      if (action && def[action]) {
        names = def[action]._elements;
        delete def[action]._elements;
        _.extend(pertinent, def[action]);
        // remove all elements not needed for this action
        elements = _.filter(elements, function(el) {
          return names.indexOf(el.default.name) !== -1;
        });
        // sort elements as per the action-specific order
        elements = _.sortBy(element, function(el) {
          return names.indexOf(el.default.name);
        });
      }
      // collapse pertinent action-specific element attributes
      elements = _.map(elements, function(el) {
        if (action && el[action]) {
          $.extend(el.default, el[action]);
        }
        // TODO: merge in !element overrides
        return el.default;
      });
      pertinent._elements = elements;
      this.attributes = pertinent;
    }
  });

  return Form;
});
