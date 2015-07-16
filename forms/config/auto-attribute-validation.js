define(function(){
  'use strict';

  /**
    defines global validation settings

    @prop {boolean} validate - True to perform validation on model.set
    @prop {array|string} validateKeys - a list of keys for model attributes that
    when set will trigger validation (if validate is true)
  */
  return {
    validate: true,
    validateKeys: ['value']
  };
});
