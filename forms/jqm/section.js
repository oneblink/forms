define(function (require) {
  'use strict';

  // foreign modules

  var Backbone = require('backbone');

  // this module

  return Backbone.View.extend({
    tagName: 'section',
    initialize: function () {
      var attrs = this.model.attributes;
      if (attrs.class) {
        this.$el.addClass(attrs.class);
      }
    },
    render: function () {
      var self = this;

      this.$el.empty();
      this.model.attributes.elements.forEach(function (el) {
        var view, type;
        type = el.attributes.type;
        if (!el.attributes._view && typeof el.initializeView === 'function') {
          el.initializeView();
        }
        if (type !== 'hidden') {
          view = el.attributes._view;
          view.render();
          if (view.renderHint) {
            view.renderHint();
          }
          self.$el.append(view.el);
        }
      });
    },
    show: function () {
      this.$el.show();
    },
    hide: function () {
      this.$el.hide();
    },
    remove: function () {
      var result;
      this.model.attributes.elements.forEach(function (el) {
        if (el.attributes._view) {
          el.attributes._view.remove();
        }
      });
      this.model.unset('_view');
      result = Backbone.View.prototype.remove.call(this);
      // not sure if this still needs to be here or not,
      // but don't see anything breaking
      this.$el.remove();
      this.model = null;
      this.$el = null;
      this.el = null;
      return result;
    },
    onAttached: function () {
      this.model.attributes.elements.models.forEach(function (el) {
        var view = el.attributes._view;
        if (typeof view.onAttached === 'function') {
          view.onAttached();
        }
      });
    }
  });
});
