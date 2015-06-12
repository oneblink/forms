define(['views/jqm/elements/location'], function (LocationElementView) {
  'use strict';
  var LocationNativeElementView = LocationElementView.extend({
    render: function () {
      this.renderButtons();
    },
    renderFigure: function () {
      var $figure,
        $figcaption,
        loc,
        caption,
        self = this,
        attr = self.model.attributes;

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
      self.$el.append($figure);
    }
  }, {
    // static properties and methods
    onSuccess: function (location) {
      var self = this;
      setTimeout(function() {
        if(location) {
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
      var self = this,
        model = this.model,
        value;

      value = model.get('value');

      //disable button till location located
      self.constructor.disableLocationButton.bind(self)();

      if (_.isEmpty(value) || !value.latitude || !value.longitude) {
        model.getGeoLocation().then(function () { // onSuccess
          value = model.get('currentlocation');
          //set value for first time
          window.navigator.map.confirmLocation($.proxy(LocationNativeElementView.onSuccess, self), $.proxy(LocationNativeElementView.onFail, self), value);
          self.constructor.enableLocationButton.bind(self)();
        }, function () { // onError (err)
          //enable location button
          self.constructor.enableLocationButton.bind(self)();
        });
      } else {
        window.navigator.map.confirmLocation($.proxy(LocationNativeElementView.onSuccess, self), $.proxy(LocationNativeElementView.onFail, self), value);
        //enable location button
        self.constructor.enableLocationButton.bind(self)();
      }

      //finally creating and poping up map
      event.preventDefault();
      return false;
    }
  });

  return LocationNativeElementView;
});
