define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');

  // local modules

  var events = require('forms/events');
  var formsErrors = require('forms/error-helpers');

  var NotImplementedError = require('typed-errors').NotImplementedError;

  // this module

  //IE aniamtes html, everything else does body.
  //known issue- in IE, BIC wont animate due to the above and jQuery mobile conflicting with all methods
  //of detection.
  var $body = $('html, body');

  return Backbone.View.extend({
    tagName: 'div',

    attributes: {
      'data-role': 'fieldcontain'
    },

    modelEvents: {
      'invalid change:value': 'renderErrors',
      // 'change:warning', 'renderWarning',
      'change:class': 'onChangeClass',
      'change:hidden': 'onChangeHidden',
      'change:label': 'renderLabel'
    },

    initialize: function () {
      var element = this.model;

      this.$el.attr('data-name', element.attributes.name);
      this.$el.attr('data-element-type', element.attributes.type);
      this.$el.data('model', element);

      this.onChangeClass();
      this.onChangeHidden();
      this.model.isValid();

      if (this.modelEvents) {
        events.proxyBindEntityEvents(this, this.model, this.modelEvents);
      }
    },

    remove: function () {
      this.$label = null;
      this.$el.removeData('model');
      this.model.off(null, null, this);

      if (this.modelEvents) {
        events.proxyUnbindEntityEvents(this, this.model, this.modelEvents);
      }

      this.model.unset('_view');
      return Backbone.View.prototype.remove.call(this);
    },

    renderLabel: function () {
      if (!this.$label) {
        this.$label = $('<label class="ui-input-text"></label>');
        this.$el.append(this.$label);
      }
      this.$label.html(this.model.attributes.label || '');
    },

    renderHint: function () {
      var self = this,
        attrs = self.model.attributes,
        $hint,
        $label,
        blackListHintFields = ['boolean', 'file'],
        fullWidthHints = ['heading', 'subForm'];

      //if there is no hint available in attributes
      //no need to add any element
      if (!attrs.hint || blackListHintFields.indexOf(attrs.type) !== -1) {
        return;
      }

      //for subform and heading fields,
      //no label required
      if (fullWidthHints.indexOf(attrs.type) === -1) {
        $label = $(document.createElement('label'));

        $label.attr({
          'class': 'ui-input-text'
        });

        this.$el.append($label);
      }

      $hint = $(document.createElement('span'));

      $hint.attr({
        'class': 'bm-formelement__bm-hint'
      });

      $hint.text(attrs.hint);

      this.$el.append($hint);
    },

    render: function () {
      throw new NotImplementedError('Element.render is only an interface');
    },

    //TODO: with the event removed are warnings still used ?
    renderWarning: function () {
      var attrs, warning;

      this.$el.children('.bm-warning__bm-list').remove();
      warning = attrs.warning || {};

      if (!_.isEmpty(warning)) {
        $(document.createElement('ul'))
          .addClass('bm-warning__bm-list')
          .append( _.map(warning.value, function(w){
            return $(document.createElement('li')).text(formsErrors.toWarningString(w)).addClass('bm-warning__bm-listitem');
          }))
          .appendTo(this.$el);
      }
    },

    renderErrors: function (model, validaitonErrors) {
      var attrs = this.model.attributes;
      var errors = this.model.validationError || validaitonErrors;

      this.$el.children('.bm-errors__bm-list').remove();

      if (errors) {
        $(document.createElement('ul'))
          .addClass('bm-errors__bm-list')
          .append(_.map(errors.value, function(error){
            var text;

            if (error.code === 'PATTERN') {
              text = attrs.hint || attrs.toolTip || attrs.title;
            }

            if (!text) {
              text = formsErrors.toErrorString(error);
            }

            return $(document.createElement('li')).text(text).addClass('bm-errors__bm-listitem');
          }, this))
          .appendTo(this.$el);
      }

      if ( this.model.validationError ){
        this.$el.addClass('bm-formelement-invalid');
        this.$el.closest('form').addClass('bm-form-invalid');
      } else {
        this.$el.removeClass('bm-formelement-invalid');
        this.$el.closest('form').removeClass('bm-form-invalid');
      }

    },

    onChangeClass: function () {
      this.$el.attr('class', this.model.attributes['class']);
    },

    onChangeHidden: function () {
      var hidden = this.model.attributes.hidden;
      if (hidden) {
        this.hide();
      } else {
        this.show();
      }
    },

    hide: function () {
      this.$el.css('display', 'none');
    },

    show: function () {
      if (this.$el.css('display') === 'none') {
        this.$el.css('display', '');
      }
    },

    isHidden: function () {
      return this.$el && this.$el.css('display') === 'none';
    },

    /**
     * Scrolls an element into view
     * @param  {Object} options Passed to [jQuery.animate](http://api.jquery.com/animate/)
     */
    scrollTo: function(options){
      return Promise.resolve($body.animate({
        scrollTop: this.$el.offset().top
      }, options).promise());
    }
  });
});
