'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

module.exports = (function () {

  // Public

  function VectorComparison(vectorA, vectorB) {
    _classCallCheck(this, VectorComparison);

    this._vectorA = vectorA;
    this._vectorB = vectorB;
  }

  _createClass(VectorComparison, [{
    key: 'run',
    value: function run() {
      var result = this._dotProduct() / this._squaredProducts();
      return Math.round(result * 100) / 100;
    }
  }, {
    key: '_setVector',

    // Private

    value: function _setVector(vector, name) {
      if (vector instanceof Array) {
        this[name] = vector;
      } else {
        throw new Error('vector must be an array');
      }
    }
  }, {
    key: '_dotProduct',
    value: function _dotProduct() {
      var _this = this;

      var result = 0;

      this.vectorA.forEach(function (item, index) {
        result += item.value * _this.vectorB[index].value;
      });

      return result;
    }
  }, {
    key: '_squaredProducts',
    value: function _squaredProducts() {
      var aTotal = 0,
          bTotal = 0;

      this.vectorA.forEach(function (item, index) {
        aTotal += item.value * item.value;
      });

      this.vectorB.forEach(function (item, index) {
        bTotal += item.value * item.value;
      });

      return Math.sqrt(aTotal) * Math.sqrt(bTotal);
    }
  }, {
    key: 'vectorA',
    get: function get() {
      return this._vectorA;
    },
    set: function set(vector) {
      this._setVector(vector, '_vectorA');
    }
  }, {
    key: 'vectorB',
    get: function get() {
      return this._vectorB;
    },
    set: function set(vector) {
      this._setVector(vector, '_vectorB');
    }
  }]);

  return VectorComparison;
})();
