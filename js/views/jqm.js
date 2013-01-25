define([
  'models/form',
  'views/jqm/form',
  'views/jqm/page',
  'views/jqm/element',
  'views/jqm/elements/text',
  'views/jqm/elements/textarea'
], function(
  Form,
  FormView,
  PageView,
  ElementView,
  TextElementView,
  TextAreaElementView
) {
  return {
    Form: FormView,
    Page: PageView,
    Element: ElementView,
    TextElement: TextElementView,
    TextAreaElement: TextAreaElementView
  };
});
