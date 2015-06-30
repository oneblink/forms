define(function (require) {
  'use strict';

  var ElementView = require('forms/jqm/element');

  return ElementView.extend({
    render: function () {
      var $input;

      this.$el.empty();
      this.renderLabel();

      $input = this.createElement();

      this.$el.append($input);

      this.bindRivets();
      this.model.isValid();
      this.$el.fieldcontain();
      $input.textinput();
      $input.attr('cid', this.model.cid);
      this.renderErrors();
    }
  });
});
