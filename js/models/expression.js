define('expression', ['feature!promises'], function (Promise) {
  var Expression;

  /**
   * @param {Object} definition object { operator: String, operands: Array }
   * @constructor
   */
  Expression = function (definition, ctx, names) {
    var self = this,
      def = JSON.parse(JSON.stringify(definition));

    self.fn = {};
    //copy static functions to class function
    Object.keys(Expression.fn).forEach(function (prop) {
      self.fn[prop] = Expression.fn[prop];
    });
    //if context and names provided, bind ctx with fn[names]
    if (ctx && names) {
      this.bindContext(ctx, names);
    }

    this.operator = def.operator.toLowerCase();
    this.operands = def.operands || [];

    this.operands.forEach(function (op, index) {
      if (_.isObject(op) && _.isString(op.operator)) {
        //pass down ctx, names for binding
        self.operands[index] = new Expression(op, ctx, names);
      }
    });
  };

  Expression.prototype.evaluate = function () {
    var self = this,
      args,
      binaryOp = [
        '==',
        '!=',
        '>',
        '<',
        '>=',
        '<=',
        'contains',
        '!contains'
      ];
    if (!this.operator) {
      return Promise.reject(new Error('missing operator'));
    }
    if (!Expression.fn[this.operator]) {
      return Promise.reject(new Error('unknown operator: ' + this.operator));
    }
    args = this.operands.map(function (op) {
      if (_.isString(op) || _.isNumber(op) || _.isBoolean(op) || _.isNull(op)) {
        // primitive types are fine
        return op;
      }
      if (op.evaluate) {
        return op.evaluate();
      }
      return Promise.reject(new Error('unexpected operand type'));
    });

    //FORMS-141 # binary operator will need two arguments,
    // if one provided, set other to empty string
    if (args.length === 1 && binaryOp.indexOf(this.operator) > -1) {
      args.push("");
    }

    //return promise
    return new Promise(function (resolve, reject) {
      Promise.all(args).then(function (res) {
        resolve(self.fn[self.operator].apply(self, res));
      }, function (err) {
        reject(err);
      });
    });
  };

  Expression.prototype.bindContext = function (ctx, names) {
    var self = this;
    //if names not provided, then it will bind ctx with everything
    (names || Object.keys(self.fn)).forEach(function (prop) {
      self.fn[prop] = self.fn[prop].bind(ctx);
    });
  };

  Expression.fn = {};

  // *** operands implements below this point ***

  Expression.fn.and = function () {
    var args = Array.prototype.slice.call(arguments);

    return args.every(function (arg) {
      return !!arg;
    });
  };
  Expression.fn.or = function () {
    var args = Array.prototype.slice.call(arguments);

    return args.some(function (arg) {
      return !!arg;
    });
  };
  Expression.fn.not = function (a) {
    return !a;
  };

  Expression.fn.empty = function (a) {
    if (_.isObject(a) || _.isString(a) || _.isArray(a)) {
      return _.isEmpty(a);
    }
    if (_.isNumber(a)) {
      return _.isNaN(a);
    }
    return !a;
  };
  Expression.fn['!empty'] = function (a) {
    return !Expression.fn.empty.call(this, a);
  };

  /*eslint-disable eqeqeq*/
  Expression.fn['=='] = function (a, b) {
    return a == b;
  };
  Expression.fn['!='] = function (a, b) {
    return a != b;
  };
  /*eslint-enable eqeqeq*/

  Expression.fn['<'] = function (a, b) {
    return a < b;
  };
  Expression.fn['<='] = function (a, b) {
    return a <= b;
  };
  Expression.fn['>'] = function (a, b) {
    return a > b;
  };
  Expression.fn['>='] = function (a, b) {
    return a >= b;
  };

  Expression.fn.contains = function (haystack, needle) {
    var found;
    return new Promise(function (resolve, reject) {
      if (!haystack || _.isEmpty(haystack)) {
        resolve(false);
      }
      if (typeof haystack === 'string') {
        resolve(haystack.indexOf(needle) !== -1);
      }
      /*eslint-disable eqeqeq*/
      if (_.isArray(haystack)) {
        found = false;
        haystack.forEach(function (item) {
          if (item == needle) {
            found = true;
          }
        });
        resolve(found);
      }
      /*eslint-enable eqeqeq*/
      reject(new Error('contains: unexpected operand type'));
    });

  };
  Expression.fn['!contains'] = function (haystack, needle) {
    return !Expression.fn.contains.call(this, haystack, needle);
  };


  return Expression;
});
