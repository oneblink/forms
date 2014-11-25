define(['models/element'], function (Element) {
  return Backbone.Collection.extend({
    model: Element
  });
});
