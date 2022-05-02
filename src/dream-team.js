const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let teamArr = [];
  if (!members || !Array.isArray(members)){
    return false;
  }
  members.forEach(member => {
    if (typeof member === 'string') {
      member = member.toUpperCase().split('');
      member = member.filter((e) => typeof e === 'string').map((el) => el.trim()).join('');
      member = member.slice(0,1);
      teamArr.push(member);
    }
  })
  let team = teamArr.sort().join('');
  return team
 }

module.exports = {
  createDreamTeam
};
