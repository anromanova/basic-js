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
    console.log(str)
  }
if (!typeof(repeatTimes) === Number || !typeof(additionRepeatTimes) === Number) {
  repeatTimes = 1;
  additionRepeatTimes =1;
}
  let result ='';
for(let i=0; i< repeatTimes; i++ ) {
  if (!separator) {
    separator ='+';
  }
  result +=str; 
   if (addition){
    if (typeof addition === 'object') {
      addition = `${addition}`;
      console.log(addition)
    }
    else {
      addition = addition.toString();
    }

     for (let n=0; n< additionRepeatTimes; n++ ) {
    if (!additionSeparator) {
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
