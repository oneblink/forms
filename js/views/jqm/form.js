define(['underscore', 'backbone', 'views/jqm/element'],
       function(_, Backbone, ElementView) {
  var FormView = Backbone.View.extend({
    tagName: 'section',
    className: '',
    events: {
    },
    render: function() {
      var self = this;
      this.$el.empty();
      _.forEach(this.model.get('elements'), function(el) {
        var view = new ElementView({model: el});
        view.render();
        self.$el.append(view.el);
      });
    }
  });

  return FormView;
});
