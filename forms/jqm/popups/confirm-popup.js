define(function(require){
  'use strict';

  var _ = require('underscore');
  var $ = require('jquery');

  var PopupView = require('forms/jqm/popup');
  var template = require('text!forms/jqm/templates/confirm-popup.html');

  var ConfirmPopup = PopupView.extend({
    template: _.template(template),

    className: 'bm-popup bm-confirm',

    events: {
      'click [data-onclick="onCancelClick"]': 'onCancelClick',
      'click [data-onclick="onContinueClick"]': 'onContinueClick'
    },

    render: function(){
      this.$el.append(this.template(this.model));
      this.$el.attr('cid', this.model.cid);
      $('[data-role="button"]', this.$el ).button();

      return this;
    },

    onContinueClick: function(){
      this._resolve();
    },

    onCancelClick: function(){
      this._reject(new Error('User Canceled the dialog'));
    }

  });

  return ConfirmPopup;
});
