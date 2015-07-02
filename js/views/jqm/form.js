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
      this.stopListening(this.model.get('elements'));

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

    /**
     * Finds an element and focuses it. Will change the page and scroll
     * position if it needs to
     * @param  {string|ElementModel} elementModel Name, cid or ElementModel used
     * to be scrolled to
     *
     *
     * @returns {Promise} Resolved with the ElementView that was scrolled to
     * when the animation completes successfully or rejected if the
     * animation fails.
     */
    goToElement: function(elementModel){
      if ( !elementModel){
        return Promise.reject(new Error('No field specified'));
      }

      if ( typeof elementModel === 'string'){
        elementModel = this.model.getElement(elementModel);
      }

      if ( !elementModel ){
        return Promise.reject(new Error('Could not find element'));
      }

      return new Promise(function(resolve, reject){
        var pageIdOfElement;
        var pageCollection;

        pageCollection = this.model.get('pages');

//this is pretty hacky but it means not re-writing the form/subform rendering system
        if (elementModel.get('parentElement')){
          pageIdOfElement = elementModel.get('parentElement').get('page').index();
        } else {
          pageIdOfElement = elementModel.get('page').index();
        }

        if ( pageCollection.current && pageIdOfElement !== pageCollection.current.index()){
          pageCollection['goto'](pageIdOfElement);
        }

        elementModel.get('_view').scrollTo({ duration: 100 }).then(
          function(){ resolve(elementModel.get('_view')); },
          function(){ reject(new Error('Scroll Animaiton Failed')); }
        );
      }.bind(this));
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
