define(['views/jqm/element'], function (ElementView) {
  'use strict';

  var FileElementView = ElementView.extend({
    render: function () {
      var $input,
        name = this.model.get('name');

      this.$el.empty();
      this.renderLabel();

      $input = $('<input type="file" />');
      $input.attr({
        name: name,
        'data-rv-accept': 'm.accept'
      });
      $input.prop('capture', !!this.model.get('capture'));
      this.$el.append($input);
      this.bindRivets();
    }
  });

  return FileElementView;
});

