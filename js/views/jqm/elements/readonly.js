define(['views/jqm/element'], function (ElementView) {
  'use strict';

  var ReadOnlyElementView = ElementView.extend({
    render: function () {
      var $label;

      this.$el.empty();
      this.renderLabel();

      $label = $(document.createElement('label'));
      $label.attr({
        'rv-text': 'm:value',
        'class': 'ui-input-text'
      });

      this.$el.append($label);
      this.bindRivets();
    }
  });

  return ReadOnlyElementView;
});
