
  require(['models/expression'], function (Expression) {
    BMP.Expression = Expression;
  })

  require(['main', 'views/jqm'], function(Forms, Views) {
    Forms._views = Views;
  });

  return BMP.Forms;
}));

