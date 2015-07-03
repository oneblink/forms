define(function(require){
  'use strict';

  // foreign modules

  var rivets = require('rivets');

  // this module

  //input event is possibly not supported on ie mobile, so if not, keypress.
  var eventName = 'oninput' in document.createElement('input') ? 'input' : 'keypress';

  /**
   *  Rivets binder for keypress/input events. Delegates to the already
   *  available adaptor, which only fires on blur/focus
   */
  return {
    publishes: true,
    routine: rivets.binders.value.routine,
    bind: function(el) {
      el.addEventListener(eventName, this.publish );
    },
    unbind: function(el) {
      el.removeEventListener(eventName, this.publish );
    }
  };

});
