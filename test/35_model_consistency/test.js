define(['BlinkForms', 'testUtils', 'BIC'], function (Forms, testUtils) {
  /*
  This set of tests is ensure that the our publicly available moels 
  have a consistent interface
   */
  suite('35: Model defaults', function () {
    function defaultsIsAFunctionTest (model, name) {
      return test(name + '.defaults is a function', function () {
        if ('defaults' in model.prototype) {
          assert.isFunction(model.prototype.defaults);
        }
      });
    }

    suite('if #defaults exists it is a function', function () {
      _.each(Forms._models, defaultsIsAFunctionTest);
    });
  });
});
