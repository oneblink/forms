define([], function() {
  'use strict';

  var PageView = Backbone.View.extend({
    tagName: 'section',
    attributes: {
      'data-role': 'page'
    },
    events: {
    },
    intialize: function() {
    },
    render: function() {
      var self = this,
          $content = $('<div data-role="content"></div>'),
          page = this.model,
          form = page.attributes.form,
          index;

      this.$el.empty();
      this.model.get('elements').forEach(function(el) {
        var view = el.attributes._view,
            type = el.attributes.type;

        view.render();
        if (type === 'hidden') {
          $content.prepend(view.el);
        } else {
          $content.append(view.el);
        }
      });
      this.$el.append($content);
    }
  });

  return PageView;
});

