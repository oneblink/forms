define(['views/jqm/element'], function (ElementView) {
  'use strict';

  var DateElementView = ElementView.extend({
    renderDate: function () {
      var $input,
        name = this.model.attributes.name;

      // TODO: implement pre-HTML5 fallback
      $input = $('<input type="date" />');
      $input.attr({
        name: name + '_date',
        'rv-value': 'm:_date'
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
        'rv-value': 'm:_time'
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

      this.bindRivets();
      return this;
    }
  });

  return DateElementView;
});


