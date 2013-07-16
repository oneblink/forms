define(function () {
  var FormView = Backbone.View.extend({
    tagName: 'form',
    attributes: {
      'novalidate': 'novalidate'
    },
    remove: function () {
      this.$el.removeData('model');
      return Backbone.View.prototype.remove.call(this);
    },
    render: function () {
      var self = this,
        pages = this.model.attributes.pages;

      this.$el.empty();
      this.$el.attr('data-form', this.model.attributes.name);
      this.$el.data('model', this.model);
      pages.forEach(function (page) {
        var view = page.attributes._view;

        view.render();
        self.$el.append(view.el);
      });
      pages.goto(0);
    }
  });

  return FormView;
});
