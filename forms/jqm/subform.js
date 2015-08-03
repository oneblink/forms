define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');

  // this module

  var FormView = require('forms/jqm/form');
  var ConfirmPopupView = require('forms/jqm/popups/confirm-popup');
  var ConfirmModel = require('forms/models/popup');
  var confirmOptions = {
    dissmissible: false,
    header: 'Confirm',
    message: '<center><p>Are you sure you want to remove this subform?</p><p>This action cannot be undone.</p></center>',
    cancelButtonIcon: '',
    confirmButtonIcon: ''
  };

  return FormView.extend({
    tagName: 'section',

    attributes: {},

    render: function () {
      var parentElement = this.model.parentElement;
      var name = parentElement.attributes.minusButtonLabel;
      var $button;

      $button = $('<button data-onclick="onRemoveClick"></button>').attr({
        type: 'button',
        'data-icon': 'minus',
        'data-action': 'remove'
      }).text(name)
        .on('click', this.onRemoveClick.bind(this));

      FormView.prototype.render.call(this);

      this.$el.attr(
        'data-record-index',
        parentElement.get('forms').indexOf(this.model)
     );

      this.$el.prepend($button);
      $button.button().addClass('bm-button bm-remove');
    },

    /**
     * Displays a confirmation prompt and removes the subform if the user confirms.
     *
     * @return {Promise} - A Promise that is resolved if the user confirms,
     * or rejected if they cancel.
     */
    onRemoveClick: function () {
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

      return confirmPrompt.open().then(onConfirmation, onCancel);
    }
  });
});
