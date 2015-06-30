define(['forms/jqm/section'], function (SectionView) {
  'use strict';

  var PageView = SectionView.extend({
    tagName: 'section',
    initialize: function () {
      var section = this.model;
      this.$el.attr('data-name', section.attributes.name);
      SectionView.prototype.initialize.call(this);
    },
    render: function () {
      SectionView.prototype.render.call(this);
      //this.$el.hide();
    }
  });

  return PageView;
});
