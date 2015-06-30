define(function (require) {
  'use strict';

  var ElementView = require('views/jqm/element');

  return ElementView.extend({
    render: function () {
      var $input;

      this.$el.empty();
      this.renderLabel();

      $input = this.createElement();

      this.$el.append($input);
      this.bindRivets();

      this.$el.fieldcontain();
      $input.textinput();
      $input.attr('cid', this.model.cid);
      this.renderErrors();
    }
  });
});
