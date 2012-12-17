define(['underscore', 'backbone'], function(_, Backbone) {
  var ElementView = Backbone.View.extend({
    tagName: 'div',
    attributes: {
      'data-role': 'fieldcontain'
    },
    className: '',
    events: {
    },
    render: function() {
      var $label = $(document.createElement('label')),
          $fieldset = $(document.createElement('fieldset')),
          $input;

      $label.text(this.model.get('label') || this.model.get('name'));

      this.$el.empty();
      this.$el.append($label);
    }
  });

  return ElementView;
});
