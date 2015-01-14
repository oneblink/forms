define(['views/jqm/element'], function (ElementView) {
  'use strict';

  var ChoiceElementView = ElementView.extend({

    renderOtherText: function (render) {
      var name = this.model.attributes.name,
        $input = $('<input type="text" />'),
        $label = '<label rv-text="m:label" class="ui-input-text"></label>',
        $element = $('<div data-role="fieldcontain"></div>'),
        $div = $('<div class="ui-input-text"></div>'),
        isOtherRendered = !!this.$el.find('div[data-role=fieldcontain]').length,
        model = this.model;

      $element.addClass('ui-field-contain ui-body ui-br');
      $div.addClass('ui-shadow-inset ui-corner-all ui-btn-shadow ui-body-c');

      $input.attr({
        name: name + '_other',
        'class': 'ui-input-text ui-body-c'
      });
      if (render && !isOtherRendered) {
        $element.append($label);
        $div.append($input);
        $element.append($div);
        this.$el.append($element);
        $input.on('change', function () {
          var attr = model.attributes;
          if (_.isArray(attr.value)){
            // Multi select
            if (attr.value.indexOf('other')) {
              attr.value.splice(attr.value.indexOf('other'), 1);
            }
            attr.value.push($input.val());
          } else {
            // Single select
            attr.value = $input.val();
          }
        });
      } else if (!render && isOtherRendered) {
        this.$el.children('div[data-role=fieldcontain]').remove();
      }
    }

  });

  return ChoiceElementView;
});
