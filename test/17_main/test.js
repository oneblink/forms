/*eslint-env mocha*/
/*global assert*/ // chai

define(['BlinkForms', 'BIC'], function () {

  suite('17: main', function () {

    test('BMP is defined', function () {
      assert.isDefined(window.BMP);
    });

    test('BMP.Forms is defined', function () {
      assert.isDefined(window.BMP.Forms);
    });

    test('BMP.Forms.initialize is a function', function () {
      assert.isFunction(window.BMP.Forms.initialize);
    });

    test('BMP.Forms.version is a string', function () {
      assert.isString(window.BMP.Forms.version);
    });

    test('BMP.Forms.uuid exists', function () {
      assert.ok(window.BMP.Forms.uuid);
    });

    test('BMP.Forms.uuid.v4 is a function', function () {
      assert.isFunction(window.BMP.Forms.uuid.v4);
    });

  });

});
