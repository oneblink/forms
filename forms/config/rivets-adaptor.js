define(function(require){
  'use strict';
  var validate = { validate: true }
    , validationRules = require('config/auto-attribute-validation');

/*
  rivets adaptor for backbone that supports the built in backbone
  error system
*/
  return {
    subscribe: function(obj, keypath, callback) {
      obj.on('change:' + keypath, callback);
    },
    unsubscribe: function(obj, keypath, callback) {
      obj.off('invalid change:' + keypath, callback);
    },
    read: function(obj, keypath) {
      return obj.get(keypath);
    },
    publish: function(obj, keypath, value) {
      var options = validationRules.validate && validationRules.validateKeys.indexOf(keypath) > -1
                    ? validate : undefined;

      obj.set(keypath, value, options);

      // backbone will not write to the model if validation fails.
      // we want that behavior because current validation methods
      // rely on it.
      if ( options === validate && obj.validationError ){
        obj.attributes[keypath] = value;
      }
    }
  };
});
