define(['views/jqm/element'], function(ElementView) {
  'use strict';

  var TextElementView = ElementView.extend({
    initialize: function() {
      // have to do this to stop Backbone from trying to change the "type"
      this.setElement($('<input type="hidden" />')[0]);
      ElementView.prototype.initialize.call(this);
    },
    render: function() {
      var name = this.model.get('name');

      this.$el.attr({
        name: name,
        'data-rv-value': 'm.value'
      });
      this.bindRivets();
    }
  });

  return TextElementView;
});


