define(function () {
  'use strict';

  /**
   * @param {Function} condition a function that returns `true` or `false`
   * @param {Number} [interval=197] the amount of time to wait between tests
   * @param {Function} callback a function to invoke when the condition returns `true`
   */
  function waitFor(condition, interval, callback) {
    if (condition && condition()) {
      callback();
    } else {
      setTimeout(function () {
        waitFor(condition, interval, callback);
      }, interval || 197);
    }
  }

  return waitFor;
});
