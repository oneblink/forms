define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');
  var _ = require('underscore');

  // local modules

  var ElementView = require('forms/jqm/element');

  // this module

  var BooleanElementView = ElementView.extend({
    render: function () {
      var $input;
      var model = this.model;

      this.$el.empty();
      this.renderLabel();

      $input = $('<select></select>');
      $input.attr({
        'rv-value': 'm:value',
        'data-role': 'slider'
      });

      _.forEach(this.model.attributes.options, function (label, value) {
        var $option = $('<option value="' + value + '">' + label + '</option>');
        $input.append($option);
      });

      this.$el.append($input);
      this.$el.fieldcontain();

      this.bindRivets();
      model.on('change:value', this.onValueChange, this);
      this.onValueChange();
    },
    onValueChange: function () {
      this.$el.children('select').slider().slider('refresh');
    }
  });

  return BooleanElementView;
});
