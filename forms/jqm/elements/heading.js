define(['forms/jqm/element'], function (ElementView) {
  'use strict';

  var HeadingElementView = ElementView.extend({
    tagName: 'header',
    initialize: function () {
      var element = this.model,
        $heading,
        $p;

      this.$el.attr('data-name', element.attributes.name);
      this.$el.attr('data-element-type', element.attributes.type);
      this.$el.data('model', element);

      if (_.isNumber(element.attributes.level)) {
        this.tagName = 'h' + element.attributes.level;
        $heading = $(document.createElement(this.tagName));
        $heading.attr({
          'rv-text': 'm:text'
        });
        this.$el.append($heading);
      }

      if (element.attributes.smallText) {
        $p = $(document.createElement('p'));
        $p.attr({
          'rv-html': 'm:smallText'
        });
        this.$el.append($p);
      }

      ElementView.prototype.initialize.call(this);
    },
    render: function () {
      this.$el.fieldcontain();
      this.bindRivets();
    }
  });

  return HeadingElementView;
});
