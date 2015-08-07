define(function (require) {
  'use strict';

  // foreign modules

  var _ = require('underscore');

  // local modules

  var Element = require('forms/models/element');
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

    isEmpty: function () {
      var attrs = this.attributes;
      // skip super's and go straight to super-super's isEmpty
      if (Element.prototype.isEmpty.call(this)) {
        return true;
      }
      return attrs.other && _.isEqual(attrs.value, ['other']) && !_.contains(attrs.options, 'other');
    }

  });

  return MultiElement;
});
