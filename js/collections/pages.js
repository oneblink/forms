define(['models/page', 'waitfor'], function (Page, waitFor) {
  return Backbone.Collection.extend({
    model: Page,
    'goto': function (index) {
      var self, currentform, currentPage;
      self = this;
      if (!_.isNumber(index)) {
        index = 0;
      }
      self.current = null;
      this.forEach(function (page, number) {
        var form = page.attributes.form,
          view;

        if (number === index) {
          self.current = page;
          page.initializeView();
          view = page.attributes._view;
          view.render();
          form.attributes._view.$el.append(view.el);
          form.attributes._view.$el.trigger('create');
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

      waitFor(function () {
        var aBody$;
        if (currentPage.attributes._view) {
          aBody$ = currentPage.attributes._view.$el.closest('body');
        }
        return aBody$ && aBody$.length && aBody$[0] === document.body;
      }, null, function () {
        BMP.Forms.trigger('formInjected', currentform.model);
        BMP.Forms.trigger('pageInjected', currentPage);
      });
    }
  });
});
