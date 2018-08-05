// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // solution 1
  /*let arr = str.split('').reverse().join('')
  return arr*/

  // for loop and (x of str)
  /*let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;*/

  // es6
  return str.split("").reduce((str,c) =>  c+str );
}
module.exports = reverse;
