define(function (require) {

  var events = require('events');

  var FormView = Backbone.View.extend({
    tagName: 'form',

    attributes: {
      'novalidate': 'novalidate'
    },

    formElementEvents: {
      'id': { 'change:value': 'onChangedId' }
    },

    remove: function () {
      events.proxyUnbindFormElementEvents(this, this.model, this.formElementEvents);
      this.$el.removeData('model');
      this.model.unset('_view');
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

      if (pages && typeof pages['goto'] === 'function') {
        pages['goto'](0);
      }

      if (this.model.attributes.footer) {
        $footer.append(this.model.attributes.footer);
        this.$el.append($footer);
      }

      events.proxyBindFormElementEvents(this, this.model, this.formElementEvents);
    },

    onAttached: function () {
      this.model.get('pages').current.attributes.elements.forEach(function (el) {
        var view = el.attributes._view;
        if (typeof view.onAttached === 'function') {
          view.onAttached();
        }
      });
    },

    onChangedId: function () {
      this.$el.attr('data-record-id', this.model.getElement('id').val());
    }

  });

  return FormView;
});
