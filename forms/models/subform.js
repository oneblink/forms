define(function (require) {
  'use strict';

  var Form = require('forms/models/form');

  // this module

  return Form.extend({
    defaults: function () {
      return Object.assign(Form.prototype.defaults.call(this), {
        isCollapsed: false
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
          this.set({isCollapsed: true});
          break;
        default: // 'off'
          View = Forms._views.SubForm;
      }
      view = new View({model: this});
      this.set('_view', view);
      return view;
    },

    close: function () {
      this.parentElement = null;
      return Form.prototype.close.call(this);
    }
  });
});
