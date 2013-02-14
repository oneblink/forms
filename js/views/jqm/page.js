define([], function() {
  var PageView = Backbone.View.extend({
    tagName: 'section',
    initialize: function() {
      var attrs = this.model.attributes;
      if (attrs.class) {
        this.$el.addClass(attrs.class);
      }
    },
    render: function() {
      var self = this,
          form = this.model.attributes.form,
          index;

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

