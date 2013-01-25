define([
  'models/form',
  'views/jqm/form',
  'views/jqm/page',
  'views/jqm/element',
  'views/jqm/elements/hidden',
  'views/jqm/elements/text',
  'views/jqm/elements/textarea'
], function(
  Form,
  FormView,
  PageView,
  ElementView,
  HiddenElementView,
  TextElementView,
  TextAreaElementView
) {
  return {
    Form: FormView,
    Page: PageView,
    Element: ElementView,
    HiddenElement: HiddenElementView,
    TextElement: TextElementView,
    TextAreaElement: TextAreaElementView
  };
});
