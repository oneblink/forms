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

      this.set('value', this.attributes.defaultValue);
      if (!this.attributes.label) {
        this.set('label', this.attributes.name);
      }
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
     * @param {Object} def complete form definition.
     * @param {String} action "add" | "edit" | "view" | etc...
     */
    create: function(def, action, form) {
      var Forms = window.BlinkForms,
          attrs,
          view,
          el,
          TypedElement,
          View,
          mode;

      if (!def || !_.isObject(def)) {
        return new Element();
      }
      attrs = def.default || {};
      if (action && def[action]) {
        _.extend(attrs, def[action]);
      }
      if (form) {
        attrs.form = form;
      }
      // TODO: determine Element type and select sub-Prototype
      switch (attrs.type) {
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
        case 'time':
        case 'date':
        case 'datetime':
          TypedElement = Forms._models.DateElement;
          View = Forms._views.DateElement;
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
          TypedElement = Forms._models.Element;
          View = Forms._views.Element;
      }
      el = new TypedElement(attrs);
      view = new View({model: el});
      el.attributes._view = view;
      return el;
    }
  });

  return Element;
});

