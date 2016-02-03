define(function (require) {
  'use strict';

  // foreign modules

  var _ = require('underscore');
  var Backbone = require('backbone');

  // local modules

  var Page = require('forms/models/page');
  var pollUntil = require('poll-until');

  // this module

  return Backbone.Collection.extend({
    model: Page,
    goto: function (index) {
      var self, currentform, currentPage;
      var view;
      self = this;

      if (!_.isNumber(index)) {
        index = 0;
      }

      if (self.current) {
        self.current.removeView();
      }

      self.current = null;

      self.current = this.at(index);
      currentPage = self.current;
      currentform = currentPage.attributes.form;

      // TODO: separate out the View parts, they don't belong here

      currentPage.initializeView();
      view = currentPage.attributes._view;
      view.render();
      currentform.attributes._view.$el.append(view.el);

      pollUntil(function () {
        var aBody$;
        if (currentPage.attributes._view) {
          aBody$ = currentPage.attributes._view.$el.closest('body');
        }
        return aBody$ && aBody$.length && aBody$[0] === document.body;
      }, null, function () {
        BMP.Forms.trigger('formInjected', currentform);
        BMP.Forms.trigger('pageInjected', currentPage);
        currentform.attributes._view.onAttached();
      });
    }
  });
});
