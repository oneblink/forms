/*eslint-env mocha*/
/*global assert:true*/ // chai
/*global sinon:true*/
/*
  To ensure correct, isolated, unit test behavior,
  everything except the file being tested should be mocked or stubbed out.
*/
define(['config/forms-debug'],
function( formsDebug /* change this to whatever you want */ ){
  'use strict';

  suite('config/forms-debug.js', function(){
    //add test suites in here.

    //this is default wrapping behaviour. they functions must exist.
    test('debug object contains ["log", "warn", "error"]', function(){
      assert.isTrue('log' in formsDebug);
      assert.equal(typeof formsDebug.log, 'function' );
      assert.isTrue('warn' in formsDebug);
      assert.equal(typeof formsDebug.warn, 'function' );
      assert.isTrue('error' in formsDebug);
      assert.equal(typeof formsDebug.error, 'function' );
    });

    suite('enabling and disabling', function(){
      var spy = sinon.spy(console, 'log');

      teardown(function(){
        spy.reset();
        formsDebug.disable(); //make sure that formsDebug is always disabled
      });

      test('debugging should be disabled by default', function(){
        formsDebug.log('i should not print');

        assert.isFalse(spy.called);
      });

      test('debugging should be enablable', function(){
        var msg = 'debugging should be enablable - i should print';
        formsDebug.enable();
        formsDebug.log(msg);

        assert.isTrue(spy.called);
        assert.isTrue(spy.calledWithExactly(msg));
      });

      test('global settings should be able to override', function(){
        var msg = 'global settings should be able to override - i should print';
        formsDebug.log({force: true}, msg);

        assert.isTrue(spy.called);
        assert.isTrue(spy.calledWithExactly( msg ));
      });
    });
  });
});
