define(['models/page'], function (Page) {
  return Backbone.Collection.extend({
    model: Page,
    goto: function (index) {
      var self = this;
      if (!_.isNumber(index)) {
        index = 0;
      }
      self.current = null;
      this.forEach(function (page, number) {
        if (number === index) {
          self.current = page;
          page.show();
        } else {
          page.hide();
        }
      });
    }
  });
});
