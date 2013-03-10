define(function() {
  var Element = Backbone.Model.extend({
    defaults: {
      page: 0,
      defaultValue: '',
      value: ''
    },
    idAttribute: 'name',
    initialize: function() {
      var attrs = this.attributes,
          form = attrs.form,
          page = attrs.page,
          section = $.trim(attrs.section || '');

      if (form) {
        page = attrs.page = form.getPage(attrs.page);
        if (page && section) {
          section = attrs.section = page.getSection(section);
          section.add(this);
        } else {
          page.add(this);
          delete attrs.section;
        }
      }

      this.set('value', attrs.defaultValue);
      if (!attrs.label) {
        if (attrs.prefix) {
          this.set('label', attrs.name + ' ' + attrs.prefix);
        } else {
          this.set('label', attrs.name);
        }
      }
    },
    validate: function(attrs) {
      var errors = {};
      if (attrs === undefined) {
        attrs = this.attributes;
      }
      if (attrs.required && !attrs.value) {
        errors.value = errors.value || [];
        errors.value.push({ code: 'REQUIRED' });
      }
      if (!_.isEmpty(errors)) {
        return errors;
      }
    },
    destroy: function(options) {
      var attrs = this.attributes;
      if (attrs._view) {
        attrs._view.remove();
        delete attrs._view;
      }
      delete attrs.form;
      delete attrs.page;
      delete attrs.section;
      this.id = null; // to prevent "sync"
      return Backbone.Model.prototype.destroy.call(this, options);
    },
    /**
     * official Blink API
     */
    val: function(value) {
      if (value === undefined) {
        return this.get('value');
      }
      this.set('value', value);
      return value;
    }
  }, {
    // static properties
    /**
     * @param {Object} attrs attributes for this model.
     */
    create: function(attrs, form) {
      var Forms = window.BlinkForms,
          dateTypes = ['date', 'time', 'datetime'],
          view,
          el,
          TypedElement,
          View,
          mode;

      if (!attrs || !_.isObject(attrs)) {
        return new Element();
      }
      if (form) {
        attrs.form = form;
      }
      // TODO: determine Element type and select sub-Prototype
      switch (attrs.type) {
        case 'subForm':
          TypedElement = Forms._models.SubFormElement;
          View = Forms._views.SubFormElement;
          break;
        case 'heading':
          TypedElement = Forms._models.HeadingElement;
          View = Forms._views.HeadingElement;
          break;
        case 'message':
          TypedElement = Forms._models.MessageElement;
          View = Forms._views.MessageElement;
          break;
        case 'boolean':
          TypedElement = Forms._models.BooleanElement;
          View = Forms._views.BooleanElement;
          break;
        case 'select':
          TypedElement = Forms._models.SelectElement;
          mode = attrs.mode;
          mode = mode[0].toUpperCase() + mode.substring(1);
          View = Forms._views['Choice' + mode + 'Element'];
          break;
        case 'multi':
          TypedElement = Forms._models.MultiElement;
          mode = attrs.mode;
          mode = mode[0].toUpperCase() + mode.substring(1);
          View = Forms._views['Choice' + mode + 'Element'];
          break;
        case 'hidden':
          TypedElement = Forms._models.HiddenElement;
          View = Forms._views.HiddenElement;
          break;
        case 'number':
          TypedElement = Forms._models.NumberElement;
          View = Forms._views.NumberElement;
          break;
        case 'telephone':
          TypedElement = Forms._models.TelephoneElement;
          View = Forms._views.TelephoneElement;
          break;
        case 'password':
          TypedElement = Forms._models.PasswordElement;
          View = Forms._views.PasswordElement;
          break;
        case 'email':
          TypedElement = Forms._models.EmailElement;
          View = Forms._views.EmailElement;
          break;
        case 'url':
          TypedElement = Forms._models.URLElement;
          View = Forms._views.URLElement;
          break;
        case 'text':
          TypedElement = Forms._models.TextElement;
          View = Forms._views.TextElement;
          break;
        case 'textarea':
          TypedElement = Forms._models.TextAreaElement;
          View = Forms._views.TextAreaElement;
          break;
        default:
          if (_.indexOf(dateTypes, attrs.type) !== -1) {
            TypedElement = Forms._models.DateElement;
            View = Forms._views.DateElement;
          } else {
            TypedElement = Forms._models.Element;
            View = Forms._views.Element;
          }
      }
      el = new TypedElement(attrs);
      view = new View({model: el});
      el.attributes._view = view;
      return el;
    }
  });

  return Element;
});

