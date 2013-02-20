/**
 * This is a sample implementation of the API that the BIC must supply.
 */

define(['underscore', 'q', 'BlinkForms', 'definitions'],
      function(_, Q, Forms, defs) {

  Forms.getDefinition = function(name, action) {
    var dfrd = Q.defer(),
        def,
        elNames,
        elements,
        collapseAction = function(d) {
          var attrs = d.default || {};
          if (action && d[action]) {
            _.extend(attrs, d[action]);
          }
          return attrs;
        };

    def = _.find(defs, function(def) {
      return def && def.default && def.default.name === name;
    });
    if (!def) {
      dfrd.reject(def);
      return dfrd.promise;
    }
    def = $.parseJSON(JSON.stringify(def));
    if (!action) {
      // pass a clone back, for safety
      dfrd.resolve(def.default);
      return dfrd.promise;
    }
    // found definition, but need to collapse to specific action/view
    if (_.isArray(def.default._elements)) {
      def.default._elements = _.map(def.default._elements, collapseAction);
    }
    if (_.isArray(def.default._sections)) {
      def.default._sections = _.map(def.default._sections, collapseAction);
    }
    if (_.isArray(def.default._pages)) {
      def.default._pages = _.map(def.default._pages, collapseAction);
    }
    if (def[action] && def[action]._elements) {
      elements = def.default._elements;
      delete def.default._elements;
      elNames = def[action]._elements;
      delete def[action]._elements;
      _.extend(def.default, def[action]);

      // remove all elements not needed for this action
      elements = _.filter(elements, function(el) {
        return elNames.indexOf(el.default.name) !== -1;
      });
      // sort elements as per the action-specific order
      elements = _.sortBy(elements, function(el) {
        return elNames.indexOf(el.default.name);
      });

      def.default._elements = elements;
    }

    dfrd.resolve(def.default);

    return dfrd.promise;
  };

});
