define(function () {
  'use strict';

  var dirtyAttributes = {
    isDirty: true,
    isPristine: false
  };

  var pristineAttributes = {
    isDirty: false,
    isPristine: true
  };

  var silentOption = {
    silent: false
  };

  return {

    /**
     * setDirty Mixin - Sets a model to the dirty state
     * @param {Boolean} [silent=false] - If true, then a change event will not be triggered. If empty or false then a change event will be triggered.
     */
    setDirty: function (silent) {
      silentOption.silent = !!silent;
      this.set(dirtyAttributes, silent);
    },

    /**
     * setPristine Mixin - Sets a model to the pristine state
     * @param {Boolean} [silent=false] - If true, then a change event will not be triggered. If empty or false then a change event will be triggered.
     */
    setPristine: function (silent) {
      silentOption.silent = !!silent;
      this.set(pristineAttributes, silent);
    }
  };
});
