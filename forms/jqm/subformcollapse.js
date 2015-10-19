define(function (require) {
  'use strict';

  // foreign modules

  // var $ = require('jquery');
  var _ = require('underscore');

  // local modules

  var events = require('forms/events');
  var FormView = require('forms/jqm/form');
  var SubFormView = require('forms/jqm/subform');
  var template = require('text!forms/jqm/templates/subform-collapse.html');

  // this module

  return SubFormView.extend({
    render: function () {
      var parentAttrs = this.model.parentElement.attributes;

      // explictly skip super and use super-super
      FormView.prototype.render.call(this);
      this.$el.append(template);
      this.$collapsible = this.$el.children('[data-role=collapsible]');
      this.$collapsible.children('h3').children('.bm-subform__bm-title')
        .text(parentAttrs.label || parentAttrs.name);
      this.$el.children('section').appendTo(this.$collapsible);

      this.$remove = this.$collapsible.children('[data-onclick=onRemoveClick]');
      this.$remove.text(parentAttrs.minusButtonLabel);
      this.$remove.on('click', this.onRemoveClick.bind(this));
      this.$remove.button();

      this.$summary = this.$collapsible.children('h3')
        .children('.bm-subform__bm-summary');

      this.$collapsible.collapsible();

      this.$el.attr(
        'data-record-index',
        this.model.parentElement.attributes.forms.indexOf(this.model)
      );

      this.model.parentElement.attributes.summaryPromise.then(function (names) {
        var formElementEvents = {};
        names.forEach(function (name) {
          formElementEvents[name] = { 'change:value': 'renderSummary' };
        });
        this.formElementEvents = formElementEvents;
        events.proxyBindFormElementEvents(this, this.model, this.formElementEvents);
        this.renderSummary();
      }.bind(this));
    },

    remove: function () {
      this.$remove.off('click');

      // don't need to unbind formElementEvents, because this is done in super
      // events.proxyUnbindFormElementEvents(this, this.model, this.formElementEvents);

      // using super's remove
      return SubFormView.prototype.remove.call(this);
    },

    renderSummary: function () {
      var values = Object.keys(this.formElementEvents).map(function (name) {
        return this.model.getElement(name).val();
      }.bind(this));
      this.$summary.text(_.compact(values).join(', '));
    }
  });
});
