// mocked up element model.
define(function () {
  var noop = function () {};

  /**
  @description A model that confirms to the Element Interface but each method is
  a no-op. Use [sinon](http://sinonjs.org/docs/) to make a stub for the methods
  you need to control.
  */
  return Backbone.Model.extend({
    validate: noop,
    updateErrors: noop,
    warn: noop,
    updateWarning: noop,
    removeView: noop,
    close: noop,
    initializeView: noop,
    val: noop,
    setExternalErrors: noop,
    hasErrors: noop
  }, {
    create: noop
  });
});
