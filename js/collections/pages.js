define(['models/page', 'waitfor'], function (Page, waitFor) {
  return Backbone.Collection.extend({
    model: Page,
    goto: function (index) {
      var self, currentform, currentPage;
      self = this;
      if (!_.isNumber(index)) {
        index = 0;
      }
      self.current = null;
      this.forEach(function (page, number) {
        var form = page.attributes.form,
          view = page.attributes._view;

        if (number === index) {
          self.current = page;
          view.render();
          form.attributes._view.$el.append(view.el);
          form.attributes._view.$el.trigger('create');
        } else {
          $(view.el).remove();
        }
      });
      currentPage = self.current;
      currentform = currentPage.attributes.form;

      waitFor(function () {
        var aBody$ = currentPage.attributes._view.$el.closest('body');
        return aBody$.length && aBody$[0] === document.body;
      }, null, function () {
        BMP.Forms.trigger('formInjected', currentform.model);
      });
    }
  });
});
