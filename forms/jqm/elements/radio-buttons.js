define(function (require) {
  'use strict';

  var $ = require('jquery');
  var _ = require('underscore');

  var ElementView = require('forms/jqm/element');
  var OtherTextView = require('forms/jqm/elements/choice-other-text');

  var template = require('text!forms/jqm/templates/radio-buttons.html');
  var optionTemplate = require('text!forms/jqm/templates/radio-option.html');

  return ElementView.extend({
    template: _.template(template),
    optionTemplate: _.template(optionTemplate),

    initialize: function () {
      if (this.model.attributes.other) {
        this.otherTextView = new OtherTextView({model: this.model});
      }
      this.listenTo(this.model.attributes.optionCollection, 'change:isSelected', this.onModelOptionSelect);
      this.listenTo(this.model.attributes.optionCollection, 'reset', this.renderOptions);

      ElementView.prototype.initialize.apply(this, arguments);
    },

    onAttached: function () {
      if (this.$radioOptions) {
        this.$radioOptions.off('click');
      }
      this.$radioOptions = this.$el.find('.bm-choice-input');
      this.$radioOptions.checkboxradio();
      console.log('enchancing radio buttons for ', this.model.id)
      this.$radioOptions.on('click', this.onOptionClick.bind(this));
    },

    render: function () {
      this.$el.append(this.template(this.model.attributes));

      if (this.model.attributes.other) {
        this.$el.append(this.otherTextView.render().$el);
      }
      this.$el.find('fieldset').controlgroup();
      this.$el.fieldcontain();

      this.renderErrors(this.model);
    },

    renderLabel: function () {
      if (!this.$label) {
        this.$label = $('.bm-choice-label');
      }

      if (!$.contains(this.el, this.$label[0])) {
        this.$fieldset.prepend(this.$label);
      }

      this.$label.html(this.model.attributes.label || '');
    },

    renderOptions: function () {
      var html = this.model.attributes.optionCollection.reduce(function (memo, option) {
        memo += this.optionTemplate(option);
        return memo;
      }, '', this);

      this.$el.find('.bm-choice-container').html(html);
      this.onAttached();
    },

    remove: function () {
      this.$radioOptions.off('click');

      ElementView.prototype.remove.apply(this, arguments);
    },

    onModelOptionSelect: function (optionModel, value) {
      this.$radioOptions.filter('[data-cid=' + optionModel.cid + ']').prop('checked', value);
      this.$radioOptions.checkboxradio('refresh');
    },

    onOptionClick: function () {
      var val = _.pluck(this.$radioOptions.filter(':checked'), 'value');
      this.model.val(val.length === 1 ? val[0] : val);
    }
  });
});
