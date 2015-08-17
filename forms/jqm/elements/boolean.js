define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');
  var _ = require('underscore');

  // local modules

  var ElementView = require('forms/jqm/element');

  // this module

  var BooleanElementView = ElementView.extend({
    events: {
      'change [data-onchange="onChange"]': 'onChange'
    },

    // extending super's modelEvents
    modelEvents: _.extend({}, ElementView.prototype.modelEvents, {
      'change:value': 'onValueChange'
    }),

    render: function () {
      var $input;

      this.$el.empty();
      this.renderLabel();

      $input = $('<select></select>');
      $input.attr({
        'data-onchange': 'onChange',
        'data-role': 'slider'
      });

      _.forEach(this.model.attributes.options, function (label, value) {
        var $option = $('<option value="' + value + '">' + label + '</option>');
        $input.append($option);
      });

      this.$el.append($input);
      this.$el.fieldcontain();
    },

    onAttached: function () {
      this.onValueChange();
    },

    onChange: function (event) {
      this.model.set('value', $(event.target).val());
    },

    onValueChange: function () {
      var input$ = this.$el.children('select');
      var current = input$.val();
      var value = this.model.attributes.value;
      if (current === value) {
        return; // exit early if nothing actually changed
      }
      input$.val(value);
      input$.slider().slider('refresh');
    }

  });

  return BooleanElementView;
});
