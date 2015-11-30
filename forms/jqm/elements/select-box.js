define(function (require) {
  'use strict';

  var _ = require('underscore');

  var ElementView = require('forms/jqm/element');
  var OtherTextView = require('forms/jqm/elements/choice-other-text');

  var template = require('text!forms/jqm/templates/select-box.html');
  var optionTemplate = require('text!forms/jqm/templates/select-box-option.html');

  return ElementView.extend({
    template: _.template(template),
    optionTemplate: _.template(optionTemplate),

    events: {
      'change select': 'onChange'
    },

    initialize: function () {
      if (this.model.attributes.other) {
        this.otherTextView = new OtherTextView({model: this.model});
      }

      this.listenTo(this.model.attributes.optionCollection, 'change:isSelected', this.onModelOptionSelect);
      this.listenTo(this.model.attributes.optionCollection, 'change:value', this.onOptionValueChange);
      this.listenTo(this.model.attributes.optionCollection, 'reset', this.renderOptions);

      ElementView.prototype.initialize.apply(this, arguments);
    },

    render: function () {
      this.renderLabel();

      this.$el.append(this.template(this.model.attributes));
      this.$select = this.$el.find('.bm-singleselect');

      if (this.model.attributes.other) {
        this.$el.append(this.otherTextView.render().$el);
      }

      this.$el.fieldcontain();

      this.renderErrors(this.model);
      return this;
    },

    renderOptions: function () {
      var html = this.model.attributes.optionCollection.reduce(function (memo, option) {
        memo += this.optionTemplate(option);
        return memo;
      }, '', this);
      this.$select.html(html).selectmenu('refresh');
    },

    onChange: function (e) {
      this.model.selectOptionByIndex(this.$select.prop('selectedIndex'));
    },

    onModelOptionSelect: function (optionModel) {
      this.$select.prop('selectedIndex', this.model.attributes.optionCollection.indexOf(optionModel));
      this.$select.selectmenu('refresh');
    },

    onOptionValueChange: function (model, value) {
      if (model.isOther()) {
        this.$select[0].namedItem(model.id).value = model.attributes.value;
      }
    },

    onAttached: function () {
      this.$select.selectmenu();
    }
  });
});
