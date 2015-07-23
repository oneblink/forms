define(function (require) {
  'use strict';

  // foreign modules

  // var $ = require('jquery');

  // local modules

  var SubFormView = require('forms/jqm/subform');
  var template = require('text!forms/jqm/templates/subform-collapse.html');

  // this module

  return SubFormView.extend({
    render: function () {
      // explictly skip super and use super-super
      BMP.Forms._views.Form.prototype.render.call(this);
      this.$el.append(template);
      this.$collapsible = this.$el.children('[data-role=collapsible]');
      this.$el.children('section').appendTo(this.$collapsible);
      this.$remove = this.$collapsible.children('[data-onclick=onRemoveClick]');
      this.$remove.on('click', this.onRemoveClick.bind(this));
      this.$remove.button();
      this.$collapsible.collapsible();
    },

    remove: function () {
      // using super's remove
      this.$remove.off('click');
      return BMP.Forms._views.SubFormView.prototype.remove.call(this);
    }
  });
});
