define(['views/jqm/element'], function (ElementView) {
  'use strict';

  var ChoiceElementView = ElementView.extend({

    renderOtherText: function ($values) {
      var name = this.model.attributes.name,
        $input = $('<input type="text" />'),
        $label = '<label rv-text="m:label" class="ui-input-text"></label>',
        $element = $('<div data-role="fieldcontain"></div>'),
        $div = $('<div class="ui-input-text"></div>'),
        isOtherRendered = !!this.$el.find('div[data-role=fieldcontain]').length;

      $element.addClass('ui-field-contain ui-body ui-br');
      $div.addClass('ui-shadow-inset ui-corner-all ui-btn-shadow ui-body-c');

      $input.attr({
        name: name + '_other',
        'class': 'ui-input-text ui-body-c'
      });
      if ($.inArray('other', $values) >= 0 && !isOtherRendered) {
        $element.append($label);
        $div.append($input);
        $element.append($div);
        this.$el.append($element);
      } else if ($.inArray('other', $values) < 0 && isOtherRendered) {
        this.$el.children('div[data-role=fieldcontain]').remove();
      }
    }

  });

  return ChoiceElementView;
});
