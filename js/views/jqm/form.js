define([], function() {
  var FormView = Backbone.View.extend({
    tagName: 'form',
    render: function() {
      var self = this,
          pages = this.model.attributes.pages;

      this.$el.empty();
      _.forEach(pages, function(page) {
        var view = page.attributes._view;

        view.render();
        self.$el.append(view.el);
      });
    }
  });

  return FormView;
});
