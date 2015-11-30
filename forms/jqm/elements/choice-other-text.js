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

    collectionEvents: {
      'change:value': 'onChangeValue',
      'change:isSelected': 'onOtherVisibleChange'
    },

    template: _.template(template),

    initialize: function () {
      events.proxyBindEntityEvents(this, this.model.attributes.optionCollection, this.collectionEvents);
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
      var otherOption = this.model.attributes.optionCollection.getOtherOption();
      otherOption.set('value', this.$input.val());
    },

    onChangeValue: function (model, value) {
      if (model.id !== this.model.attributes.optionCollection.OTHER_ID) {
        return;
      }
      this.$input.val(value);
    },

    onOtherVisibleChange: function (model, value) {
      if (!model) {
        model = this.model.attributes.optionCollection.getOtherOption();
        value = model.attributes.value;
      } else if (model.id !== this.model.attributes.optionCollection.OTHER_ID) {
        return;
      }

      if (value) {
        this.$el.show();
        return;
      }

      this.$el.hide();
    }
  });
});
