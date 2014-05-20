define(['views/jqm/elements/text'], function (TextElementView) {
  'use strict';

  var EmailElementView = TextElementView.extend({
    render: function () {
      var $input,
        name = this.model.get('name');

      this.$el.empty();
      this.renderLabel();

      $input = $('<input type="email" />');
      $input.attr({
        name: name,
        'rv-value': 'm:value'
      });
      this.$el.append($input);
      this.bindRivets();
    }
  });

  return EmailElementView;
});


