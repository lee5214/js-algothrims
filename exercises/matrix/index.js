// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = [];
  }
  let minRow = 0,
    minCol = 0,
    maxRow = n - 1,
    maxCol = n - 1;
  let counter = 1;

  while (minRow <= maxRow && minCol <= maxCol) { // or minRow <= n*n
    for (let i = minCol; i < maxCol + 1; i++) {
      arr[minRow][i] = counter;
      counter += 1;
    }
    minRow += 1;
    for (let i = minRow; i < maxRow + 1; i++) {
      arr[i][maxCol] = counter;
      counter += 1;
    }
    maxCol -= 1;
    for (let i = maxCol; i >= minCol; i--) {
      arr[maxRow][i] = counter;
      counter += 1;
    }
    maxRow -= 1;
    for (let i = maxRow; i >= minRow; i--) {
      arr[i][minCol] = counter;
      counter += 1;
    }
    minCol += 1;
  }
  console.log(arr);
  return arr;
}
module.exports = matrix;
