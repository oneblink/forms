define(['jquery', 'underscore', 'backbone', 'views/jqm/elements/text'],
      function($, _, Backbone, TextElementView) {
  'use strict';

  var TextAreaElementView = TextElementView.extend({
    // TODO: fix bindings, the only thing that works is initial display :S
    render: function() {
      var self = this,
          $fieldset,
          $legend,
          type = this.model.attributes.type,
          name = this.model.attributes.name,
          iType = type === 'select' ? 'radio' : 'checkbox',
          iName = type === 'select' ? name + '_' + self.cid : name + '[]';

      this.$el.empty();

      $fieldset = $('<fieldset></fieldset>').attr({
        'data-role': 'controlgroup'
      });
      $legend = $('<legend></legend>').text(this.model.attributes.label);
      $fieldset.prepend($legend);

      _.forEach(this.model.attributes.options, function(label, value) {
        var $label = $('<label>' + label + '</label>'),
            $input = $('<input type="' + iType + '" />');

        $input.attr({
          name: iName,
          'data-rv-value': 'm.value'
        });
        $label.prepend($input);
        $fieldset.append($label);
      });

      this.$el.append($fieldset);
      this.bindRivets();
    }
  });

  return TextAreaElementView;
});


