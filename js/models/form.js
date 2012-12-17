define(['underscore', 'backbone', 'models/element'],
       function(_, Backbone, Element) {
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
      delete pertinent._elements;
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
      // creates models from element definitions
      elements = _.map(elements, function(el) {
        // TODO: merge in !element overrides
        return new Element(el);
      });
      pertinent.elements = elements;
      this.attributes = pertinent;
    }
  });

  return Form;
});
