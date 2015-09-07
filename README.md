# Vector Compare

## Compile from ES6 to ES5
`babel src/vector_compare.js --out-file index.js`

## Run Mocha and Chai Tests
`./node_modules/.bin/mocha --compilers js:babel/register`

## Known Issues

### Privacy

ES6 does not yet support native private methods. This
can be mocked using WeakMaps but, that's really not
the most declarative solution. The "private" methods
are technically public. Use at your own risk and expect
them to break.

### Rounding

There is a slight rounding error in my calculations
resulting in very very very very very slight rounding
errors. I am handling this poorly by using...

`return Math.round(result * 100) / 100;`

This is bad and should probably be fixed by someone
who knows more about math than I do.

## Usage

```javascript
let VectorComparison = require('vector_compare');

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
  { key: 'bar',  value: 2 },
  { key: 'baz',  value: 3 },
  { key: 'bat',  value: 4 }
];

let comparison = new VectorComparison(vectorA, vectorB);
console.log(comparison.run()); // => 1
```

## Public Interface

### run

Uses cosine similarity to run comparisons between vectors.
This method will return an integer score value.

#### Vector Format

All vectors must follow the following format.

```javascript
let vector = [
  { key: 'foo', value: 5  },
  { key: 'bar', value: 10 },
  { key: 'baz', value: 20 }
];
```

#### Similarity Score

- 1 Exact Vectors
- 0 Somewhere in the middle
- -1 Opposite Vectors

### vectorA (get)

Returns an array of objects from the first vector

### vectorA (set)

Sets an array of objects to the first vector

### vectorB (get)

Returns an array of objects from the second vector

### vectorB (set)

Sets an array of objects to the second vector
