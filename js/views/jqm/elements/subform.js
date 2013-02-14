define(['views/jqm/element'], function(ElementView) {
  'use strict';

  var SubFormElementView;

  SubFormElementView = ElementView.extend({
    tagName: 'section',
    attributes: {
      'data-rv-data-form': 'm.subForm'
    },
    render: function() {
    }
  });

  return SubFormElementView;
});

