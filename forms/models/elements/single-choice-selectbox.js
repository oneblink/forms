define(function (require) {
  'use strict';

  var _ = require('underscore');

  var SingleChoiceModel = require('forms/models/elements/single-choice');

  // select box choice model
  return SingleChoiceModel.extend({
    defaults: function () {
      return _.assign(SingleChoiceModel.prototype.defaults.call(this), {
        mode: 'collapsed',
        nativeMenu: true,
        firstOptionNotValid: false
      });
    },

    initializeView: function () {
      var ElementView = BMP.Forms._views.SelectBoxElement;
      var view;

      if (this.attributes.readonly) {
        this.removeView();
        ElementView = BMP.Forms._views.SelectReadOnlyElement;
      }

      view = new ElementView({model: this});
      this.set('_view', view);
      return view;
    },

    isEmpty: function () {
      return this._isEmpty(this.attributes.optionCollection.tail());
    },

    mapOptions: function () {
      var options = SingleChoiceModel.prototype.mapOptions.call(this);

      // setup header option if needed
      if (!this.attributes.firstOptionNotValid) {
        options.unshift({
          id: 'bm-header-option',
          label: 'Select one...',
          value: null
        });
      }

      return options;
    },

    /**
     * Select an option at a particular index which will be the
     * models value.
     * The first option will always be considered empty
     *
     * @param  {Number} optionIndex - The index to select
     * @returns {OptionModel} - the selected options model
     */
    selectOptionByIndex: function (optionIndex) {
      var optionsModel = SingleChoiceModel.prototype.selectOptionByIndex.apply(this, arguments);

      if (optionIndex === 0) {
        this.set('value', null);
      }

      return optionsModel;
    },

    /**
     * Set the value of the model. Will set the `isSelected` property on
     * the option model in the `optionCollection` colleciton.
     *
     * If no option in the `optionCollection` matches the value set
     * @param  {string|number} value - The value to set the model. `null` is considered epmpty
     * @return {string|OptionsModel} - The string value if no parameter is supplied or the options model that holds the specified value
     */
    val: function (value) {
      var optionModel;

      if (value === undefined) {
        return SingleChoiceModel.prototype.val.apply(this, arguments);
      }

      if (value === null) {
        this.attributes.optionCollection.deselectAll();
        optionModel = this.attributes.optionCollection.at(0);
        optionModel.select();
        this.set({
          value: null,
          isOtherVisible: false
        });
      } else {
        optionModel = SingleChoiceModel.prototype.val.apply(this, arguments);
      }

      return optionModel;
    },

    validate: function () {
      var result = SingleChoiceModel.prototype.validate.apply(this, arguments);
      var newErrors = [];

      if (this.attributes.optionCollection.length &&
          this.attributes.firstOptionNotValid &&
          this.attributes.required &&
          this.attributes.optionCollection.first().isSelected()) {
        newErrors.push({code: 'FIRST_OPTION_NOT_VALID'});
      }

      if (newErrors.length) {
        result = result || {value: []};
        result.value = result.value.concat(newErrors);
      }

      return result;
    }
  });
});
