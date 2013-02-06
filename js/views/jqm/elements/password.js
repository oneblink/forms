define(['views/jqm/elements/text'], function(TextElementView) {
  'use strict';

  var PasswordElementView = TextElementView.extend({
    render: function() {
      var $input,
          name = this.model.get('name');

      this.$el.empty();
      this.renderLabel();

      $input = $('<input type="password" />');
      $input.attr({
        name: name,
        'data-rv-value': 'm.value'
      });
      this.$el.append($input);
      this.bindRivets();
    }
  });

  return PasswordElementView;
});



