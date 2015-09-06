# Vector Compare

## Public Interface

### .normalizeAll

Takes both arrays and adds the necessary missing keys from both.

```javascript
a = [
  { key: 'foo', value: 5 },
  { key: 'bar', value: 4 }
];

b = [
  { key: 'foo', value: 5 },
  { key: 'foobar', value: 10 }
];

VectorCompare.normalizeAll(a, b);

/*
  Results in...

  a = [
    { key: 'foo', value: 5 },
    { key: 'bar', value: 4 },
    { key: 'foobar', value: 0 }
  ];

  b = [
    { key: 'foo', value: 5 },
    { key: 'foobar', value: 10 },
    { key: 'bar', value: 0 }
  ];
*/
```

### .sortAll

Sorts all vector items by key in alphabetical order

```javascript
a = [
  { key: 'foo', value: 5 },
  { key: 'bar', value: 4 },
  { key: 'foobar', value: 0 }
];

b = [
  { key: 'foo', value: 5 },
  { key: 'foobar', value: 10 },
  { key: 'bar', value: 0 }
];

VectorCompare.sortAll(a, b);

/*
  Results in...

  a = [
    { key: 'bar', value: 4 },
    { key: 'foo', value: 5 },
    { key: 'foobar', value: 0 }
  ];

  b = [
    { key: 'bar', value: 0 },
    { key: 'foo', value: 5 },
    { key: 'foobar', value: 10 }
  ];
*/
```
### .dotProduct

Returns the similarity score of the two documents

```javascript
aValues = a.map(function(item){ return item.value; });
bValues = b.map(function(item){ return item.value; });

result = VectorCompare.dotProduct(aValues, bValues);

/*
  Results in...

  <Integer>
*/
```



## Package Compile
`babel src/vector_compare.js --out-file index.js`

## Package Test
`./node_modules/.bin/mocha --compilers js:babel/register`
