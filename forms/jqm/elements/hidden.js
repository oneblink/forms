define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');

  // local modules

  var ElementView = require('forms/jqm/element');

  // this module

  var TextElementView = ElementView.extend({
    initialize: function () {
      // have to do this to stop Backbone from trying to change the "type"
      this.setElement($('<input type="hidden" />')[0]);
      ElementView.prototype.initialize.call(this);
    },
    render: function () {
      var name = this.model.get('name');

      this.$el.attr({
        name: name,
        'rv-value': 'm:value'
      });
    }
  });

  return TextElementView;
});
