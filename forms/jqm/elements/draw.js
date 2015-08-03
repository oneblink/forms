define(function (require) {
  'use strict';

  // foreign modules

  var $ = require('jquery');

  // local modules

  var FileElementView = require('forms/jqm/elements/file');
  var html = require('text!forms/jqm/templates/signaturePad.html');

  // this module

  var signaturePad, DrawElementView;

  require('signaturepad');

  DrawElementView = FileElementView.extend({
    renderControls: function () {
      var attrs = this.model.attributes;
      if (!this.$controls) {
        this.$controls = $('<div class="ui-input-text"></div>');
        this.$el.append(this.$controls);
      }
      if (!this.$draw) {
        this.$draw = $('<button>Signature</button>');
        this.$draw.attr('name', attrs.name);
        this.$controls.append(this.$draw);
        this.$draw.on('click', DrawElementView.onButtonClick.bind(this));
      }
      this.$draw.button();
    },

    remove: function () {
      this.$el.children('button').off('click');
      this.model.off('change:blob', this.renderFigure, this);
      return FileElementView.prototype.remove.call(this);
    }
  }, {
    // static properties and methods
    onSignatureSubmit: function (event) {
      var data = signaturePad.getSignatureImage('image/jpeg');

      this.model.setBlobFromString(data);

      $('#bmp-forms-dialog-signature').popup('close');
      event.preventDefault();
      return false;
    },
    onSignatureClear: function (event) {
      this.model.unset('blob');
      $('#bmp-forms-dialog-signature').popup('close');
      event.preventDefault();
      return false;
    },
    onButtonClick: function (event) {
      var $div = $(html);
      var options = {
        dismissible: true,
        history: false,
        afterclose: function (e, ui) {
          if (e && ui) {
            $div.remove();
            signaturePad = null;
          }
        }
      };
      var $window = $(window);
      var $form;
      var windowX = $window.innerWidth();
      var windowY = $window.innerHeight();

      // $div.hide();
      $div.find('[data-role=header] > h2').text(this.model.get('label'));
      $(document.body).append($div);
      $div.find('canvas').attr({
        height: Math.min(Math.floor((windowX - 60) * 4 / 9), windowY - 60),
        width: windowX - 60
      });
      $form = $div.children('form');
      $form.on('submit', $.proxy(DrawElementView.onSignatureSubmit, this));
      signaturePad = $form.signaturePad({
        drawOnly: true,
        validateFields: false,
        lineWidth: 0,
        output: null,
        sigNav: null,
        name: null,
        typed: null,
        clear: 'input[type=reset]',
        typeIt: null,
        drawIt: null,
        typeItDesc: null,
        drawItDesc: null
      });
      $form.trigger('create');
      $div.popup(options);
      $div.popup('open');
      $form.on('click', '[data-action=clear]',
        $.proxy(DrawElementView.onSignatureClear, this));
      event.preventDefault();
      return false;
    }
  });

  return DrawElementView;
});
