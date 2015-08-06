define(function (require) {
  'use strict';

  // foreign modules

  var _ = require('underscore');

  // local modules

  var SelectElement = require('forms/models/elements/select');

  // this module

  var MultiElement = SelectElement.extend({
    initialize: function () {
      var attrs;
      SelectElement.prototype.initialize.call(this);

      attrs = this.attributes;

      if (attrs.canSpecifyOther) {
        attrs.other = attrs.canSpecifyOther;
        delete attrs.canSpecifyOther;
      }
    },
    initializeView: function () {
      var Forms = BMP.Forms;
      var View, view, mode;
      var attrs = this.attributes;

      if (attrs.readonly) {
        this.removeView();
        View = Forms._views.MultiReadOnlyElement;
      } else {
        mode = attrs.mode || 'collapsed';
        mode = mode[0].toUpperCase() + mode.substring(1);
        View = Forms._views['Choice' + mode + 'Element'];
      }

      view = new View({model: this});
      this.set('_view', view);
      return view;
    },
    runValidation: function (attrs) {
      var errors = {};
      if (attrs === undefined) {
        attrs = this.attributes;
      }

      // if `other` is true
      // and required is true
      // and attr.lenghth === 1 && _.contains(attr.value, 'other')
      // and other is not in options
      // then fail
      if (attrs.required && (_.isEmpty(attrs.value) || attrs.other && (attrs.value.length === 1 && attrs.value[0] === 'other') && !_.contains(attrs.options, 'other'))) {
        errors.value = errors.value || [];
        errors.value.push({code: 'REQUIRED'});
      }

      return _.isEmpty(errors) ? undefined : errors;
    }
  });

  return MultiElement;
});
