module.exports = class VectorComparison {

  // Public

  constructor(vectorA, vectorB) {
    this._vectorA = vectorA;
    this._vectorB = vectorB;
  }

  run() {
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
