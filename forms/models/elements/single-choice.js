define(function (require) {
  'use strict';

  var _ = require('underscore');

  var ElementModel = require('forms/models/element');
  var ChoiceOptionsCollection = require('forms/collections/choice-option-collection');
  var OptionCollectionMixin = require('forms/mixins/option-collection-mixin');

  var SingleChoiceModel = {
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
     * Select an option at a particular index which will be the
     * models value.
     *
     * @param  {Number} optionIndex - The index to select
     * @returns {OptionModel} - the selected options model
     */
    selectOptionByIndex: function (optionIndex) {
      var optionsModel;

      this.attributes.optionCollection.deselectAll();
      optionsModel = this.attributes.optionCollection.at(optionIndex);

      if (optionsModel) {
        optionsModel.select();
        this.set({
          'value': optionsModel.attributes.value
        });
      }

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

      //this.setDirty();
      this.attributes.optionCollection.deselectAll();

      if (value !== null) {
        selectedOption = this.attributes.optionCollection.getOptionByValue(value) || this.attributes.optionCollection.get(this.attributes.optionCollection.OTHER_ID);
        if (selectedOption) {
          selectedOption.select();

          if (selectedOption.isOther()) {
            selectedOption.set('value', value);
          }
        }
      }

      this.set({
        'value': value
      });

      return selectedOption;
    }
  };

  return ElementModel.extend(_.assign({}, OptionCollectionMixin, SingleChoiceModel));
});
