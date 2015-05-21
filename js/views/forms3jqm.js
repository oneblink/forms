define(function (require) {
  var rivets = require('rivets');

  $.mobile.page.prototype.options.keepNative = '[type^=time], [type^=date]';

  rivets.adapters[':'] = {
    subscribe: function (obj, keypath, callback) {
      obj.on('change:' + keypath, callback);
    },
    unsubscribe: function (obj, keypath, callback) {
      obj.off('change:' + keypath, callback);
    },
    read: function (obj, keypath) {
      return obj.get(keypath);
    },
    publish: function (obj, keypath, value) {
      obj.set(keypath, value);
    }
  };

  return {
    Form: require('views/jqm/form'),
    SubForm: require('views/jqm/subform'),
    SubFormElement: require('views/jqm/elements/subform'),
    Page: require('views/jqm/page'),
    Section: require('views/jqm/section'),
    Element: require('views/jqm/element'),
    HeadingElement: require('views/jqm/elements/heading'),
    MessageElement: require('views/jqm/elements/message'),
    DateElement: require('views/jqm/elements/date'),
    DatePickadateElement: require('views/jqm/elements/date_pickadate'),
    HiddenElement: require('views/jqm/elements/hidden'),
    NumberElement: require('views/jqm/elements/number'),
    SliderElement: require('views/jqm/elements/slider'),
    TelephoneElement: require('views/jqm/elements/telephone'),
    PasswordElement: require('views/jqm/elements/password'),
    EmailElement: require('views/jqm/elements/email'),
    URLElement: require('views/jqm/elements/url'),
    TextElement: require('views/jqm/elements/text'),
    TextAreaElement: require('views/jqm/elements/textarea'),
    BooleanElement: require('views/jqm/elements/boolean'),
    ChoiceCollapsedElement: require('views/jqm/elements/choicecollapsed'),
    ChoiceExpandedElement: require('views/jqm/elements/choiceexpanded'),
    LocationElement: require('views/jqm/elements/location'),
    FileElement: require('views/jqm/elements/file'),
    DrawElement: require('views/jqm/elements/draw'),
    BGDrawElement: require('views/jqm/elements/bg_draw'),
    BGImageElement: require('views/jqm/elements/bg_image'),
    ButtonElement: require('views/jqm/elements/button'),
    ReadOnlyElement: require('views/jqm/elements/readonly'),
    BlobReadOnlyElement: require('views/jqm/elements/blob_readonly'),
    LocationReadOnlyElement: require('views/jqm/elements/location_readonly'),
    SelectReadOnlyElement: require('views/jqm/elements/select_readonly'),
    MultiReadOnlyElement: require('views/jqm/elements/multi_readonly'),
    WebRTCImageElement: require('views/jqm/elements/webrtc_image')
  };
});
