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
      var pages = this.model.attributes.pages,
        $header = $('<header></header>'),
        $footer = $('<footer></footer>');

      this.$el.empty();
      this.$el.attr('data-form', this.model.attributes.name);
      this.$el.data('model', this.model);
      if (this.model.attributes.header) {
        $header.append(this.model.attributes.header);
        this.$el.append($header);
      }
      pages.goto(0);
      if (this.model.attributes.footer) {
        $footer.append(this.model.attributes.footer);
        this.$el.append($footer);
      }
    }
  });

  return FormView;
});
