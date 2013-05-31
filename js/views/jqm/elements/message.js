define(['views/jqm/element'], function (ElementView) {
  'use strict';

  var MessageElementView = ElementView.extend({
    tagName: 'div',
    attributes: {
      'data-rv-class': 'm.class'
    },
    render: function () {
      var element = this.model,
        $div;

      if (element.attributes.label) {
        this.$el.attr({
          'data-role': 'fieldcontain'
        });
        this.$el.empty();
        this.renderLabel();
        $div = $('<div></div>').attr({
          'data-rv-html': 'm.html',
          class: 'ui-input-text'
        });

        this.$el.append($div);

      } else {
        this.$el.attr({
          'data-rv-html': 'm.html'
        });
      }

      this.bindRivets();
    }
  });

  return MessageElementView;
});

