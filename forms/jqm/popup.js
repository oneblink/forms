define(function (require) {
  'use strict';

  var Backbone = require('backbone');
  var _ = require('underscore');
  var $ = require('jquery');

  var NotImplementedError = require('typed-errors').NotImplementedError;
  /**
   * Popup Base View. Intended to be used by other popup views.
   */
  var PopupView = Backbone.View.extend({
    element: 'div',

    attributes: function () {
      return {
        'data-theme': 'c',
        'data-position-to': 'window',
        'data-transition': 'pop',
        'data-role': 'popup',
        'data-dissmissible': _.isUndefined(this.model.dissmissible) ? true : this.model.dissmissible,
        'class': 'ui-content'
      };
    },

    initialize: function () {
      this._promise = null;
    },

    render: function () {
      throw new NotImplementedError('PopupView is an Interface Class');
    },

    /**
     * @return {Promise} A promise that is resolved on successful close,
     * or rejected if the user cancels.
     *
     * it is up to the sub classess to call resolve or reject
     */
    open: function () {
      if (this._promise) {
        return this._promise;
      }
      this._promise = new Promise(function (resolve, reject) {
        this._resolve = resolve;
        this._reject = reject;

        this.$el = this.render().$el.popup().trigger('create');
        this.$el.one('popupafterclose', this.remove.bind(this));
        this.$el.popup('open');
      }.bind(this));

      this._promise.catch(function (err) {
        if (err.message !== 'cancel') {
          window.console.log('popup error:', err);
        }
      });

      return this._promise;
    },

    close: function () {
      this.$el.popup('close');
      this._resolve = null;
      this._reject = null;
      this._promise = null;
    },

    centreOnScreen: function () {
      var $window = $(window);
      this.$el.popup('reposition', {
        x: ($window.innerWidth() - this.$el.width()) / 2,
        y: ($window.innerHeight() - this.$el.height()) / 2
      });
    }
  });

  return PopupView;
});
