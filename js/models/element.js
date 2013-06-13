define(function () {
  var Element;

  Element = Backbone.Model.extend({
    defaults: {
      page: 0,
      defaultValue: '',
      value: '',
      pattern: '',
      persist: true
    },
    idAttribute: 'name',
    initialize: function () {
      var attrs = this.attributes,
        form = attrs.form,
        page = attrs.page,
        section = $.trim(attrs.section || '');

      this.initializeView();

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
      if (!attrs.label && attrs.type !== 'message') {
        if (attrs.prefix) {
          this.set('label', attrs.name + ' ' + attrs.prefix);
        } else {
          this.set('label', attrs.name);
        }
      }
    },
    validate: function (attrs) {
      var errors = {};
      if (attrs === undefined) {
        attrs = this.attributes;
      }
      if (attrs.required && !attrs.value) {
        errors.value = errors.value || [];
        errors.value.push({code: 'REQUIRED'});
      }
      if (attrs.pattern && attrs.value &&
          !(new RegExp(attrs.pattern).test(attrs.value))) {
        errors.value = errors.value || [];
        errors.value.push({code: 'Pattern Mismatch error'});
      }
      return _.isEmpty(errors) ? undefined : errors;
    },
    removeView: function () {
      var attrs = this.attributes;
      if (attrs._view) {
        attrs._view.remove();
        delete attrs._view;
      }
    },
    destroy: function (options) {
      var attrs = this.attributes;
      delete attrs.form;
      delete attrs.page;
      delete attrs.section;
      this.id = null; // to prevent "sync"
      return Backbone.Model.prototype.destroy.call(this, options);
    },
    /**
     * this will close any existing view first, then establish a new view
     */
    initializeView: function () {
      var Forms = BMP.Forms,
        dateTypes = ['date', 'time', 'datetime'],
        attrs = this.attributes,
        View,
        view,
        mode;

      this.removeView();

      switch (attrs.type) {
      case 'subForm':
        View = Forms._views.SubFormElement;
        break;
      case 'heading':
        View = Forms._views.HeadingElement;
        break;
      case 'message':
        View = Forms._views.MessageElement;
        break;
      case 'boolean':
        View = Forms._views.BooleanElement;
        break;
      case 'select':
        mode = attrs.mode;
        mode = mode[0].toUpperCase() + mode.substring(1);
        View = Forms._views['Choice' + mode + 'Element'];
        break;
      case 'multi':
        mode = attrs.mode;
        mode = mode[0].toUpperCase() + mode.substring(1);
        View = Forms._views['Choice' + mode + 'Element'];
        break;
      case 'hidden':
        View = Forms._views.HiddenElement;
        break;
      case 'number':
        View = Forms._views.NumberElement;
        break;
      case 'telephone':
        View = Forms._views.TelephoneElement;
        break;
      case 'password':
        View = Forms._views.PasswordElement;
        break;
      case 'email':
        View = Forms._views.EmailElement;
        break;
      case 'url':
        View = Forms._views.URLElement;
        break;
      case 'text':
        View = Forms._views.TextElement;
        break;
      case 'textarea':
        View = Forms._views.TextAreaElement;
        break;
      default:
        if (_.indexOf(dateTypes, attrs.type) !== -1) {
          View = Forms._views.DateElement;
        } else {
          View = Forms._views.Element;
        }
      }
      view = new View({model: this});
      this.set('_view', view);
      return view;
    },
    /**
     * official Blink API
     */
    val: function (value) {
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
     * @param {Form} form parent to associate with new Element.
     * @return {Element} new Element.
     */
    create: function (attrs, form) {
      var Forms = BMP.Forms,
        dateTypes = ['date', 'time', 'datetime'],
        el,
        TypedElement;

      if (!attrs || !_.isObject(attrs)) {
        return new Element();
      }
      if (form) {
        attrs.form = form;
      }
      // TODO: determine Element type and select sub-Prototype
      switch (attrs.type) {
      case 'draw':
        TypedElement = Forms._models.DrawElement;
        break;
      case 'file':
        TypedElement = Forms._models.FileElement;
        break;
      case 'location':
        TypedElement = Forms._models.LocationElement;
        break;
      case 'subForm':
        TypedElement = Forms._models.SubFormElement;
        break;
      case 'heading':
        TypedElement = Forms._models.HeadingElement;
        break;
      case 'message':
        TypedElement = Forms._models.MessageElement;
        break;
      case 'boolean':
        TypedElement = Forms._models.BooleanElement;
        break;
      case 'select':
        TypedElement = Forms._models.SelectElement;
        break;
      case 'multi':
        TypedElement = Forms._models.MultiElement;
        break;
      case 'hidden':
        TypedElement = Forms._models.HiddenElement;
        break;
      case 'number':
        TypedElement = Forms._models.NumberElement;
        break;
      case 'telephone':
        TypedElement = Forms._models.TelephoneElement;
        break;
      case 'password':
        TypedElement = Forms._models.PasswordElement;
        break;
      case 'email':
        TypedElement = Forms._models.EmailElement;
        break;
      case 'url':
        TypedElement = Forms._models.URLElement;
        break;
      case 'text':
        TypedElement = Forms._models.TextElement;
        break;
      case 'textarea':
        TypedElement = Forms._models.TextAreaElement;
        break;
      default:
        if (_.indexOf(dateTypes, attrs.type) !== -1) {
          TypedElement = Forms._models.DateElement;
        } else {
          TypedElement = Forms._models.Element;
        }
      }
      // TODO: set View = read-only view for m.readOnly
      el = new TypedElement(attrs);
      return el;
    }
  });

  return Element;
});

