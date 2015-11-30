define(function (require) {
  'use strict';

  var _ = require('underscore');

  var SelectBoxView = require('forms/jqm/elements/select-box');

  var reducer = function (memo, htmlOption) {
    if (htmlOption.selected) {
      memo.push(htmlOption.value);
    }

    return memo;
  };

  return SelectBoxView.extend({
    onChange: function (e) {
      var options = _.chain(this.$select[0].options)
                     .tail()
                     .reduce(reducer, [])
                     .value();

      this.model.val(options);
    },

    onModelOptionSelect: function (optionModel) {
      if (optionModel.id === 'bm-header-option') {
        return;
      }
      this.$select[0].namedItem(optionModel.id).selected = optionModel.isSelected();
      this.$select.selectmenu('refresh');
    }
  });
});
