define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');

  // local modules

  var Forms = require('forms/main');

  // this module

  require('jquerymobile');

  $.mobile.page.prototype.options.keepNative = '[type^=time], [type^=date]';

  Forms._views = {
    Form: require('forms/jqm/form'),
    SubForm: require('forms/jqm/subform'),
    SubFormCollapse: require('forms/jqm/subformcollapse'),
    SubFormElement: require('forms/jqm/elements/subform'),
    Page: require('forms/jqm/page'),
    Section: require('forms/jqm/section'),

    Element: require('forms/jqm/element'),
    HeadingElement: require('forms/jqm/elements/heading'),
    MessageElement: require('forms/jqm/elements/message'),
    DateElement: require('forms/jqm/elements/date'),
    DatePickadateElement: require('forms/jqm/elements/date_pickadate'),
    NumberElement: require('forms/jqm/elements/number'),
    SliderElement: require('forms/jqm/elements/slider'),
    TelephoneElement: require('forms/jqm/elements/telephone'),
    PasswordElement: require('forms/jqm/elements/password'),
    EmailElement: require('forms/jqm/elements/email'),
    URLElement: require('forms/jqm/elements/url'),
    TextElement: require('forms/jqm/elements/text'),
    TextAreaElement: require('forms/jqm/elements/textarea'),
    BooleanElement: require('forms/jqm/elements/boolean'),
    ChoiceCollapsedElement: require('forms/jqm/elements/choicecollapsed'),
    ChoiceExpandedElement: require('forms/jqm/elements/choiceexpanded'),
    LocationElement: require('forms/jqm/elements/location'),
    FileElement: require('forms/jqm/elements/file'),
    DrawElement: require('forms/jqm/elements/draw'),
    BGDrawElement: require('forms/jqm/elements/bg_draw'),
    BGImageElement: require('forms/jqm/elements/bg_image'),
    ButtonElement: require('forms/jqm/elements/button'),
    ReadOnlyElement: require('forms/jqm/elements/readonly'),
    BlobReadOnlyElement: require('forms/jqm/elements/blob_readonly'),
    LocationReadOnlyElement: require('forms/jqm/elements/location_readonly'),
    LocationNativeElement: require('forms/jqm/elements/location_native'),
    SelectReadOnlyElement: require('forms/jqm/elements/select_readonly'),
    MultiReadOnlyElement: require('forms/jqm/elements/multi_readonly'),
    WebRTCImageElement: require('forms/jqm/elements/webrtc_image')
  };

  return Forms._views;
});
