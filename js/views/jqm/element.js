define(function (require) {

  var rivets = require('rivets');
  var formsErrors = require('blink-forms-errors');
  var $body = (function(){
    //IE aniamtes html, everything else does body.
    var $b = $('body');
    $b.scrollTop(100);
    return $b.scrollTop() > 0 ? $b : $('html');
  }());

  $body.scrollTop(0);

  return Backbone.View.extend({
    tagName: 'div',
    attributes: {
      'data-role': 'fieldcontain',
      'rv-class': 'm:class'
    },
    initialize: function () {
      var element = this.model;
      element.on('invalid change:value', this.renderErrors, this);
      //element.on('change:warning', this.renderWarning, this);
      element.on('change:hidden', this.onChangeHidden, this);

      this.$el.attr('data-name', element.attributes.name);
      this.$el.attr('data-element-type', element.attributes.type);
      this.$el.data('model', element);
      this.bindRivets();
      this.onChangeHidden();
      this.model.isValid();
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
    //TODO: with the event removed are warnings still used ?
    renderWarning: function () {
      var attrs, warning;

      this.$el.children('.bm-warning__bm-list').remove();
      warning = attrs.warning || {};

      if (!_.isEmpty(warning)) {
        $(document.createElement('ul'))
          .addClass('bm-warning__bm-list')
          .append( _.map(warning.value, function(w){
            return $(document.createElement('li')).text(formsErrors.toWarningString(w)).addClass('bm-warning__bm-list-item');
          }))
          .appendTo(this.$el);
      }
    },
    renderErrors: function (model, validaitonErrors) {
      var attrs = this.model.attributes;
      var errors = this.model.validationError || validaitonErrors;

      // TODO: do this via bindings with rivets
      this.$el.children('.bm-errors__bm-list').remove();

      if (errors) {
        $(document.createElement('ul'))
          .addClass('bm-errors__bm-list')
          .append(_.map(errors.value, function(error){
            var text;

            if (error.code === 'PATTERN') {
              text = attrs.hint || attrs.toolTip || attrs.title;
            }

            if (!text) {
              text = formsErrors.toErrorString(error);
            }

            return $(document.createElement('li')).text(text).addClass('bm-errors__bm-list-item');
          }, this))
          .appendTo(this.$el);
      }

      this.$el[this.model.validationError ? 'addClass' : 'removeClass']('bm_invalid');
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
    },

    /**
     * Scrolls an element into view
     * @param  {Object} options Passed to [jQuery.animate](http://api.jquery.com/animate/)
     */
    scrollTo: function(options){
      $body.animate({
        scrollTop: this.$el.offset().top
      }, options);
    }
  });
});
