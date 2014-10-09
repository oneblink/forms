define(['views/jqm/element'], function (ElementView) {
  'use strict';

  var ButtonElementView = ElementView.extend({
    remove: function () {
      this.$el.children('.ui-btn').children('button').off('click');
      return ElementView.prototype.remove.call(this);
    },
    render: function () {
      var $button,
        label,
        name = this.model.get('name'),
        attrs = this.model.attributes,
        self = this;

      label = name;
      if (!_.isEmpty(attrs.label)) {
        label = attrs.label;
      }

      this.$el.empty();

      $button = $('<button></button>').attr({
        type: 'button',
        name: name
      }).text(label);

      $button.on('click', function () {
        self.model.trigger('change');
      });

      this.$el.append($button);
      this.bindRivets();
    }
  });

  return ButtonElementView;
});
