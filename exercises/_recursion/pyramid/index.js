// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// string manipulation
/*
function pyramid(n) {
  let i = 0
  while(i<n){
    if(i%2){
      let str = ' '.repeat((2n-i)/2)+'#'.repeat(i)+' '.repeat((2n-i)/2)
      console.log(str)
    }
    i++
  }
}
*/

// iteration
/*function pyramid(n) {
  const midpoint = Math.floor(n - 1);
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < 2 * n - 1; j++) {
      if (midpoint - i <= j && midpoint + i >= j) {
        str += "#";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}*/

// tail recursion
function pyramid(n, row = 0, str = "") {
  const midpoint = n - 1;
  if (row === n) {
    return;
  }
  if (str.length === 2 * n - 1) {
    console.log(str);
    return pyramid(n, row+1);
  }
  let add = "";
  if (
    str.length >= midpoint - row  &&
    str.length <= midpoint + row
  ) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, str + add);
}

pyramid(4);
module.exports = pyramid;
