define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');
  var _ = require('underscore');

  // local modules

  var ElementView = require('forms/jqm/element');

  // this module

  return ElementView.extend({

    events: {
      'change [data-onchange=onKeyDown]': 'onKeyDown',
      'input [data-onkeydown=onKeyDown]': 'onKeyDown',
      'keydown [data-onkeydown=onKeyDown]': 'onKeyDown'
    },

    // extending super's modelEvents
    modelEvents: _.extend({}, ElementView.prototype.modelEvents, {
      'change:placeholder': 'onPlaceholderChange',
      'change:value': 'onValueChange'
    }),

    render: function () {
      this.renderLabel();
      if (!this.$input) {
        this.$input = this.createElement();
        this.$input.attr({
          'data-onchange': 'onKeyDown',
          'data-onkeydown': 'onKeyDown'
        });
        this.$el.append(this.$input);
        this.$input.textinput();
        this.$input.attr('cid', this.model.cid);
      }
      this.onValueChange();
      this.onPlaceholderChange();

      this.$el.fieldcontain();
    },

    remove: function () {
      this.$input = null;
      return ElementView.prototype.remove.apply(this, arguments);
    },

    onKeyDown: function (event) {
      var prev = this.model.attributes.value;
      var next = $(event.target).val();
      if (next !== prev) {
        this.model.attributes.value = next;
        this.model.trigger('change:value');
        this.model.trigger('change', this.model);
      }
    },

    onPlaceholderChange: function () {
      var text;
      if (!this.$input) {
        return;
      }
      text = this.model.attributes.placeholderText;
      if (!text && text !== 0) {
        this.$input.removeAttr('placeholder');
      } else {
        this.$input.attr('placeholder', text);
      }
    },

    onValueChange: function () {
      var value, current;
      if (!this.$input) {
        return;
      }
      current = this.$input.val();
      value = this.model.attributes.value;
      if (current === value) {
        // return; // exit early if nothing actually changed
      }
      if (!value && value !== 0) {
        this.$input.val('');
      } else {
        this.$input.val(value);
      }
    }
  });
});
