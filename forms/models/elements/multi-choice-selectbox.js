define(function (require) {
  'use strict';

  var _ = require('underscore');

  var MultiChoiceModel = require('forms/models/elements/multi-choice');

  return MultiChoiceModel.extend({
    defaults: function () {
      return _.assign(MultiChoiceModel.prototype.defaults.call(this), {
        nativeMenu: false,
        mode: 'collapsed'
      });
    },

    initialize: function () {
      MultiChoiceModel.prototype.initialize.apply(this, arguments);
      // jquery mobile 1.3 does not support multiselects in native mode.
      // this can be set to true in the fields rowclass options hack.
      this.set('nativeMenu', false);
    },

    // TODO : proper multi element view
    initializeView: function () {
      var ElementView = BMP.Forms._views.SelectBoxMultiElement;
      var view;

      if (this.attributes.readonly) {
        this.removeView();
        ElementView = BMP.Forms._views.SelectReadOnlyElement;
      }

      view = new ElementView({model: this});
      this.set('_view', view);
      return view;
    },

    mapOptions: function () {
      var options = MultiChoiceModel.prototype.mapOptions.call(this);

      // setup header option if needed
      if (!this.attributes.firstOptionNotValid) {
        options.unshift({
          id: 'bm-header-option',
          label: 'Select one or more...',
          value: null
        });
      }

      return options;
    },

    val: function (selectedItemValues) {
      var result;

      if (selectedItemValues === undefined) {
        result = _.reduce(this.attributes.optionCollection.tail(), function (memo, option) {
          if (option.isSelected()) {
            memo.push(option.attributes.value);
          }

          return memo;
        }, []);

        return result.length ? result : undefined;
      }

      return this._toggleValues(selectedItemValues);
    }
  });
});
