const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.toString().split('');
  let count =1;
  console.log(arr)
  let newStringArr = [];
  for (let i=0; i<arr.length; i++){
  if (arr[i] === arr[i + 1]) {
       count++;
   }
   else {
     if (count===1){
      newStringArr.push(arr[i])
      count=1;
     }
     else {
      newStringArr.push(count, arr[i])
      count=1;
     }
   }
  }
  return (newStringArr.join(''))
  }
  

module.exports = {
  encodeLine
};
