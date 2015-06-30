define(['forms/models/page', 'poll-until'], function (Page, pollUntil) {
  return Backbone.Collection.extend({
    model: Page,
    'goto': function (index) {
      var self, currentform, currentPage;
      self = this;
      if (!_.isNumber(index)) {
        index = 0;
      }
      self.current = null;

      // TODO: separate out the View parts, they don't belong here
      this.forEach(function (page, number) {
        var form = page.attributes.form,
          view;

        if (number === index) {
          self.current = page;
          page.initializeView();
          view = page.attributes._view;
          view.render();
          form.attributes._view.$el.append(view.el);
        } else {
          view = page.attributes._view;
          if (view) {
            view.remove();
            page.unset('_view');
          }
        }
      });
      currentPage = self.current;
      currentform = currentPage.attributes.form;

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
