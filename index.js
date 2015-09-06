'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

module.exports = (function () {
  function VectorCompare() {
    _classCallCheck(this, VectorCompare);
  }

  _createClass(VectorCompare, null, [{
    key: 'dotProduct',

    /*
     * .dotProduct
     *
     * Return a score of how similar the vectors are
     * based on the dot product.
     *
     * Params
     *   - vectorA <Integer>Array
     *   - vectorB <Integer>Array
     * Returns
     *   - Integer
     */

    value: function dotProduct(vectorA, vectorB) {
      if (vectorA.length !== vectorB.length) {
        throw new Error('Vector lengths must be equal');
      }

      var result = 0;

      vectorA.forEach(function (value, index) {
        result += value * vectorB[index];
      });

      return result;
    }
  }, {
    key: 'sortAll',

    /*
     * .sortAll
     *
     * Return two new vectors that are sorted.
     * Should utilize quicksort under the hood.
     *
     * Params
     *   - vectorA <Object>Array
     *   - vectorB <Object>Array
     * Returns
     *   - Void
     */

    value: function sortAll(vectorA, vectorB) {
      [vectorA, vectorB].forEach(function (vector) {
        vector.sort(function (a, b) {
          if (a.key < b.key) return -1;
          if (a.key > b.key) return 1;
          return 0;
        });
      });
    }
  }, {
    key: 'normalizeAll',

    /*
     * .normalizeAll
     *
     * Fill in missing keys with 0 value for each vector
     *
     * Params
     *   - vectorA <Object>Array
     *   - vectorB <Object>Array
     * Returns
     *   - Void
     */

    value: function normalizeAll(vectorA, vectorB) {
      var vectorAKeys = vectorA.map(function (item) {
        return item.key;
      }),
          vectorBKeys = vectorB.map(function (item) {
        return item.key;
      });

      vectorAKeys.forEach(function (key) {
        if (vectorBKeys.indexOf(key) === -1) {
          vectorB.push({ key: key, value: 0 });
        }
      });

      vectorBKeys.forEach(function (key) {
        if (vectorAKeys.indexOf(key) === -1) {
          vectorA.push({ key: key, value: 0 });
        }
      });
    }
  }]);

  return VectorCompare;
})();
