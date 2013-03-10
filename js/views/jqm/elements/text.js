define(['views/jqm/element'], function(ElementView) {
  'use strict';

  var TextElementView = ElementView.extend({
    render: function() {
      var $input,
          name = this.model.get('name');

      this.$el.empty();
      this.renderLabel();
      this.renderToolTip();
      $input = $('<input type="text" />');
      $input.attr({
        name: name,
        'data-rv-value': 'm.value'
      });
      this.$el.append($input);
      this.bindRivets();
    }
  });

  return TextElementView;
});

