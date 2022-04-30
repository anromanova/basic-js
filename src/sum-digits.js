const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

 function getSumOfDigits(n) {
  let sum=0;
  let newsum=0;
  let newArr = [];
  let finArr;
  let arr = n.toString().split('');
  while (sum < 10) {
    for (let i=0; i< arr.length; i++) {
      sum+=Math.floor(arr[i]);
      }
      newArr.push(sum);
      finArr = newArr.toString().split('');
  for (let n=0; n< finArr.length; n++) { 
          newsum+=Math.floor(finArr[n]);
      }
      return newsum
  }
}

module.exports = {
  getSumOfDigits
};
