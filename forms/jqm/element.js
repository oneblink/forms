define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('backbone');
  var classNames = require('classnames');

  // local modules

  var events = require('forms/events');
  var formsErrors = require('forms/error-helpers');
  var tplList = _.template(require('text!forms/jqm/templates/bm-list.html'));
  var Forms = require('forms/main');

  var NotImplementedError = require('typed-errors').NotImplementedError;

  // view mixins
  var toggleClass = require('forms/mixins/view-helper-mixins').toggleClass;

  var DIRTY_CLASS = 'bm-formelement-dirty';
  var PRISTINE_CLASS = 'bm-formelement-pristine';
  var INVALID_CLASS = 'bm-formelement-invalid';
  // this module

  // IE aniamtes html, everything else does body.
  // known issue- in IE, BIC wont animate due to the above and jQuery mobile conflicting with all methods
  // of detection.
  var $body = $('html, body');

  // turn selected attributes into initial element class names
  function elementClassFromModelAttributes (attributes) {
    var classNamesSource = {};
    if (attributes.class) {
      classNamesSource[attributes.class] = !!attributes.class;
    }
    classNamesSource[PRISTINE_CLASS] = attributes.isPristine;
    classNamesSource[DIRTY_CLASS] = attributes.isDirty;
    classNamesSource[INVALID_CLASS] = attributes.isInvalid;

    return classNames('bm-formelement', classNamesSource);
  }

  return Backbone.View.extend({
    tagName: 'div',

    attributes: function () {
      return {
        'data-name': this.model.attributes.name,
        'data-element-type': this.model.attributes.type,
        'data-role': 'fieldcontain',
        'class': elementClassFromModelAttributes(this.model.attributes)
      };
    },

    modelEvents: {
      'invalid valid': 'renderErrors',
      'change:hidden': 'onChangeHidden',
      'change:label': 'renderLabel',
      'change:isDirty': 'onDirtyChange',
      'change:isPristine': 'onPristineChange',
      'change:isInvalid': 'onInvalidChange'
      // 'change:warning', 'renderWarning',
    },

    initialize: function () {
      var elementModel = this.model;

      this.$el.data('model', elementModel);

      if (elementModel.attributes.defaultValue) {
        this.$el.val(elementModel.attributes.defaultValue);
      }

      if (this.modelEvents) {
        events.proxyBindEntityEvents(this, elementModel, this.modelEvents);
      }

      this.onChangeHidden();
      this.model.isValid();
    },

    onDirtyChange: toggleClass(DIRTY_CLASS, 'isDirty'),

    onPristineChange: toggleClass(PRISTINE_CLASS, 'isPristine'),

    onInvalidChange: toggleClass(INVALID_CLASS, 'isInvalid'),

    remove: function () {
      if (this.$label) {
        this.$label.remove();
        this.$label = null;
      }
      this.$el.removeData('model');
      this.model.off(null, null, this);

      if (this.modelEvents) {
        events.proxyUnbindEntityEvents(this, this.model, this.modelEvents);
      }

      return Backbone.View.prototype.remove.call(this);
    },

    renderLabel: function () {
      if (!this.$label) {
        this.$label = $('<label class="ui-input-text"></label>');
      }

      if (!this.$el.find(this.$label).length) {
        this.$el.prepend(this.$label);
      }

      this.$label.html(this.model.attributes.label || '');
    },

    renderHint: function () {
      var self = this;
      var attrs = self.model.attributes;
      var $hint,
        $label;
      var blackListHintFields = ['boolean', 'file'];
      var fullWidthHints = ['heading', 'subForm'];

      // if there is no hint available in attributes
      // no need to add any element
      if (!attrs.hint || blackListHintFields.indexOf(attrs.type) !== -1) {
        return;
      }

      // for subform and heading fields,
      // no label required
      if (fullWidthHints.indexOf(attrs.type) === -1) {
        $label = $(document.createElement('label'));

        $label.attr({
          class: 'ui-input-text'
        });

        this.$el.append($label);
      }

      $hint = $(document.createElement('span'));

      $hint.attr({
        class: 'bm-formelement__bm-hint'
      });

      $hint.text(attrs.hint);

      this.$el.append($hint);
    },

    render: function () {
      throw new NotImplementedError('Element.render is only an interface');
    },

    // TODO: with the event removed are warnings still used ?
    renderWarning: function () {
      var attrs, warning;

      this.$el.children('.bm-warning__bm-list').remove();
      warning = attrs.warning || {};

      if (!_.isEmpty(warning)) {
        $(document.createElement('ul'))
          .addClass('bm-warning__bm-list')
          .append(_.map(warning.value, function (w) {
            return $(document.createElement('li')).text(formsErrors.toWarningString(w)).addClass('bm-warning__bm-listitem');
          }))
          .appendTo(this.$el);
      }
    },

    renderErrors: function (model, validationErrors) {
      var attrs = model.attributes;
      var errors = validationErrors || model.validationError;
      var list$ = this.$el.children('.bm-errors__bm-list');
      var new$;

      if (!attrs) {
        return; // not safe to run yet
      }

      if (model !== this.model) {
        // prevent function from running if event has come from another model (eg a subform's form element)
        return;
      }

      if (!errors || !errors.value || !errors.value.length) {
        this.$el.children('.bm-errors__bm-list').remove();
        this.onInvalidChange();
        return;
      }

      if (!list$.length) {
        list$ = $(document.createElement('ul')).addClass('bm-errors__bm-list');
      }

      new$ = $(tplList({
        items: _.map(errors.value, function (error) {
          var text;
          var className = classNames({
            'bm-errors__bm-listitem': true,
            'bm-errors__bm-required': error.code === 'REQUIRED'
          });

          if (error.code === 'PATTERN') {
            text = attrs.hint || attrs.toolTip || attrs.title;
          }
          if (!text) {
            text = formsErrors.toErrorString(error);
          }

          return {
            class: className,
            text: text
          };
        })
      }));

      if (new$.html() !== list$.html()) {
        // the DOM needs to be updated
        list$.html(new$.html());
      }

      if (!list$.parent().length || !list$.is(':last-child')) {
        // theoretically, we could avoid this appendTo if list$.parent().length
        // but without the :last-child test we end up with errors above input
        list$.appendTo(this.$el);
      }

      this.onInvalidChange();
    },

    onChangeHidden: function (model) {
      var hidden = this.model.attributes.hidden;
      if (model && model.cid !== this.model.cid) {
        return;
      }
      if (hidden) {
        this.hide();
      } else {
        this.show();
      }
    },

    hide: function () {
      this.$el.css('display', 'none');
      // when a field is hidden, we no longer care
      // about if it is valid or not.
      this.model.validationError = undefined;
      this.model.trigger('valid', this);
    },

    show: function () {
      if (this.$el.css('display') === 'none') {
        this.$el.css('display', '');
      }
    },

    isHidden: function () {
      return this.$el && this.$el.css('display') === 'none';
    },

    /**
     * Scrolls an element into view
     * @param  {Object} options Passed to [jQuery.animate](http://api.jquery.com/animate/)
     */
    scrollTo: function (options) {
      Forms.trigger('element:focus', this);

      return Promise.resolve($body.animate({
        scrollTop: this.$el.offset().top
      }, options).promise());
    }
  });
});
