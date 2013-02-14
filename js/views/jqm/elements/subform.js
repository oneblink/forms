define(['views/jqm/element'], function(ElementView) {
  'use strict';

  var SubFormElementView;

  SubFormElementView = ElementView.extend({
    tagName: 'section',
    render: function() {
      this.$el.attr('data-form', this.model.attributes.subForm);
    }
  });

  return SubFormElementView;
});

