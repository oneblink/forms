define(['backbone'], function(Backbone) {
  var Form = Backbone.Model.extend({
    constructor: function() {
      console.log(arguments);
    }
  });

  return Form;
});
