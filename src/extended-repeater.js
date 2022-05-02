const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

 function repeater(str, {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator }) {
  if(!(typeof str) === 'string') {
    str = str.toString();
  }
  else if (typeof str === 'null') {
    str = 'null';
  }
  else if (typeof str === 'object') {
    str = `${str}`
  }
  if(separator === undefined) {separator = '+';}
  if(additionSeparator === undefined) {additionSeparator = '|';}
  if(repeatTimes === undefined) {repeatTimes = 1;}
  if(additionRepeatTimes === undefined) {additionRepeatTimes = 1};

  let result ='';
for(let i=0; i< repeatTimes; i++ ) {
  if (separator === undefined) {
    separator ='+';
  }
  result +=str; 
   if (addition !== undefined){
    if (typeof addition === 'object') {
      addition = `${addition}`;
    }
    else if(addition) {
      addition = addition.toString()
    }

     for (let n=0; n< additionRepeatTimes; n++ ) {
    if (additionSeparator === undefined) {
      additionSeparator ='|';
    }
    result +=addition;
    if (n+1 !== additionRepeatTimes) {
      result += additionSeparator;
  }
 }}
  if (i+1 !== repeatTimes) {
    result += separator;
  }
}
return result
}

module.exports = {
  repeater
};
