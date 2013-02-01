define(function(require) {
  'use strict';
  var $ = require('jquery'),
      rivets = require('rivets');

  rivets.configure({
    prefix: 'rv',
    adapter: {
      subscribe: function(obj, keypath, callback) {
        obj.on('change:' + keypath, callback);
      },
      unsubscribe: function(obj, keypath, callback) {
        obj.off('change:' + keypath, callback);
      },
      read: function(obj, keypath) {
        return obj.get(keypath);
      },
      publish: function(obj, keypath, value) {
        obj.set(keypath, value);
      }
    }
  });

  return {
    Form: require('views/jqm/form'),
    Page: require('views/jqm/page'),
    Element: require('views/jqm/element'),
    DateElement: require('views/jqm/elements/date'),
    HiddenElement: require('views/jqm/elements/hidden'),
    TextElement: require('views/jqm/elements/text'),
    TextAreaElement: require('views/jqm/elements/textarea'),
    ChoiceCollapsedElement: require('views/jqm/elements/choicecollapsed'),
    ChoiceExpandedElement: require('views/jqm/elements/choiceexpanded')
  };
});
