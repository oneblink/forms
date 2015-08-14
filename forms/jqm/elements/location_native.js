define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');
  var _ = require('underscore');

  // local modules

  var LocationElementView = require('forms/jqm/elements/location');

  // this module
  var LocationNativeElementView = LocationElementView.extend({
    render: function () {
      this.renderButtons();
    },
    renderFigure: function () {
      var $figure,
        $figcaption,
        loc,
        caption,
        fetchImage;
      var self = this;
      var attr = self.model.attributes;

      fetchImage = function (loc, $figure) {
        var success,
          error;
        // if navigator.map or navigator.map.getStaticMap not defined
        if (!window.navigator.map || !window.navigator.map.getStaticMap) {
          return;
        }

        // on success, attach image to $figure
        success = function (map) {
          var $img = $('<img />');
          $img.attr('src', map);
          $img.css({
            'max-height': '7em',
            'max-width': '100%'
          });
          $figure.append($img);
        };

        // on error, just log the error
        error = function (message) {
          window.console.error('Static-MAP: ' + message);
        };

        // get static map
        window.navigator.map.getStaticMap(success, error, {
          'pushpins': [[loc.latitude, loc.longitude, 37]],
          'centerPoint': [loc.latitude, loc.longitude],
          'zoomLevel': 18,
          'mapSize': [300, 200],
          'imagerySet': 'AerialWithLabels'
        });
      };

      if (typeof attr.value === 'string') {
        try {
          loc = JSON.parse(attr.value);
        } catch (e) {
          loc = null;
        }
      } else {
        loc = attr.value;
      }

      self.$el.children('figure').remove();
      if (!loc || !loc.latitude || !loc.longitude) {
        return;
      }
      $figure = $('<figure></figure>');
      $figcaption = $('<figcaption></figcaption>').appendTo($figure);
      caption = 'lat: ' + loc.latitude + '; long: ' + loc.longitude;
      if (loc.accuracy) {
        caption += '; &plusmn;' + loc.accuracy + 'M';
      }
      $figcaption.html(caption);
      fetchImage(loc, $figure);
      self.$el.append($figure);
    }
  }, {
    // static properties and methods
    onSuccess: function (location) {
      var self = this;
      setTimeout(function () {
        if (location) {
          self.model.set('value', location);
        }
        self.trigger('confirmLocation', location);
      }, 0);
    },
    onFail: function (message) {
      window.console.error('MAPS: ' + message);
      return false;
    },
    onButtonClick: function (event) {
      var self = this;
      var model = this.model;
      var value;

      value = model.get('value');

      // disable button till location located
      self.constructor.disableLocationButton.bind(self)();

      if (_.isEmpty(value) || !value.latitude || !value.longitude) {
        model.getGeoLocation().then(function () { // onSuccess
          value = model.get('currentlocation');
          // set value for first time
          window.navigator.map.confirmLocation($.proxy(LocationNativeElementView.onSuccess, self), $.proxy(LocationNativeElementView.onFail, self), value);
          self.constructor.enableLocationButton.bind(self)();
        }, function () { // onError (err)
          // enable location button
          self.constructor.enableLocationButton.bind(self)();
        });
      } else {
        window.navigator.map.confirmLocation($.proxy(LocationNativeElementView.onSuccess, self), $.proxy(LocationNativeElementView.onFail, self), value);
        // enable location button
        self.constructor.enableLocationButton.bind(self)();
      }

      // finally creating and poping up map
      event.preventDefault();
      return false;
    }
  });

  return LocationNativeElementView;
});
