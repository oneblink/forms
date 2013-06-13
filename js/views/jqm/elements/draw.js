define([
  'views/jqm/element',
  'views/jqm/elements/file'
], function (ElementView, FileElementView) {
  'use strict';
  var DrawElementView = FileElementView.extend({
    render: function () {
      var $button, $div;

      this.$el.empty();
      this.renderLabel();

      $button = $('<button />');
      $button.text('Signature');

      $div = $('<div class="ui-input-text"></div>');
      $div.append($button);

      this.$el.append($div);

      $button.on('click', $.proxy(DrawElementView.onButtonClick, this));

      this.bindRivets();
      this.model.on('change:blob', this.renderFigure, this);
    },
    remove: function () {
      this.$el.children('button').off('click');
      this.model.off('change:blob', this.renderFigure, this);
      return ElementView.prototype.remove.call(this);
    }
  }, {
    // static properties and methods
    onButtonClick: function (event) {
      event.preventDefault();
      return false;
    }
  });

  return DrawElementView;
});

