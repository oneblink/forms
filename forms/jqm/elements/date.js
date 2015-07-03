define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');

  // local modules

  var ElementView = require('forms/jqm/element');

  // this module

  var DateElementView = ElementView.extend({
    events: {
      'change [data-onchange="onDateVChange"]': 'onDateVChange',
      'change [data-onchange="onTimeVChange"]': 'onTimeVChange'
    },

    modelEvents: {
      'change:_date': 'onDateMChange',
      'change:_time': 'onDateMChange'
    },

    renderDate: function () {
      var $input,
        name = this.model.attributes.name;

      // TODO: implement pre-HTML5 fallback
      $input = $('<input type="date" />');
      $input.attr({
        name: name + '_date',
        'data-onchange': 'onDateVChange'
      });
      this.$el.append($input);

      return this;
    },

    renderTime: function () {
      var $input,
        name = this.model.attributes.name;

      // TODO: implement pre-HTML5 fallback
      $input = $('<input type="time" />');
      $input.attr({
        name: name + '_time',
        'data-onchange': 'onTimeVChange'
      });
      this.$el.append($input);

      return this;
    },

    render: function () {
      var type = this.model.get('type');

      this.$el.empty();
      this.renderLabel();

      if (type !== 'time') {
        this.renderDate();
      }
      if (type !== 'date') {
        this.renderTime();
      }

      this.$el.fieldcontain();
      this.bindRivets();
      return this;
    },

    onDateVChange: function (event) {
      this.model.set('_date', $(event.target).val());
    },

    onTimeVChange: function (event) {
      this.model.set('_time', $(event.target).val());
    },

    onDateMChange: function () {
      var name = this.model.attributes.name;
      this.$el.find('input[name=' + name + '_date]').val(this.model.get('_date'));
    },

    onTimeMChange: function () {
      var name = this.model.attributes.name;
      this.$el.find('input[name=' + name + '_time]').val(this.model.get('_time'));
    }

  });

  return DateElementView;
});
