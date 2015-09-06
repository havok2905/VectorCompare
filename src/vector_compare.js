module.exports = class VectorCompare {

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

  static dotProduct(vectorA, vectorB) {
    if(vectorA.length !== vectorB.length) {
      throw new Error('Vector lengths must be equal');
    }

    let result = 0;

    vectorA.forEach((value, index) => {
      result += value * vectorB[index];
    });

    return result;
  }

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

  static sortAll(vectorA, vectorB) {
    [vectorA, vectorB].forEach((vector) => {
      vector.sort(function(a, b){
        if(a.key < b.key) return -1;
        if(a.key > b.key) return 1;
        return 0;
      });
    });
  }

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

  static normalizeAll(vectorA, vectorB) {
    let vectorAKeys = vectorA.map((item) => { return item.key }),
        vectorBKeys = vectorB.map((item) => { return item.key });

    vectorAKeys.forEach((key) => {
      if(vectorBKeys.indexOf(key) === -1) {
        vectorB.push({key: key, value: 0});
      }
    });

    vectorBKeys.forEach((key) => {
      if(vectorAKeys.indexOf(key) === -1) {
        vectorA.push({key: key, value: 0});
      }
    });
  }
}
