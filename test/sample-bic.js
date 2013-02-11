/**
 * This is a sample implementation of the API that the BIC must supply.
 */

/*jslint regexp:true*/ // allow insecure RegExp below
(function(window) {
  var Forms = window.BlinkForms;

  Forms.getDefinition = function(name) {
    var dfrd = Q.defer(),
        url = location.href.replace(/\/[^\/]*$/, '/' + name + '.json');

    $.ajax({
      url: url
    }).then(function(data) {
      try {
        if (_.isString(data)) {
          data = $.parseJSON(data);
        }
      } finally {
        if ($.isPlainObject(data)) {
          dfrd.resolve(data);
        } else {
          dfrd.reject();
        }
      }
    }).fail(dfrd.reject);
    return dfrd.promise;
  };

}(this));
