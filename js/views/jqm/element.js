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
      element.on('change:hidden', this.onChangeHidden, this);
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
      throw new Error('Element.render is only an interface');
    },
    renderErrors: function () {
      var $errorList, errors, $errorElement, $el;
      if (this.$el.children('ul').length > 0) {
        this.$el.children('ul').remove();
      }
      $errorList = $(document.createElement('ul'));
      errors = this.model.validate() || {};

      if (!_.isEmpty(errors)) {
        _.each(errors.value, function (error) {
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
    onChangeHidden: function () {
      var hidden = this.model.attributes.hidden;
      if (hidden) {
        this.$el.hide();
      } else {
        this.$el.show();
      }
    },
    isHidden: function () {
      return this.$el && this.$el.css('display') === 'none';
    },
    bindRivets: function () {
      if (this.rivet) {
        this.rivet.unbind();
      }
      this.rivet = rivets.bind(this.el, {m: this.model});
    }
  });
});
