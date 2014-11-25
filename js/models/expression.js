define(function () {
  var Expression;

  /**
   * @param {Object} definition object { operator: String, operands: Array }
   * @constructor
   */
  Expression = function (definition) {
    var self = this,
      def = JSON.parse(JSON.stringify(definition));

    this.operator = def.operator.toLowerCase();
    this.operands = def.operands || [];
    this.operands.forEach(function (op, index) {
      if (_.isObject(op) && _.isString(op.operator)) {
        self.operands[index] = new Expression(op);
      }
    });
  };

  Expression.prototype.evaluate = function () {
    var args;
    if (!this.operator) {
      throw new Error('missing operator');
    }
    if (!Expression.fn[this.operator]) {
      throw new Error('unknown operator: ' + this.operator);
    }
    args = this.operands.map(function (op) {
      if (_.isString(op) || _.isNumber(op) || _.isBoolean(op) || _.isNull(op)) {
        // primitive types are fine
        return op;
      }
      if (op.evaluate) {
        return op.evaluate();
      }
      throw new Error('unexpected operand type');
    });
    return Expression.fn[this.operator].apply(this, args);
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
    if (!haystack || _.isEmpty(haystack)) {
      return false;
    }
    if (typeof haystack === 'string') {
      return haystack.indexOf(needle) !== -1;
    }
    /*eslint-disable eqeqeq*/
    if (_.isArray(haystack)) {
      found = false;
      haystack.forEach(function (item) {
        if (item == needle) {
          found = true;
        }
      });
      return found;
    }
    /*eslint-enable eqeqeq*/
    throw new Error('contains: unexpected operand type');
  };
  Expression.fn['!contains'] = function (haystack, needle) {
    return !Expression.fn.contains.call(this, haystack, needle);
  };


  return Expression;
});
