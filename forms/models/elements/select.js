define(function (require) {
  'use strict';

  // foreign modules

  var _ = require('underscore');

  // local modules

  var Element = require('forms/models/element');

  // this module

  var defaults = _.clone(Element.prototype.defaults);
  defaults.mode = 'collapsed';
  defaults.layout = 'vertical';
  defaults.other = false;
  defaults.nativeMenu = false;

  return Element.extend({
    defaults: defaults,
    initialize: function () {
      var attrs;
      Element.prototype.initialize.apply(this, arguments);

      attrs = this.attributes;

      if (attrs.canSpecifyOther) {
        attrs.other = attrs.canSpecifyOther;
        delete attrs.canSpecifyOther;
      }
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
      var errors = {};
      if (attrs === undefined) {
        attrs = this.attributes;
      }

      // if `other` is true
      // and required is true
      // and attr.value === 'other'
      // and other is not in options
      // then fail
      if (attrs.required && (!attrs.value || attrs.other && attrs.value === 'other' && !_.contains(attrs.options, 'other'))) {
        errors.value = errors.value || [];
        errors.value.push({code: 'REQUIRED'});
      }

      if (!_.isEmpty(errors)) {
        return errors;
      }
    }
  });
});
