define(function (require) {
  'use strict';

  var Form = require('forms/models/form');

  // this module

  return Form.extend({
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
