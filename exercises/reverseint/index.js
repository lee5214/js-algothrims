// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const sign = Math.sign(n)
  return parseInt(n.toString().split('').reverse().join(''))*sign

  /*if(n<0){
    return -n.toString().split('').slice(1).reverse().join('')
  } else {
    return parseInt(n.toString().split('').reverse().join(''))
  }*/
}
module.exports = reverseInt;
