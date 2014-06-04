/**
 * This is a sample implementation of the API that the BIC must supply.
 */

define(['feature!promises', 'jquery', 'underscore', 'BlinkForms', 'definitions', 'BMP.Blob'],
  function (Promise, $, _, Forms, defs, BMP) {

    var $submitPopup, $footer, $grid, $colB;
    $submitPopup = $('<div></div>').attr({
      id: 'submitPopup',
      'data-role': 'popup',
      class: 'ui-content',
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
      var elNames,
        elements,
        collapseAction = function (d) {
          var attrs = d.default || {};
          if (action && d[action]) {
            _.extend(attrs, d[action]);
          }
          return attrs;
        };

      return new Promise(function (resolve, reject) {
        var def = _.find(defs, function (def) {
          return def && def.default && def.default.name === name;
        });
        if (!def) {
          reject(def);
          return;
        }
        def = $.parseJSON(JSON.stringify(def));
        // found definition, but need to collapse to specific action/view
        if (_.isArray(def.default._elements)) {
          def.default._elements = _.map(def.default._elements, collapseAction);
        }
        if (_.isArray(def.default._sections)) {
          def.default._sections = _.map(def.default._sections, collapseAction);
        }
        if (_.isArray(def.default._pages)) {
          def.default._pages = _.map(def.default._pages, collapseAction);
        }
        if (_.isArray(def.default._behaviours)) {
          def.default._behaviours = _.map(def.default._behaviours, collapseAction);
        }
        if (_.isArray(def.default._checks)) {
          def.default._checks = _.map(def.default._checks, collapseAction);
        }
        if (_.isArray(def.default._actions)) {
          def.default._actions = _.map(def.default._actions, collapseAction);
        }

        if (!action) {
          // pass a clone back, for safety
          resolve(def.default);
          return;
        }

        if (def[action] && def[action]._elements) {
          elements = def.default._elements;
          delete def.default._elements;
          elNames = def[action]._elements;
          delete def[action]._elements;
          _.extend(def.default, def[action]);

          // remove all elements not needed for this action
          elements = _.filter(elements, function (el) {
            return elNames.indexOf(el.name) !== -1;
          });
          // sort elements as per the action-specific order
          elements = _.sortBy(elements, function (el) {
            return elNames.indexOf(el.name);
          });

          def.default._elements = elements;
        }

        resolve(def.default);
      });
    };

    $submitPopup.popup();

    $(document.body).on('click', 'button[data-action=submit]', function () {
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
