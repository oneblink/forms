define(['models/form', 'collections/elements'],
      function(Form, Elements) {
  'use strict';

  var Section = Backbone.Model.extend({
    idAttribute: 'name',
    /**
     * @param {Object} def complete form definition.
     * @param {String} action "add" | "edit" | "view" | etc...
     */
    constructor: function(def, action, form) {
      var self = this,
          pertinent = def.default,
          contents = pertinent._contents,
          elements;

      delete pertinent._contents;

      if (_.isArray(contents) && contents.length && form instanceof Form) {
        // TODO: deal with Sections within this Page
        elements = _.map(contents, function(name) {
          return form.attributes.elements.get(name);
        });
        elements = new Elements(elements);
      }
      pertinent.elements = elements;

      this.attributes = pertinent;
    }
  });

  return Section;
});

