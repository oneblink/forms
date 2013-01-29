define([
  'jquery',
  'rivets',
  'models/form',
  'views/jqm/form',
  'views/jqm/page',
  'views/jqm/element',
  'views/jqm/elements/date',
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
  DateElementView,
  HiddenElementView,
  TextElementView,
  TextAreaElementView
) {
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
    Form: FormView,
    Page: PageView,
    Element: ElementView,
    DateElement: DateElementView,
    HiddenElement: HiddenElementView,
    TextElement: TextElementView,
    TextAreaElement: TextAreaElementView
  };
});
