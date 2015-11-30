define(function (require) {
  'use strict';

  var Backbone = require('backbone');

  function isEmpty (value) {
    return value === undefined || value === null || value === '';
  }

  return Backbone.Model.extend({
    OTHER_ID: 'bm-other',

    defaults: function () {
      return {
        id: null,
        label: '',
        value: null
      };
    },

    initialize: function () {
      if (this.isOther()) {
        this.listenTo(this, 'change:isSelected', function (model, value) {
          if (!value) {
            this.set('value', null);
          }
        });
      }
    },

    isSelected: function () {
      return this.attributes.isSelected;
    },

    isEmpty: function () {
      if (!this.attributes.isSelected) {
        return true;
      }

      if (this.attributes.id === this.OTHER_ID) {
        return isEmpty(this.attributes.value);
      }

      return false;
    },

    isOther: function () {
      return this.attributes.id === this.OTHER_ID;
    },

    select: function () {
      this.set('isSelected', true);
    },

    deselect: function () {
      this.set('isSelected', false);
    },

    toggle: function () {
      this.set('isSelected', !this.attributes.isSelected);
    }
  });
});
