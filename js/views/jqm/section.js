define(function () {
  var SectionView = Backbone.View.extend({
    tagName: 'section',
    initialize: function () {
      var attrs = this.model.attributes;
      /*jslint sub:true*/ // IE8: reserved keywords can't be used as properties
      if (attrs['class']) {
        this.$el.addClass(attrs['class']);
      }
      /*jslint sub:false*/
    },
    render: function () {
      var self = this;

      this.$el.empty();
      this.model.get('elements').forEach(function (el) {
        var view, type;
        type = el.attributes.type;
        if (!el.attributes._view && typeof el.initializeView === 'function') {
          el.initializeView();
        }
        view = el.attributes._view;
        view.render();
        if (type === 'hidden') {
          self.$el.prepend(view.el);
        } else {
          self.$el.append(view.el);
        }
      });
    },
    show: function () {
      this.$el.show();
    },
    hide: function () {
      this.$el.hide();
    },
    remove: function () {
      var result;
      this.model.get('elements').forEach(function (el) {
        el.attributes._view.remove();
      });
      this.model.unset('_view');
      result = Backbone.View.prototype.remove.call(this);
      delete this.model;
      delete this.$el;
      delete this.el;
      return result;
    }
  });

  return SectionView;
});
