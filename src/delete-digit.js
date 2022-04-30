const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n){
  let arr = n.toString().split('');
  let numberArr = [];
  let newArr =[];
  let numbers;
  for (let i=0; i< arr.length; i++){
  let new_num = [...arr];
  new_num.splice(i, 1);
  numberArr.push(new_num);
  }
  for (let i=0; i< numberArr.length; i++){
          numbers = Number(numberArr[i].join(''));
          newArr.push(numbers)
  }
  return Math.max(...newArr)
 }

module.exports = {
  deleteDigit
};
