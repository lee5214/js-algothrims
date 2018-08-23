// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/*function anagrams(stringA, stringB) {
  const obj1 = buildObj(stringA)
  const obj2 = buildObj(stringB)
  return Object.keys(obj1).length === Object.keys(obj2).length &&
    Object.keys(obj1).every(item => obj1[item] === obj2[item]);
}

function buildObj(string) {
  // .match return array, .replace return string
  const str = string.match(/[\w]/g).join('').toLowerCase()
  //const str = string.replace(/[^\w]/g,'').toLowerCase()
  let obj = {}
  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }
  return obj
}*/

function anagrams(stringA,stringB){
  console.log(clearnString(stringA))
  return clearnString(stringA) === clearnString(stringB)
}
function clearnString(string){
  return string.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')
}

module.exports = anagrams;
