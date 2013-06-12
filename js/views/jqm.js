/*jslint indent:2*/
define(function (require) {
  var Forms = require('main');

  $.mobile.page.prototype.options.keepNative = '[type^=time], [type^=date]';

  rivets.configure({
    prefix: 'rv',
    adapter: {
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
    }
  });

  /**
   * @param {Node|jQuery} element where to start looking.
   */
  Forms.getForm = function (element) {
    var cfo = Forms.currentFormObject,
      $element = element instanceof $ ? element : $(element),
      $next = $element.closest('[data-form]'),
      form;

    while ($next.length > 0) {
      if ($.hasData($next[0])) {
        form = $next.data('model');
        if (form instanceof Forms._models.Form) {
          return form;
        }
      }
      $next = $element.parent().closest('[data-form]');
    }
    if (cfo && cfo.$form && cfo.$form.parent().length > 0) {
      return Forms.currentFormObject;
    }
    return null;
  };

  /**
   * @param {Node|jQuery} element where to start looking.
   */
  Forms.getElement = function (element) {
    var $element = element instanceof $ ? element : $(element),
      $next = $element.closest('[data-name]'),
      el;

    while ($next.length > 0) {
      if ($.hasData($next[0])) {
        el = $next.data('model');
        if (el instanceof Forms._models.Element) {
          return el;
        }
      }
      $next = $element.parent().closest('[data-name]');
    }
    return null;
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
    HiddenElement: require('views/jqm/elements/hidden'),
    NumberElement: require('views/jqm/elements/number'),
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
    FileElement: require('views/jqm/elements/file')
  };
});
