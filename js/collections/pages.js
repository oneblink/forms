define(['models/page'], function (Page) {
  return Backbone.Collection.extend({
    model: Page,
    goto: function (index) {
      var self = this;
      if (!_.isNumber(index)) {
        index = 0;
      }
      this.forEach(function (page, number) {
        self.current = null;
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


