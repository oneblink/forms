define(function (require) {
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

  Expression.fn.empty = function () {
    var args = Array.prototype.slice.call(arguments);

    return args.every(function (arg) {
      return _.isEmpty(arg);
    });
  };

  Expression.fn['!empty'] = function () {
    var args = Array.prototype.slice.call(arguments);

    return !Expression.fn.empty.apply(this, args);
  };

  return Expression;
});

