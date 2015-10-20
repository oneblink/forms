define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');
  var Backbone = require('backbone');

  // local modules

  var events = require('forms/events');

  // view mixins
  var toggleClass = require('forms/mixins/view-helper-mixins').toggleClass;

  // this module

  return Backbone.View.extend({
    tagName: 'form',

    attributes: {
      novalidate: 'novalidate',
      'class': 'bm-form'
    },

    formElementEvents: {
      id: { 'change:value': 'onChangedId' }
    },

    modelEvents: {
      'change:isDirty': 'onDirtyChange',
      'change:isPristine': 'onPristineChange',
      'change:isInvalid': 'onInvalidChange'
    },

    initialize: function () {
      events.proxyBindEntityEvents(this, this.model, this.modelEvents);
    },

    onDirtyChange: toggleClass('bm-form-dirty', 'isDirty'),

    onPristineChange: toggleClass('bm-form-pristine', 'isPristine'),

    onInvalidChange: toggleClass('bm-form-invalid', 'isInvalid'),

    remove: function () {
      var pages = this.model.attributes.pages;

      events.proxyUnbindFormElementEvents(this, this.model, this.formElementEvents);
      events.proxyBindEntityEvents(this, this.model, this.modelEvents);
      this.$el.removeData('model');

      if (pages && pages.current && pages.current.attributes._view) {
        pages.current.attributes._view.remove();
      }

      this.model.attributes._view = null;
      this.stopListening(this.model.attributes.elements);

      return Backbone.View.prototype.remove.call(this);
    },

    render: function () {
      var pages = this.model.attributes.pages;
      var $header = $('<header></header>');
      var $footer = $('<footer></footer>');

      this.$el.empty();
      this.$el.attr('data-form', this.model.attributes.name);
      this.$el.data('model', this.model);
      if (this.model.attributes.header) {
        $header.append(this.model.attributes.header);
        this.$el.append($header);
      }

      if (pages && typeof pages.goto === 'function') {
        pages.goto(0);
      }

      if (this.model.attributes.footer) {
        $footer.append(this.model.attributes.footer);
        this.$el.append($footer);
      }

      events.proxyBindFormElementEvents(this, this.model, this.formElementEvents);
    },

    /**
     * Finds an element and focuses it. Will change the page and scroll
     * position if it needs to
     * @param  {string|ElementModel} elementModel Name, cid or ElementModel used
     * to be scrolled to
     *
     *
     * @returns {Promise} Resolved with the ElementView that was scrolled to
     * when the animation completes successfully or rejected if the
     * animation fails.
     */
    goToElement: function (elementModel) {
      if (!elementModel) {
        return Promise.reject(new Error('No field specified'));
      }

      if (typeof elementModel === 'string') {
        elementModel = this.model.getElement(elementModel);
      }

      if (!elementModel) {
        return Promise.reject(new Error('Could not find element'));
      }

      return new Promise(function (resolve, reject) {
        var pageIdOfElement;
        var pageCollection;

        pageCollection = this.model.attributes.pages;

// this is pretty hacky but it means not re-writing the form/subform rendering system
        if (elementModel.attributes.parentElement) {
          pageIdOfElement = elementModel.attributes.parentElement.attributes.page.index();
        } else {
          pageIdOfElement = elementModel.attributes.page.index();
        }

        if (pageCollection.current && pageIdOfElement !== pageCollection.current.index()) {
          pageCollection.goto(pageIdOfElement);
        }

        elementModel.attributes._view.scrollTo({ duration: 100 }).then(
          function () { resolve(elementModel.attributes._view); },
          function () { reject(new Error('Scroll Animaiton Failed')); }
       );
      }.bind(this));
    },

    onAttached: function () {
      this.model.attributes.pages.current.attributes.elements.forEach(function (el) {
        var view = el.attributes._view;
        if (view && typeof view.onAttached === 'function') {
          view.onAttached();
        }
      });
    },

    onChangedId: function () {
      this.$el.attr('data-record-id', this.model.getElement('id').val());
    }
  });
});
