define(['forms/models/form'], function (Form) {
  'use strict';

  // foreign modules

  var _ = require('underscore');

  // this module

  var SubForm = Form.extend({
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
      this.unset('_view');
    }
  }, {
    // static properties

    /**
    @param {Object} attrs attributes for this model.
    @param {String} [action='add'] name of the specific variation to use
    @returns {SubForm}
    */
    create: function (attrs, action) {
      var form;

      if (!attrs || !_.isObject(attrs)) {
        return new SubForm();
      }

      attrs._action = action;
      form = new SubForm(attrs);

      return form;
    }

  });

  return SubForm;
});
