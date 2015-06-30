define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');

  // local modules

  var ElementView = require('forms/jqm/element');

  // this module

  var MessageElementView = ElementView.extend({
    tagName: 'div',
    attributes: {
      'rv-class': 'm:class'
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
          'rv-html': 'm:html',
          'class': 'ui-input-text'
        });

        this.$el.append($div);

      } else {
        this.$el.attr({
          'rv-html': 'm:html'
        });
      }

      this.$el.fieldcontain();
      this.bindRivets();
    }
  });

  return MessageElementView;
});
