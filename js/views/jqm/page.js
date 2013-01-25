define(['underscore', 'backbone'],
       function(_, Backbone) {
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
        var view = el.attributes._view,
            type = el.attributes.type;

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

