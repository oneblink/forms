/**
 * This is a sample implementation of the API that the BIC must supply.
 */

/*jslint regexp:true*/ // allow insecure RegExp below
define(['q', 'BlinkForms', 'definitions'], function(Q, Forms, defs) {

  Forms.getDefinition = function(name) {
    var dfrd = Q.defer(),
        def;

    def = _.find(defs, function(def) {
      return def && def.default && def.default.name === name;
    });
    if (def) {
      dfrd.resolve(def);
    } else {
      dfrd.reject(def);
    }

    return dfrd.promise;
  };

});
