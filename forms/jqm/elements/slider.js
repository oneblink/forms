define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');
  var _ = require('underscore');

  // local modules

  var ElementView = require('forms/jqm/element');
  var NumberElementView = require('forms/jqm/elements/number');

  // this module

  return NumberElementView.extend({

    // extending super-super's modelEvents
    modelEvents: _.extend({}, ElementView.prototype.modelEvents, {
      'change:placeholder': 'onPlaceholderChange',
      'change:value': 'onValueChange'
    }),

    renderSlider: function () {
      var slider$;
      slider$ = this.$el.children('div.ui-slider');
      if (slider$.length) {
        // we are dealing with jQueryMobile-enhanced DOM structure
        this.$input.val(this.model.attributes.value);
        this.$input.slider();
        this.$input.slider('refresh');
      }
    },

    render: function () {
      var self = this;
      var attrs = this.model.attributes;
      var name = attrs.name;

      this.$el.empty();
      this.renderLabel();

      if (!this.$input) {
        this.$input = $('<input type="range" />');
        this.$input.attr({
          'data-highlight': true
        });
        this.$el.append(this.$input);
        this.$el.on('change', function () {
          var val, modelVal;
          this.$input = $(this).find('input');
          val = this.$input.val();
          modelVal = self.model.attributes.value;

          if (modelVal !== val) {
            self.model.set('value', this.$input.val());
          }
        });
      }

      this.$input.attr({
        name: name,
        value: this.model.attributes.value
      });
      ['min', 'max', 'step'].forEach(function (prop) {
        if ($.isNumeric(attrs[prop])) {
          this.$input.attr(prop, attrs[prop]);
        }
      }.bind(this));

      this.model.on('change:value', this.renderSlider, this);
      this.$el.fieldcontain();
      this.renderSlider();
    },

    remove: function () {
      this.$el.off('change');
      this.model.off('change:value');
      return NumberElementView.prototype.remove.call(this);
    }
  });
});
