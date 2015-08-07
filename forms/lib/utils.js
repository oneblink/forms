define(function () {

  return {

    isBBSetForProp: function (prop, args) {
      if (args[0] === prop) {
        // #set(prop, value)
        return true;
      }
      if (args[0] && typeof args[0] === 'object') {
        // #set({ prop: value })
        return prop in args[0];
      }
      return false;
    },

    getValueFromBBSet: function (prop, args) {
      if (args[0] === prop) {
        // #set(prop, value)
        return args[1];
      }
      if (args[0] && typeof args[0] === 'object') {
        if (prop in args[0]) {
          // #set({ prop: value })
          return args[0][prop];
        }
      }
      return undefined;
    },

    updateBBSetArguments: function (prop, value, args) {
      if (value !== undefined) {
        if (args[0] === prop) {
          args[1] = value;
        }
        if (args[0] && typeof args[0] === 'object') {
          args[0][prop] = value;
        }
      }
      return args;
    }

  };

});
