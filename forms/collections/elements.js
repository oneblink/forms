define(function (require) {
  'use strict';

  // foreign modules

  var _ = require('underscore');
  var Backbone = require('backbone');

  // local modules

  var ElementModel = require('forms/models/element');
  var formsErrors = require('forms/error-helpers');

  function addErrorText (error) {
    error.text = formsErrors.toErrorString(error);
    return error;
  }

  function addToErrorList (errorList, elementModel) {
    var err;
    if (!_.isEmpty(elementModel.validationError)) {
      err = {};
      err[ elementModel.get('name') ] = _.map(elementModel.validationError.value, addErrorText);
      errorList.push(err);
    }

    if (elementModel.get('forms')) {
      errorList = elementModel.get('forms').reduce(function (errList, form) {
        return form.get('elements').reduce(addToErrorList, errList);
      }, errorList);
    }

    return errorList;
  }

  function makeLengthObj (length, total) {
    var ret = {};
    Object.defineProperties(ret, {
      length: {
        value: length,
        writable: false,
        enumerable: false
      },
      total: {
        value: total,
        writable: false,
        enumerable: false
      }
    });

    return ret;
  }

  // this module

  return Backbone.Collection.extend({
    model: ElementModel,

    /**
     * Gets a list of validationErrors currently set on the models.
     * @deprecated
     *
     * @param  {Number} [fieldLimit=undefined] - How many *field errors* to bring back. If
     * none specified, then all fields are returned.
     * @return {object} - { fieldname: [errors] }
     *
     * @example
     * collection.getErrors(2);
     * // => {
     * //       modelName : [{code: 'MAXDECIMALS', <errorname>: value, text: "pretty error message" }, {code: 'MINDECIMALS', <errorname>: value, text: "pretty error message"}],
     * //       modelName2: [{code: 'MAXDECIMALS', <errorname>: value2, text: "pretty error message"}, {code: 'MINDECIMALS', <errorname>: value2, text: "pretty error message"}],
     * //       length: 2,
     * //       total: 12
     * //    }
     */
    getErrors: function (fieldLimit) {
      var errors;
      var length;

      /* eslint-disable no-console, no-unused-expressions */
      console && console.warn('BlinkForms: elementCollection#getErrors is deprecated and will be removed. Please use elementModel#getInvalidElements instead.');
      /* eslint-enable no-console, no-unused-expressions */

      errors = this.reduce(addToErrorList, []);
      length = !fieldLimit ? errors.length : Math.min(errors.length, fieldLimit);

      return _.reduce(_.take(errors, length), function (memo, err) {
        return _.extend(memo, err);
      }, makeLengthObj(length, errors.length));
    },

    /**
     * @typedef {Object} BlinkFormsErrorList
     *
     * @property {Array} errors - An Array of element Models that have failed validation
     * @property {Number} length - How many elements were requested when creating this object
     * @property {Number} Total - How many elements **in total** have errors
     */

    /**
     * Gets a list of element models that have failed validation
     * @param  {Number} fieldLimit The number of fields to return. Defaults to 0
     * @return {BlinkFormsErrorList} An object containing the Errors, limited to `fieldLimit` number of errors.
     *
     * @example
     *  // collection.getInvalid(2)
     *  // => {
     *  // errors: [textElementModel, requiredElementModel]
     *  // length: 2,
     *  // total: 14
     *  //}
     */
    getInvalid: function (fieldLimit) {
      var errors;
      var ret;
      var length;
      var reducer = function (memo, elementModel) {
        if (elementModel.validationError) {
          memo.push(elementModel);
        }

        return memo;
      };

      errors = this.reduce(function (memo, elementModel) {
        var subFormErrors;
        if (elementModel.get('type') === 'subForm') {
          subFormErrors = _.chain(elementModel.get('forms').invoke('getInvalidElements'))
                            .compact()
                            .pluck('errors')
                            .flatten()
                            .value();
          memo = memo.concat(subFormErrors);
        }

        return reducer(memo, elementModel);
      }, []);

      length = !fieldLimit ? errors.length : Math.min(errors.length, fieldLimit);

      if (!errors.length) {
        return undefined;
      }

      ret = makeLengthObj(length, errors.length);
      ret.errors = fieldLimit ? _.take(errors, fieldLimit) : errors;
      return ret;
    },

    /**
     * sets external errors on members of the collection
     * @param {object} errorList - An object with key/values of
     * {@link  fieldname/errorArray}
     */
    setErrors: function (errorList, options) {
      _.each(errorList, function (errors, modelId) {
        var m = this.get(modelId);
        /* eslint-disable no-unused-expressions */
        m && m.setExternalErrors(errors, options);
        /* eslint-enable no-unused-expressions */
      }, this);
    },

    setPristine: function () {
      this.invoke('setPristine');
    },

    setDirty: function () {
      this.invoke('setDirty');
    }
  });
});
