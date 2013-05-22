define(['views/jqm/page'], function (PageView) {
  var SectionView = PageView.extend({
    tagName: 'section',
    events: {
    },
    initialize: function () {
      var section = this.model;
      this.$el.attr('data-name', section.attributes.name);
      PageView.prototype.initialize.call(this);
    }
  });

  return SectionView;
});


