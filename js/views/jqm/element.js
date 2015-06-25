define(['rivets'], function (rivets) {
  return Backbone.View.extend({
    tagName: 'div',
    attributes: {
      'data-role': 'fieldcontain',
      'rv-class': 'm:class'
    },
    initialize: function () {
      var element = this.model;
      this.$el.attr('data-name', element.attributes.name);
      this.$el.attr('data-element-type', element.attributes.type);
      this.$el.data('model', element);
      this.bindRivets();
      this.onChangeHidden();
      element.on('change:errors', this.renderErrors, this);
      //element.on('change:warning', this.renderWarning, this);
      element.on('change:hidden', this.onChangeHidden, this);
    },
    remove: function () {
      this.$el.removeData('model');
      this.model.off(null, null, this);
      if (this.rivet) {
        this.rivet.unbind();
      }
      this.model.unset('_view');
      return Backbone.View.prototype.remove.call(this);
    },
    renderLabel: function () {
      var $label = $(document.createElement('label'));
      $label.attr({
        'rv-text': 'm:label',
        'class': 'ui-input-text'
      });
      this.$el.append($label);
    },
    renderHint: function () {
      var self = this,
        attrs = self.model.attributes,
        $hint,
        $label,
        blackListHintFields = ['boolean', 'file'],
        fullWidthHints = ['heading', 'subForm'];

      //if there is no hint available in attributes
      //no need to add any element
      if (!attrs.hint || blackListHintFields.indexOf(attrs.type) !== -1) {
        return;
      }

      //for subform and heading fields,
      //no label required
      if (fullWidthHints.indexOf(attrs.type) === -1) {
        $label = $(document.createElement('label'));

        $label.attr({
          'class': 'ui-input-text'
        });

        this.$el.append($label);
      }

      $hint = $(document.createElement('span'));

      $hint.attr({
        'class': 'bm-formelement__bm-hint'
      });

      $hint.text(attrs.hint);

      this.$el.append($hint);
    },
    render: function () {
      throw new Error('Element.render is only an interface');
    },
    renderWarning: function () {
      var attrs, $warningList, warning, $warningElement, i18n;
      attrs = this.model.attributes;
      i18n = window.i18n['BMP/Forms/warning'];
      // TODO: do this via bindings with rivets
      if (this.$el.children('ul').length > 0) {
        this.$el.children('ul').remove();
      }
      $warningList = $(document.createElement('ul'));
      warning = attrs.warning || {};

      if (!_.isEmpty(warning)) {
        _.each(warning.value, function (val) {
          var text, fn;
          fn = _.isFunction(i18n[val.code]) && i18n[val.code];
          if (!text) {
            text = fn ? fn(val) : JSON.stringify(val);
          }
          $warningElement = $(document.createElement('li'));
          $warningElement.text(text);
          $warningList.append($warningElement);
        });
      }
      if (this.$el.children('ul').length === 0 && !_.isEmpty(warning)) {
        this.$el.append($warningList);
      }
    },
    renderErrors: function () {
      var attrs, $errorList, errors, $errorElement, i18n;
      attrs = this.model.attributes;
      i18n = window.i18n['BMP/Forms/validation'];
      // TODO: do this via bindings with rivets
      if (this.$el.children('ul').length > 0) {
        this.$el.children('ul').remove();
      }
      $errorList = $(document.createElement('ul'));
      errors = attrs.errors || {};

      if (!_.isEmpty(errors)) {
        _.each(errors.value, function (error) {
          var text, fn;
          $errorElement = $(document.createElement('li'));
          fn = _.isFunction(i18n[error.code]) && i18n[error.code];
          if (error.code === 'PATTERN') {
            text = attrs.hint || attrs.toolTip || attrs.title;
          }
          if (!text) {
            text = fn ? fn(error) : JSON.stringify(error);
          }
          $errorElement.text(text);
          $errorList.append($errorElement);
        });
      }
//      $el = this.$el.find('[rv-value]');
//      if ($el.length && $el[0].checkValidity && !$el[0].checkValidity()) {
//        $errorElement = $(document.createElement('li'));
//        $errorElement.text('checkValidity error');
//        $errorList.append($errorElement);
//      }
      if (this.$el.children('ul').length === 0 && !_.isEmpty(errors)) {
        this.$el.append($errorList);
      }
    },
    onChangeHidden: function () {
      var hidden = this.model.attributes.hidden;
      if (hidden) {
        this.hide();
      } else {
        this.show();
      }
    },
    hide: function () {
      this.$el.css('display', 'none');
    },
    show: function () {
      if (this.$el.css('display') === 'none') {
        this.$el.css('display', '');
      }
    },
    isHidden: function () {
      return this.$el && this.$el.css('display') === 'none';
    },
    bindRivets: function () {
      if (this.rivet) {
        this.rivet.unbind();
      }
      // preserve existing (jQM) classes so that Rivets doesn't remove them
      if (this.el.className && this.el.hasAttribute('rv-class') && this.model.attributes.hasOwnProperty('class')) {
        this.model.attributes['class'] += ' ' + this.el.className;
      }
      this.rivet = rivets.bind(this.el, {m: this.model});
    }
  });
});
