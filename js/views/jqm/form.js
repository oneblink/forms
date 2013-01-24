define(['underscore', 'backbone', 'views/jqm/page'],
       function(_, Backbone, PageView) {
  var FormView = Backbone.View.extend({
    tagName: 'form',
    attributes: {
    },
    events: {
    },
    render: function() {
      var self = this,
          pages = this.model.attributes.pages;

      this.$el.empty();
      _.forEach(pages, function(page) {
        var view = new PageView({ model: page });

        view.render();
        self.$el.append(view.el);
      });
    }
  });

  return FormView;
});
