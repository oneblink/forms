
  require(['main'], function(Forms) {
    try {
      Forms._views = require('views/forms3jqm');
    } catch (err) {
      window.console && window.console.log(err);
    }
  });

  return BMP.Forms;
}));

