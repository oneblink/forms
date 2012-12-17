define(['underscore', 'backbone'], function(_, Backbone) {
  'use strict';

  var Element = Backbone.Model.extend({
    /**
     * @param {Object} def complete form definition.
     * @param {String} action "add" | "edit" | "view" | etc...
     */
    constructor: function(def, action) {
      var pertinent = def.default,
          names;
      if (action && def[action]) {
        _.extend(pertinent, def[action]);
      }
      this.attributes = pertinent;
    }
  });

  return Element;
});

