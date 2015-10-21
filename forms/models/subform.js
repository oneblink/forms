define(function (require) {
  'use strict';

  var _ = require('underscore');

  var Form = require('forms/models/form');

  // this module

  return Form.extend({
    defaults: function () {
      return _.assign(Form.prototype.defaults.call(this), {
        collapsed: false
      });
    },

    initialize: function () {
      this.parentElement = null;
      Form.prototype.initialize.call(this);
    },

    initializeView: function () {
      var Forms = BMP.Forms;
      var View, view;
      this.removeView();
      switch (this.parentElement.attributes.collapse) {
        case 'forms':
          View = Forms._views.SubFormCollapse;
          this.set({collapsed: true});
          break;
        default: // 'off'
          View = Forms._views.SubForm;
      }
      view = new View({model: this});
      this.set('_view', view);
      return view;
    },

    removeView: function () {
      if (this.attributes._view) {
        this.attributes._view.remove();
      }
      this.attributes._view = null;
    }
  });
});
