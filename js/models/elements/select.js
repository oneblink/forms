define(['models/element'], function (Element) {
  'use strict';

  var defaults = _.clone(Element.prototype.defaults);
  defaults.mode = 'collapsed';
  defaults.layout = 'vertical';
  defaults.other = false;
  defaults.nativeMenu = false;

  return Element.extend({
    defaults: defaults,
    initialize: function () {
      Element.prototype.initialize.call(this);
    },
    initializeView: function () {
      var Forms = BMP.Forms,
      view,
      View,
      mode,
      attrs = this.attributes;

      if (attrs.readonly) {
        this.removeView();
        View = Forms._views.SelectReadOnlyElement;
      } else {
        mode = attrs.mode || 'collapsed';
        mode = mode[0].toUpperCase() + mode.substring(1);
        View = Forms._views['Choice' + mode + 'Element'];
      }

      view = new View({model: this});
      this.set('_view', view);
      return view;
    },
    validate: function (attrs) {
      var errors = {},
        other = false;
      if (attrs === undefined) {
        attrs = this.attributes;
      }

      if (attrs.other || attrs.canSpecifyOther) {
        other = true;
      }

      // if `other` is true
      // and required is true
      // and attr.value === 'other'
      // and other is not in options
      // then fail
      if (attrs.required && (!attrs.value || other && attrs.value === 'other' && !_.contains(attrs.options, 'other'))) {
        errors.value = errors.value || [];
        errors.value.push({code: 'REQUIRED'});
      }

      if (!_.isEmpty(errors)) {
        return errors;
      }
    }
  });
});
