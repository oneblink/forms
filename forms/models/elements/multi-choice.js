define(function (require) {
  'use strict';

  var _ = require('underscore');

  var ElementModel = require('forms/models/element');
  var ChoiceOptionsCollection = require('forms/collections/choice-option-collection');
  var OptionCollectionMixin = require('forms/mixins/option-collection-mixin');

  var MultiChoiceModel = {
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

    // TODO : proper multi element view
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

    _toggleOption: function (optionModel) {
      if (optionModel) {
        optionModel.set('isSelected', !optionModel.attributes.isSelected);
      }

      return optionModel;
    },

    /**
     * Select or deselect an option at a particular index
     *
     * @param  {Number} optionIndex - The index to select
     * @returns {OptionModel} - the selected options model
     */
    selectOptionByIndex: function (optionIndex) {
      return this._toggleOption(this.attributes.optionCollection.at(optionIndex));
    },

    /**
     * Select or deselect an option with a particular value
     *
     * @param  {String|Number} value - The value to search for
     * @returns {OptionModel} - the selected options model
     */
    selectOptionByValue: function (value) {
      return this._toggleOption(this.attributes.optionCollection.getOptionByValue(value));
    },

    // setOptions: function (domValues) {
    //   var optionCollection = this.attributes.optionCollection;

    //   _.each(domValues, function (domOption, idx) {
    //     var option = optionCollection.at(idx);
    //     option.set('isSelected', domOption.isSelected);
    //     if (option.isOther()) {
    //       this.set('isOtherVisible', option.attributes.isSelected);
    //     }
    //   }, this);

    //   this.isValid();
    // },

    /**
     * Set the value of the model. Will set the `isSelected` property on
     * the option model in the `optionCollection` colleciton that have
     * a value equal to one of the items in the array. Any values in the
     * array that are not values in an option model will be added to an
     * array, and that array will be run through JSON.stringify and then
     * be put into the 'other' options 'value' property.
     *
     * If no option in the `optionCollection` matches the value set
     * @param  {string|number} value - The value to set the model
     * @return {string|OptionsModel} - The string value if no parameter is supplied or the options model that holds the specified value
     */
    val: function (selectedItemValues) {
      var result;

      if (selectedItemValues === undefined) {
        result = this.attributes.optionCollection.reduce(function (memo, option) {
          if (option.isSelected()) {
            memo.push(option.attributes.value);
          }

          return memo;
        }, []);

        return result.length ? result : undefined;
      }

      return this._toggleValues(selectedItemValues);
    },

    _toggleValues: function (selectedItemValues) {
      var selectedOptions;
      var otherValues;
      var otherOption;

      //this.setDirty();
      this.attributes.optionCollection.deselectAll();

      if (selectedItemValues === null) {
        this.set('value', null);
        return undefined;
      }

      if (!_.isArray(selectedItemValues)) {
        // throw new TypeError('Multiple Choice: Value must be an Array');
        selectedItemValues = [selectedItemValues];
      }

      selectedOptions = _.reduce(selectedItemValues, function (memo, value) {
        var option = this.attributes.optionCollection.getOptionByValue(value);
        if (option) {
          this._toggleOption(option);
          memo.push(option);
        }
        return memo;
      }, [], this);

      // now that we have updated any values, we need to check if we need
      // to update the "other" option
      otherValues = _.difference(selectedItemValues, this.attributes.optionCollection.getSelectedValues());
      otherOption = this.attributes.optionCollection.getOtherOption();

      if (!otherValues.length) {
        /* eslint-disable no-unused-expressions */
        otherOption && otherOption.set('isSelected', false);
        /* eslint-enable no-unused-expressions */
        this.set('value', this.val());
        return selectedOptions;
      }

      if (!otherOption) {
        return selectedOptions;
      }

      otherValues = otherValues.length === 1 ? otherValues[0] : JSON.stringify(otherValues);
      otherOption.set({
        'isSelected': true,
        'value': otherValues
      });

      this.set('value', this.val());

      return selectedOptions;
    }
  };

  return ElementModel.extend(_.assign(MultiChoiceModel, OptionCollectionMixin));
});
