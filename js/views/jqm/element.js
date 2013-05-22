define(function () {
  return Backbone.View.extend({
    tagName: 'div',
    attributes: {
      'data-role': 'fieldcontain',
      'data-rv-class': 'm.class'
    },
    initialize: function () {
      var element = this.model;
      this.$el.attr('data-name', element.attributes.name);
      this.$el.data('model', element);
      this.bindRivets();
      element.on('change:value', this.renderErrors, this);
    },
    remove: function () {
      this.$el.removeData('model');
      this.model.off(null, null, this);
      if (this.rivet) {
        this.rivet.unbind();
      }
      return Backbone.View.prototype.remove.call(this);
    },
    renderLabel: function () {
      var $label = $(document.createElement('label'));
      $label.attr({
        'data-rv-text': 'm.label',
        class: 'ui-input-text'
      });
      this.$el.append($label);
    },
    render: function () {
      var $input,
        type = this.model.get('type'),
        name = this.model.get('name');

      this.$el.empty();
      this.renderLabel();

      switch (type) {
      case 'file':
        $input = $('<input type="file" />');
        break;
      case 'image':
        $input = $('<input type="file" />');
        break;
      }
      $input.attr({
        name: name,
        'data-rv-value': 'm.value'
      });
      this.$el.append($input);
      this.bindRivets();
    },
    renderErrors: function () {
      var $errorList, errors, $errorElement, $el;
      if (this.$el.children('ul').length > 0) {
        this.$el.children('ul').remove();
      }
      $errorList = $(document.createElement('ul'));
      errors = this.model.validate() || {};

      if (!_.isEmpty(errors)) {
        _.each(errors.value, function (error, key) {
          $errorElement = $(document.createElement('li'));
          $errorElement.text(error.code);
          $errorList.append($errorElement);
        });
      }
      $el = this.$el.find('[data-rv-value]');
      if ($el.length && $el[0].checkValidity && !$el[0].checkValidity()) {
        $errorElement = $(document.createElement('li'));
        $errorElement.text('checkValidity error');
        $errorList.append($errorElement);
      }
      if (this.$el.children('ul').length === 0 && !_.isEmpty(errors)) {
        this.$el.append($errorList);
      }
    },
    bindRivets: function () {
      if (this.rivet) {
        this.rivet.unbind();
      }
      this.rivet = rivets.bind(this.el, {m: this.model});
    }
  });
});
