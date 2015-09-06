'use strict';

// Import modules
let chai = require('chai'),
    path = require('path'),
    VectorCompare = require('../src/vector_compare.js');

// Set up Chai matchers
chai.should();

describe('VectorCompare', () => {

  describe('sortAll', () => {

    let vectorA = [
      { key: 'foo', value: 1 },
      { key: 'bar', value: 2 },
      { key: 'baz', value: 3 },
      { key: 'bat', value: 4 }
    ];

    let vectorB = [
      { key: 'foo', value: 1 },
      { key: 'bar', value: 2 },
      { key: 'baz', value: 3 },
      { key: 'bat', value: 4 }
    ];

    it('should take two inequal vectors and sort them in key order', () => {
      VectorCompare.sortAll(vectorA, vectorB);

      vectorA[0].key.should.equal('bar');
      vectorA[1].key.should.equal('bat');
      vectorA[2].key.should.equal('baz');
      vectorA[3].key.should.equal('foo');

      vectorB[0].key.should.equal('bar');
      vectorB[1].key.should.equal('bat');
      vectorB[2].key.should.equal('baz');
      vectorB[3].key.should.equal('foo');
    });
  });

  describe('normalizeAll', () => {

    let vectorA = [
      { key: 'foo',  value: 1 },
      { key: 'fooo', value: 1 },
      { key: 'bar',  value: 2 },
      { key: 'baz',  value: 3 },
      { key: 'bat',  value: 4 }
    ];

    let vectorB = [
      { key: 'foo',  value: 1 },
      { key: 'fooo', value: 1 },
      { key: 'barr', value: 2 },
      { key: 'bazz', value: 3 },
      { key: 'batt', value: 4 }
    ];

    let keys = ['foo', 'bar', 'baz', 'bat', 'fooo', 'barr', 'bazz', 'batt'];

    it('should have each vector include all keys between the two vectors', () => {
      VectorCompare.normalizeAll(vectorA, vectorB);

      let aKeys = vectorA.map((item) => { return item.key });
      let bKeys = vectorB.map((item) => { return item.key });

      keys.forEach((key) => {
        aKeys.indexOf(key).should.not.equal(-1);
        bKeys.indexOf(key).should.not.equal(-1);
      });
    });
  });

  describe('dotProduct', () => {

    const VECTOR_A                 = [1, 2, 3, 4],
          VECTOR_B                 = [2, 3, 4, 5],
          INVALID_VECTOR           = [0, 1, 2],
          DOT_PRODUCT              = 40,
          INEQUAL_VECTOR_EXCEPTION = 'Vector lengths must be equal';

    it('should throw an exception when vectors are inqueal', () => {
      try {
        VectorCompare.dotProduct(VECTOR_A, INVALID_VECTOR);
      }
      catch(e) {
        e.should.be.an.instanceof(Error);
        e.message.should.equal(INEQUAL_VECTOR_EXCEPTION);
      }
    });

    it('should return a dot product', () => {
      let result = VectorCompare.dotProduct(VECTOR_A, VECTOR_B);
      result.should.equal(DOT_PRODUCT);
    });

  });
});
