define(function (require) {
  'use strict';

  var Backbone = require('backbone');
  var _ = require('underscore');

  var events = require('forms/events');

  var template = require('text!forms/jqm/templates/choice-other-text.html');

  return Backbone.View.extend({
    attributes: function () {
      return {
        'data-role': 'fieldcontain',
        'class': 'bm-othertext-container'
      };
    },

    events: {
      'blur .bm-othertext': 'setModelValue'
    },

    modelEvents: {
      'change:isOtherVisible': 'onOtherVisibleChange',
      'change:value': 'onChangeValue'
    },

    template: _.template(template),

    initialize: function () {
      events.proxyBindEntityEvents(this, this.model, this.modelEvents);
    },

    render: function () {
      if (!this.$input) {
        this.$el.append(this.template(this.model.attributes));
        this.$input = this.$el.find('.bm-othertext');
        this.$input.textinput();
        this.onOtherVisibleChange();
      } else {
        this.$input.val(this.model.attributes.value);
      }
      this.$el.fieldcontain();

      return this;
    },

    setModelValue: function () {
      this.model.val(this.$input.val());
    },

    onChangeValue: function () {
      this.$input.val(this.model.attributes.value);
    },

    onOtherVisibleChange: function () {
      if (this.model.attributes.isOtherVisible) {
        this.$el.show();
        return;
      }

      this.$el.hide();
    }
  });
});
