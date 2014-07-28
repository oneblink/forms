define(['views/jqm/element'], function (ElementView) {
  'use strict';

  var TextElementView = ElementView.extend({
    render: function () {
      var $input,
        name = this.model.get('name');

      this.$el.empty();
      this.renderLabel();

      $input = $('<input type="text" />');
      $input.attr({
        name: name,
        'rv-value': 'm:value',
        'rv-placeholder': 'm:placeholderText'
      });
      this.$el.append($input);
      this.bindRivets();
    }
  });

  return TextElementView;
});
