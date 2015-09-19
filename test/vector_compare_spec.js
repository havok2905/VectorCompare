'use strict';

// Import modules
let chai = require('chai'),
    path = require('path'),
    VectorComparison = require('../src/vector_compare.js');

// Set up Chai matchers
chai.should();

describe('VectorComparison', () => {

  let vectorA, vectorAMatch, vectorAOpposite, vectorB;

  beforeEach(() => {
    vectorA = [
      { key: 'foo',  value: 1 },
      { key: 'fooo', value: 1 },
      { key: 'bar',  value: 2 },
      { key: 'baz',  value: 3 },
      { key: 'bat',  value: 4 }
    ];

    vectorAMatch = [
      { key: 'foo',  value: 1 },
      { key: 'fooo', value: 1 },
      { key: 'bar',  value: 2 },
      { key: 'baz',  value: 3 },
      { key: 'bat',  value: 4 }
    ];

    vectorAOpposite = [
      { key: 'foo',  value: -1 },
      { key: 'fooo', value: -1 },
      { key: 'bar',  value: -2 },
      { key: 'baz',  value: -3 },
      { key: 'bat',  value: -4 }
    ];

    vectorB = [
      { key: 'foo',  value: 5 },
      { key: 'fooo', value: 3 },
      { key: 'bar',  value: 2 },
      { key: 'baz',  value: 5 },
      { key: 'bat',  value: 4 }
    ];
  });

  const EXACT_MATCH = 1;
  const OPPOSITE_MATCH = -1;
  const RANDOM_MATCH = 0.87;

  describe('getters', () => {
    it('should return an array for both vectors', () => {
      let comparison = new VectorComparison(vectorA, vectorB);
      comparison.vectorA.should.be.an.instanceof(Array);
      comparison.vectorB.should.be.an.instanceof(Array);
    });
  });

  describe('setters', () => {
    it('should set both vectors with an array of objects', () => {
      let comparison = new VectorComparison(vectorA, vectorB);

      comparison.vectorA = [{ key: 'foo', value: 5 }];
      comparison.vectorB = [{ key: 'bar', value: 6 }];

      comparison.vectorA[0].key.should.equal('foo');
      comparison.vectorB[0].key.should.equal('bar');

      comparison.vectorA[0].value.should.equal(5);
      comparison.vectorB[0].value.should.equal(6);
    });

    it('must use an array for setting both vectors', () => {
      let comparison = new VectorComparison(vectorA, vectorB);

      try {
        comparison.vectorA = 'foo';
      }
      catch(e) {
        e.should.be.an.instanceof(Error);
        e.message.should.equal('vector must be an array');
      }

      try {
        comparison.vectorB = 'foo';
      }
      catch(e) {
        e.should.be.an.instanceof(Error);
        e.message.should.equal('vector must be an array');
      }
    });
  });

  describe('run', () => {
    let comparison, result;

    it('should indicate a match', () => {
      comparison = new VectorComparison(vectorA, vectorAMatch);
      result = comparison.run();
      result.should.equal(EXACT_MATCH);
    });

    it('should indicate an opposite', () => {
      comparison = new VectorComparison(vectorA, vectorAOpposite);
      result = comparison.run();
      result.should.equal(OPPOSITE_MATCH);
    });

    it('should indicate a mid range', () => {
      comparison = new VectorComparison(vectorA, vectorB);
      result = comparison.run();
      result.should.equal(RANDOM_MATCH);
    });
  });

});
