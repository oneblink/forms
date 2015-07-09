define(function(require){
	'use strict';

  var Backbone = require('backbone');
  var $ = require('jquery');
  var _ = require('underscore');


  var NotImplementedError = require('typed-errors').NotImplementedError;
  /**
   * Popup Base View. Intended to be used by other popup views.
   */
  var PopupView = Backbone.View.extend({
    element: 'div',

    attributes: {
      'data-theme': 'c',
      'data-position-to': 'window',
      'data-transition': 'pop'
    },

    initialize: function(){
      this._promise = null;
      this.attributes['data-dissmissible'] = _.isUndefined(this.model.dissmissible) ? true : this.model.dissmissible;
    },

    render: function(){
      throw new NotImplementedError("PopupView is an Interface Class");
    },

    /**
     * @return {Promise} A promise that is resolved on successful close,
     * or rejected if the user cancels.
     *
     * it is up to the sub classess to call resolve or reject
     */
    open: function(){
      if ( this._promise ){
        return this._promise;
      }

      this._promise = new Promise(function(resolve, reject){
        this._resolve = resolve;
        this._reject = reject;

        $('body').append( this.render().$el );
        this.$el = this.$el.popup().popup('open');
      }.bind(this));

      return this._promise;
    },

    close: function(){
      this.$el.popup('close');
      this._resolve = null;
      this._reject = null;
      this._promise = null;

      Backbone.View.prototype.remove.apply(this, arguments);
    }
  });

  return PopupView;
});
