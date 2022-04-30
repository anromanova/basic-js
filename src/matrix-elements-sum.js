const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sumResult = [];
  let sum;
  let total=0;
  for (let i=0; i<1; i++) {
    sum = 0;
    for (let j=0; j<matrix[i].length; j++) {
    sum+=matrix[i][j];
    }
    sumResult.push(sum)
  }
  for (let i=1; i<matrix.length; i++) {
    sum =0;
    for (let j=0; j<matrix[i].length; j++) {
      if (matrix[i-1][j]>0)
      {sum+=matrix[i][j];}
    }
    sumResult.push(sum)
  }
  for (let n=0; n<sumResult.length; n++){
      total+=sumResult[n];
  }
  return total
}

module.exports = {
  getMatrixElementsSum
};
