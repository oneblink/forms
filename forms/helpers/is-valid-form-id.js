define(function (require) {
  'use strict';

  var _ = require('underscore');
  /**
   * Forms Ids can be Non-empty strings or any finite number.
   * @param  {Any} id - The Id to test
   * @return {Boolean}  - True if valid, false if not
   */
  return function (id) {
    return (typeof id === 'string' && id !== '') || _.isFinite(id);
  };
});
