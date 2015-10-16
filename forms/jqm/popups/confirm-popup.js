define(function (require) {
  'use strict';

  // foreign modules

  var _ = require('underscore');
  var $ = require('jquery');
  var Backbone = require('backbone');

  // local modules

  var PopupView = require('forms/jqm/popup');
  var template = require('text!forms/jqm/templates/confirm-popup.html');

  // this module

  return PopupView.extend({
    template: _.template(template),

    className: 'bm-popup bm-confirm',

    render: function () {
      this.$el.append(this.template(this.model));
      this.$el.attr('cid', this.model.cid);

      $('[data-role="button"]', this.$el).button();
      $('[data-onclick="onCancelClick"]', this.$el).on('click', _.debounce(this.onCancelClick.bind(this), 250));
      $('[data-onclick="onContinueClick"]', this.$el).on('click', _.debounce(this.onContinueClick.bind(this), 250));

      return this;
    },

    remove: function () {
      $('[data-onclick="onCancelClick"]', this.$el).off('click');
      $('[data-onclick="onContinueClick"]', this.$el).off('click');
      Backbone.View.prototype.remove.apply(this, arguments);
    },

    onContinueClick: function () {
      if (_.isFunction(this._resolve)) {
        this._resolve();
      }
    },

    onCancelClick: function () {
      this._reject(new Error('cancel'));
    }
  });
});
