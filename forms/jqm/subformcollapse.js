define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');
  var Backbone = require('backbone');
  var _ = require('underscore');

  // local modules

  var events = require('forms/events');
  var FormView = require('forms/jqm/form');
  var SubFormView = require('forms/jqm/subform');
  var template = require('text!forms/jqm/templates/subform-collapse.html');

  // this module

  return SubFormView.extend({
    initialize: function () {
      this.listenTo(this.model, 'change:isCollapsed', this.toggleView);
      this.listenTo(Backbone, 'element:focus', this.focusChildElement);
    },

    // if the view being focussed is a descendant then make sure the sub form is not collapsed.
    focusChildElement: function (childView) {
      if ($.contains(this.el, childView.el)) {
        this.model.set('isCollapsed', false);
      }
    },

    toggleView: function () {
      this.$toggleTrigger.trigger('click');
    },

    render: function () {
      var that = this;
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

      this.$collapsible.collapsible({
        collapsed: this.model.attributes.isCollapsed
      });

      this.$el.attr(
        'data-record-index',
        this.model.parentElement.attributes.forms.indexOf(this.model)
      );

      this.$toggleTrigger = $('.ui-collapsible-heading-toggle', this.$collapsible.children('.ui-collapsible-heading'));

      // silently update the collapsed value so we dont cause an infinite loop
      this.$collapsible.on('collapse', function () {
        that.model.set('isCollapsed', true, {silent: true});
      });
      this.$collapsible.on('expand', function () {
        that.model.set('isCollapsed', false, {silent: true});
      });

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
        var element = this.model.getElement(name);
        if (!element) {
          return undefined;
        }

        return element.val();
      }.bind(this));
      this.$summary.text(_.compact(values).join(', '));
    }
  });
});
