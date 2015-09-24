/**
 * This is a sample implementation of the API that the BIC must supply.
 */

define([
  'chai',
  'feature!promises',
  'jquery',
  'underscore',
  'moment',
  'BlinkForms',
  'definitions',
  'BMP.Blob',
  'BMP.BlinkGap',
  'feature!es5',
  'jquerymobile'
], function (chai, Promise, $, _, moment, Forms, defs) {
  'use strict';

  var $submitPopup, $footer, $grid, $colB;

  window.chai = chai;
  window.assert = chai.assert;

  window.Promise = window.Promise || Promise;

  $submitPopup = $('<div></div>').attr({
    id: 'submitPopup',
    'data-role': 'popup',
    'class': 'ui-content',
    'data-overlay-theme': 'a'
  }).appendTo(document.body);
  $footer = $('footer');
  $grid = $('<fieldset class="ui-grid-a"></fieldset>').appendTo($footer);
  $('<div class="ui-block-a"></div>').appendTo($grid);
  $colB = $('<div class="ui-block-b"></div>').appendTo($grid);
  $('<a></a>').attr({
    'id': 'previousFormPage',
    'data-role': 'button'
  }).text('Previous').appendTo($colB);
  $('<button></button>').attr({
    'data-action': 'submit',
    'data-role': 'button'
  }).text('Submit').appendTo($colB);
  $('<a></a>').attr({
    'id': 'nextFormPage',
    'data-role': 'button'
  }).text('Next').appendTo($colB);

  Forms.getDefinition = function (name, action) {
    return new Promise(function (resolve, reject) {
      var def = _.find(defs, function (d) {
        return d && d.default && d.default.name === name;
      });
      if (!def) {
        reject(def);
        return;
      }
      setTimeout(function () {
        try {
          resolve(Forms.flattenDefinition(def, action));
        } catch (err) {
          reject(err);
        }
      }, 100);
    });
  };

  BMP.Expression.fn.interaction = function (interaction, queryString) {
    return new Promise(function (resolve, reject) {
      $.ajax({
        type: 'GET',
        url: interaction + '.xml?' + queryString,
        dataType: 'xml'}).then(
        function (data) {
          resolve(data);
        }, function () {
          reject(arguments);
        }
     );
    });
  };

  BMP.Expression.fn.suitcase = function (suitcase, type) {
    return new Promise(function (resolve, reject) {
      $.ajax({
        type: 'GET',
        url: suitcase + '.xml?' + type,
        dataType: 'xml'}).then(
        function (data) {
          resolve(data);
        }, function () {
          reject(arguments);
        }
     );
    });
  };

  $submitPopup.popup();

  $(document.body).on('click', 'button[data-action=submit]', function () {
    Forms.current.getErrors();
    Forms.current.data().then(function (data) {
      var json = JSON.stringify(data, undefined, 2);
      $submitPopup.empty();
      $submitPopup.append('<pre>' + json + '</pre>');
      $submitPopup.popup('open');
    });
  });

  $(document.body).on('click', '#previousFormPage', function () {
    var index = Forms.current.get('pages').current.index();

    if (index > 0) {
      Forms.current.get('pages').goto(index - 1);
    }
  });

  $(document.body).on('click', '#nextFormPage', function () {
    var index = Forms.current.get('pages').current.index();

    if (index < Forms.current.get('pages').length - 1) {
      Forms.current.get('pages').goto(index + 1);
    }
  });

  BMP.FileInput.initialize();
});
