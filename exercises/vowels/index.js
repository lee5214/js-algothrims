// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // regExp
  /*
    // i here means case insensitive
  let arr = str.match(/[aeiou]/gi)
  return arr?arr.length:0
  */

  //iteration
  /*let arr = str.toLowerCase().split('')
  let counter=0
  for(let item of arr){
    if(['a','e','i','o','u'].includes(item)){
    // or use
    // if ('aeiou'.includes(item)){
      counter += 1;
    }
  }
  return counter*/

  //reduce
  return str
    .toLowerCase()
    .split("")
    .reduce((counter, next) => {
      counter += "aeiou".includes(next) ? 1 : 0;
      return counter;
    }, 0);
}
module.exports = vowels;
