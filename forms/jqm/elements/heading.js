define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');

  // local modules

  var ElementView = require('forms/jqm/element');

  // this module

  return ElementView.extend({
    tagName: 'header',

    // explicitly override super's modelEvents
    modelEvents: {
      'change:text': 'renderHeading',
      'change:smallText': 'renderSmallText',
      'change:class': 'onChangeClass',
      'change:hidden': 'onChangeHidden',
      'change:label': 'renderLabel'
    },

    initialize: function () {
      var element = this.model;

      this.$el.attr('data-name', element.attributes.name);
      this.$el.attr('data-element-type', element.attributes.type);
      this.$el.data('model', element);

      ElementView.prototype.initialize.call(this);
    },

    renderHeading: function () {
      var tag;
      if (!this.$heading) {
        tag = 'h' + this.model.attributes.level;
        this.$heading = $(document.createElement(tag));
        this.$el.append(this.$heading);
      }
      this.$heading.text(this.model.attributes.text);
    },

    renderSmallText: function () {
      var text = this.model.attributes.smallText;
      if (!text) {
        return;
      }
      if (!this.$smallText) {
        this.$smallText = $(document.createElement('p'));
        this.$el.append(this.$smallText);
      }
      this.$smallText.html(this.model.attributes.smallText);
    },

    render: function () {
      this.renderHeading();
      this.renderSmallText();
      this.$el.fieldcontain();
    }
  });
});
