define(['views/jqm/element'], function (ElementView) {
  'use strict';
  var LocationElementView = ElementView.extend({
    render: function () {
      var $button, $div;

      this.$el.empty();
      this.renderLabel();

      $button = $('<button />');
      $button.text('Detect Location');

      $div = $('<div class="ui-input-text"></div>');
      $div.append($button);

      this.$el.append($div);

      $button.on('click', $.proxy(LocationElementView.onButtonClick, this));

      this.bindRivets();
      this.model.on('change:value', this.renderFigure, this);
    },
    renderFigure: function () {
      var $figure, $figcaption, loc, $img, caption, staticMap;
      loc = this.model.attributes.value;
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
    onButtonClick: function (event) {
      this.model.getGeoLocation();
      event.preventDefault();
      return false;
    }
  });

  return LocationElementView;
});

