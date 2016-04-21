define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');

  // local modules

  var events = require('forms/events');
  var FormView = require('forms/jqm/form');
  var ConfirmPopupView = require('forms/jqm/popups/confirm-popup');
  var ConfirmModel = require('forms/models/popup');

  // this module

  var confirmOptions = {
    dissmissible: false,
    header: 'Confirm',
    message: '<center><p>Are you sure you want to remove this subform?</p><p>This action cannot be undone.</p></center>',
    cancelButtonIcon: '',
    confirmButtonIcon: ''
  };

  return FormView.extend({
    tagName: 'section',

    attributes: {
      'class': 'bm-form'
    },

    initialize: function () {
      FormView.prototype.initialize.call(this);

      this.listenTo(this.model.parentElement.attributes.forms, 'add', this.enableRemoveButton);
      this.listenTo(this.model.parentElement.attributes.forms, 'remove', this.disableRemoveButton);
    },

    disableRemoveButton: function (model, collection, options) {
      if (this.model.parentElement.getRealLength() <= this.model.parentElement.attributes.minSubforms) {
        this.$el.find('[data-onclick="onRemoveClick"]').button('disable');
      }
    },

    enableRemoveButton: function (model, collection, options) {
      if (this.model.parentElement.getRealLength() > this.model.parentElement.attributes.minSubforms) {
        this.$el.find('[data-onclick="onRemoveClick"]').button('enable');
      }
    },

    render: function () {
      var parentElement = this.model.parentElement;
      var name = parentElement.attributes.minusButtonLabel;
      var $button;

      $button = $('<input type="button" data-onclick="onRemoveClick" />').attr({
        'data-icon': 'minus',
        'data-action': 'remove',
        'value': name
      }).on('click', this.onRemoveClick.bind(this));

      FormView.prototype.render.call(this);

      this.$el.attr(
        'data-record-index',
        parentElement.attributes.forms.indexOf(this.model)
     );

      this.$el.prepend($button);
      $button.button().addClass('bm-button bm-remove');
      this.disableRemoveButton();
    },

    /**
     * Displays a confirmation prompt and removes the subform if the user confirms.
     *
     * @return {Promise} - A Promise that is resolved if the user confirms,
     * or rejected if they cancel.
     */
    onRemoveClick: function (event) {
      var confirmPrompt = new ConfirmPopupView({
        model: new ConfirmModel(confirmOptions)
      });

      var onConfirmation = function () {
        confirmPrompt.close();
        this.model.parentElement.remove(this.model);
      }.bind(this);

      var onCancel = function () {
        confirmPrompt.close();
      };

      events.preventDefault(event);
      events.stopPropagation(event);

      return confirmPrompt.open().then(onConfirmation, onCancel);
    }
  });
});
