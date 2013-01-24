define(['underscore', 'backbone', 'views/jqm/element'],
       function(_, Backbone, ElementView) {
  var PageView = Backbone.View.extend({
    tagName: 'section',
    attributes: {
      'data-role': 'page'
    },
    events: {
    },
    render: function() {
      var self = this;
      this.$el.empty();
      this.model.get('elements').forEach(function(el) {
        var view = new ElementView({model: el}),
            type = el.get('type');

        view.render();
        if (type === 'hidden') {
          self.$el.prepend(view.el);
        } else {
          self.$el.append(view.el);
        }
      });
    }
  });

  return PageView;
});

