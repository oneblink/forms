define([
  'jquery',
  'rivets',
  'models/form',
  'views/jqm/form',
  'views/jqm/page',
  'views/jqm/element',
  'views/jqm/elements/hidden',
  'views/jqm/elements/text',
  'views/jqm/elements/textarea'
], function(
  $,
  rivets,
  Form,
  FormView,
  PageView,
  ElementView,
  HiddenElementView,
  TextElementView,
  TextAreaElementView
) {
  rivets.configure({
    prefix: 'rv',
    adapter: {
      subscribe: function(obj, keypath, callback) {
        console.log('rivets.subscribe', arguments);
        callback.wrapped = function(m, v) { callback(v) };
        obj.on('change:' + keypath, callback.wrapped);
      },
      unsubscribe: function(obj, keypath, callback) {
        console.log('rivets.unsubscribe', arguments);
        obj.off('change:' + keypath, callback.wrapped);
      },
      read: function(obj, keypath) {
        console.log('rivets.read', arguments);
        return obj.get(keypath);
      },
      publish: function(obj, keypath, value) {
        console.log('rivets.publish', arguments);
        obj.set(keypath, value);
      }
    }
  });

  return {
    Form: FormView,
    Page: PageView,
    Element: ElementView,
    HiddenElement: HiddenElementView,
    TextElement: TextElementView,
    TextAreaElement: TextAreaElementView
  };
});
