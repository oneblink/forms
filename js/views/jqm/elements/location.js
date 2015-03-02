define(['views/jqm/element',
'text!views/jqm/templates/location.html'
], function (ElementView, html) {
  'use strict';
  var LocationElementView = ElementView.extend({
    render: function () {
      var $button, $div;
      var i18n = window.i18n['BMP/Forms/elements'];

      //load google maps
      BMP.Forms.loadMapScript();
      this.$el.empty();
      this.renderLabel();

      $button = $('<button />');
      $button.text(i18n.LOCATION_BUTTON);

      $div = $('<div class="ui-input-text"></div>');
      $div.append($button);

      this.$el.append($div);

      $button.on('click', $.proxy(LocationElementView.onButtonClick, this));

      this.bindRivets();
      this.model.on('change:value', this.renderFigure, this);
    },
    renderFigure: function () {
      var $figure, $figcaption, loc, $img, caption, staticMap;
      if (typeof this.model.attributes.value === 'string') {
        loc = JSON.parse(this.model.attributes.value);
      } else {
        loc = this.model.attributes.value;
      }

      this.$el.children('figure').remove();
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
      $img = $('<img />');
      staticMap = 'http://maps.google.com/maps/api/staticmap?markers=';
      staticMap += loc.latitude + ',' + loc.longitude;
      staticMap += '&size=300x200&zoom=20&maptype=hybrid&sensor=true';
      $img.attr('src', staticMap);
      $img.css({
        'max-height': '7em',
        'max-width': '100%'
      });
      $figure.append($img);
      this.$el.append($figure);
    },
    remove: function () {
      this.$el.children('button').off('click');
      this.model.off('change:value', this.renderFigure, this);
      return ElementView.prototype.remove.call(this);
    }
  }, {
    // static properties and methods
    onDone: function (event) {
      var value = $('#bmp-forms-location').find('input').val();

      if (value) {
        value = JSON.parse(value);
        this.model.set('value', value);
      }
      $('#bmp-forms-location').popup('close');
      event.preventDefault();
      return false;
    },
    onClear: function (event) {
      this.model.unset('value');
      $('#bmp-forms-location').popup('close');
      event.preventDefault();
      return false;
    },
    onCancel: function (event) {
      $('#bmp-forms-location').popup('close');
      event.preventDefault();
      return false;
    },
    onButtonClick: function (event) {
      var i18n = window.i18n['BMP/Forms/elements'],
        view = this,
        model = this.model,
        $div = $(html),
        options = {
          dismissible: true,
          history: false,
          afterclose: function (e, ui) {
            if (e && ui) {
              $div.remove();
            }
          }
        },
        $window = $(window),
        $form,
        windowX = $window.innerWidth(),
        windowY = $window.innerHeight(),
        value;

      $(document.body).append($div);
      $div.find('#map-canvas').height(windowY - 100);
      $div.find('#map-canvas').width(windowX - 60);

      $form = $div.children('form');
      $form.on('submit', $.proxy(LocationElementView.onDone, this));

      //disable button till location located
      view.$el.find('button').addClass('ui-disabled');
      view.$el.find('.ui-btn-text').text(i18n.LOCATING_SHORT);

      value = model.get('value');
      if (!value) {
        model.getGeoLocation().then(function () { // onSuccess
          value = model.get('value');
          LocationElementView.initializeMap(value, $div);
          //enable location button
          view.$el.find('button').removeClass('ui-disabled');
          view.$el.find('.ui-btn-text').text(i18n.LOCATION_BUTTON);
        }, function () { // onError (err)
          view.$el.find('button').removeClass('ui-disabled');
          view.$el.find('.ui-btn-text').text(i18n.LOCATION_BUTTON);
        });
      } else {
        $div.find('[data-action=clear]').removeClass('ui-disabled');
        LocationElementView.initializeMap(value, $div);
        view.$el.find('button').removeClass('ui-disabled');
        view.$el.find('.ui-btn-text').text(i18n.LOCATION_BUTTON);
      }

      //finally creating and poping up map
      $form.trigger('create');
      $div.popup(options);
      $div.popup('open');
      $form.on('click', '[data-action=clear]',
        $.proxy(LocationElementView.onClear, this));
      $form.on('click', '[data-action=cancel]',
        $.proxy(LocationElementView.onCancel, this));
      event.preventDefault();
      return false;
    },
    initializeMap: function (value, $div) {
      var warning = window.i18n['BMP/Forms/warning'],
        map,
        myLatlng,
        mapOptions,
        marker,
        position;

      //creating map
      myLatlng = new google.maps.LatLng(value.latitude, value.longitude);
      mapOptions = {
          zoom: 8,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      try {
        map = new google.maps.Map($div.find('#map-canvas')[0], mapOptions);
      } catch (err) {
        $div.find('#map-canvas').text(warning.ERROR_GOOGLE_MAP);
      }

      //creating draggable marker
      marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        draggable: true
      });
      //adding listener to marker dragend event
      google.maps.event.addListener(marker, 'dragend', function(){
        position = {
          latitude: marker.getPosition().lat(),
          longitude: marker.getPosition().lng(),
          altitude: null,
          accuracy: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null
        };
        $div.find('input').val(JSON.stringify(position));
      });
    }
  });

  return LocationElementView;
});
