/**
 * Error Summary View
 * @module
 * @exports ErrorSummaryView
 */
define(function(require){
  'use strict';

  var defaultTemplate = require('text!views/jqm/templates/error-summary.html');
  var Forms = require('main');


  var ErrorSummaryView = Backbone.View.extend({

    tagName: 'div',
    className: 'bm-errors',

    attributes: {
      'data-corners': 'true',
      'data-theme': 'a',
      'data-shadow': 'true'
    },

    events: {
      'click [data-onclick="goto-field"]': 'gotoField',
      'click [data-onclick="show-all"]': 'showAll'
    },

    initialize: function(){
      this.listenTo(this.model, 'change:numErrorsShown', this.render);

      Backbone.View.prototype.initialize.apply(this, arguments);
    },

    remove: function(){
      this.stopListening(this.model);
      Backbone.View.prototype.remove.apply(this, arguments);
    },

    gotoField: function(e){
      return Forms.current.get('_view').goToField($(e.target).attr('for'));
    },

    showAll: function(){
      this.model.set('numErrorsShown', 0);
    },

    render: function(){
      var errors = this.model.getInvalidElements( { limit: this.model.get('numErrorsShown') } )
        , template = errors ? ErrorSummaryView.template( { invalidElements: errors } )
                            : '';
      this.$el.html(template);
      return this;
    }
  }, //static properties.
  {
    template: _.template( defaultTemplate )
  });

  return ErrorSummaryView;
});
