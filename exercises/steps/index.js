// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/*function steps(n) {
  for (let i=1;i<=n;i++){
    let str = '#'.repeat(i).padEnd(n,' ');
    // or use
    //let str = '#'.repeat(i) + ' '.repeat(n-i)
    console.log(str)
  }
}*/

// tail recursion
function steps(n, line = 0, str = "") {
  if (line === n) {
    return;
  }
  if (str.length === n) {
    console.log(str);
    return steps(n, line + 1);
  }
  steps(n, line, str + (str.length <= line ? "#" : " "));
}

module.exports = steps;
