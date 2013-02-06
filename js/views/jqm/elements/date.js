define(['views/jqm/element'], function(ElementView) {
  'use strict';

  var DateElementView = ElementView.extend({
    renderDate: function() {
      var $input = $(''),
          name = this.model.attributes.name;

      // TODO: implement pre-HTML5 fallback
      $input = $('<input type="date" style="width: 10em" />');
      $input.attr({
        name: name + '_date',
        'data-rv-value': 'm._date'
      });
      this.$el.append($input);

      return this;
    },
    renderTime: function() {
      var $input = $(''),
          name = this.model.attributes.name;

      // TODO: implement pre-HTML5 fallback
      $input = $('<input type="time" style="width: 8em" />');
      $input.attr({
        name: name + '_time',
        'data-rv-value': 'm._time'
      });
      this.$el.append($input);

      return this;
    },
    render: function() {
      var $input,
          type = this.model.get('type'),
          name = this.model.get('name');

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


