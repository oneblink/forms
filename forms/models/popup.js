define(function (require) {
  'use strict';

  var Backbone = require('backbone');

  /**
   * A Prefilled model with *Cancel* and *Confirm* button definitions
   * @type {Backbone.Model}
   *
   * @property {string} title - The title of the popup
   * @property {string} message - The message to display to the user
   * @property {string} [cancelButtonText="Cancel"] - The text to put on the cancel button.
   * @property {string} [cancelButtonIcon="delete"] - The cancel button icon to use. See [jQuery Mobile](http://api.jquerymobile.com/1.3/icons/) for a list of icons.
   * @property {string} [confirmButtonText="Confirm"] - The text to put on the confirm button.
   * @property {string} [confirmButtonIcon="delete"] - The confirm button icon to use. See [jQuery Mobile](http://api.jquerymobile.com/1.3/icons/) for a list of icons.
   * @property {boolean} [dissmissible=true] - See [jQuery Mobile](http://api.jquerymobile.com/1.3/popup/#option-dismissible) for more details
   */
  return Backbone.Model.extend({
    defaults: function () {
      return {
        title: '',
        message: '',

        cancelButtonText: 'No',
        cancelButtonIcon: 'delete',

        confirmButtonText: 'Yes',
        confirmButtonIcon: 'check',

        dissmissible: true
      };
    }
  });
});
