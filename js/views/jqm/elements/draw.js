define([
  'views/jqm/element',
  'views/jqm/elements/file',
  'text!views/jqm/templates/signaturePad.html'
], function (ElementView, FileElementView, html) {
  'use strict';
  var signaturePad, DrawElementView;

  DrawElementView = FileElementView.extend({
    render: function () {
      var $button, $div;

      this.$el.empty();
      this.renderLabel();

      $button = $('<button />');
      $button.text('Signature');

      $div = $('<div class="ui-input-text"></div>');
      $div.append($button);

      this.$el.append($div);

      $button.on('click', $.proxy(DrawElementView.onButtonClick, this));

      this.bindRivets();
      this.model.on('change:blob', this.renderFigure, this);
    },
    remove: function () {
      this.$el.children('button').off('click');
      this.model.off('change:blob', this.renderFigure, this);
      return ElementView.prototype.remove.call(this);
    }
  }, {
    // static properties and methods
    onSignatureSubmit: function (event) {
      var data = signaturePad.getSignatureImage('image/jpeg'),
        blob;

      if (data.indexOf('data:') !== 0) {
        data = 'data:image/jpeg;base64,' + data;
      }
      blob = BMP.Blob.fromDataURI(data);
      this.model.set('blob', blob);
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
      var $div = $(html),
        options = {
          dismissible: true,
          history: false,
          afterclose: function (event, ui) {
            if (event && ui) {
              $div.remove();
              signaturePad = null;
            }
          }
        },
        $window = $(window),
        $form,
        windowX = $window.innerWidth(),
        windowY = $window.innerHeight();

      //$div.hide();
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
