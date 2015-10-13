define(function (require) {
  'use strict';

  var SectionView = require('forms/jqm/section');

  return SectionView.extend({
    tagName: 'section',

    initialize: function () {
      this.$el.attr('data-name', this.model.attributes.name);
      SectionView.prototype.initialize.call(this);
    }
  });
});
