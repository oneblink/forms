define(['views/jqm/element'], function (ElementView) {
  'use strict';

  var ChoiceElementView = ElementView.extend({

    renderOtherText: function (render) {
      var self = this,
        name = this.model.attributes.name,
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
      if (render && !isOtherRendered) {
        $element.append($label);
        $div.append($input);
        $element.append($div);
        this.$el.append($element);
        $input.on('change', function () {
          self.model.set('value', self.prepModelValue());
        });
      } else if (!render && isOtherRendered) {
        this.$el.children('div[data-role=fieldcontain]').remove();
      }
    },
    prepModelValue: function() {
      var $input = this.$el.find('input[type = text]');
      var values = this.fetchValue();
      var allowsOther = this.model.attributes.other || this.model.attributes.canSpecifyOther;

      if ($input.length > 0 && allowsOther) {
        if (_.isArray(values) && _.contains(values, 'other')) {
          // Multi select
          if (values.indexOf('other') !== -1) {
            values.splice(values.indexOf('other'), 1);
          }
          values.push($input.val() || "other");
        } else if (values === "other") {
          // Single select
          values = $input.val() || "other";
        }
      }

      return values;
    }

  });

  return ChoiceElementView;
});
