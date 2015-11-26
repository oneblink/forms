define(function (require) {
  'use strict';

  var _ = require('underscore');

  var ElementModel = require('forms/models/element');
  var ChoiceOptionsCollection = require('forms/collections/choice-option-collection');

  // radio button choice model
  return ElementModel.extend({
    defaults: function () {
      return _.assign(ElementModel.prototype.defaults.call(this), {
        mode: 'expanded',
        layout: 'vertical',
        nativeMenu: false,
        other: false,
        isOtherVisible: false,
        optionCollection: new ChoiceOptionsCollection()
      });
    },

    initialize: function () {
      ElementModel.prototype.initialize.apply(this, arguments);

      if (this.attributes.canSpecifyOther) {
        this.attributes.other = !!this.attributes.canSpecifyOther;
        this.attributes.canSpecifyOther = null;
      }

      this.resetOptionCollection();

      this.on('change:options', this.resetOptionCollection, this);
    },

    initializeView: function () {
      var ElementView = BMP.Forms._views.RadioElement;
      var view;

      if (this.attributes.readonly) {
        this.removeView();
        ElementView = BMP.Forms._views.SelectReadOnlyElement;
      }

      view = new ElementView({model: this});
      this.set('_view', view);
      return view;
    },

    /**
     * Are any options selected?
     * @return {Boolean}
     */
    isEmpty: function () {
      return !this.attributes.optionCollection.getSelected().length;
    },

    /**
     * Convert an object of key/value pairs (`attributes.options`) into an array of
     * select option attributes.
     * @return {[type]} [description]
     */
    mapOptions: function () {
      var options = _.map(this.attributes.options, function (label, value) {
        return {
          id: value,
          isSelected: value === this.attributes.value,
          label: label,
          value: value
        };
      }, this);

      // add other option to the end
      if (this.attributes.other) {
        options.push({
          id: this.attributes.optionCollection.OTHER_ID,
          isSelected: false,
          label: 'Other',
          value: this.attributes.optionCollection.getOtherValue()
        });
      }

      return options;
    },

    /**
     * Calls `reset` on `attributes.optionCollection` passing in an array
     * created by mapping over `attributes.options`.
     */
    resetOptionCollection: function () {
      this.attributes.optionCollection.reset(this.mapOptions());
    },

    /**
     * Select an option at a particular index which will be the
     * models value.
     *
     * @param  {Number} optionIndex - The index to select
     * @returns {OptionModel} - the selected options model
     */
    selectOptionByIndex: function (optionIndex) {
      var optionsModel;

      this.attributes.optionCollection.deselectAll();
      optionsModel = this.attributes.optionCollection.select(optionIndex);

      this.set({
        'value': optionsModel.attributes.value,
        'isOtherVisible': optionsModel && optionsModel.attributes.id === this.attributes.optionCollection.OTHER_ID
      });
      return optionsModel;
    },

    /**
     * Set the value of the model. Will set the `isSelected` property on
     * the option model in the `optionCollection` colleciton.
     *
     * If no option in the `optionCollection` matches the value set
     * @param  {string|number} value - The value to set the model
     * @return {string|OptionsModel} - The string value if no parameter is supplied or the options model that holds the specified value
     */
    val: function (value) {
      var selectedOption;
      if (value === undefined) {
        selectedOption = this.attributes.optionCollection.getSelected()[0];
        return selectedOption ? selectedOption.attributes.value : undefined;
      }
      this.attributes.optionCollection.deselectAll();

      if (value !== null) {
        selectedOption = this.attributes.optionCollection.get(value) || this.attributes.optionCollection.get(this.attributes.optionCollection.OTHER_ID);
        if (selectedOption) {
          selectedOption.set('isSelected', true);

          if (selectedOption.id === this.attributes.optionCollection.OTHER_ID) {
            selectedOption.set('value', value);
          }
        }
      }

      this.set({
        'value': value,
        'isOtherVisible': selectedOption && selectedOption.id === this.attributes.optionCollection.OTHER_ID
      });

      return selectedOption;
    }
  });
});
