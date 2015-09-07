module.exports = class VectorComparison {

  // Public

  constructor(vectorA, vectorB) {
    this._vectorA = vectorA;
    this._vectorB = vectorB;
  }

  run() {
    this._normalizeAll();
    this._sortAll();

    let result = this._dotProduct() / this._squaredProducts();

    return Math.round(result * 100) / 100;
  }

  get vectorA() {
    return this._vectorA;
  }

  set vectorA(vector) {
    this._setVector(vector, '_vectorA');
  }

  get vectorB() {
    return this._vectorB;
  }

  set vectorB(vector) {
    this._setVector(vector, '_vectorB');
  }

  // Private

  _setVector(vector, name) {
    if(vector instanceof Array) {
      this[name] = vector;
    }
    else {
      throw new Error('vector must be an array');
    }
  }

  _normalizeAll() {
    let vectorAKeys = this.vectorA.map((item) => { return item.key }),
        vectorBKeys = this.vectorB.map((item) => { return item.key });

    vectorAKeys.forEach((key) => {
      if(vectorBKeys.indexOf(key) === -1) {
        this.vectorB.push({key: key, value: 0});
      }
    });

    vectorBKeys.forEach((key) => {
      if(vectorAKeys.indexOf(key) === -1) {
        this.vectorA.push({key: key, value: 0});
      }
    });
  }

  _sortAll() {
    [this.vectorA, this.vectorB].forEach((vector) => {
      vector.sort(function(a, b){
        if(a.key < b.key) return -1;
        if(a.key > b.key) return 1;
        return 0;
      });
    });
  }

  _dotProduct() {
    let result = 0;

    this.vectorA.forEach((item, index) => {
      result += item.value * this.vectorB[index].value;
    });

    return result;
  }

  _squaredProducts() {
    let aTotal = 0,
        bTotal = 0;

    this.vectorA.forEach((item, index) => {
      aTotal += item.value * item.value;
    });

    this.vectorB.forEach((item, index) => {
      bTotal += item.value * item.value;
    });

    return Math.sqrt(aTotal) * Math.sqrt(bTotal);
  }
}
