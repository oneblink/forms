define(['views/jqm/element'], function (ElementView) {
  'use strict';

  var ChoiceElementView = ElementView.extend({

    renderOtherText: function ($values) {
      var name = this.model.attributes.name,
        type = this.model.attributes.type,
        $Input = $('<input type="text" />'),
        $label = '<label data-rv-text="m.label" class="ui-input-text"></label>',
        $element = $('<div data-role="fieldcontain" class="ui-field-contain ui-body ui-br"></div>'),
        $div = $('<div class="ui-input-text ui-shadow-inset ui-corner-all ui-btn-shadow ui-body-c"></div>');

      $Input.attr({
        name: name + '_other',
        class: 'ui-input-text ui-body-c'
      });
      if ($.inArray('other', $values) >= 0 && this.$el.find('div[data-role=fieldcontain]').length <= 0) {
        $element.append($label);
        $div.append($Input);
        $element.append($div);
        this.$el.append($element);
      } else if ($.inArray('other', $values) < 0 && this.$el.children('div[data-role=fieldcontain]').length > 0) {
        this.$el.children('div[data-role=fieldcontain]').remove();
      }
    }

  });

  return ChoiceElementView;
});

