const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }  
    const map = {
      '--discard-next' : (item, index) => {
        if (index+1 !== 0) 
        {return {skipNextIteration: true}}},
     '--discard-prev' :  (item, index, arrResult, arrSource) => {
       if (index !== 0)
     {   arrResult.splice(index-1); }
        return {skipNextIteration: false}
       },
     '--double-next' :  (item, index, arrResult, arrSource) => {
       if (index+1 !== 0) 
      { arrResult.push(arrSource[index+1]); }
       return {skipNextIteration: false}
       },
     '--double-prev':  (item, index, arrResult, arrSource) => {
      if (index !== 0)
       {arrResult.push(arrSource[index-1]); }
       return {skipNextIteration: false}
       },
     }
   
    const result = [];
     let skipNextIteration = false;
    arr.forEach((item, index) => {
      if(Object.keys(map).includes(item)) {
      skipNextIteration = map[item](item, index, result, arr).skipNextIteration;
         return;
       } 
        if(skipNextIteration){
          skipNextIteration = false;
          return;
         }
        result.push(item);
       })
       
         return result;
       
     }


module.exports = {
  transform
};
