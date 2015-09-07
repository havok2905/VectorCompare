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
      this._normalizeAll();
      this._sortAll();

      var result = this._dotProduct() / this._squaredProducts();

      return Math.round(result * 100) / 100;
    }
  }, {
    key: 'vectorA',
    get: function () {
      return this._vectorA;
    },
    set: function (vector) {
      this._setVector(vector, '_vectorA');
    }
  }, {
    key: 'vectorB',
    get: function () {
      return this._vectorB;
    },
    set: function (vector) {
      this._setVector(vector, '_vectorB');
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
    key: '_normalizeAll',
    value: function _normalizeAll() {
      var _this = this;

      var vectorAKeys = this.vectorA.map(function (item) {
        return item.key;
      }),
          vectorBKeys = this.vectorB.map(function (item) {
        return item.key;
      });

      vectorAKeys.forEach(function (key) {
        if (vectorBKeys.indexOf(key) === -1) {
          _this.vectorB.push({ key: key, value: 0 });
        }
      });

      vectorBKeys.forEach(function (key) {
        if (vectorAKeys.indexOf(key) === -1) {
          _this.vectorA.push({ key: key, value: 0 });
        }
      });
    }
  }, {
    key: '_sortAll',
    value: function _sortAll() {
      [this.vectorA, this.vectorB].forEach(function (vector) {
        vector.sort(function (a, b) {
          if (a.key < b.key) return -1;
          if (a.key > b.key) return 1;
          return 0;
        });
      });
    }
  }, {
    key: '_dotProduct',
    value: function _dotProduct() {
      var _this2 = this;

      var result = 0;

      this.vectorA.forEach(function (item, index) {
        result += item.value * _this2.vectorB[index].value;
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
  }]);

  return VectorComparison;
})();
